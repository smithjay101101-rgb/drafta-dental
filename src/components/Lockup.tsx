"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogoMark } from "./Logo";

/**
 * Lockup-ul de marcă: marca plus numele scris cu text real, nu cu contururi.
 * „Drafta" în Urbanist 900, „dental" în Figtree 500 cu tracking larg.
 *
 * Proporțiile vin din lockup-ul de referință și se păstrează la orice mărime,
 * relativ la latura mărcii (M):
 *   „Drafta" = 0,6 M · „dental" = 0,25 M · spațiul marcă–text = 0,275 M
 *
 *   Header ≥480px: M 48 → 29px / 12px / 13px
 *   Header <480px: M 40 → 24px / 10px / 11px
 *   Header <400px: M 38 → 23px, ca rândul să încapă la 360px fără să
 *                  strângem spațiul de 8px dintre butoane
 *   Footer:        M 44 → 26px / 11px / 12px
 *
 * „dental" e 500, nu 400: la 10–12px, greutatea normală cu tracking larg se
 * randează subțire și neclar. Link-ul are cel puțin 44px înălțime (țintă de
 * atingere).
 *
 * Marca duce la pagina de start. Când ești deja pe ea, `next/link` nu ar face
 * nimic, pentru că ruta nu se schimbă, așa că urcăm noi în capul paginii.
 */
export function Lockup({
  href = "/",
  variant = "footer",
}: {
  href?: string;
  variant?: "header" | "footer";
}) {
  const pathname = usePathname();
  const header = variant === "header";

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
      className={`flex min-h-11 w-fit flex-none items-center text-indigo ${
        header ? "gap-2.5 min-[400px]:gap-[11px] min-[480px]:gap-[13px]" : "gap-3"
      }`}
    >
      {header ? (
        <LogoMark size={48} className="size-[38px] min-[400px]:size-10 min-[480px]:size-12" />
      ) : (
        <LogoMark size={44} />
      )}
      <span aria-hidden="true" className="flex flex-col leading-none">
        <span
          className={`font-display font-black tracking-[-0.01em] ${
            header ? "text-[23px] min-[400px]:text-[24px] min-[480px]:text-[29px]" : "text-[26px]"
          }`}
        >
          Drafta
        </span>
        <span
          className={`font-sans font-medium tracking-[0.4em] ${
            header
              ? "mt-[3px] text-[10px] min-[480px]:mt-1 min-[480px]:text-[12px]"
              : "mt-1 text-[11px]"
          }`}
        >
          dental
        </span>
      </span>
    </Link>
  );
}
