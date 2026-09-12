import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { doctors } from "@/content/doctors";
import { practice } from "@/content/site";

export const metadata: Metadata = {
  title: "Medicii cabinetului",
  description:
    "Doi medici stomatologi la Drafta dental, amândoi absolvenți de Carol Davila. Vedeți cine se ocupă de fiecare tip de tratament.",
  alternates: { canonical: "/medici" },
};

export default function MediciIndex() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ItemList",
        name: "Medicii cabinetului Drafta dental",
        itemListElement: doctors.map((d, i) => ({
          "@type": "ListItem",
          position: i + 1,
          url: `${practice.url}/medici/${d.slug}`,
          name: `${d.prefix} ${d.name}`,
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Acasă", item: practice.url },
          { "@type": "ListItem", position: 2, name: "Medici", item: `${practice.url}/medici` },
        ],
      },
    ],
  };

  return (
    <>
      <Header />

      <main id="main" className="shell pt-10">
        <div className="mx-auto max-w-[860px]">
          <nav aria-label="Firimituri" className="text-[13px] text-text-label">
            <ol className="nav-list m-0 flex list-none items-center gap-x-2 p-0">
              <li>
                <Link href="/" className="text-text-label">
                  Acasă
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page">Medici</li>
            </ol>
          </nav>

          <h1 className="h2 mt-6">Cine sunt medicii de la Drafta dental?</h1>
          <p className="mt-6 text-[19px]/[1.65]">
            Doi medici stomatologi, amândoi absolvenți ai Facultății de Medicină
            Dentară din cadrul UMF Carol Davila. Dr. Sergiu Drafta este
            medicul senior și se ocupă de protetică și de reabilitările pe
            implanturi. Dr. Andrei Drafta se ocupă de consultații, tratamente de
            rutină și de fluxul digital al cabinetului.
          </p>

          <ul className="mt-12 flex list-none flex-col gap-6 p-0">
            {doctors.map((d) => (
              <li key={d.slug}>
                <article className="flex flex-col gap-6 rounded-[22px] border border-line p-7 transition-colors duration-150 ease-out hover:bg-surface sm:flex-row">
                  <div className="w-full flex-none sm:w-[180px]">
                    <ImagePlaceholder
                      caption={d.imageCaption}
                      src={d.image}
                      alt={d.imageAlt}
                      sizes="180px"
                      aspect="4 / 5"
                      radius="18px 18px 84px 84px"
                    />
                  </div>
                  <div>
                    <p className="label-meta m-0">
                      {d.seniority === "senior" ? "Medic senior" : "Medic stomatolog"}
                    </p>
                    <h2 className="h3 mt-2 text-[23px]">
                      <Link href={`/medici/${d.slug}`}>
                        {d.prefix} {d.name}
                      </Link>
                    </h2>
                    <p className="mt-1.5 text-[15px] text-text-label">{d.role}</p>
                    <p className="mt-3 text-[16px]/[1.6] text-text-muted">
                      {d.answer}
                    </p>
                    <Link
                      href={`/medici/${d.slug}`}
                      className="mt-4 inline-flex min-h-11 items-center text-[15px] font-semibold text-link"
                    >
                      Vedeți profilul lui {d.prefix} {d.name}
                    </Link>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
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
