import { doctors } from "./doctors";

/**
 * Toate textele paginii, într-un singur loc.
 *
 * ⚠️ PLACEHOLDER — de înlocuit înainte de lansare (vezi README-ul de handoff):
 *   • e-mail (telefonul și programul sunt reale, preluate de pe site-ul Wix al cabinetului)
 *   • numele și biografiile medicilor
 * Câmpurile marcate cu TODO_PLACEHOLDER sunt inventate.
 */

export const practice = {
  name: "Drafta dental",
  /** Real, de pe site-ul Wix al cabinetului. */
  phone: "0787 585 555",
  phoneHref: "tel:+40787585555",
  /** Format internațional, doar cifre, pentru linkul wa.me. */
  whatsapp: "40787585555",
  /** Real, de pe site-ul Wix al cabinetului. */
  email: "draftaa@gmail.com",
  /** Adresă reală, dată de client. */
  address: {
    street: "Strada Justinian 10",
    locality: "Sector 2, București",
    postalCode: "020102",
    country: "RO",
  },
  /** Real, de pe site-ul Wix al cabinetului. */
  hours: "Luni – vineri: 10:00 – 19:00 · Sâmbătă: 10:00 – 14:00",
  url: "https://www.draftadental.ro",
} as const;

export const nav = [
  { label: "Despre noi", href: "/despre-noi" },
  { label: "Servicii", href: "/servicii" },
  { label: "Medici", href: "/medici" },
  { label: "Locație", href: "/#locatie" },
  { label: "Blog", href: "/blog" },
  { label: "Întrebări", href: "/#faq" },
] as const;

export const hero = {
  titleBefore: "Stomatologia ",
  titleAccent: "regândită",
  titleAfter: ".",
  sub: "Reînnoim complet experiența de a merge la dentist și creăm o atmosferă prietenoasă, unde fiecare pacient este tratat după cele mai moderne standarde.",
  ctaPrimary: "Programează-te",
  imageCaption: "foto stock lată: interiorul cabinetului",
  image: "/photos/cabinet-principal.jpg",
  imageAlt: "Medic stomatolog stând de vorbă cu o pacientă în cabinetul Drafta dental",
} as const;

export const about = {
  eyebrow: "Despre noi",
  title: "Suntem o familie de perfecționiști.",
  body: "Căutăm să îmbinăm performanța cu empatia, încercând să creăm o atmosferă prietenoasă, deschisă și fără stres, care să îți permită să fii proactiv în ceea ce privește sănătatea ta orală. Ne-am gândit la fiecare detaliu al vizitei tale, pentru ca tu să nu trebuiască să o faci. Vom munci din greu, dar vrem să pară fără efort.",
  bullets: [
    "Un cabinet de familie, cu o poveste care începe în anul 2000.",
    "Aparatură modernă, de la lasere stomatologice la scanare 3D.",
    "Un ambient prietenos, unde nu ești tratat ca o simplă cifră.",
  ],
  imageCaption: "foto: pacientă și medic, discuție",
  image: "/photos/despre-radiografie.webp",
  imageAlt: "Medic arătând unei paciente radiografiile dentare",
} as const;

export const services = {
  title: "Servicii",
  sub: "Toate tratamentele într-un singur cabinet, cu aceeași echipă.",
  cta: {
    title: "Nu știi de ce ai nevoie?",
    body: "Vino la o consultație. Îți spunem ce e urgent, ce poate aștepta și ce nu e nevoie să faci.",
    label: "Programează-te",
  },
} as const;

export const location = {
  eyebrow: "Locația noastră",
  title: "Aflată în centrul Bucureștiului.",
  body: "Cabinetul nostru poate fi accesat foarte ușor prin stația de metrou Ștefan cel Mare / Piața Romană sau cu alte forme de transport în comun.",
  cta: "Programează-te",
  imageCaption: "foto / hartă: intrarea din Strada Justinian",
  image: "/photos/cabinet.webp",
  imageAlt: "Cabinetul de tratament din Strada Justinian 10",
} as const;

