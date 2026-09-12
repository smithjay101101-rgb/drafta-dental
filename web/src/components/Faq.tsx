"use client";

import { useEffect, useId, useRef, useState } from "react";
import { faq } from "@/content/site";

/**
 * Acordeon cu buton + regiune (aria-expanded / aria-controls).
 * Prototipul folosea <details>, dar acela își ascunde conținutul când e închis,
 * deci înălțimea nu se poate anima. Comportamentul la tastatură e identic.
 * Mai multe rânduri pot sta deschise simultan.
 */
function FaqRow({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  const [height, setHeight] = useState(0);
  const panelRef = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    const node = panelRef.current;
    if (!node) return;
    const measure = () => setHeight(node.scrollHeight);
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="overflow-hidden rounded-[18px] border border-line bg-white">
      <h3 className="m-0">
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls={id}
          className="flex min-h-12 w-full cursor-pointer items-center justify-between gap-4 bg-transparent px-5 py-[22px] text-left font-display text-[19px] font-extrabold text-indigo"
        >
          {q}
          <svg
            aria-hidden="true"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`flex-none text-bleu transition-transform duration-200 ease-out ${
              open ? "rotate-180" : ""
            }`}
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </button>
      </h3>

      <div
        id={id}
        role="region"
        className="overflow-hidden transition-[height,visibility] duration-200 ease-out"
        style={{
          height: open ? height : 0,
          // Scoate textul închis din ordinea de citire / de tabulare.
          visibility: open ? "visible" : "hidden",
        }}
      >
        <div
          ref={panelRef}
          className="px-5 pb-6 text-[17px]/[1.65] text-text-muted"
        >
          {a}
        </div>
      </div>
    </div>
  );
}

export function Faq() {
  return (
    <section id="faq" className="section bg-surface">
      <div className="shell">
        <div className="mx-auto max-w-[900px]">
          <h2 className="h2 text-center">{faq.title}</h2>
          <div className="mt-11 flex flex-col gap-3.5">
            {faq.items.map((item) => (
              <FaqRow key={item.q} q={item.q} a={item.a} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
