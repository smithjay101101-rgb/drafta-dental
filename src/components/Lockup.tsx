"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

/** Raportul lockup-ului: 703 x 177. */
const RATIO = 703 / 177;

/**
 * Lockup-ul de marcă, servit ca fișier SVG ca să nu intre 46KB de contururi
 * în HTML-ul fiecărei pagini. Fiind vector, rămâne curat la orice densitate
 * de ecran.
 *
 * Marca duce la pagina de start. Când ești deja pe ea, `next/link` nu ar face
 * nimic, pentru că ruta nu se schimbă, așa că urcăm noi în capul paginii.
 */
export function Lockup({
  href = "/",
  onIndigo = false,
  /** Puțin mai mică sub 480px. */
  compact = false,
}: {
  href?: string;
  onIndigo?: boolean;
  compact?: boolean;
}) {
  const pathname = usePathname();
  const height = compact ? 38 : 44;

  const onClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname !== href) return;
    event.preventDefault();
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
    if (window.location.hash) {
      window.history.replaceState(null, "", pathname);
    }
  };

  return (
    <Link
      href={href}
      onClick={onClick}
      aria-label="Drafta dental, mergi la pagina de start"
      className="flex flex-none items-center"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={onIndigo ? "/logo-alb.svg" : "/logo.svg"}
        alt=""
        width={Math.round(height * RATIO)}
        height={height}
        className="h-[38px] w-auto min-[480px]:h-11"
        style={compact ? undefined : { height }}
      />
    </Link>
  );
}
