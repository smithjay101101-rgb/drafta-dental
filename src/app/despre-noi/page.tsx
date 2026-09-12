import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { doctors } from "@/content/doctors";
import { about, practice } from "@/content/site";

export const metadata: Metadata = {
  title: "Despre cabinet",
  description:
    "Cum lucrează Drafta dental: consultație de 45 de minute, plan de tratament scris cu preț fix, același medic de la prima vizită la ultimul control.",
  alternates: { canonical: "/despre-noi" },
};

/**
 * Pagina despre CABINET, nu despre medici. Profilurile medicilor sunt la
 * /medici, ca să nu existe două pagini care se concurează pe aceeași
 * căutare. Aici se leagă doar spre ele.
 */
export default function DespreNoi() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    url: `${practice.url}/despre-noi`,
    about: {
      "@type": "Dentist",
      "@id": practice.url,
      name: practice.name,
      url: practice.url,
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
                <Link href="/" className="block min-h-11 py-2.5 text-text-label">
                  Acasă
                </Link>
              </li>
              <li aria-hidden="true" className="py-2.5">
                /
              </li>
              <li aria-current="page" className="py-2.5">
                Despre cabinet
              </li>
            </ol>
          </nav>

          <h1 className="h2 mt-4">Cum se lucrează la Drafta dental?</h1>

          <p className="mt-6 text-[19px]/[1.65]">
            Consultația durează 45 de minute, nu zece. Primiți planul de tratament
            în scris, cu preț fix, înainte de prima procedură. Rămâneți cu același
            medic de la prima vizită până la ultimul control, într-un singur
            cabinet, în {practice.address.street}, {practice.address.locality}.
          </p>

          <div
            role="note"
            aria-labelledby="kt"
            className="mt-9 rounded-[22px] border border-line bg-surface p-7"
          >
            <h2 id="kt" className="h3 m-0 text-[19px]">
              De reținut
            </h2>
            <ul className="mt-4 flex list-none flex-col gap-3 p-0">
              {[
                "Consultația la Drafta dental durează 45 de minute și include scanare și radiografii.",
                "Planul de tratament se primește în scris, cu preț fix, înainte de prima procedură.",
                "Tratamentele mari se pot plăti în rate fără dobândă, până în 12 luni.",
                "Cabinetul ține două intervale libere în fiecare zi pentru urgențe.",
                "Cei doi medici lucrează în același cabinet, deci un caz complex nu este trimis în altă parte.",
              ].map((t) => (
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

          <section className="mt-12">
            <h2 className="h3 text-[24px]">Ce se întâmplă la prima vizită?</h2>
            <p className="mt-4 text-[17px]/[1.7] text-text-muted">{about.body}</p>
            <ul className="mt-5 flex list-none flex-col gap-3 p-0">
              {about.bullets.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-[10px] block size-2 flex-none rounded-full bg-bleu"
                  />
                  <span className="text-[17px]/[1.6] text-text-muted">{b}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-12">
            <h2 className="h3 text-[24px]">Cine sunt medicii?</h2>
            <p className="mt-4 text-[17px]/[1.7] text-text-muted">
              Doi medici, amândoi absolvenți ai Facultății de Medicină Dentară din
              cadrul UMF Carol Davila. Profilurile complete, cu pregătirea fiecăruia
              și cu tipurile de cazuri pe care le tratează, sunt pe pagina medicilor.
            </p>
            <ul className="mt-5 flex list-none flex-col gap-2.5 p-0 text-[17px]">
              {doctors.map((d) => (
                <li key={d.slug}>
                  <Link
                    href={`/medici/${d.slug}`}
                    className="inline-flex min-h-11 items-center"
                  >
                    {d.prefix} {d.name}, {d.role}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-12">
            <h2 className="h3 text-[24px]">Unde este cabinetul și când e deschis?</h2>
            <p className="mt-4 text-[17px]/[1.7] text-text-muted">
              {practice.address.street}, {practice.address.locality}.{" "}
              {practice.hours}. Telefon: {practice.phone}.
            </p>
            <Link
              href="/#programare"
              className="pill pill-primary mt-6 px-7 py-[15px] text-base"
            >
              Programare online
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
