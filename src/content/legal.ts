import { practice } from "./site";

/**
 * Operatorul de date și furnizorul serviciului, așa cum apare în registrul
 * ANAF (verificat pe 7 octombrie 2026 prin serviciul public PlatitorTvaRest):
 * „DR.DRAFTA SERGIU - MEDICINA DENTARA C M I”, CUI 32828657, înregistrat din
 * 24.02.2014, Str. Justinian nr. 10, Sector 2, București, CAEN 8690.
 *
 * Legea 365/2002, art. 5: site-ul trebuie să afișeze denumirea, adresa, codul
 * fiscal și datele de contact ale furnizorului. Apar în subsolul fiecărei pagini.
 */
export const legalEntity = {
  name: "Dr. Drafta Sergiu – Medicina Dentară C.M.I.",
  cui: "32828657",
  address: "Str. Justinian nr. 10, Sector 2, București",
} as const;

/** Data ultimei actualizări a celor două documente. */
export const legalUpdated = "2026-10-07";

export type LegalSection = {
  id: string;
  heading: string;
  paragraphs?: string[];
  items?: string[];
  after?: string[];
};

export type LegalDoc = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  sections: LegalSection[];
};

const operator = `${legalEntity.name}, CUI ${legalEntity.cui}, cu sediul în ${legalEntity.address}, care funcționează sub numele „${practice.name}”`;

