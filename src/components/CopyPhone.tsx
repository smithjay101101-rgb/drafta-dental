"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Numărul de telefon, cu buton de copiere.
 *
 * `navigator.clipboard` cere context securizat și poate fi refuzat, deci are
 * rezervă prin `execCommand`. Confirmarea apare doar dacă a reușit una dintre
 * ele, ca să nu spunem „copiat" când nu s-a copiat nimic. Anunțul pentru
 * cititoarele de ecran merge într-o regiune `aria-live`.
 */
export function CopyPhone({
  phone,
  copyLabel,
  copiedLabel,
}: {
  phone: string;
  copyLabel: string;
  copiedLabel: string;
}) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const copy = async () => {
    let ok = false;
    try {
      await navigator.clipboard.writeText(phone);
      ok = true;
    } catch {
      const area = document.createElement("textarea");
      area.value = phone;
      area.setAttribute("readonly", "");
      area.style.position = "fixed";
      area.style.opacity = "0";
      document.body.appendChild(area);
      area.select();
      try {
        ok = document.execCommand("copy");
      } catch {
        ok = false;
      }
      area.remove();
    }
    if (!ok) return;
    setCopied(true);
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
      <span className="font-display text-[22px] font-extrabold tracking-[-0.01em]">
        {phone}
      </span>
      <button
        type="button"
        onClick={copy}
        className="pill pill-outline min-h-11 px-4 py-2.5 text-[15px]"
      >
        <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          {copied ? (
            <polyline points="20 6 9 17 4 12" />
          ) : (
            <>
              <rect x="9" y="9" width="12" height="12" rx="2" />
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
            </>
          )}
        </svg>
        {copied ? copiedLabel : copyLabel}
      </button>
      <span role="status" aria-live="polite" className="sr-only">
        {copied ? copiedLabel : ""}
      </span>
    </div>
  );
}
