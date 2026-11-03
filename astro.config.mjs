// @ts-check
import { defineConfig } from 'astro/config';
import newPost from './integrations/new-post.mjs';
import { satteri } from '@astrojs/markdown-satteri';
import { figmaEmbed } from './integrations/figma-embed.mjs';

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  // Published on GitHub Pages: https://renetruseva-prog.github.io/Bachelor-Thesis-Blog/
  site: 'https://renetruseva-prog.github.io',
  base: '/Bachelor-Thesis-Blog',
  // Adds a "New post" form at /new while running `npm run dev` (not included in the build).
  integrations: [newPost()],
  markdown: {
    // A Figma / FigJam link on its own line in a post becomes an embedded board.
    processor: satteri({ mdastPlugins: [figmaEmbed] }),
  },
});