export const privacy: LegalDoc = {
  slug: "confidentialitate",
  title: "Politica de confidențialitate",
  metaTitle: "Politica de confidențialitate | Dental Drafta",
  metaDescription:
    "Cum prelucrează Dental Drafta datele personale ale vizitatorilor site-ului și ale pacienților, conform GDPR: ce date, de ce, cât timp și ce drepturi aveți.",
  intro:
    "Această politică explică ce date personale prelucrăm, în ce scop, pe ce temei legal și ce drepturi aveți, conform Regulamentului (UE) 2016/679 (GDPR) și legislației române privind protecția datelor.",
  sections: [
    {
      id: "operator",
      heading: "Cine prelucrează datele",
      paragraphs: [
        `Operatorul datelor este ${operator}.`,
        `Pentru orice întrebare sau cerere privind datele personale ne puteți scrie la ${practice.email} sau ne puteți suna la ${practice.phone}.`,
      ],
    },
    {
      id: "site",
      heading: "Ce date colectează site-ul",
      paragraphs: [
        "Site-ul nu are formulare, conturi de utilizator sau plăți online și nu folosește instrumente de analiză a traficului sau de publicitate.",
        "Ca orice site, la fiecare vizită serverul primește automat date tehnice: adresa IP, tipul de browser, pagina cerută și momentul accesării. Aceste date sunt prelucrate de furnizorul de găzduire, Vercel Inc., pentru funcționarea și securitatea site-ului, pe temeiul interesului nostru legitim (art. 6 alin. 1 lit. f GDPR), și sunt păstrate o perioadă scurtă, conform politicii furnizorului.",
      ],
    },
    {
      id: "cookie",
      heading: "Cookie-uri",
      paragraphs: [
        "Site-ul nu plasează cookie-uri de analiză, de marketing sau de urmărire. Fonturile sunt găzduite pe site, nu încărcate de la terți. Dacă vom adăuga vreodată astfel de instrumente, vom cere consimțământul înainte și vom actualiza această politică.",
      ],
    },
    {
      id: "contact",
      heading: "Când ne contactați sau faceți o programare",
      paragraphs: [
        "Dacă ne sunați, ne scrieți pe e-mail sau pe WhatsApp, prelucrăm datele pe care ni le transmiteți: numele, numărul de telefon, adresa de e-mail și conținutul mesajului.",
      ],
      items: [
        "Scopul: să vă răspundem și să stabilim programarea.",
        "Temeiul: demersurile făcute la cererea dumneavoastră înainte de tratament (art. 6 alin. 1 lit. b GDPR).",
        "Durata: cât este necesar pentru programare și comunicare. Dacă deveniți pacient, datele trec în fișa medicală, unde se aplică regulile de mai jos.",
      ],
      after: [
        "Butonul de WhatsApp deschide aplicația WhatsApp, operată de WhatsApp Ireland Limited (Meta). Mesajele trimise acolo sunt prelucrate și conform politicii de confidențialitate a WhatsApp.",
      ],
    },
    {
      id: "pacienti",
      heading: "Datele pacienților",
      paragraphs: [
        "Pentru pacienții cabinetului prelucrăm datele de identificare și de contact, precum și date privind sănătatea: istoricul medical, investigațiile, radiografiile, planul de tratament și tratamentele efectuate.",
      ],
      items: [
        "Scopul: diagnosticul, tratamentul și urmărirea stării de sănătate orală.",
        "Temeiul: prestarea serviciilor medicale (art. 6 alin. 1 lit. b), obligațiile legale ale cabinetului privind documentația medicală (art. 6 alin. 1 lit. c) și, pentru datele privind sănătatea, art. 9 alin. 2 lit. h GDPR, adică furnizarea de îngrijiri medicale de către personal supus secretului profesional.",
        "Durata: perioada prevăzută de legislația medicală și de arhivare în vigoare pentru documentele medicale.",
        "Secretul profesional: medicii și personalul cabinetului respectă secretul medical, inclusiv după încheierea tratamentului.",
      ],
    },
    {
      id: "destinatari",
      heading: "Cui transmitem datele",
      paragraphs: [
        "Nu vindem și nu închiriem date personale. Le transmitem doar cât este necesar:",
      ],
      items: [
        "laboratoarelor de tehnică dentară și centrelor de imagistică, pentru realizarea lucrărilor și a investigațiilor;",
        "furnizorilor care ne susțin activitatea, de exemplu găzduirea site-ului, e-mailul sau contabilitatea, pe bază de contract și doar pentru serviciul respectiv;",
        "autorităților publice, atunci când legea ne obligă.",
      ],
      after: [
        "Unii furnizori, precum Vercel sau Meta, pot prelucra date în afara Spațiului Economic European. În aceste cazuri, transferul se face pe baza mecanismelor prevăzute de GDPR, cum sunt Cadrul UE–SUA privind confidențialitatea datelor sau clauzele contractuale standard.",
      ],
    },
    {
      id: "drepturi",
      heading: "Ce drepturi aveți",
      paragraphs: ["Conform GDPR, aveți dreptul:"],
      items: [
        "să aflați ce date prelucrăm despre dumneavoastră și să primiți o copie (dreptul de acces);",
        "să cereți corectarea datelor inexacte (dreptul la rectificare);",
        "să cereți ștergerea datelor, în limitele permise de obligațiile legale de păstrare a documentației medicale;",
        "să cereți restricționarea prelucrării;",
        "să primiți datele într-un format structurat sau să le transmitem altui medic (dreptul la portabilitate);",
        "să vă opuneți prelucrării bazate pe interesul legitim;",
        "să vă retrageți oricând consimțământul, acolo unde prelucrarea se bazează pe consimțământ.",
      ],
      after: [
        `Cererile se trimit la ${practice.email}. Răspundem în cel mult o lună de la primire, cum prevede art. 12 GDPR.`,
        "Dacă considerați că datele vă sunt prelucrate cu încălcarea legii, puteți depune o plângere la Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal (ANSPDCP), B-dul G-ral. Gheorghe Magheru nr. 28-30, Sector 1, București, www.dataprotection.ro.",
      ],
    },
    {
      id: "securitate",
      heading: "Cum protejăm datele",
      paragraphs: [
        "Site-ul folosește exclusiv conexiuni criptate (HTTPS). În cabinet, accesul la documentele medicale este limitat la personalul care are nevoie de ele pentru tratament.",
      ],
    },
    {
      id: "modificari",
      heading: "Modificări ale acestei politici",
      paragraphs: [
        "Putem actualiza această politică atunci când se schimbă modul în care prelucrăm datele sau legislația. Versiunea în vigoare este întotdeauna cea publicată pe această pagină, cu data ultimei actualizări.",
      ],
    },
  ],
};

