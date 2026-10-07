import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { legalUpdated, type LegalDoc } from "@/content/legal";
import { practice } from "@/content/site";

const dateRo = (iso: string) =>
  new Date(iso).toLocaleDateString("ro-RO", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

export function LegalPage({ doc }: { doc: LegalDoc }) {
  const url = `${practice.url}/${doc.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: doc.title,
    url,
    inLanguage: "ro-RO",
    dateModified: legalUpdated,
    isPartOf: { "@type": "WebSite", url: practice.url, name: practice.name },
  };

  return (
    <>
      <Header />

      <main id="main" className="shell pt-10 pb-0">
        <article className="mx-auto max-w-[760px]">
          <nav aria-label="Firimituri" className="text-[13px] text-text-label">
            <ol className="m-0 flex list-none gap-2 p-0">
              <li>
                <Link href="/" className="block min-h-11 py-2.5 text-text-label">
                  Acasă
                </Link>
              </li>
              <li aria-hidden="true" className="py-2.5">
                /
              </li>
              <li aria-current="page" className="py-2.5">
                {doc.title}
              </li>
            </ol>
          </nav>

          <h1 className="h2 mt-4">{doc.title}</h1>
          <p className="mt-4 text-[14px] text-text-label">
            Actualizat: <time dateTime={legalUpdated}>{dateRo(legalUpdated)}</time>
          </p>
          <p className="mt-6 text-[19px]/[1.65]">{doc.intro}</p>

          {doc.sections.map((s, i) => (
            <section key={s.id} id={s.id} className="mt-12 scroll-mt-28">
              <h2 className="h3 text-[24px]">
                {i + 1}. {s.heading}
              </h2>
              {s.paragraphs?.map((p) => (
                <p key={p} className="mt-4 text-[17px]/[1.7] text-text-muted">
                  {p}
                </p>
              ))}
              {s.items && (
                <ul className="mt-5 flex list-none flex-col gap-3 p-0">
                  {s.items.map((it) => (
                    <li key={it} className="flex items-start gap-3">
                      <span
                        aria-hidden="true"
                        className="mt-[10px] block size-2 flex-none rounded-full bg-bleu"
                      />
                      <span className="text-[17px]/[1.65] text-text-muted">{it}</span>
                    </li>
                  ))}
                </ul>
              )}
              {s.after?.map((p) => (
                <p key={p} className="mt-4 text-[17px]/[1.7] text-text-muted">
                  {p}
                </p>
              ))}
            </section>
          ))}
        </article>
      </main>

      <div className="section">
        <Footer />
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
