import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { authors } from "@/content/authors";
import { practice, team } from "@/content/site";

export const metadata: Metadata = {
  title: "Despre noi",
  description:
    "Cine suntem: doi medici stomatologi, un singur cabinet în Strada Justinian 10, București. Consultație de 45 de minute și plan de tratament scris.",
  alternates: { canonical: "/despre-noi" },
};

/** Pagina este entitatea canonică de autor pentru tot site-ul. */
export default function DespreNoi() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    url: `${practice.url}/despre-noi`,
    mainEntity: {
      "@type": "Dentist",
      name: practice.name,
      url: practice.url,
      employee: Object.values(authors).map((a) => ({
        "@type": "Person",
        name: a.name,
        jobTitle: a.jobTitle,
        description: a.description,
        url: `${practice.url}${a.url}`,
      })),
    },
  };

  return (
    <>
      <Header />

      <main id="main" className="shell pt-10">
        <div className="mx-auto max-w-[760px]">
          <nav aria-label="Firimituri" className="text-[13px] text-text-label">
            <ol className="m-0 flex list-none gap-2 p-0">
              <li>
                <Link href="/" className="text-text-label">
                  Acasă
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page">Despre noi</li>
            </ol>
          </nav>

          <h1 className="h2 mt-6">Cine vă tratează la Drafta dental?</h1>
          <p className="mt-6 text-[19px]/[1.65]">
            Doi medici stomatologi, Dr. Andrei Drafta și Dr. Sergiu Drafta, într-un
            singur cabinet din Strada Justinian 10, Sector 2, București. Îi
            cunoașteți pe amândoi de la prima vizită și rămâneți cu același medic
            până la ultimul control.
          </p>

          <div className="mt-12 flex flex-col gap-10">
            {team.members.map((m, i) => {
              const a = Object.values(authors)[i];
              return (
                <section key={m.name} id={a?.id} className="scroll-mt-28">
                  <div className="flex flex-col gap-6 sm:flex-row">
                    <div className="w-full flex-none sm:w-[200px]">
                      <ImagePlaceholder
                        caption={m.imageCaption}
                        src={m.image}
                        alt={m.imageAlt}
                        sizes="200px"
                        aspect="4 / 5"
                        radius="18px 18px 84px 84px"
                      />
                    </div>
                    <div>
                      <h2 className="h3 text-[23px]">Cine este {m.name}?</h2>
                      <p className="mt-1.5 text-[15px] text-text-label">
                        {a?.jobTitle}
                      </p>
                      <p className="mt-3 text-[17px]/[1.65] text-text-muted">
                        {m.bio}
                      </p>
                    </div>
                  </div>
                </section>
              );
            })}
          </div>

          <section className="mt-14">
            <h2 className="h3 text-[22px]">Unde ne găsiți?</h2>
            <p className="mt-4 text-[17px]/[1.7] text-text-muted">
              {practice.address.street}, {practice.address.locality}.{" "}
              {practice.hours}. Telefon: {practice.phone}.
            </p>
            <Link
              href="/#programare"
              className="pill pill-primary mt-6 px-7 py-[15px] text-base"
            >
              Programați-vă
            </Link>
          </section>
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
