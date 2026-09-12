import { doctors } from "./doctors";

/**
 * Entitatea canonică de autor, derivată din src/content/doctors.ts.
 *
 * Nu se scriu aici nume, titluri sau descrieri separate. Regula din brief
 * este ca obiectul de autor să fie identic pe tot site-ul, iar singurul fel
 * de a garanta asta este o singură sursă.
 *
 * [VERIFY] `credentials` rămâne gol pentru medicii fără date publice
 * confirmate. Nu se inventează calificări.
 */
export type Author = {
  id: string;
  name: string;
  jobTitle: string;
  description: string;
  url: string;
  sameAs: string[];
};

export const authors: Record<string, Author> = Object.fromEntries(
  doctors.map((d) => [
    d.slug.replace(/^dr-/, ""),
    {
      id: d.slug,
      name: `${d.prefix} ${d.name}`,
      jobTitle: d.jobTitle,
      description: d.metaDescription,
      url: `/medici/${d.slug}`,
      sameAs: d.sameAs,
    } satisfies Author,
  ]),
);
