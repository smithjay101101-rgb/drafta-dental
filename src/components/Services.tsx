import { ServiceCard } from "./ServiceCard";
import { services } from "@/content/site";
import { serviceList } from "@/content/services";

/**
 * Coloane fixe pe praguri, nu `auto-fit`, ca ultimul rând să fie mereu plin.
 * Cu 9 servicii + cardul de îndemn:
 *   2 coloane: 9 carduri lasă un loc, îndemnul îl ocupă
 *   3 coloane: 9 carduri umplu trei rânduri, îndemnul ia un rând întreg
 *   4 coloane: 8 carduri umplu două rânduri; ultimul devine orizontal pe două
 *              coloane, iar îndemnul le ia pe celelalte două. Întins pe trei
 *              coloane, îndemnul ar fi un bloc indigo gol, înalt cât cardul
 *              de alături.
 */
export function Services() {
  return (
    <section id="servicii" className="section bg-surface">
      <div className="shell">
        <div className="text-center">
          <h2 className="h2">{services.title}</h2>
          <p className="prose-cap mx-auto mt-5 text-lg/[1.65] text-text-muted">
            {services.sub}
          </p>
        </div>

        <div className="mt-13 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {serviceList.map((s, i) => {
            const last = i === serviceList.length - 1;
            return (
              <ServiceCard
                key={s.slug}
                service={s}
                layout={last ? "row-xl" : "stack"}
                className={last ? "xl:col-span-2" : ""}
              />
            );
          })}

          <article className="flex flex-col rounded-[22px] bg-indigo p-8 text-white lg:col-span-3 lg:flex-row lg:items-center lg:justify-between lg:gap-10 lg:px-10 xl:col-span-2 xl:flex-col xl:items-start xl:justify-center xl:gap-0">
            <div>
              <h3 className="h3 text-[22px] lg:text-[26px]">{services.cta.title}</h3>
              <p className="mt-3 max-w-[34em] text-base/[1.55]">{services.cta.body}</p>
            </div>
            <a
              href="#programare"
              className="pill pill-white mt-6 self-start px-6 py-[13px] text-[15px] sm:mt-auto lg:mt-0 lg:flex-none lg:self-center xl:mt-6 xl:self-start"
            >
              {services.cta.label}
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
