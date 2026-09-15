import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ServiceCard } from "@/components/ServiceCard";
import {
  priceLabel,
  serviceCategories,
  serviceList,
  type Service,
} from "@/content/services";
import { practice, services } from "@/content/site";

export const metadata: Metadata = {
  title: "Servicii și prețuri | Drafta dental",
  description:
    "Consultație și igienizare, albire dentară, fațete de compozit și ceramice, coroane, punți, inlay-uri, tratamente de canal și implanturi dentare, cu prețurile de pornire. Drafta dental, Strada Justinian 10, București.",
  alternates: { canonical: "/servicii" },
};

type Group = (typeof serviceCategories)[number] & { items: Service[] };

const count = (n: number) => `${n} ${n === 1 ? "serviciu" : "servicii"}`;

/**
 * Grila unei categorii, aleasă după numărul de carduri, ca niciun rând să nu
 * rămână pe jumătate gol la vreun prag:
 *   4 → 2×2, apoi 4 pe rând
 *   3 → un card lat + 2, apoi 3 pe rând
 *   2 → 2 pe rând
 * Categoriile cu un singur serviciu nu primesc grilă: stau două câte două, cu
 * carduri orizontale (vezi mai jos).
 */
function gridFor(n: number) {
  if (n === 4) return "sm:grid-cols-2 xl:grid-cols-4";
  if (n === 3) return "sm:grid-cols-2 lg:grid-cols-3";
  return "sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4";
}

function GroupHeading({ g }: { g: Group }) {
  return (
    <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
      <div className="flex-none">
        <p className="label-meta">{count(g.items.length)}</p>
        <h2 id={`${g.id}-titlu`} className="h3 mt-1.5 text-[28px]">
          {g.name}
        </h2>
      </div>
      <p className="max-w-[36em] text-[16px]/[1.6] text-text-muted">{g.body}</p>
    </div>
  );
}

export default function ServicesPage() {
  const groups: Group[] = serviceCategories
    .map((c) => ({ ...c, items: serviceList.filter((s) => s.category === c.name) }))
    .filter((g) => g.items.length > 0)
    // Categoriile cu mai multe servicii primele; la egalitate, ordinea de bază.
    .sort((a, b) => b.items.length - a.items.length);

  const multi = groups.filter((g) => g.items.length > 1);
  const singles = groups.filter((g) => g.items.length === 1);

  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Servicii Drafta dental",
    itemListElement: groups
      .flatMap((g) => g.items)
      .map((s, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: `${s.title}, ${priceLabel(s)}`,
        url: `${practice.url}/servicii/${s.slug}`,
      })),
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Acasă", item: practice.url },
      { "@type": "ListItem", position: 2, name: "Servicii", item: `${practice.url}/servicii` },
    ],
  };

  return (
    <>
      <Header />

      <main id="main" className="shell pt-8">
        <nav aria-label="Firimituri" className="text-[13px] text-text-label">
          <ol className="nav-list m-0 flex list-none flex-wrap items-center gap-x-2 p-0">
            <li>
              <Link href="/" className="text-text-label">
                Acasă
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page">Servicii</li>
          </ol>
        </nav>

        <div className="mt-4 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
          <div>
            <h1 className="h2">Servicii și prețuri</h1>
            <p className="mt-4 max-w-[32em] text-lg/[1.6] text-text-muted">
              Toate tratamentele într-un singur cabinet, cu aceeași echipă.
              Prețurile afișate sunt prețurile de pornire.
            </p>
          </div>

          <nav aria-label="Categorii de servicii" className="flex flex-wrap gap-2 lg:max-w-[680px] lg:justify-end">
            {groups.map((g) => (
              <a
                key={g.id}
                href={`#${g.id}`}
                className="inline-flex min-h-11 items-center gap-2 rounded-full border border-line bg-white px-4 text-[15px] font-semibold text-indigo transition-colors duration-150 ease-out hover:border-indigo hover:text-indigo"
              >
                {g.name}
                <span className="rounded-full bg-surface-2 px-2 py-0.5 text-[13px] font-medium text-text-label">
                  {g.items.length}
                </span>
              </a>
            ))}
          </nav>
        </div>

        {multi.map((g) => (
          <section
            key={g.id}
            id={g.id}
            aria-labelledby={`${g.id}-titlu`}
            className="mt-12 scroll-mt-28 border-t border-line pt-10 first-of-type:mt-10"
          >
            <GroupHeading g={g} />
            <div className={`mt-7 grid grid-cols-1 gap-5 ${gridFor(g.items.length)}`}>
              {g.items.map((s, i) => {
                const lead = g.items.length === 3 && i === 0;
                return (
                  <ServiceCard
                    key={s.slug}
                    service={s}
                    bordered
                    layout={lead ? "row-mid" : "stack"}
                    className={lead ? "sm:col-span-2 lg:col-span-1" : ""}
                  />
                );
              })}
            </div>
          </section>
        ))}

        {singles.length > 0 && (
          <div className="mt-12 grid grid-cols-1 gap-x-5 gap-y-12 border-t border-line pt-10 lg:grid-cols-2">
            {singles.map((g, i) => {
              const last = i === singles.length - 1 && singles.length % 2 === 1;
              return (
                <section
                  key={g.id}
                  id={g.id}
                  aria-labelledby={`${g.id}-titlu`}
                  className={`flex scroll-mt-28 flex-col ${last ? "lg:col-span-2" : ""}`}
                >
                  <div>
                    <p className="label-meta">{count(1)}</p>
                    <h2 id={`${g.id}-titlu`} className="h3 mt-1.5 text-[28px]">
                      {g.name}
                    </h2>
                    <p className="mt-2 max-w-[36em] text-[16px]/[1.6] text-text-muted">
                      {g.body}
                    </p>
                  </div>
                  <ServiceCard
                    service={g.items[0]}
                    bordered
                    layout="row"
                    className="mt-6 flex-1"
                  />
                </section>
              );
            })}
          </div>
        )}

        <section
          aria-labelledby="cta-titlu"
          className="mt-14 flex flex-col gap-6 rounded-[28px] bg-indigo p-8 text-white sm:p-10 lg:flex-row lg:items-center lg:justify-between lg:gap-12"
        >
          <div>
            <h2 id="cta-titlu" className="h3 text-[26px] text-white">
              {services.cta.title}
            </h2>
            <p className="mt-2 max-w-[34em] text-[17px]/[1.6] text-white">
              {services.cta.body}
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:flex-none">
            <Link href="/#programare" className="pill pill-white px-7 py-[15px] text-base">
              {services.cta.label}
            </Link>
            <a
              href={practice.phoneHref}
              className="pill border-[1.5px] border-white/50 px-7 py-[15px] text-base text-white hover:border-white hover:text-white"
            >
              Sună: {practice.phone}
            </a>
          </div>
        </section>
      </main>

      <div className="mt-16">
        <Footer />
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
    </>
  );
}
