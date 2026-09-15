"use client";

import Link from "next/link";

import { useCallback, useEffect, useRef, useState } from "react";
import { Lockup } from "./Lockup";
import { nav, practice } from "@/content/site";

/**
 * Header lipit de marginea de sus, o singură linie la orice lățime.
 * Comutarea la meniul mobil se face prin media query (`wide:`), nu prin
 * `window.innerWidth` ca în prototip.
 */
export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        close();
        buttonRef.current?.focus();
        return;
      }
      if (e.key !== "Tab") return;

      // Ține focusul în panou cât timp e deschis.
      const focusable = [
        buttonRef.current,
        ...Array.from(
          panelRef.current?.querySelectorAll<HTMLElement>("a[href]") ?? [],
        ),
      ].filter(Boolean) as HTMLElement[];
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    const onPointerDown = (e: PointerEvent) => {
      const target = e.target as Node;
      if (
        !panelRef.current?.contains(target) &&
        !buttonRef.current?.contains(target)
      ) {
        close();
      }
    };

    // Dacă fereastra trece peste breakpoint, meniul mobil nu mai are sens.
    const mql = window.matchMedia("(min-width: 900px)");
    const onChange = () => mql.matches && close();

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    mql.addEventListener("change", onChange);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
      mql.removeEventListener("change", onChange);
    };
  }, [menuOpen, close]);

  return (
    <header className="sticky top-0 z-40 bg-white/94 backdrop-blur-[12px]">
      {/* Laturile au aceeaşi bază flex, deci pilula de navigație stă pe centrul
          paginii, nu pe centrul spațiului rămas. Când rândul se strâmtorează,
          doar navigația cedează (şi derulează orizontal), fiindcă laturile au
          baza 0 şi nu se contractă. */}
      <div className="shell flex items-center gap-2.5 py-4 min-[480px]:gap-5">
        <div className="flex flex-1 items-center justify-start">
          <Lockup variant="header" />
        </div>

        <nav
          aria-label="Principal"
          className="hidden min-w-0 flex-initial items-center gap-1 overflow-x-auto rounded-full bg-surface-2 p-1.5 [scrollbar-width:none] wide:flex"
          style={{ flexWrap: "nowrap" }}
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex-none rounded-full px-2.5 py-2.5 text-[14px] font-medium whitespace-nowrap transition-colors duration-150 ease-out hover:bg-white min-[1060px]:px-3.5 min-[1060px]:text-[15px] min-[1280px]:px-[18px]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-1 items-center justify-end gap-2 min-[480px]:gap-2.5">
          <Link
            href="/#programare"
            className="pill pill-primary px-3.5 py-[13px] text-sm min-[480px]:px-6 min-[480px]:text-[15px]"
          >
            Programează-te
          </Link>

          <a
            href={practice.phoneHref}
            className="pill pill-outline hidden px-[22px] py-3 text-[15px] wide:inline-flex"
          >
            Sună
          </a>

          <button
            ref={buttonRef}
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="menu-mobil"
            className="pill min-h-[46px] bg-surface-2 px-3.5 text-[15px] min-[480px]:px-5 wide:hidden"
          >
            Meniu
          </button>
        </div>
      </div>

      {menuOpen && (
        <div
          id="menu-mobil"
          ref={panelRef}
          className="border-t border-line bg-white px-6 pt-3 pb-5 sm:px-7 wide:hidden"
        >
          <nav aria-label="Principal (mobil)" className="flex flex-col">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={close}
                className="flex min-h-12 items-center rounded-xl px-2 text-[17px] font-medium transition-colors duration-150 ease-out hover:bg-surface-2"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={practice.phoneHref}
              onClick={close}
              className="flex min-h-12 items-center rounded-xl px-2 text-[17px] font-semibold transition-colors duration-150 ease-out hover:bg-surface-2"
            >
              Sună: {practice.phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
