import type { MetadataRoute } from "next";
import { posts } from "@/content/blog";
import { practice } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: practice.url, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${practice.url}/despre-noi`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    { url: `${practice.url}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    ...posts.map((p) => ({
      url: `${practice.url}/blog/${p.slug}`,
      lastModified: new Date(p.dateModified),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
