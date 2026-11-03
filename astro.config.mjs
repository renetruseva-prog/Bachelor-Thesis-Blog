// @ts-check
import { defineConfig } from 'astro/config';
import newPost from './integrations/new-post.mjs';

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  // Set this to your deployed URL once you publish the blog (Netlify, Vercel, GitHub Pages…)
  site: 'https://example.com',
  // If you deploy to GitHub Pages under a repo path, set e.g. base: '/blog_bachelorThesis'
  // base: '/blog_bachelorThesis',
  // Adds a "New post" form at /new while running `npm run dev` (not included in the build).
  integrations: [newPost()],
});
