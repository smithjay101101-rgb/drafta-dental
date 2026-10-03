import type { MetadataRoute } from "next";
import { practice } from "@/content/site";

/**
 * Crawlerele de AI sunt permise explicit. Site-ul este indexabil din
 * 3 octombrie 2026, când a fost scos `noindex` din layout.tsx.
 */
const aiBots = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "PerplexityBot",
  "ClaudeBot",
  "Claude-Web",
  "Google-Extended",
  "CCBot",
  "Bytespider",
  "Applebot-Extended",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      ...aiBots.map((userAgent) => ({ userAgent, allow: "/" })),
    ],
    sitemap: `${practice.url}/sitemap.xml`,
    host: practice.url,
  };
}
