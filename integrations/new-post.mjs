// Dev-only "New post" form.
// While `npm run dev` runs, it adds the page /new plus two endpoints: one that saves the post
// as a Markdown file in src/content/blog/, and one that saves uploaded images in
// src/content/blog/images/. None of this is part of the built site.
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ENDPOINT = '/__new-post';
const IMAGE_ENDPOINT = '/__upload-image';
const IMAGE_TYPES = {
  'image/jpeg': 'jpg',
  'image/png': 'png',
  'image/webp': 'webp',
  'image/gif': 'gif',
  'image/avif': 'avif',
  'image/svg+xml': 'svg',
};
const MAX_IMAGE_BYTES = 20 * 1024 * 1024;

/** Quote a value for YAML frontmatter. */
const q = (value) => JSON.stringify(String(value));
const list = (values) => `[${values.map(q).join(', ')}]`;

function slugify(value) {
  return value
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 60);
}

async function exists(file) {
  try {
    await fs.access(file);
    return true;
  } catch {
    return false;
  }
}

function toMarkdown(post) {
  const lines = [
    '---',
    `title: ${q(post.title)}`,
    `description: ${q(post.description)}`,
    `pubDate: ${post.date}`,
    `topics: ${list(post.topics)}`,
    `authors: ${list(post.authors)}`,
    `tags: ${list(post.tags)}`,
  ];
  if (post.draft) lines.push('draft: true');
  lines.push('---', '', post.body.trim(), '');
  return lines.join('\n');
}

function validate(post) {
  const errors = [];
  if (!post.title?.trim()) errors.push('Title is required.');
  if (!post.description?.trim()) errors.push('Description is required.');
  if (!/^\d{4}-\d{2}-\d{2}$/.test(post.date ?? '')) errors.push('Date must look like 2026-11-03.');
  if (!Array.isArray(post.topics) || post.topics.length === 0) errors.push('Pick at least one topic.');
  if (!Array.isArray(post.authors) || post.authors.length === 0) errors.push('Pick at least one author.');
  return errors;
}

export default function newPost() {
  let blogDir;

  return {
    name: 'new-post',
    hooks: {
      'astro:config:setup': ({ command, config, injectRoute, updateConfig }) => {
        if (command !== 'dev') return;
        blogDir = fileURLToPath(new URL('./src/content/blog/', config.root));

        injectRoute({ pattern: '/new', entrypoint: './src/admin/new-post.astro' });

        updateConfig({
          vite: {
            plugins: [
              {
                name: 'new-post-endpoint',
                configureServer(server) {
                  // Body: the raw image bytes. Header X-Filename: the original file name.
                  server.middlewares.use(IMAGE_ENDPOINT, async (req, res) => {
                    const send = (status, data) => {
                      res.statusCode = status;
                      res.setHeader('Content-Type', 'application/json');
                      res.end(JSON.stringify(data));
                    };
                    if (req.method !== 'POST') return send(405, { errors: ['Use POST.'] });

                    const ext = IMAGE_TYPES[req.headers['content-type']];
                    if (!ext) return send(415, { errors: ['Only JPG, PNG, WebP, GIF, AVIF or SVG images are allowed.'] });

                    try {
                      const chunks = [];
                      let size = 0;
                      for await (const chunk of req) {
                        size += chunk.length;
                        if (size > MAX_IMAGE_BYTES) return send(413, { errors: ['Image is larger than 20 MB.'] });
                        chunks.push(chunk);
                      }

                      const original = decodeURIComponent(String(req.headers['x-filename'] ?? 'image'));
                      const base = slugify(original.replace(/\.[^.]+$/, '')) || 'image';
                      const dir = path.join(blogDir, 'images');
                      await fs.mkdir(dir, { recursive: true });

                      let name = `${base}.${ext}`;
                      for (let i = 2; await exists(path.join(dir, name)); i++) name = `${base}-${i}.${ext}`;

                      await fs.writeFile(path.join(dir, name), Buffer.concat(chunks));
                      send(201, { path: `./images/${name}`, file: path.relative(process.cwd(), path.join(dir, name)) });
                    } catch (error) {
                      send(500, { errors: [String(error)] });
                    }
                  });

                  server.middlewares.use(ENDPOINT, async (req, res) => {
                    const send = (status, data) => {
                      res.statusCode = status;
                      res.setHeader('Content-Type', 'application/json');
                      res.end(JSON.stringify(data));
                    };
                    if (req.method !== 'POST') return send(405, { errors: ['Use POST.'] });

                    try {
                      let raw = '';
                      for await (const chunk of req) raw += chunk;
                      const post = JSON.parse(raw);

                      const errors = validate(post);
                      if (errors.length) return send(400, { errors });

                      const slug = `${post.date}-${slugify(post.title) || 'post'}`;
                      const file = path.join(blogDir, `${slug}.md`);
                      if (await exists(file)) {
                        return send(409, { errors: [`A post named ${slug}.md already exists. Change the title or date.`] });
                      }

                      await fs.writeFile(file, toMarkdown({ ...post, tags: post.tags ?? [], body: post.body ?? '' }));
                      send(201, { slug, file: path.relative(process.cwd(), file) });
                    } catch (error) {
                      send(500, { errors: [String(error)] });
                    }
                  });
                },
              },
            ],
          },
        });
      },
    },
  };
}