/**
 * Secțiunea Echipa de pe pagina de acasă.
 *
 * Datele medicilor NU se mai scriu aici. Sursa unică este
 * src/content/doctors.ts, ca pagina de acasă, /medici și paginile
 * individuale să nu se contrazică. Ordinea urmează vechimea: medicul senior
 * primul.
 */
export const team = {
  title: "Echipa",
  sub: "Un cabinet de familie: doi medici, o singură echipă.",
  members: [...doctors]
    .sort((a, b) => (a.seniority === "senior" ? -1 : b.seniority === "senior" ? 1 : 0))
    .map((d) => ({
      slug: d.slug,
      name: `${d.prefix} ${d.name}`,
      specialty: d.role,
      bio: d.short,
      imageCaption: d.imageCaption,
      image: d.image,
      imageAlt: d.imageAlt,
    })),
};

/**
 * Cele patru domenii de pe pagina de start Wix. Cardurile vin din
 * `serviceCategories` (src/content/services.ts); aici e doar titlul secțiunii.
 */
export const otherServices = {
  title: "Domeniile noastre",
  sub: "Patru direcții, într-un singur cabinet.",
} as const;

export const faq = {
  title: "Întrebări frecvente",
  items: [
    {
      q: "Unde se află cabinetul Drafta dental?",
      a: "Pe Strada Justinian nr. 10, Sector 2, București. Aflat în centrul Bucureștiului, cabinetul nostru poate fi accesat foarte ușor prin stația de metrou Ștefan cel Mare / Piața Romană sau cu alte forme de transport în comun.",
    },
    {
      q: "Ce servicii oferiți?",
      a: "Consultație și igienizare, albire dentară, fațete de compozit și ceramice, coroane și punți dentare, inlay-uri și onlay-uri, tratamente de canal și implanturi dentare. Prețul de pornire al fiecărui tratament este pe pagina lui, în secțiunea Servicii.",
    },
    {
      q: "Cât costă un tratament?",
      a: "Fiecare serviciu are prețul de pornire afișat pe pagina lui: consultația și igienizarea costă de la 300 lei, iar albirea dentară de la 950 lei. Costul exact îl afli la consultație, în funcție de situația ta.",
    },
    {
      q: "Primiți pacienți noi?",
      a: `Da. Ne poți scrie pe WhatsApp, cu mesajul deja pregătit, sau ne poți suna la ${practice.phone}.`,
    },
    {
      q: "Care este programul cabinetului?",
      a: "Luni până vineri între 10:00 și 19:00, iar sâmbăta între 10:00 și 14:00. Duminica cabinetul este închis.",
    },
    {
      q: "Prin ce sunteți diferiți de alte cabinete?",
      a: "Suntem un cabinet de familie, iar povestea noastră datează din anul 2000, cu prima locație. De atunci, cabinetul a evoluat și este dotat cu aparatură modernă, dar reușește (zicem noi) să păstreze ambientul prietenos, unde nu ești tratat ca o simplă cifră.",
    },
  ],
};

export const booking = {
  title: "Scrie-ne pe WhatsApp.",
  body: "Cel mai simplu e pe WhatsApp: mesajul e deja scris, tu doar îl trimiți. Sau sună direct, în programul cabinetului.",
  whatsapp: "Scrie pe WhatsApp",
  /** Textul care apare deja scris în conversație. */
  whatsappMessage:
    "Bună ziua! Aș dori mai multe detalii pentru programarea unui consult în cabinet.",
  call: "Sună",
  numberLabel: "Numărul cabinetului",
  copy: "Copiază numărul",
  copied: "Număr copiat",
  hoursLabel: "Program:",
} as const;

export const footer = {
  columns: [
    {
      label: "Servicii",
      links: [
        { label: "Consultație și igienizare", href: "/servicii/consultatie-si-igienizare" },
        { label: "Albire dentară", href: "/servicii/albire-dentara" },
        { label: "Fațete ceramice", href: "/servicii/fatete-ceramice" },
        { label: "Implanturi dentare", href: "/servicii/implanturi-dentare" },
        { label: "Toate serviciile", href: "/servicii" },
      ],
    },
    {
      label: "Cabinet",
      links: [
        { label: "Despre noi", href: "/despre-noi" },
        { label: "Medici", href: "/medici" },
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
