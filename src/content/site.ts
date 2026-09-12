/**
 * Toate textele paginii, într-un singur loc.
 *
 * ⚠️ PLACEHOLDER — de înlocuit înainte de lansare (vezi README-ul de handoff):
 *   • adresă, telefon, e-mail, program
 *   • „Peste 600 de recenzii", „Peste 900 de implanturi", „din 2016", „Garanție 10 ani"
 *   • numele și biografiile medicilor
 *   • toate cele trei recenzii (de preluat din Google, cu acordul pacienților)
 * Câmpurile marcate cu TODO_PLACEHOLDER sunt inventate.
 */

export const practice = {
  name: "Drafta dental",
  /** TODO_PLACEHOLDER */
  phone: "0721 000 128",
  /** TODO_PLACEHOLDER */
  phoneHref: "tel:+40721000128",
  /** TODO_PLACEHOLDER */
  email: "programari@draftadental.ro",
  /**
   * Adresă reală, dată de client.
   *
   * ⚠️ Restul textelor încă spun „Dorobanți" / „la cinci minute de Piața
   * Victoriei" — au rămas din prototip, când adresa era Calea Dorobanților 128.
   * Strada Justinian 10 este în Sector 2, lângă Piața Romană, deci aceste
   * afirmații trebuie rescrise de cabinet: hero.sub, location.title,
   * team.members[0].bio, faq (răspunsul despre locație) și `description` din
   * src/app/layout.tsx.
   */
  address: {
    street: "Strada Justinian 10",
    locality: "Sector 2, București",
    postalCode: "020102",
    country: "RO",
  },
  /** TODO_PLACEHOLDER */
  hours: "Luni – vineri: 09:00 – 20:00 · Sâmbătă: 09:00 – 15:00",
  url: "https://www.draftadental.ro",
} as const;

export const nav = [
  { label: "Despre noi", href: "/despre-noi" },
  { label: "Servicii", href: "/#servicii" },
  { label: "Locație", href: "/#locatie" },
  { label: "Blog", href: "/blog" },
  { label: "Întrebări", href: "/#faq" },
] as const;

export const hero = {
  titleBefore: "O experiență dentară ",
  titleAccent: "mai bună",
  titleAfter: ", prin grijă și claritate.",
  sub: "Stomatologie modernă, fără reproșuri și fără grabă, în Dorobanți. Aligneri, albire, implanturi și urgențe, cu programare în aceeași zi.",
  ctaPrimary: "Programare online",
  /** TODO_PLACEHOLDER — cifră inventată */
  rating: "Peste 600 de recenzii de 5 stele",
  imageCaption: "foto stock lată: interiorul cabinetului",
  image: "/photos/cabinet-principal.jpg",
  imageAlt: "Medic stomatolog stând de vorbă cu o pacientă în cabinetul Drafta dental",
} as const;

export const about = {
  eyebrow: "Despre noi",
  title: "Cabinetul în care nimeni nu vă face morală.",
  body: "Dacă nu ați mai fost la dentist de cinci ani, ne spuneți și mergem înainte. Vă arătăm radiografiile pe ecran, vă explicăm ce vedem și vă dăm planul în scris, cu preț fix, înainte să atingem un dinte.",
  bullets: [
    "Consultație de 45 de minute, nu de zece.",
    "Același medic de la prima vizită la ultimul control.",
    "Plată în rate, fără dobândă, până în 12 luni.",
  ],
  imageCaption: "foto: pacientă și medic, discuție",
  image: "/photos/despre-radiografie.webp",
  imageAlt: "Medic arătând unei paciente radiografiile dentare",
} as const;

