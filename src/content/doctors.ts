import type { Faq, Section, Source } from "./blog-types";

/**
 * Paginile de medic. Structura AEO: H1 ca întrebare, paragraful-răspuns
 * imediat sub el, casetă de reținut, secțiuni cu H2 formulate ca întrebări,
 * tabel comparativ, FAQ, surse.
 *
 * ⚠️ TEXT PROVIZORIU, pus pentru structură. Se înlocuiește cu textul
 * cabinetului. Ce este afirmat despre Dr. Sergiu Drafta provine din surse
 * publice, citate în `sources`. Ce ține de Dr. Andrei Drafta nu a putut fi
 * verificat public și este ținut deliberat general.
 */
export type Doctor = {
  slug: string;
  name: string;
  /** Titlul academic, dacă există și este verificabil. */
  prefix?: string;
  jobTitle: string;
  seniority: "senior" | "medic";
  role: string;
  /** Descriere scurtă, pentru cardul de pe pagina de acasă. */
  short: string;
  /** H1, ca întrebare. */
  title: string;
  metaTitle: string;
  metaDescription: string;
  /** Spoilerul: răspunde direct la H1, în 2 pana la 4 fraze. */
  answer: string;
  image?: string;
  imageAlt: string;
  imageCaption: string;
  keyTakeaways: string[];
  credentials: { label: string; value: string }[];
  focus: string[];
  sections: Section[];
  faq: Faq[];
  sources: Source[];
  sameAs: string[];
  verify: string[];
};

