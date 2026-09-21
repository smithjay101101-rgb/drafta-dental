import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { Blocks } from "@/components/blog/PostBody";
import { doctors, getDoctor } from "@/content/doctors";
import { practice } from "@/content/site";

export function generateStaticParams() {
  return doctors.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const d = getDoctor(slug);
  if (!d) return {};
  return {
    title: d.metaTitle,
    description: d.metaDescription,
    alternates: { canonical: `/medici/${d.slug}` },
  };
}

export default async function DoctorPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const d = getDoctor(slug);
  if (!d) notFound();

  const url = `${practice.url}/medici/${d.slug}`;
  const other = doctors.find((x) => x.slug !== d.slug);

  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": url,
    name: `${d.prefix} ${d.name}`,
    givenName: d.name.split(" ")[0],
    familyName: d.name.split(" ")[1],
    jobTitle: d.jobTitle,
    description: d.metaDescription,
    url,
    image: d.image ? `${practice.url}${d.image}` : undefined,
    knowsAbout: d.focus,
    worksFor: { "@type": "Dentist", name: practice.name, url: practice.url },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Universitatea de Medicină și Farmacie Carol Davila, București",
      url: "https://umfcd.ro/",
    },
    sameAs: d.sameAs.length ? d.sameAs : undefined,
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: d.faq.map((f) => ({
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
      { "@type": "ListItem", position: 2, name: "Medici", item: `${practice.url}/medici` },
      { "@type": "ListItem", position: 3, name: `${d.prefix} ${d.name}`, item: url },
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
                <Link href="/medici" className="text-text-label">
                  Medici
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page">
                {d.prefix} {d.name}
              </li>
            </ol>
          </nav>

          <p className="label-meta mt-6">{d.role}</p>
          <h1 className="h2 mt-3">{d.title}</h1>

          <div className="mt-8 flex flex-col gap-7 sm:flex-row">
            <div className="w-full flex-none sm:w-[220px]">
              <ImagePlaceholder
                caption={d.imageCaption}
                src={d.image}
                alt={d.imageAlt}
                sizes="220px"
                aspect="4 / 5"
                radius="18px 18px 84px 84px"
              />
            </div>
            <p className="text-[19px]/[1.65]">{d.answer}</p>
          </div>

          <div
            role="note"
            aria-labelledby="kt"
            className="mt-9 rounded-[22px] border border-line bg-surface p-7"
          >
            <h2 id="kt" className="h3 m-0 text-[19px]">
              De reținut
            </h2>
            <ul className="mt-4 flex list-none flex-col gap-3 p-0">
              {d.keyTakeaways.map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-[10px] block size-2 flex-none rounded-full bg-bleu"
                  />
                  <span className="text-[16px]/[1.6]">{t}</span>
                </li>
              ))}
            </ul>
          </div>

          {d.credentials.length > 0 && (
            <section className="mt-10">
              <h2 className="h3 text-[22px]">Ce pregătire are?</h2>
              <div className="mt-5 overflow-x-auto rounded-[18px] border border-line">
                <table className="w-full border-collapse text-left text-[15px]">
                  <caption className="sr-only">
                    Pregătirea profesională a medicului
                  </caption>
                  <tbody>
                    {d.credentials.map((c) => (
                      <tr key={c.label}>
                        <th
                          scope="row"
                          className="w-[38%] border-b border-line bg-surface-2 px-4 py-3 font-display text-[15px] font-extrabold"
                        >
                          {c.label}
                        </th>
                        <td className="border-b border-line px-4 py-3 text-text-muted">
                          {c.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          )}

          {d.sections.map((s) => (
            <section key={s.id} id={s.id} className="mt-12 scroll-mt-28">
              <h2 className="h3 text-[24px]">{s.heading}</h2>
              <Blocks blocks={s.blocks} />
            </section>
          ))}

          <section className="mt-12">
            <h2 className="h3 text-[24px]">Cu ce se ocupă, pe scurt?</h2>
            <ul className="mt-5 flex list-none flex-col gap-3 p-0">
              {d.focus.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-[10px] block size-2 flex-none rounded-full bg-bleu"
                  />
                  <span className="text-[17px]/[1.6] text-text-muted">{f}</span>
                </li>
              ))}
            </ul>
          </section>

          <section id="faq" className="mt-14 scroll-mt-28">
            <h2 className="h3 text-[24px]">Întrebări frecvente</h2>
            <div className="mt-6 flex flex-col gap-6">
              {d.faq.map((f) => (
                <div key={f.q}>
                  <h3 className="h3 text-[18px]">{f.q}</h3>
                  <p className="mt-2 text-[17px]/[1.65] text-text-muted">{f.a}</p>
                </div>
              ))}
            </div>
          </section>

          {d.sources.length > 0 && (
            <section className="mt-12">
              <h2 className="h3 text-[20px]">Surse</h2>
              <ol className="mt-4 flex list-none flex-col gap-3 p-0 text-[15px]/[1.6]">
                {d.sources.map((s) => (
                  <li key={s.id} className="text-text-muted">
                    <a href={s.url} rel="nofollow noopener" target="_blank">
                      {s.label}
                    </a>
                    . {s.publisher}, {s.year}.
                  </li>
                ))}
              </ol>
            </section>
          )}

          <section className="mt-12 rounded-[22px] border border-line p-7">
            <h2 className="h3 m-0 text-[20px]">Cum vă programați?</h2>
            <p className="mt-3 text-[16px]/[1.6] text-text-muted">
              Pe WhatsApp, cu mesajul deja scris, sau telefonic, la {practice.phone}.
              Cabinetul este în {practice.address.street},{" "}
              {practice.address.locality}.
            </p>
            <Link
              href="/#programare"
              className="pill pill-primary mt-5 px-7 py-[15px] text-base"
            >
              Programare online
            </Link>
          </section>

          {other && (
            <section className="mt-12">
              <h2 className="h3 text-[20px]">Celălalt medic al cabinetului</h2>
              <ul className="nav-list mt-4 flex list-none flex-col p-0 text-[16px]">
                <li>
                  <Link href={`/medici/${other.slug}`}>
                    {other.prefix} {other.name}, {other.role}
                  </Link>
                </li>
                <li>
                  <Link href="/medici">Toți medicii cabinetului</Link>
                </li>
                <li>
                  <Link href="/blog">Articole scrise de medicii cabinetului</Link>
                </li>
              </ul>
            </section>
          )}
        </article>
      </main>

      <div className="section">
        <Footer />
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
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
