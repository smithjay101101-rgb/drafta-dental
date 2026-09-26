export type Source = {
  id: string;
  label: string;
  publisher: string;
  year: string;
  url: string;
};

export type Block =
  | { kind: "p"; text: string }
  | { kind: "ul"; items: string[] }
  | { kind: "table"; caption: string; head: string[]; rows: string[][] }
  | { kind: "takeaway"; items: string[] }
  /** A doua fotografie a articolului, în corpul textului. Aceleași reguli ca `image`. */
  | { kind: "figure"; src: string; alt: string; caption: string };

export type Section = {
  id: string;
  /** H2, formulat ca întrebarea pe care o pune un om. */
  heading: string;
  blocks: Block[];
};

export type Faq = { q: string; a: string };

export type Post = {
  slug: string;
  /**
   * REGULĂ: fiecare articol are o fotografie. Câmpurile sunt obligatorii, deci
   * un articol fără fotografie nu trece de compilare.
   *
   * Fotografia trebuie să fie liberă de drepturi (Unsplash, Pexels sau o
   * fotografie a cabinetului). Se trece în public/photos/CREDITE.md, cu
   * identificatorul sursei. Nu se iau imagini din căutarea Google.
   */
  image: string;
  imageAlt: string;
  imageCaption: string;
  /** Pista: „retrieval" pentru postările construite pentru citare de AI. */
  track: "retrieval" | "human";
  /** H1, formulat ca întrebare. */
  title: string;
  /** max 60 de caractere */
  metaTitle: string;
  /** max 155 de caractere */
  metaDescription: string;
  /** Spoilerul: răspunde direct la H1, 2 pana la 4 fraze, se ține pe picioare scos din pagină. */
  answer: string;
  authorId: string;
  datePublished: string;
  dateModified: string;
  categories: string[];
  keyTakeaways: string[];
  sections: Section[];
  faq: Faq[];
  sources: Source[];
  related: { label: string; href: string }[];
  /** Note interne, nu se randează. */
  verify: string[];
};