export const terms: LegalDoc = {
  slug: "termeni",
  title: "Termeni și condiții",
  metaTitle: "Termeni și condiții | Dental Drafta",
  metaDescription:
    "Termenii de folosire a site-ului Dental Drafta: informații medicale, prețuri, programări, proprietate intelectuală și soluționarea reclamațiilor.",
  intro:
    "Folosind acest site, sunteți de acord cu termenii de mai jos. Vă rugăm să îi citiți împreună cu politica de confidențialitate.",
  sections: [
    {
      id: "furnizor",
      heading: "Cine suntem",
      paragraphs: [
        `Site-ul este administrat de ${operator}. Contact: ${practice.phone}, ${practice.email}.`,
      ],
    },
    {
      id: "scop",
      heading: "Scopul site-ului",
      paragraphs: [
        "Site-ul prezintă cabinetul, medicii, serviciile și prețurile de pornire și publică articole informative despre stomatologie. Prin site nu se pot face comenzi sau plăți. Programările se fac la telefon, pe WhatsApp sau pe e-mail.",
      ],
    },
    {
      id: "medical",
      heading: "Informațiile medicale",
      paragraphs: [
        "Articolele și descrierile tratamentelor au caracter informativ și sunt scrise de medicii cabinetului, cu trimitere la sursele științifice citate. Ele nu înlocuiesc consultația: diagnosticul și planul de tratament se stabilesc doar după examinarea clinică și investigațiile necesare.",
        "Dacă aveți o urgență medicală, sunați la 112.",
      ],
    },
    {
      id: "preturi",
      heading: "Prețurile",
      paragraphs: [
        "Prețurile afișate sunt prețuri de pornire, cu titlu orientativ. Costul final depinde de situația clinică și se comunică în planul de tratament, după consultație, înainte de începerea tratamentului. Prețurile pot fi actualizate fără notificare prealabilă; se aplică prețul comunicat în planul de tratament acceptat.",
      ],
    },
    {
      id: "programari",
      heading: "Programările",
      paragraphs: [
        "O programare este confirmată după ce cabinetul o stabilește împreună cu dumneavoastră. Dacă nu puteți ajunge, vă rugăm să ne anunțați cât mai devreme, ca intervalul să poată fi oferit altui pacient.",
      ],
    },
    {
      id: "proprietate",
      heading: "Proprietatea intelectuală",
      paragraphs: [
        "Textele, numele și logo-ul Dental Drafta aparțin cabinetului. Pot fi citate cu menționarea sursei și cu link către pagina originală, dar nu pot fi reproduse integral sau folosite comercial fără acord scris.",
        "Unele fotografii sunt preluate din biblioteci cu licență liberă (Unsplash, Pexels, Wikimedia Commons) și se folosesc conform licențelor lor; autorul și licența sunt menționate acolo unde licența o cere.",
      ],
    },
    {
      id: "linkuri",
      heading: "Linkuri către alte site-uri",
      paragraphs: [
        "Site-ul conține linkuri către alte site-uri, de exemplu sursele științifice ale articolelor sau WhatsApp. Nu răspundem pentru conținutul sau politicile acelor site-uri.",
      ],
    },
    {
      id: "raspundere",
      heading: "Răspunderea",
      paragraphs: [
        "Facem eforturi ca informațiile de pe site să fie corecte și actualizate, dar nu putem garanta că sunt complete în orice moment. Nu răspundem pentru decizii luate doar pe baza informațiilor de pe site, fără consultație.",
      ],
    },
    {
      id: "reclamatii",
      heading: "Reclamații și soluționarea litigiilor",
      paragraphs: [
        `Dacă nu sunteți mulțumit de un serviciu, vă rugăm să ne scrieți întâi la ${practice.email}, ca să putem rezolva situația direct.`,
      ],
      items: [
        "Pentru soluționarea alternativă a litigiilor (SAL), vă puteți adresa Autorității Naționale pentru Protecția Consumatorilor, pe platforma https://reclamatiisal.anpc.ro.",
        "Pentru aspecte de etică și practică profesională stomatologică, vă puteți adresa Colegiului Medicilor Stomatologi din România.",
      ],
      after: [
        "Acești termeni sunt guvernați de legea română. Litigiile care nu se rezolvă pe cale amiabilă sunt de competența instanțelor din România.",
      ],
    },
    {
      id: "modificari",
      heading: "Modificări ale termenilor",
      paragraphs: [
        "Putem actualiza acești termeni. Versiunea în vigoare este întotdeauna cea publicată pe această pagină, cu data ultimei actualizări.",
      ],
    },
  ],
};

export const legalDocs = [privacy, terms];
