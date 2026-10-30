import { blogData } from "@/app/constant/constant";

export async function GET() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://neclicenseexam.vercel.app";

  const escapeXml = (unsafe: string) =>
    unsafe
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&apos;");

  const itemsXml = blogData
    .map((blog) => {
      const url = `${siteUrl}/blog/${blog.id}`;
      const pubDate = blog.date ? new Date(blog.date).toUTCString() : new Date().toUTCString();

      return `
    <item>
      <title>${escapeXml(blog.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description>${escapeXml(blog.description1)}</description>
      <pubDate>${pubDate}</pubDate>
      <author>${escapeXml(blog.author || "NEC Exam Editorial Team")}</author>
    </item>`;
    })
    .join("");

  const rssFeed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>NEC License Exam Preparation Blog &amp; Guides</title>
    <link>${siteUrl}</link>
    <description>Latest guides, model questions, syllabus updates, and preparation strategies for the Nepal Engineering Council (NEC) licensure examination.</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${siteUrl}/feed.xml" rel="self" type="application/rss+xml" />
    ${itemsXml}
  </channel>
</rss>`;

  return new Response(rssFeed, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "s-maxage=3600, stale-while-revalidate",
    },
  });
}