export const services = {
  title: "Ce facem",
  sub: "Toate tratamentele într-un singur cabinet, cu aceeași echipă.",
  items: [
    {
      title: "Igienizare și control",
      body: "Detartraj, air-flow și periaj profesional. O ședință de 50 de minute, la șase luni.",
      imageCaption: "foto: igienizare",
      image: "/photos/igienizare.jpg",
      imageAlt: "Detartraj profesional în cabinet",
    },
    {
      title: "Albire și fațete",
      body: "Albire în cabinet într-o singură vizită, fațete ceramice cu simulare digitală înainte.",
      imageCaption: "foto: albire",
      image: "/photos/albire.jpg",
      imageAlt: "Zâmbet după albire dentară",
    },
    {
      title: "Aligneri și aparate",
      body: "Scanare intraorală, fără amprentă clasică. Vedeți rezultatul simulat de la prima vizită.",
      imageCaption: "foto: aligneri",
      image: "/photos/aligneri.jpg",
      imageAlt: "Aligneri transparenți ținuți în mână",
    },
    {
      /** TODO_PLACEHOLDER — „Garanție 10 ani" nu este confirmată */
      title: "Implanturi",
      body: "Planificare pe CT 3D, chirurgie ghidată și coroana finală, tot aici. Garanție 10 ani.",
      imageCaption: "foto: implant",
      image: "/photos/implanturi.jpg",
      imageAlt: "Model de implant dentar",
    },
    {
      title: "Urgențe",
      body: "Ținem două intervale libere zilnic. Sunați până la 17:00 și vă vedem în aceeași zi.",
      imageCaption: "foto: urgență",
      image: "/photos/urgente.jpg",
      imageAlt: "Intervenție stomatologică de urgență",
    },
  ],
  cta: {
    title: "Nu știți de ce aveți nevoie?",
    body: "Veniți la consultație. Vă spunem ce e urgent, ce poate aștepta și ce nu e nevoie să faceți.",
    label: "Programează consultația",
  },
} as const;

export const location = {
  eyebrow: "Locație",
  title: "Un singur cabinet, în Dorobanți.",
  body: "La cinci minute de Piața Victoriei. Intrare din curte, parcare pentru pacienți, acces pentru cărucior.",
  cta: "Vino la noi",
  imageCaption: "foto / hartă: intrarea din Strada Justinian",
  image: "/photos/cabinet.webp",
  imageAlt: "Cabinetul de tratament din Strada Justinian 10",
} as const;

/** Un medic din secțiunea Echipa. `image` lipsește cât timp nu avem portretul. */
export type TeamMember = {
  name: string;
  specialty: string;
  bio: string;
  /** Ce fotografie trebuie pusă aici, afișat în placeholder. */
  imageCaption: string;
  image?: string;
  imageAlt: string;
};

export const team: { title: string; sub: string; members: TeamMember[] } = {
  title: "Medicii dumneavoastră",
  sub: "Doi medici, o echipă. Îi cunoașteți pe amândoi de la prima vizită.",
  /**
   * Numele sunt REALE (date de client).
   *
   * ⚠️ `specialty` și `bio` sunt însă în continuare textele inventate din
   * prototip, iar acum stau lângă numele unor persoane reale — inclusiv cifre
   * („Peste 900 de implanturi puse") și afirmații („fondator", „din 2016") pe
   * care nu le-a confirmat nimeni. De cerut varianta corectă de la cabinet
   * înainte de a scoate `noindex`. Aceleași date ajung și în JSON-LD
   * (`src/lib/jsonld.ts`, câmpul `employee`).
   *
   * Portretele sunt cele primite de la cabinet (originalele în foto-client/).
   * Sunt însă mici — 447x447 și 200x200 — pentru un slot 4:5 afișat la ~440px,
   * deci apar neclare pe ecrane retina. De cerut originalele.
   */
  members: [
    {
      name: "Dr. Andrei Drafta",
      /** TODO_PLACEHOLDER — de confirmat */
      specialty: "Protetică și estetică dentară · fondator",
      /** TODO_PLACEHOLDER — de confirmat */
      bio: "Fațete, coroane și reabilitări complete. Conduce cabinetul din Dorobanți de la deschidere, în 2016.",
      imageCaption: "portret: Dr. Andrei Drafta",
      image: "/photos/medic-andrei-drafta.jpg",
      imageAlt: "Dr. Andrei Drafta, medic stomatolog la Drafta dental",
    },
    {
      name: "Dr. Sergiu Drafta",
      /** TODO_PLACEHOLDER — de confirmat */
      specialty: "Implantologie și chirurgie orală",
      /** TODO_PLACEHOLDER — de confirmat */
      bio: "Implanturi, extracții și adiții osoase, cu chirurgie ghidată digital. Peste 900 de implanturi puse.",
      imageCaption: "portret: Dr. Sergiu Drafta",
      image: "/photos/medic-sergiu-drafta.jpg",
      imageAlt: "Dr. Sergiu Drafta, medic stomatolog la Drafta dental",
    },
  ],
};

