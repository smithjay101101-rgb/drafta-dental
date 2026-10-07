import type { MetadataRoute } from "next";
import { practice } from "@/content/site";

/**
 * Politica pentru crawlere, pe categorii. Regula `*` permite deja tot; listele
 * de mai jos fac decizia vizibilă și ușor de schimbat pe categorie.
 *
 * Motoarele de căutare (Googlebot, bingbot, Applebot) intră pe regula `*`.
 */

/** Căutare și citare în asistenții AI: ChatGPT, Perplexity, Claude. Țin site-ul citabil. */
const aiSearch = [
  "OAI-SearchBot",
  "ChatGPT-User",
  "PerplexityBot",
  "Perplexity-User",
  "Claude-SearchBot",
  "Claude-User",
];

/**
 * Antrenarea modelelor AI. Decizia proprietarului: permise deocamdată, pentru
 * vizibilitate. Blocarea lor nu scoate site-ul din Google sau din răspunsurile
 * AI cu surse; se mută în `blocked` dacă se dorește asta.
 */
const aiTraining = [
  "GPTBot",
  "ClaudeBot",
  "Google-Extended",
  "Applebot-Extended",
  "CCBot",
];

/** Crawlere agresive, fără beneficiu de vizibilitate. */
const blocked = ["Bytespider"];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: [...aiSearch, ...aiTraining], allow: "/" },
      { userAgent: blocked, disallow: "/" },
    ],
    sitemap: `${practice.url}/sitemap.xml`,
  };
}
