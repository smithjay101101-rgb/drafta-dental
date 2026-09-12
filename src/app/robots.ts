import type { MetadataRoute } from "next";
import { practice } from "@/content/site";

/**
 * Crawlerele de AI sunt permise explicit. Meta `robots: noindex` din
 * layout.tsx rămâne însă activ cât timp pagina are date-exemplu, deci
 * indexarea nu se produce oricum. [CHECK] Se scoate noindex la lansare.
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
