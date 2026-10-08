import { NextResponse, type NextRequest } from "next/server";

/**
 * Jurnal de diagnostic pentru crawlere: scrie o linie în logurile Vercel
 * (`vercel logs`) când pagina e cerută de un bot cunoscut. Nu modifică
 * răspunsul: paginile rămân statice, iar vizitatorii obișnuiți nu sunt
 * înregistrați.
 *
 * Scop: să vedem dacă ChatGPT, Perplexity, Claude, Google și Bing chiar ajung
 * pe site și ce primesc. IP-ul se poate verifica în listele publicate de
 * fiecare companie, ca să distingem un crawler real de unul care doar își
 * împrumută numele.
 */
const BOTS =
  /(ChatGPT-User|OAI-SearchBot|GPTBot|PerplexityBot|Perplexity-User|ClaudeBot|Claude-User|Claude-SearchBot|Googlebot|Google-Extended|GoogleOther|bingbot|BingPreview|Applebot|DuckDuckBot|YandexBot|CCBot|Bytespider)/i;

export function proxy(request: NextRequest) {
  const ua = request.headers.get("user-agent") ?? "";
  const bot = ua.match(BOTS)?.[1];
  if (bot) {
    console.log(
      JSON.stringify({
        crawler: bot,
        path: request.nextUrl.pathname,
        host: request.headers.get("host"),
        ip: request.headers.get("x-forwarded-for")?.split(",")[0]?.trim(),
        country: request.headers.get("x-vercel-ip-country"),
        ua,
      }),
    );
  }
  return NextResponse.next();
}

export const config = {
  // Paginile, robots.txt, sitemap și llms.txt; fără resursele statice.
  matcher: ["/((?!_next/static|_next/image|photos/|anpc/|favicon|icon|apple-icon).*)"],
};
