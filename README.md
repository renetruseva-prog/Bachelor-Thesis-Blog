# Bachelor Thesis Blog

Process blog for my team's bachelor thesis (DEVINE, Howest), built with [Astro](https://astro.build).

## Commands

| Command           | Action                                  |
| :---------------- | :-------------------------------------- |
| `npm install`     | Install dependencies                    |
| `npm run dev`     | Start dev server at `localhost:4321`    |
| `npm run build`   | Build the static site to `./dist/`      |
| `npm run preview` | Preview the build locally               |

## Where to edit what

| What                         | File                                   |
| :--------------------------- | :------------------------------------- |
| Site title, author, client   | `src/consts.ts` (`SITE`)               |
| Topics (filters) & colours   | `src/consts.ts` (`TOPICS`)             |
| Blog posts                   | `src/content/blog/*.md`                |
| Time tracking (hours/day)    | `src/data/timelog.ts`                  |
| Planning phases & tasks      | `src/data/planning.ts`                 |
| Team roles & contacts        | `src/data/team.ts`                     |
| About page / AI policy       | `src/pages/about.astro`                |
| Colours & typography         | `src/styles/global.css`                |

## Writing a post

**Easiest:** run `npm run dev`, open [localhost:4321/new](http://localhost:4321/new) (or click **+ New post** in the
menu), fill in the form and save. It writes a Markdown file to `src/content/blog/` that you can edit afterwards.
Add images with **+ Add images**, by dragging them onto the content box or by pasting a screenshot — they are
saved to `src/content/blog/images/` and inserted at the cursor. The form only exists in dev mode — it is not part of the published site.

**By hand:**

1. Copy one of the templates in `src/content/blog/`:
   - `_template.md` — general post
   - `_template-feedback.md` — client / coach / expert meeting report
   - `_template-ai.md` — AI usage log (critical & transparent)
2. Rename it without the leading `_` (e.g. `2026-11-10-user-interviews.md`).
3. Fill in the frontmatter. `authors` is who wrote it (`renet`, `member2`, `member3`). `topics` decides which filters the post shows up under:
   `ux`, `design`, `dev`, `process`, `feedback`, `planning`, `team`, `ai`.
4. Set `draft: false` (or remove it) to publish.

Images can live next to the post (e.g. `src/content/blog/images/`) and be referenced with a relative path.

The `placeholder-*.md` posts are only there to show the layout — delete them once you have real posts.

## Filtering

- Home page: filter buttons per topic (instant, and shareable via `?topic=ux`).
- `/topics/<topic>` — a page per topic.
- `/tags/<tag>` — a page per free tag.

## Deploying

Any static host works (Netlify, Vercel, Cloudflare Pages, GitHub Pages). Set `site` in `astro.config.mjs`
to the final URL; for GitHub Pages under a repo path also set `base`.

> Note: Astro is pinned to 7.3.8 because newer versions require Node ≥ 22.23. After upgrading Node you can
> run `npm install astro@latest`.