const sergiu: Doctor = {
  slug: "dr-sergiu-drafta",
  name: "Sergiu Drafta",
  prefix: "Dr.",
  jobTitle: "Medic stomatolog, conferențiar universitar",
  seniority: "senior",
  role: "Protetică dentară fixă și ocluzologie",
  short:
    "Conferențiar la UMF Carol Davila, disciplina de protetică dentară fixă și ocluzologie. Se ocupă de lucrările protetice complexe, de reabilitările pe implanturi și de cazurile în care ocluzia trebuie refăcută.",
  title: "Cine este Dr. Sergiu Drafta?",
  metaTitle: "Dr. Sergiu Drafta, protetică și ocluzologie",
  metaDescription:
    "Medicul senior al cabinetului Drafta dental, conferențiar la UMF Carol Davila, disciplina de protetică dentară fixă și ocluzologie.",
  answer:
    "Dr. Sergiu Drafta este medicul senior al cabinetului Drafta dental și conferențiar universitar la Universitatea de Medicină și Farmacie Carol Davila din București, unde predă la disciplina de protetică dentară fixă și ocluzologie. A absolvit Facultatea de Medicină Dentară a aceleiași universități. Se ocupă de lucrările protetice complexe, de reabilitările pe implanturi și de cazurile în care ocluzia trebuie reconstruită.",
  image: "/photos/dr-sergiu-drafta.jpg",
  imageAlt: "Dr. Sergiu Drafta, medic stomatolog la Drafta dental",
  imageCaption: "portret: Dr. Sergiu Drafta",
  keyTakeaways: [
    "Dr. Sergiu Drafta este conferențiar universitar la UMF Carol Davila, Facultatea de Medicină Dentară, disciplina de protetică dentară fixă și ocluzologie.",
    "A absolvit Facultatea de Medicină Dentară a UMF Carol Davila din București.",
    "Profilul său de cercetare listează 35 de lucrări publicate și 303 citări, conform ResearchGate, consultat în septembrie 2026.",
    "Teza de abilitare a fost programată pentru susținere la 9 ianuarie 2026, conform anunțului UMF Carol Davila.",
    "În cabinet se ocupă de protetică fixă, reabilitări pe implanturi și cazuri care cer reconstrucția ocluziei.",
  ],
  credentials: [
    { label: "Titlu academic", value: "Conferențiar universitar" },
    { label: "Universitate", value: "UMF Carol Davila, București" },
    { label: "Disciplină", value: "Protetică dentară fixă și ocluzologie" },
    { label: "Studii", value: "Facultatea de Medicină Dentară, UMF Carol Davila" },
  ],
  focus: [
    "Protetică dentară fixă: coroane, punți, fațete",
    "Reabilitări complexe pe implanturi",
    "Ocluzologie și reconstrucția mușcăturii",
    "Cazuri refăcute după lucrări anterioare eșuate",
  ],
  sections: [
    {
      id: "ce-trateaza",
      heading: "Ce tipuri de cazuri tratează?",
      blocks: [
        {
          kind: "p",
          text: "Lucrările protetice care presupun mai mult de un dinte și cazurile în care raportul dintre cele două arcade trebuie refăcut. Practic, situațiile unde nu este suficient să se rezolve un dinte, ci trebuie gândit întregul ansamblu.",
        },
        {
          kind: "ul",
          items: [
            "Reabilitări complete pe implanturi, pe una sau pe ambele arcade.",
            "Coroane, punți și fațete ceramice, inclusiv refaceri ale unor lucrări anterioare.",
            "Probleme de ocluzie: uzură dentară, bruxism, mușcătură dezechilibrată după tratamente vechi.",
            "Planificarea cazurilor care combină chirurgie și protetică.",
          ],
        },
      ],
    },
    {
      id: "de-ce-conteaza-ocluzia",
      heading: "De ce contează că se ocupă de ocluzie?",
      blocks: [
        {
          kind: "p",
          text: "Ocluzia este felul în care dinții de sus se întâlnesc cu cei de jos. Când o lucrare protetică este corectă ca formă dar greșită ca raport ocluzal, forțele de masticație se concentrează în câteva puncte în loc să se distribuie. Rezultatul apare la câteva luni sau la câțiva ani: ciobiri, fracturi, lucrări care se desprind, dureri articulare.",
        },
        {
          kind: "p",
          text: "De aceea, la reabilitările mari, ocluzia se stabilește înaintea formei estetice, nu după.",
        },
      ],
    },
    {
      id: "activitate-universitara",
      heading: "Ce înseamnă că predă la universitate?",
      blocks: [
        {
          kind: "p",
          text: "Dr. Sergiu Drafta este cadru didactic la UMF Carol Davila, la disciplina de protetică dentară fixă și ocluzologie, adică exact domeniul în care lucrează și în cabinet. Are și activitate de cercetare publicată, cu 35 de lucrări și 303 citări listate pe ResearchGate la data consultării, septembrie 2026.",
        },
        {
          kind: "p",
          text: "Pentru pacient, asta înseamnă că protocoalele folosite în cabinet sunt aceleași pe care le predă, nu preluate din reclame de la producătorii de materiale.",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Ce înseamnă conferențiar universitar în medicina dentară?",
      a: "Este un grad didactic universitar, situat între lector și profesor. Presupune activitate de predare, activitate de cercetare publicată și susținerea unor evaluări academice. Dr. Sergiu Drafta predă la UMF Carol Davila, disciplina de protetică dentară fixă și ocluzologie.",
    },
    {
      q: "Ce tratamente face Dr. Sergiu Drafta?",
      a: "Protetică fixă, adică lucrări cimentate sau înșurubate care rămân în gură: coroane, punți, fațete. La acestea se adaugă reabilitările complete pe implanturi și cazurile de ocluzie dezechilibrată.",
    },
    {
      q: "Unde a studiat?",
      a: "La Facultatea de Medicină Dentară a Universității de Medicină și Farmacie Carol Davila din București, universitatea la care predă în prezent.",
    },
    {
      q: "Cum se face o programare la Dr. Sergiu Drafta?",
      a: "Pe WhatsApp sau telefonic. Prima vizită este o consultație în care se stabilește dacă situația cere o abordare protetică și ce investigații sunt necesare.",
    },
  ],
  sources: [
    {
      id: "umfcd-abilitare",
      label: "Anunț de susținere a tezei de abilitare, Conf. Dr. Drafta Sergiu",
      publisher: "UMF Carol Davila",
      year: "2026",
      url: "https://umfcd.ro/in-curs-de-sustinere/conf-dr-drafta-sergiu/",
    },
    {
      id: "researchgate",
      label: "Profil de cercetare, Facultatea de Medicină Dentară, UMF Carol Davila",
      publisher: "ResearchGate",
      year: "2026",
      url: "https://www.researchgate.net/profile/Sergiu-Drafta",
    },
    {
      id: "linkedin",
      label: "Profil profesional",
      publisher: "LinkedIn",
      year: "2026",
      url: "https://www.linkedin.com/in/sergiudrafta/",
    },
  ],
  sameAs: [
    "https://www.linkedin.com/in/sergiudrafta/",
    "https://www.researchgate.net/profile/Sergiu-Drafta",
  ],
  verify: [
    "Calitatea de membru în consiliul facultății sau în orice alt organism de conducere al UMF Carol Davila. Clientul a menționat-o, dar sursele publice găsite arată doar un CV depus la alegerile pentru consiliu 2020-2024, ceea ce nu dovedește mandatul. Afirmația a fost lăsată în afara paginii.",
    "Anul absolvirii și anul doctoratului. CV-ul de pe site-ul UMFCD nu a putut fi citit automat.",
    "Rezultatul susținerii tezei de abilitare din 9 ianuarie 2026, dacă titlul s-a schimbat între timp.",
    "Numărul de lucrări și citări se schimbă în timp. De reconfirmat sau de scos.",
    "Competențe și atestate oficiale, număr CMDR.",
  ],
};

const andrei: Doctor = {
  slug: "dr-andrei-drafta",
  name: "Andrei Drafta",
  prefix: "Dr.",
  jobTitle: "Medic stomatolog",
  seniority: "medic",
  role: "Stomatologie restauratoare, implantologie digitală și estetică",
  short:
    "Absolvent al aceleiași facultăți, Carol Davila. Aduce în cabinet metodele digitale: scanare intraorală, manopere restauratoare, implantologie digitală și estetică. Este un medic hotărât să ajungă la un bun rezultat, indiferent de timpul petrecut lucrând.",
  title: "Cine este Dr. Andrei Drafta?",
  metaTitle: "Dr. Andrei Drafta, medic stomatolog",
  metaDescription:
    "Medic stomatolog la Drafta dental, absolvent de Carol Davila, cu practică orientată spre manopere restauratoare, implantologie digitală și estetică.",
  answer:
    "Dr. Andrei Drafta este medic stomatolog la Drafta dental, absolvent al Facultății de Medicină Dentară din cadrul UMF Carol Davila, aceeași universitate ca medicul senior al cabinetului. Aduce în cabinet metodele digitale: scanare intraorală în locul amprentei clasice, planificare pe computer și simulare a rezultatului înainte de a începe tratamentul. Se ocupă de manopere restauratoare, implantologie digitală și estetică. Este un medic hotărât să ajungă la un bun rezultat, indiferent de timpul petrecut lucrând.",
  image: "/photos/dr-andrei-drafta.jpg",
  imageAlt: "Dr. Andrei Drafta, medic stomatolog la Drafta dental",
  imageCaption: "portret: Dr. Andrei Drafta",
  keyTakeaways: [
    "Dr. Andrei Drafta este absolvent al Facultății de Medicină Dentară, UMF Carol Davila, București, aceeași facultate ca medicul senior al cabinetului.",
    "Aduce în cabinet metodele învățate în formarea recentă: scanare intraorală, planificare digitală și simulare înainte de tratament.",
    "Se ocupă de manopere restauratoare, de implantologie digitală și de estetică dentară.",
    "Lucrează în aceeași echipă cu Dr. Sergiu Drafta, ceea ce permite ca un caz complex să fie discutat între cei doi medici fără trimiteri în afara cabinetului.",
    "Cabinetul folosește scanare intraorală în locul amprentei clasice pentru majoritatea lucrărilor.",
  ],
  credentials: [
    { label: "Studii", value: "Facultatea de Medicină Dentară, UMF Carol Davila" },
  ],
  focus: [
    "Manopere restauratoare",
    "Implantologie digitală",
    "Estetică dentară",
    "Scanare intraorală și planificare digitală",
  ],
  sections: [
    {
      id: "ce-trateaza",
      heading: "Ce tipuri de cazuri tratează?",
      blocks: [
        {
          kind: "p",
          text: "Manopere restauratoare, implantologie digitală și estetică dentară. Partea digitală înseamnă scanare intraorală în locul amprentei clasice și planificare pe computer, inclusiv pentru implanturi.",
        },
        {
          kind: "p",
          text: "Se ocupă și de partea digitală: scanarea intraorală care înlocuiește amprenta clasică, planificarea pe computer și simularea rezultatului înainte de a începe tratamentul.",
        },
      ],
    },
    {
      id: "perspectiva",
      heading: "Ce aduce nou în cabinet?",
      blocks: [
        {
          kind: "p",
          text: "Formarea recentă înseamnă că metodele digitale nu sunt un adaos peste un mod vechi de a lucra, ci felul în care a învățat de la început. Scanarea intraorală înlocuiește amprenta clasică, cea cu materialul care se întărește în gură. Planul de tratament se construiește pe computer, iar pacientul vede simularea rezultatului înainte să se atingă un dinte.",
        },
        {
          kind: "p",
          text: "Combinația funcționează în ambele sensuri: cazurile complexe beneficiază de experiența medicului senior, iar partea digitală a cabinetului este ținută la zi.",
        },
      ],
    },
    {
      id: "doi-medici",
      heading: "De ce contează că sunt doi medici în cabinet?",
      blocks: [
        {
          kind: "p",
          text: "Pentru că un caz care începe ca o consultație de rutină și se dovedește complicat nu iese din cabinet. Este discutat între cei doi medici, iar pacientul rămâne cu aceeași echipă de la prima radiografie până la ultimul control.",
        },
        {
          kind: "table",
          caption: "Cine se ocupă de ce, în cabinet",
          head: ["Situație", "Medic"],
          rows: [
            ["Prima consultație și plan de tratament", "Dr. Andrei Drafta"],
            ["Manopere restauratoare", "Dr. Andrei Drafta"],
            ["Implantologie digitală și estetică", "Dr. Andrei Drafta"],
            ["Scanare intraorală și planificare digitală", "Dr. Andrei Drafta"],
            ["Protetică fixă: coroane, punți, fațete", "Dr. Sergiu Drafta"],
            ["Reabilitări protetice pe implanturi", "Dr. Sergiu Drafta"],
            ["Probleme de ocluzie", "Dr. Sergiu Drafta"],
          ],
        },
      ],
    },
  ],
  faq: [
    {
      q: "Ce tratamente face Dr. Andrei Drafta?",
      a: "Consultații, controale periodice, igienizare profesională, obturații și urgențe. Se ocupă și de scanarea intraorală și de planificarea digitală a cazurilor.",
    },
    {
      q: "Unde a studiat Dr. Andrei Drafta?",
      a: "La Facultatea de Medicină Dentară a Universității de Medicină și Farmacie Carol Davila din București.",
    },
    {
      q: "La care dintre medici este mai bine să mă programez?",
      a: "Pentru prima vizită, la oricare. Consultația stabilește ce este necesar, iar dacă situația cere protetică sau implanturi, cazul este preluat împreună cu Dr. Sergiu Drafta, în același cabinet.",
    },
  ],
  sources: [],
  sameAs: [],
  verify: [
    "Tot ce ține de Dr. Andrei Drafta este neverificat public. Nu există profil profesional găsibil online la data scrierii.",
    "Anul absolvirii, competențele, atestatele, numărul CMDR.",
    "Repartizarea reală a tratamentelor între cei doi medici. Tabelul este o presupunere logică, nu o informație confirmată de cabinet.",
    "Dacă formularea despre fluxul digital corespunde realității din cabinet: scanare intraorală, planificare pe computer, simulare înainte de tratament.",
    "Poziționarea „aduce metodele noi\" vine de la client, nu este o calificare verificabilă. De reformulat împreună cu cabinetul.",
  ],
};

export const doctors: Doctor[] = [sergiu, andrei];

export function getDoctor(slug: string) {
  return doctors.find((d) => d.slug === slug);
}
