import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { TOPIC_KEYS } from './consts';

const blog = defineCollection({
  // Files starting with an underscore (like _template.md) are ignored.
  loader: glob({ base: './src/content/blog', pattern: '**/[^_]*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    // One or more topics from src/consts.ts — this drives the filters.
    topics: z.array(z.enum(TOPIC_KEYS)).min(1),
    // Free tags for finer filtering (e.g. "interview", "figma", "three.js").
    tags: z.array(z.string()).default([]),
    // Marks a post as a placeholder so it is visually flagged.
    placeholder: z.boolean().default(false),
    // Drafts are hidden from the site.
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
