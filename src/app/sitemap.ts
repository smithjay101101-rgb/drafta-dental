import type { MetadataRoute } from "next";
import { posts } from "@/content/blog";
import { doctors } from "@/content/doctors";
import { legalDocs, legalUpdated } from "@/content/legal";
import { serviceList } from "@/content/services";
import { practice } from "@/content/site";

/**
 * lastModified are date reale, nu momentul build-ului: un `lastmod` care se
 * schimbă la fiecare deploy fără ca pagina să se schimbe îl face pe Google să
 * ignore câmpul. La o modificare de conținut se actualizează data de aici.
 */
const PAGES_UPDATED = new Date("2026-10-07");

export default function sitemap(): MetadataRoute.Sitemap {
  const lastPost = new Date(
    Math.max(...posts.map((p) => new Date(p.dateModified).getTime())),
  );

  return [
    { url: practice.url, lastModified: PAGES_UPDATED, changeFrequency: "monthly", priority: 1 },
    { url: `${practice.url}/despre-noi`, lastModified: PAGES_UPDATED, changeFrequency: "yearly", priority: 0.6 },
    { url: `${practice.url}/servicii`, lastModified: PAGES_UPDATED, changeFrequency: "monthly", priority: 0.9 },
    ...serviceList.map((s) => ({
      url: `${practice.url}/servicii/${s.slug}`,
      lastModified: PAGES_UPDATED,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    { url: `${practice.url}/medici`, lastModified: PAGES_UPDATED, changeFrequency: "yearly", priority: 0.6 },
    ...doctors.map((d) => ({
      url: `${practice.url}/medici/${d.slug}`,
      lastModified: PAGES_UPDATED,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
    { url: `${practice.url}/blog`, lastModified: lastPost, changeFrequency: "weekly", priority: 0.8 },
    ...posts.map((p) => ({
      url: `${practice.url}/blog/${p.slug}`,
      lastModified: new Date(p.dateModified),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...legalDocs.map((d) => ({
      url: `${practice.url}/${d.slug}`,
      lastModified: new Date(legalUpdated),
      changeFrequency: "yearly" as const,
      priority: 0.2,
    })),
  ];
}
