import { MetadataRoute } from "next";
import { blogData } from "./constant/constant";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = process.env.SITE_URL || "https://neclicenseexam.vercel.app";

  const blogEntries: MetadataRoute.Sitemap = blogData.map((blog) => ({
    url: `${siteUrl}/blog/${blog.id}`,
    lastModified: new Date(),
  }));

  return [
    {
      url: `${siteUrl}`,
      lastModified: new Date(),
    },
    {
      url: `${siteUrl}/take-test`,
      lastModified: new Date(),
    },
    {
      url: `${siteUrl}/take-test/computer-engineering`,
      lastModified: new Date(),
    },
    {
      url: `${siteUrl}/take-test/computer-engineering/quiz`,
      lastModified: new Date(),
    },
    {
      url: `${siteUrl}/faculty/computer-engineering`,
      lastModified: new Date(),
    },
    {
      url: `${siteUrl}/faculty/civil-engineering`,
      lastModified: new Date(),
    },
    {
      url: `${siteUrl}/review`,
      lastModified: new Date(),
    },
    {
      url: `${siteUrl}/blog`,
      lastModified: new Date(),
    },
    ...blogEntries,
  ];
}
