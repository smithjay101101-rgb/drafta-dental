import { posts } from "@/content/blog";
import { practice } from "@/content/site";

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

export async function GET() {
  const items = posts
    .map(
      (p) => `    <item>
      <title>${esc(p.title)}</title>
      <link>${practice.url}/blog/${p.slug}</link>
      <guid isPermaLink="true">${practice.url}/blog/${p.slug}</guid>
      <description>${esc(p.metaDescription)}</description>
      <pubDate>${new Date(p.datePublished).toUTCString()}</pubDate>
    </item>`,
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${esc(practice.name)}, blog</title>
    <link>${practice.url}/blog</link>
    <description>Raspunsuri la intrebarile pacientilor, scrise de medicii cabinetului.</description>
    <language>ro-RO</language>
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}
