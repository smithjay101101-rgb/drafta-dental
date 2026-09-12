"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogoMark, Wordmark } from "./Logo";

/**
 * Marca duce la pagina de start. Când ești deja pe ea, `next/link` nu face
 * nimic, pentru că ruta nu se schimbă, așa că marca ar părea moartă. În
 * cazul acela urcăm noi în capul paginii.
 *
 * Component separat de Logo.tsx ca LogoMark să rămână server component,
 * altfel ar trimite JavaScript și în cardurile de la „Alte servicii".
 */
export function Lockup({
  href = "/",
  onIndigo = false,
  compact = false,
}: {
  href?: string;
  onIndigo?: boolean;
  compact?: boolean;
}) {
  const pathname = usePathname();

  const onClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname !== href) return;
    event.preventDefault();
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
    // Curăță ancora din bară, ca un click ulterior să nu sară înapoi la ea.
    if (window.location.hash) {
      window.history.replaceState(null, "", pathname);
    }
  };

  return (
    <Link
      href={href}
      onClick={onClick}
      aria-label="Drafta dental, mergi la pagina de start"
      className="flex flex-none items-center gap-2 min-[480px]:gap-[11px]"
    >
      <span className="min-[480px]:hidden">
        <LogoMark onIndigo={onIndigo} size={compact ? 34 : 40} />
      </span>
      <span className="hidden min-[480px]:block">
        <LogoMark onIndigo={onIndigo} />
      </span>
      <Wordmark onIndigo={onIndigo} compact={compact} />
    </Link>
  );
}
