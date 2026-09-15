"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogoMark } from "./Logo";

/**
 * Lockup-ul de marcă, exact ca în handoff: marca plus numele scris cu text
 * real, nu cu contururi. „Drafta" în Urbanist 900, „dental" în Figtree cu
 * tracking larg. Fiind text, e randat nativ de browser, curat la orice
 * densitate de ecran.
 *
 * Header: marcă 40, „Drafta" 24px, „dental" 10px / 0.42em (sub 480px puțin
 * mai mic, ca rândul să încapă). Footer: marcă 36, 21px, 9px / 0.4em.
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
      className="flex w-fit flex-none items-center gap-[11px] text-indigo"
    >
      {header ? (
        <>
          <LogoMark size={34} className="min-[480px]:hidden" />
          <LogoMark size={40} className="hidden min-[480px]:block" />
        </>
      ) : (
        <LogoMark size={36} />
      )}
      <span aria-hidden="true" className="flex flex-col leading-none">
        <span
          className={`font-display font-black tracking-[-0.01em] ${
            header ? "text-[21px] min-[480px]:text-[24px]" : "text-[21px]"
          }`}
        >
          Drafta
        </span>
        <span
          className={`mt-[3px] font-sans font-normal ${
            header
              ? "text-[9px] tracking-[0.4em] min-[480px]:text-[10px] min-[480px]:tracking-[0.42em]"
              : "text-[9px] tracking-[0.4em]"
          }`}
        >
          dental
        </span>
      </span>
    </Link>
  );
}
