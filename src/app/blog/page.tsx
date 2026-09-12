import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { posts, readingMinutes } from "@/content/blog";
import { authors } from "@/content/authors";
import { practice } from "@/content/site";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Răspunsuri la întrebările pe care le primim în cabinet: implanturi, aligneri, albire, urgențe. Scrise de medicii Drafta dental.",
  alternates: { canonical: "/blog" },
};

const dateRo = (iso: string) =>
  new Date(iso).toLocaleDateString("ro-RO", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

export default function BlogIndex() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Blog",
        "@id": `${practice.url}/blog`,
        name: `${practice.name}, blog`,
        inLanguage: "ro-RO",
        publisher: { "@type": "Dentist", name: practice.name, url: practice.url },
        blogPost: posts.map((p) => ({
          "@type": "BlogPosting",
          headline: p.title,
          url: `${practice.url}/blog/${p.slug}`,
          datePublished: p.datePublished,
          dateModified: p.dateModified,
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Acasă", item: practice.url },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${practice.url}/blog` },
        ],
      },
    ],
  };

  return (
    <>
      <Header />

      <main id="main" className="shell pt-10">
        <div className="mx-auto max-w-[760px]">
          <nav aria-label="Firimituri" className="text-[13px] text-text-label">
            <ol className="nav-list m-0 flex list-none items-center gap-x-2 p-0">
              <li>
                <Link href="/" className="text-text-label">
                  Acasă
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page">Blog</li>
            </ol>
          </nav>

          <h1 className="h2 mt-6">Ce ne întreabă pacienții, cu răspuns</h1>
          <p className="mt-5 text-[19px]/[1.65] text-text-muted">
            Fiecare articol răspunde la o singură întrebare, în primele rânduri.
            Scrise de medicii cabinetului, cu sursele citate la final.
          </p>

          <ul className="mt-12 flex list-none flex-col gap-5 p-0">
            {posts.map((p) => {
              const a = authors[p.authorId];
              return (
                <li key={p.slug}>
                  <article className="rounded-[22px] border border-line p-7 transition-colors duration-150 ease-out hover:bg-surface">
                    <p className="label-meta m-0">{p.categories.join(" · ")}</p>
                    <h2 className="h3 mt-3 text-[22px]">
                      <Link href={`/blog/${p.slug}`}>{p.title}</Link>
                    </h2>
                    <p className="mt-3 text-[16px]/[1.6] text-text-muted">
                      {p.answer}
                    </p>
                    <p className="mt-4 text-[14px] text-text-label">
                      {a.name} · <time dateTime={p.dateModified}>{dateRo(p.dateModified)}</time> ·{" "}
                      {readingMinutes(p)} min
                    </p>
                  </article>
                </li>
              );
            })}
          </ul>

          <p className="mt-10 text-[15px] text-text-label">
            Urmează articole despre aligneri, albire și urgențe stomatologice.
          </p>
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
