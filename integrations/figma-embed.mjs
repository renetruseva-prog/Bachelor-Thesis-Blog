// Turns a Figma / FigJam link that sits on its own line in a post into an embedded, live view.
//
//   https://www.figma.com/board/AbC123/Research?node-id=12-345
//   [Research board](https://www.figma.com/board/AbC123/Research?node-id=12-345)
//
// Tip: in FigJam, right-click a frame → "Copy link to selection" to embed just that frame.
// The file must be shared as "Anyone with the link can view", otherwise visitors see a login screen.
//
// Written as a Sätteri mdast plugin (Astro's default Markdown processor).

const FIGMA_URL = /^https:\/\/(?:www\.)?figma\.com\/(board|file|design|proto|slides)\/[A-Za-z0-9]+/;

/** www.figma.com/board/KEY/Name?node-id=1-2 → embed.figma.com/board/KEY/Name?node-id=1-2&embed-host=share */
function toEmbedUrl(href) {
  const url = new URL(href);
  url.hostname = 'embed.figma.com';
  url.searchParams.delete('t');
  url.searchParams.set('embed-host', 'share');
  return url.toString();
}

const escape = (value) =>
  value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const textOf = (node) => node.value ?? (node.children ?? []).map(textOf).join('');

/** The link when a paragraph contains nothing but one Figma link (bare or [title](url)). */
function figmaLink(paragraph) {
  const children = (paragraph.children ?? []).filter((c) => !(c.type === 'text' && !c.value.trim()));
  if (children.length !== 1 || children[0].type !== 'link') return null;
  const link = children[0];
  if (!FIGMA_URL.test(link.url)) return null;
  const text = textOf(link).trim();
  return { url: link.url, title: text && text !== link.url ? text : 'FigJam board' };
}

export const figmaEmbed = {
  name: 'figma-embed',
  paragraph(node, ctx) {
    const link = figmaLink(node);
    if (!link) return;
    ctx.replaceNode(node, {
      type: 'html',
      value:
        `<figure class="figma-embed">` +
        `<iframe src="${escape(toEmbedUrl(link.url))}" title="${escape(link.title)}" loading="lazy" allowfullscreen></iframe>` +
        `<figcaption><a href="${escape(link.url)}" target="_blank" rel="noopener">${escape(link.title)} — open in FigJam ↗</a></figcaption>` +
        `</figure>`,
    });
  },
};
