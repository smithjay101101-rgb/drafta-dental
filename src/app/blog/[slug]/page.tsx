import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { Blocks } from "@/components/blog/PostBody";
import { getPost, posts, readingMinutes } from "@/content/blog";
import { authors } from "@/content/authors";
import { practice } from "@/content/site";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.metaTitle,
      description: post.metaDescription,
      publishedTime: post.datePublished,
      modifiedTime: post.dateModified,
      images: [{ url: post.image, alt: post.imageAlt }],
    },
  };
}

const dateRo = (iso: string) =>
  new Date(iso).toLocaleDateString("ro-RO", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const author = authors[post.authorId];
  const url = `${practice.url}/blog/${post.slug}`;

  const blogPosting = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": url,
    mainEntityOfPage: url,
    headline: post.title,
    name: post.title,
    description: post.metaDescription,
    inLanguage: "ro-RO",
    datePublished: post.datePublished,
    dateModified: post.dateModified,
    image: [
      post.image,
      ...post.sections.flatMap((s) =>
        s.blocks.flatMap((b) => (b.kind === "figure" ? [b.src] : [])),
      ),
    ].map((src) => `${practice.url}${src}`),
    articleSection: post.categories,
    keywords: post.categories.join(", "),
    author: {
      "@type": "Person",
      name: author.name,
      jobTitle: author.jobTitle,
      description: author.description,
      url: `${practice.url}${author.url}`,
    },
    publisher: {
      "@type": "Dentist",
      name: practice.name,
      url: practice.url,
    },
    citation: post.sources.map((s) => ({
      "@type": "CreativeWork",
      name: s.label,
      publisher: s.publisher,
      datePublished: s.year,
      url: s.url,
    })),
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.faq.map((f) => ({
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
      { "@type": "ListItem", position: 2, name: "Blog", item: `${practice.url}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: url },
    ],
  };

  return (
    <>
      <Header />

      <main id="main" className="shell pt-10 pb-0">
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
                <Link href="/blog" className="text-text-label">
                  Blog
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page">{post.title}</li>
            </ol>
          </nav>

          <p className="label-meta mt-6">{post.categories.join(" · ")}</p>

          <h1 className="h2 mt-3">{post.title}</h1>

          {/* Spoilerul: răspunde direct la H1, fără introducere. */}
          <p className="mt-6 text-[19px]/[1.65]">{post.answer}</p>

          <p className="mt-6 flex flex-wrap items-center gap-x-2 gap-y-1 text-[14px] text-text-label">
            <span>
              De{" "}
              <Link href={author.url} rel="author" className="text-text-label underline">
                {author.name}
              </Link>
              , {author.jobTitle}
            </span>
            <span aria-hidden="true">·</span>
            <span>
              Actualizat:{" "}
              <time dateTime={post.dateModified}>{dateRo(post.dateModified)}</time>
            </span>
            <span aria-hidden="true">·</span>
            <span>{readingMinutes(post)} min de citit</span>
          </p>

          <div className="mt-8">
            <ImagePlaceholder
              caption={post.imageCaption}
              src={post.image}
              alt={post.imageAlt}
              priority
              sizes="(max-width: 800px) 100vw, 760px"
              aspect="16 / 9"
              radius="28px"
            />
          </div>

          <div
            role="note"
            aria-labelledby="kt"
            className="mt-8 rounded-[22px] border border-line bg-surface p-7"
          >
            <h2 id="kt" className="h3 m-0 text-[19px]">
              De reținut
            </h2>
            <ul className="mt-4 flex list-none flex-col gap-3 p-0">
              {post.keyTakeaways.map((t) => (
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

          <nav aria-labelledby="toc" className="mt-8">
            <h2 id="toc" className="label-meta m-0">
              Pe această pagină
            </h2>
            <ol className="nav-list mt-3 flex list-none flex-col p-0 text-[16px]">
              {post.sections.map((s, i) => (
                <li key={s.id}>
                  <span className="text-text-label">{i + 1}. </span>
                  <a href={`#${s.id}`}>{s.heading}</a>
                </li>
              ))}
              <li>
                <span className="text-text-label">{post.sections.length + 1}. </span>
                <a href="#faq">Întrebări frecvente</a>
              </li>
            </ol>
          </nav>

          {post.sections.map((s) => (
            <section key={s.id} id={s.id} className="mt-12 scroll-mt-28">
              <h2 className="h3 text-[26px]">{s.heading}</h2>
              <Blocks blocks={s.blocks} />
            </section>
          ))}

          <section id="faq" className="mt-14 scroll-mt-28">
            <h2 className="h3 text-[26px]">Întrebări frecvente</h2>
            <div className="mt-6 flex flex-col gap-6">
              {post.faq.map((f) => (
                <div key={f.q}>
                  <h3 className="h3 text-[18px]">{f.q}</h3>
                  <p className="mt-2 text-[17px]/[1.65] text-text-muted">{f.a}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-14">
            <h2 className="h3 text-[20px]">Surse</h2>
            <ol className="mt-4 flex list-none flex-col gap-3 p-0 text-[15px]/[1.6]">
              {post.sources.map((s) => (
                <li key={s.id} className="text-text-muted">
                  <a href={s.url} rel="nofollow noopener" target="_blank">
                    {s.label}
                  </a>
                  . {s.publisher}, {s.year}.
                </li>
              ))}
            </ol>
          </section>

          <section className="mt-12 rounded-[22px] border border-line p-7">
            <h2 className="h3 m-0 text-[20px]">Cine a scris acest articol?</h2>
            <p className="mt-4 font-display text-[18px] font-extrabold">
              {author.name}
            </p>
            <p className="mt-1 text-[15px] text-text-label">{author.jobTitle}</p>
            <p className="mt-3 text-[16px]/[1.6] text-text-muted">
              {author.description}
            </p>
            <Link
              href={author.url}
              className="pill pill-outline mt-5 px-5 py-2.5 text-[15px]"
            >
              Despre medicii cabinetului
            </Link>
          </section>

          <section className="mt-12">
            <h2 className="h3 text-[20px]">De citit mai departe</h2>
            <ul className="nav-list mt-4 flex list-none flex-col p-0 text-[16px]">
              {post.related.map((r) => (
                <li key={r.href}>
                  <Link href={r.href}>{r.label}</Link>
                </li>
              ))}
            </ul>
          </section>

          <p className="mt-12 rounded-[18px] border border-line bg-surface-2 p-6 text-[14px]/[1.6] text-text-label">
            Articolul are caracter informativ și nu înlocuiește consultația. Planul
            de tratament se stabilește după examen clinic și tomografie.
          </p>
        </article>
      </main>

      <div className="section">
        <Footer />
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPosting) }}
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