export const reviews = {
  title: "Ce spun pacienții",
  /** TODO_PLACEHOLDER — toate cele trei recenzii sunt inventate */
  items: [
    {
      quote:
        "Mi s-a explicat fiecare pas înainte să fie făcut, iar tratamentul a costat exact cât scria pe hârtie.",
      name: "Cristina M.",
      meta: "pacientă din 2021",
    },
    {
      quote:
        "Am venit cu o urgență sâmbătă dimineață. M-au luat în 20 de minute și am plecat cu problema rezolvată.",
      name: "Alexandru T.",
      meta: "pacient din 2023",
    },
    {
      quote:
        "Trei implanturi în opt luni, același medic de la prima radiografie până la coroane. Zero surprize la plată.",
      name: "Dan V.",
      meta: "pacient din 2022",
    },
  ],
} as const;

export const otherServices = {
  title: "Alte servicii dentare",
  sub: "De la tratamente de restaurare la estetică, vă acoperim.",
  items: [
    {
      title: "Obturații",
      body: "Plombe din compozit, potrivite pe culoarea dintelui. Fără amalgam.",
    },
    {
      title: "Extracții",
      body: "Inclusiv molari de minte incluși, cu anestezie și indicații clare după.",
    },
    {
      title: "Tratament de canal",
      body: "Endodonție sub microscop, de obicei într-o singură ședință.",
    },
    {
      title: "Parodontologie",
      body: "Detartraj subgingival și tratarea gingiilor care sângerează.",
    },
    {
      title: "Gutiere de bruxism",
      body: "Pentru scrâșnitul din somn, făcute pe amprenta dumneavoastră.",
    },
  ],
} as const;

export const faq = {
  title: "Întrebări frecvente",
  items: [
    {
      q: "Unde se află cabinetul Drafta dental?",
      a: "Pe Strada Justinian 10, 020102 București, la cinci minute de Piața Victoriei. Intrarea este din curte, iar pacienții pot parca acolo.",
    },
    {
      q: "Ce servicii oferiți?",
      a: "Igienizare și controale, albire și fațete, aligneri și aparate dentare, implanturi, obturații, tratamente de canal, extracții, parodontologie și urgențe. Totul în același cabinet.",
    },
    {
      q: "Cât costă un tratament și se poate plăti în rate?",
      a: "Prețul total îl primiți în scris după consultație, înainte de prima procedură. Tratamentele mari se pot plăti în rate fără dobândă, până în 12 luni.",
    },
    {
      q: "Primiți pacienți noi?",
      a: "Da. Prima vizită este o consultație de 45 de minute, cu scanare și radiografii. Sunați sau completați formularul și vă răspundem în aceeași zi lucrătoare.",
    },
    {
      q: "Ce faceți dacă am o urgență azi?",
      a: "Ținem două intervale libere în fiecare zi pentru urgențe. Dacă sunați până la ora 17:00, vă vedem în aceeași zi.",
    },
    {
      q: "Prin ce sunteți diferiți de alte cabinete?",
      a: "Consultație de 45 de minute, plan de tratament scris cu preț fix și același medic de la prima vizită până la ultimul control. Nimeni nu vă face morală pentru cât timp a trecut de la ultima vizită.",
    },
  ],
} as const;

export const booking = {
  title: "Programați-vă în două minute.",
  bodyBefore:
    "Lăsați numărul și vă răspundem în aceeași zi lucrătoare cu două intervale libere. Sau sunați direct: ",
  submit: "Trimite cererea",
  gdpr: "Folosim datele doar pentru a vă contacta în legătură cu programarea.",
  success: "Am primit cererea. Vă sunăm în aceeași zi lucrătoare.",
  error: "Nu am putut trimite cererea. Încercați din nou sau sunați-ne.",
} as const;

export const footer = {
  columns: [
    {
      label: "Servicii",
      links: [
        { label: "Igienizare", href: "/#servicii" },
        { label: "Albire și fațete", href: "/#servicii" },
        { label: "Aligneri", href: "/#servicii" },
        { label: "Implanturi", href: "/#servicii" },
        { label: "Urgențe", href: "/#servicii" },
      ],
    },
    {
      label: "Cabinet",
      links: [
        { label: "Despre noi", href: "/despre-noi" },
        { label: "Blog", href: "/blog" },
        { label: "Întrebări frecvente", href: "/#faq" },
        { label: "Locație și program", href: "/#locatie" },
      ],
    },
  ],
  legal: [
    { label: "Confidențialitate", href: "/confidentialitate" },
    { label: "Termeni", href: "/termeni" },
  ],
  copyright: "© 2026 Drafta dental · București",
} as const;
