/**
 * Entitatea canonică de autor. Aceleași valori pe fiecare pagină și în
 * fiecare JSON-LD, fără variații: nume, rol și descriere identice sitewide.
 *
 * [VERIFY] `credentials` și `experience` sunt necompletate intenționat.
 * Nu inventăm calificări pentru un medic real. Se completează cu datele
 * furnizate de cabinet (facultate, an, competențe, număr CMDR).
 */
export type Author = {
  id: string;
  name: string;
  jobTitle: string;
  description: string;
  url: string;
  credentials: string[];
  sameAs: string[];
};

export const authors: Record<string, Author> = {
  "andrei-drafta": {
    id: "andrei-drafta",
    name: "Dr. Andrei Drafta",
    jobTitle: "Medic stomatolog",
    description:
      "Medic stomatolog la Drafta dental, cabinet din Strada Justinian 10, București.",
    url: "/despre-noi#andrei-drafta",
    credentials: [], // [VERIFY]
    sameAs: [],
  },
  "sergiu-drafta": {
    id: "sergiu-drafta",
    name: "Dr. Sergiu Drafta",
    jobTitle: "Medic stomatolog",
    description:
      "Medic stomatolog la Drafta dental, cabinet din Strada Justinian 10, București.",
    url: "/despre-noi#sergiu-drafta",
    credentials: [], // [VERIFY]
    sameAs: [],
  },
};
