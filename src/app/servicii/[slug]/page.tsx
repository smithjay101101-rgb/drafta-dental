import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import {
  getService,
  priceLabel,
  serviceDescription,
  serviceList,
} from "@/content/services";
import { practice } from "@/content/site";

export function generateStaticParams() {
  return serviceList.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return {};
  return {
    title: `${s.title}, ${priceLabel(s)} | Drafta dental`,
    description: serviceDescription(s),
    alternates: { canonical: `/servicii/${s.slug}` },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) notFound();

  const url = `${practice.url}/servicii/${s.slug}`;
  const others = serviceList.filter((x) => x.slug !== s.slug);

  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": url,
    name: s.title,
    serviceType: s.category,
    description: serviceDescription(s),
    url,
    image: `${practice.url}${s.image}`,
    areaServed: "București",
    provider: {
      "@type": "Dentist",
      name: practice.name,
      url: practice.url,
      telephone: practice.phone,
    },
    offers: {
      "@type": "Offer",
      url,
      priceCurrency: "RON",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        priceCurrency: "RON",
        minPrice: s.priceFrom,
        ...(s.priceUnit ? { unitText: s.priceUnit } : {}),
      },
    },
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: s.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Acasă", item: practice.url },
      { "@type": "ListItem", position: 2, name: "Servicii", item: `${practice.url}/servicii` },
      { "@type": "ListItem", position: 3, name: s.title, item: url },
    ],
  };

  return (
    <>
      <Header />

      <main id="main" className="shell pt-10">
        <article className="mx-auto max-w-[760px]">
          <nav aria-label="Firimituri" className="text-[13px] text-text-label">
            <ol className="nav-list m-0 flex list-none flex-wrap items-center gap-x-2 p-0">
              <li>
                <Link href="/" className="text-text-label">
                  Acasă
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/servicii" className="text-text-label">
                  Servicii
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page">{s.title}</li>
            </ol>
          </nav>

          <p className="label-meta mt-6">{s.category}</p>
          <h1 className="h2 mt-3">{s.title}</h1>
          <p className="mt-6 text-[19px]/[1.65]">{s.intro[0]}</p>

          <div className="mt-8">
            <ImagePlaceholder
              caption={`foto: ${s.title}`}
              src={s.image}
              alt={s.imageAlt}
              sizes="(max-width: 800px) 100vw, 760px"
              aspect="16 / 9"
              radius="28px"
            />
          </div>

          {s.intro.slice(1).map((p) => (
            <p key={p} className="mt-8 text-[17px]/[1.7] text-text-muted">
              {p}
            </p>
          ))}

          <section
            aria-label="Preț"
            className="mt-10 flex flex-col gap-5 rounded-[22px] border border-line bg-surface p-7 sm:flex-row sm:items-center sm:justify-between"
          >
            <div>
              <p className="label-meta">Preț</p>
              <p className="mt-2 font-display text-[30px] leading-tight font-black tracking-[-0.02em]">
                {priceLabel(s)}
              </p>
              <p className="mt-2 text-[15px]/[1.6] text-text-muted">
                Sau sună la{" "}
                <a href={practice.phoneHref} className="font-semibold">
                  {practice.phone}
                </a>
                .
              </p>
            </div>
            <Link
              href="/#programare"
              className="pill pill-primary flex-none self-start px-7 py-[15px] text-base sm:self-center"
            >
              Programează-te
            </Link>
          </section>

          <section id="intrebari" className="mt-14 scroll-mt-28">
            <h2 className="h3 text-[24px]">Întrebări frecvente</h2>
            <div className="mt-6 flex flex-col gap-6">
              {s.faq.map((f) => (
                <div key={f.q}>
                  <h3 className="h3 text-[18px]">{f.q}</h3>
                  <p className="mt-2 text-[17px]/[1.65] text-text-muted">{f.a}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-14">
            <h2 className="h3 text-[20px]">Alte servicii</h2>
            <ul className="nav-list mt-4 flex list-none flex-col p-0 text-[16px]">
              {others.map((o) => (
                <li key={o.slug}>
                  <Link
                    href={`/servicii/${o.slug}`}
                    className="flex items-center justify-between gap-4 border-b border-line"
                  >
                    <span>{o.title}</span>
                    <span className="text-right text-text-muted">{priceLabel(o)}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/servicii" className="flex items-center font-semibold">
                  Toate serviciile și prețurile
                </Link>
              </li>
            </ul>
          </section>
        </article>
      </main>

      <div className="section">
        <Footer />
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
    </>
  );
}
