/**
 * Serviciile cabinetului, preluate de pe site-ul vechi (Wix):
 * https://draftaa.wixstudio.com/my-site-4
 *
 * Textele sunt ale cabinetului. Modificări față de original:
 *   • greșeli evidente corectate („durereos", „o cuspid fracturat"), iar
 *     „Dental Drafta" a devenit „Drafta dental";
 *   • liniile de pauză din text înlocuite cu virgulă sau două puncte;
 *   • unde Wix repeta același paragraf la două întrebări (Coroane, Tratament
 *     de canal), răspunsul apare o singură dată;
 *   • întrebările scurte („Ce sunt?") sunt scrise ca întrebări complete, ca să
 *     aibă sens și citite singure, de motoarele de căutare și asistenții AI.
 *
 * Prețuri: se afișează doar prețul minim, cu „de la". Unde Wix dădea un
 * interval (1000–2500 lei), rămâne capătul de jos. Pagina „Detartraj" de pe
 * Wix era goală, fără text și fără preț, deci nu apare aici.
 */

export type ServiceCategory =
  | "Îngrijire completă"
  | "Estetică"
  | "Restaurări"
  | "Implantologie";

export type Service = {
  slug: string;
  title: string;
  category: ServiceCategory;
  /** O frază, pentru carduri. */
  short: string;
  /** Paragrafele de deschidere ale paginii serviciului. */
  intro: readonly string[];
  faq: readonly { q: string; a: string }[];
  /** Prețul minim, în lei. */
  priceFrom: number;
  /** Unitatea, când prețul nu e per tratament. */
  priceUnit?: string;
  image: string;
  imageAlt: string;
};

/** Categoriile și descrierile lor, de pe pagina de start Wix. */
export const serviceCategories: readonly {
  id: string;
  name: ServiceCategory;
  body: string;
}[] = [
  {
    id: "ingrijire",
    name: "Îngrijire completă",
    body: "Igienizările regulate efectuate de echipa noastră vă pot ajuta să mențineți o sănătate orală excelentă pe tot parcursul vieții.",
  },
  {
    id: "estetica",
    name: "Estetică",
    body: "Crearea frumuseții naturale necesită o atenție mare la detaliile mici. Scopul nostru: să fim nedetectabili.",
  },
  {
    id: "restaurari",
    name: "Restaurări",
    body: "Cabinetul nostru este echipat cu aparatură modernă, de la lasere stomatologice la scanare 3D, pentru a face vizita dumneavoastră cât mai ușoară și lipsită de durere posibil!",
  },
  {
    id: "implantologie",
    name: "Implantologie",
    body: "Ai pierdut un dinte sau poate nu ar fi trebuit să fie acolo de la bun început? Te-ai gândit la implanturi?",
  },
];

export const serviceList: readonly Service[] = [
  {
    slug: "consultatie-si-igienizare",
    title: "Consultație și igienizare",
    category: "Îngrijire completă",
    short:
      "Igienizările dentare de rutină elimină bacteriile dăunătoare din cavitatea bucală.",
    intro: [
      "Acumularea plăcii și tartrului în jurul dinților și sub gingii poate provoca o serie de probleme dentare, precum carii, gingivită, pierderea osoasă, halitoză (respirație urât mirositoare) și, în cele din urmă, pierderea dinților.",
      "Igienizările dentare de rutină elimină bacteriile dăunătoare din cavitatea bucală și îți asigură o sănătate orală excepțională pe tot parcursul vieții.",
    ],
    faq: [
      {
        q: "Ce presupune o consultație cu igienizare?",
        a: "O programare pentru o consultație și o igienizare dentară ajută la curățarea dinților și a liniei gingivale de placă și tartru. Acest tratament oral previne cariile, gingivita, pierderea osoasă și respirația urât mirositoare. Se recomandă efectuarea acestuia de două ori pe an pentru a menține o sănătate dentară optimă. Examinările și igienizările dentare au atât un rol preventiv, cât și unul restaurativ.",
      },
      {
        q: "Cine ar trebui să își facă igienizări regulate?",
        a: "Toate persoanele ar trebui să efectueze examene și igienizări dentare regulate. Majoritatea pacienților ar trebui să își programeze o vizită la fiecare șase luni pentru a menține o igienă dentară optimă. Dacă experimentezi simptome precum respirație urât mirositoare, acumulare de placă, gingivită, disconfort sau carii dentare, este esențial să îți programezi o consultație cât mai curând posibil.",
      },
      {
        q: "Ce rezultate are o igienizare dentară?",
        a: "După această procedură, tartrul, roșeața și petele dentare vor fi dispărut complet. După examinarea și igienizarea dentară, este posibil să experimentezi efecte secundare ușoare și temporare, precum sângerare, inflamație, roșeață și disconfort. Deoarece aceste efecte sunt foarte ușoare, îți poți continua ziua în mod obișnuit.",
      },
    ],
    priceFrom: 300,
    image: "/photos/igienizare.jpg",
    imageAlt: "Examinare dentară cu oglindă și sondă",
  },
  {
    slug: "albire-dentara",
    title: "Albire dentară",
    category: "Estetică",
    short: "Soluții profesionale pentru a-ți reda strălucirea zâmbetului.",
    intro: [
      "Dinții galbeni îți dau bătăi de cap? Te înțeleg perfect. Poate ai fost barista ani de zile și cafeaua a devenit o parte din rutina ta, poate îți place să savurezi un pahar de vin roșu în weekend sau tocmai ai renunțat la fumat, dar petele de pe dinți îți amintesc zilnic de acest obicei.",
      "Hai să vorbim despre soluții profesionale pentru a-ți reda strălucirea zâmbetului. Este încă acolo, îți promit!",
    ],
    faq: [
      {
        q: "Ce este albirea dentară?",
        a: "Albirea dentară este o procedură destinată deschiderii nuanței dinților și îndepărtării petelor. De obicei, se realizează cu agenți de albire pe bază de peroxid.",
      },
      {
        q: "Este periculoasă albirea dentară?",
        a: "Albirea dentară profesională este realizată de un specialist bine pregătit și nu afectează smalțul dentar. Totuși, persoanele care au deja smalțul deteriorat s-ar putea să nu fie candidați ideali pentru această procedură.",
      },
      {
        q: "Cum decurge o ședință de albire dentară?",
        a: "La începutul ședinței de albire dentară, aplicăm o soluție pe bază de peroxid de hidrogen pe dinți. Aceasta trebuie să acționeze timp de 15 minute, apoi este îndepărtată. Procesul se repetă de 3-4 ori, iar la final se aplică un gel calmant pentru confortul pacientului.",
      },
    ],
    priceFrom: 950,
    image: "/photos/albire.jpg",
    imageAlt: "Zâmbet cu dinți albi, după albire dentară",
  },
  {
    slug: "fatete-de-compozit",
    title: "Fațete de compozit",
    category: "Estetică",
    short:
      "Disponibile în zeci de nuanțe, compozitele cosmetice imită aspectul natural al dinților.",
    intro: [
      "Obturațiile de culoarea dintelui au evoluat semnificativ și pot fi utilizate pentru a remodela, îmbunătăți estetic și restaura dinții frontali.",
      "Disponibile în zeci de nuanțe, compozitele cosmetice imită aspectul natural al dinților și permit o abordare conservatoare, de obicei fără a necesita reducerea structurii dentare.",
    ],
    faq: [
      {
        q: "Ce sunt fațetele de compozit?",
        a: "Fațetele de compozit sunt un tratament dentar estetic care utilizează straturi subțiri de rășină compozită de culoarea dintelui pentru a îmbunătăți aspectul acestuia. Compozitul este aplicat pe suprafața dintelui pentru a umple fisuri, repara dinți fracturați, închide spații și corecta decolorările.",
      },
      {
        q: "Pentru cine sunt potrivite fațetele de compozit?",
        a: "Fațetele de compozit sunt potrivite pentru persoanele care doresc să îmbunătățească aspectul zâmbetului prin corectarea decolorărilor dentare, remodelarea formei dinților, acoperirea fisurilor și fracturilor minore, reducerea spațiilor dintre dinți și îmbunătățirea alinierii acestora, fără a recurge la tratamente invazive.",
      },
      {
        q: "Cât durează fațetele de compozit?",
        a: "Fațetele de compozit sunt astăzi mai durabile decât în trecut, având o durată de viață medie de 5 până la 7 ani. După această perioadă, va fi necesară înlocuirea lor, spre deosebire de fațetele din porțelan, care pot dura cel puțin 10-15 ani.",
      },
    ],
    priceFrom: 650,
    priceUnit: "dinte",
    image: "/photos/fatete-compozit.jpg",
    imageAlt: "Instrument dentar care modelează suprafața dinților frontali",
  },
  {
    slug: "fatete-ceramice",
    title: "Fațete ceramice",
    category: "Estetică",
    short:
      "Cele mai bune fațete sunt cele care imită perfect aspectul natural al dinților.",
    intro: [
      "Cele mai bune fațete sunt cele care imită perfect aspectul natural al dinților. Ne specializăm în zâmbete care atrag atenția fără a părea artificiale: perfect imperfecte, exact ca un zâmbet natural.",
      "Dacă ai dinți prea mici, inegali, ciobiți sau cu pete închise la culoare, fațetele din porțelan pot fi o alegere excelentă pentru tine.",
    ],
    faq: [
      {
        q: "Ce sunt fațetele ceramice?",
        a: "Fațetele din porțelan sunt acoperiri subțiri, realizate la comandă, care se aplică pe dinți pentru a ascunde ciobiturile, petele, decolorările și alte imperfecțiuni. La Drafta dental ne asigurăm că vei primi fațete personalizate, adaptate perfect nevoilor tale.",
      },
      {
        q: "Pentru cine sunt potrivite fațetele ceramice?",
        a: "Cei mai buni candidați pentru fațetele din porțelan sunt cei care doresc să corecteze mai multe probleme estetice simultan, să elimine petele dentare, să evite obiceiuri care le pot deteriora (cum ar fi rosul unghiilor, bomboanelor tari sau obiectelor precum pixurile), au suficient smalț dentar, prezintă fisuri sau ciobituri minore, vor să acopere dinți cu formă inestetică și au o sănătate orală generală bună.",
      },
      {
        q: "Ce avantaje au fațetele ceramice?",
        a: "Fațetele dentare oferă multiple beneficii, fiind o soluție excelentă pentru îmbunătățirea esteticii zâmbetului. Acestea se integrează perfect cu dinții naturali pentru un aspect natural, rezistă mai bine la pete decât smalțul dentar, nu necesită îngrijire specială suplimentară și, cu o întreținere adecvată, pot avea o durată de viață de 10 până la 15 ani.",
      },
    ],
    priceFrom: 1700,
    priceUnit: "dinte",
    image: "/photos/fatete-ceramice.jpg",
    imageAlt: "Prim-plan cu un zâmbet cu dinți albi și uniformi",
  },
  {
    slug: "coroane-dentare",
    title: "Coroane dentare",
    category: "Restaurări",
    short:
      "Restaurări cu acoperire totală, pentru un dinte cu risc ridicat de fractură sau prea deteriorat pentru o obturație.",
    intro: [
      "Poate ai o obturație mare sau un dinte care a suferit un tratament endodontic. Poate că dintele tău este decolorat și vrei să îmbunătățești aspectul său, dar fațetele nu au fost alegerea potrivită pentru tine.",
      "Sau poate ai mușcat dintr-un sâmbure de măsline acum câteva luni și de atunci dintele nu mai pare la fel. Cred că a venit momentul să iei în considerare o coroană!",
    ],
    faq: [
      {
        q: "Ce sunt coroanele dentare și când sunt necesare?",
        a: "Coroanele sunt restaurări cu acoperire totală, utilizate pentru a proteja un dinte care prezintă un risc ridicat de fractură sau care este prea deteriorat pentru a fi reparat cu o obturație tradițională.",
      },
      {
        q: "Cum decurge procedura pentru o coroană dentară?",
        a: "Procedura pentru realizarea unei coroane dentare necesită, de obicei, două vizite la dentist. La prima vizită, dintele este pregătit și se ia o amprentă, care este trimisă la laborator pentru fabricarea coroanei. La a doua vizită, coroana este adaptată pe dinte și cimentată în poziție.",
      },
    ],
    priceFrom: 1000,
    image: "/photos/coroane.jpg",
    imageAlt: "Coroană dentară poziționată cu penseta pe un model de laborator",
  },
  {
    slug: "punti-dentare",
    title: "Punți dentare",
    category: "Restaurări",
    short:
      "Puntea dentară înlocuiește dinții lipsă și restabilește funcția masticatorie.",
    intro: [
      "Puntea dentară înlocuiește dinții lipsă, restabilind funcția masticatorie, îmbunătățind aspectul zâmbetului și contribuind la sănătatea orală.",
      "Aceasta este formată din coroane, care se fixează pe dinții naturali adiacenți, și dinți artificiali care „umplu golul” din dantură.",
    ],
    faq: [
      {
        q: "Ce este o punte dentară?",
        a: "Puntea dentară înlocuiește dinții lipsă, fie că este vorba de un singur dinte sau de un șir de dinți absenți. Așa cum sugerează numele, aceasta „umple golul” din zâmbet, iar medicul dentist poate crea punți personalizate care se potrivesc perfect cu nuanța dinților naturali.",
      },
      {
        q: "Cât durează o punte dentară?",
        a: "În medie, o punte dentară are o durată de viață cuprinsă între 5 și 15 ani, iar cu o îngrijire adecvată poate dura chiar mai mult. Medicii dentiști le numesc adesea „punți permanente” deoarece sunt greu de îndepărtat. Totuși, acestea nu sunt definitive și vor trebui înlocuite atunci când prezintă semne de uzură sau deteriorare.",
      },
      {
        q: "Se simte o punte dentară ca dinții naturali?",
        a: "Poate dura un timp până te obișnuiești cu noua ta punte dentară, dar odată ce te adaptezi, ar trebui să se simtă similar cu dinții naturali. Este ca atunci când porți un inel nou: la început îl simți, dar în timp devine parte din tine.",
      },
    ],
    priceFrom: 800,
    priceUnit: "dinte lipsă",
    image: "/photos/punti.jpg",
    imageAlt: "Modele dentare de laborator pentru lucrări protetice",
  },
  {
    slug: "inlay-uri-si-onlay-uri",
    title: "Inlay-uri și onlay-uri",
    category: "Restaurări",
    short:
      "Un tratament simplu și eficient, în unele cazuri o alternativă excelentă la o coroană completă.",
    intro: [
      "Dacă aveți o plombă mai mare sau poate o cuspidă fracturată, ar putea fi recomandat să luăm în considerare un inlay sau onlay din porțelan!",
      "Aceste restaurări reprezintă un tratament simplu și eficient și, în unele cazuri, pot fi o alternativă excelentă la o coroană dentară completă din porțelan.",
    ],
    faq: [
      {
        q: "Ce sunt inlay-urile și onlay-urile?",
        a: "Inlay-urile și onlay-urile sunt tipuri de obturații indirecte, ceea ce înseamnă că sunt realizate personalizat într-un laborator dentar și apoi cimentate pe dinte. Ambele sunt utilizate pentru a repara dinții care au fost afectați moderat de carii sau traumatisme, dar care nu necesită o coroană completă.",
      },
      {
        q: "Din ce materiale sunt făcute și cât rezistă?",
        a: "Inlay-urile și onlay-urile sunt fabricate, de obicei, din materiale de înaltă calitate, precum porțelan, rășină compozită sau aur. Aceste materiale nu sunt doar rezistente, ci și durabile, adesea având o durată de viață mai mare decât obturațiile tradiționale. Cu o îngrijire adecvată, inlay-urile și onlay-urile pot dura mulți ani, reducând necesitatea intervențiilor dentare viitoare.",
      },
      {
        q: "Ce avantaje au față de obturațiile tradiționale?",
        a: "Obturațiile tradiționale pot slăbi un dinte în timp, deoarece materialele utilizate nu oferă întotdeauna un suport optim pentru structura acestuia. În schimb, inlay-urile și onlay-urile sunt cimentate direct pe dinte, contribuind la întărirea și consolidarea lui. Acest suport suplimentar reduce riscul de fractură sau deteriorare în viitor.",
      },
    ],
    priceFrom: 1200,
    image: "/photos/inlay-onlay.jpg",
    imageAlt: "Medic stomatolog examinând o pacientă, cu scanarea dinților pe monitor",
  },
  {
    slug: "tratament-de-canal",
    title: "Tratament de canal",
    category: "Restaurări",
    short:
      "Tratamentul endodontic poate salva un dinte grav infectat sau afectat de carii.",
    intro: [
      "Tratamentul endodontic poate salva un dinte grav infectat sau afectat de carii. Atunci când este necesar un tratament de canal, prioritatea noastră este confortul pacientului.",
      "Oferim diverse opțiuni pentru gestionarea durerii, asigurând o experiență cât mai relaxantă.",
    ],
    faq: [
      {
        q: "Când este necesar un tratament de canal?",
        a: "Tratamentul de canal este necesar în cazul unui dinte fisurat din cauza unui traumatism sau a factorilor genetici, a unei carii profunde sau a unor probleme apărute după o obturație anterioară.",
      },
      {
        q: "Este dureros tratamentul de canal?",
        a: "Deoarece pacienții primesc anestezie, un tratament de canal nu este mai dureros decât o procedură dentară obișnuită, precum o obturație sau extracția unui molar de minte.",
      },
    ],
    priceFrom: 800,
    image: "/photos/tratament-canal.jpg",
    imageAlt: "Medic stomatolog tratând o pacientă în scaunul dentar",
  },
  {
    slug: "implanturi-dentare",
    title: "Implanturi dentare",
    category: "Implantologie",
    short:
      "Pivoți inserați în osul maxilar, care oferă un suport stabil dinților artificiali.",
    intro: [
      "Implanturile dentare sunt pivoți metalici inserați chirurgical în osul maxilar, sub gingie, pentru a oferi un suport stabil dinților artificiali. Persoanele care au pierdut os pot beneficia de implanturi, însă, în unele cazuri, este necesară o grefă osoasă înainte de procedură.",
      "Protezele și punțile fixate pe implanturi nu alunecă și nu se deplasează în cavitatea orală, oferind mai mult confort și încredere la masticație și vorbire. După inserarea implanturilor, sunt esențiale vizitele regulate la dentist pentru monitorizare.",
    ],
    faq: [
      {
        q: "Ce este un implant dentar?",
        a: "Un implant dentar este un șurub metalic utilizat pentru a înlocui rădăcina unui dinte pierdut. Acesta se fixează în osul maxilar, în locul unde se afla rădăcina dintelui lipsă, fiind de obicei realizat din titan. Implantul poate susține o punte, o coroană sau o proteză, iar în timp, osul crește în jurul acestuia, asigurând o fixare stabilă.",
      },
      {
        q: "Pentru cine sunt potrivite implanturile dentare?",
        a: "Dacă ai unul sau mai mulți dinți lipsă, un implant dentar ar putea fi o opțiune de luat în considerare. Totuși, nu toți pacienții sunt candidați potriviți pentru această procedură, iar medicul dentist va trebui să evalueze sănătatea osului maxilar, cantitatea de os disponibilă pentru susținerea implantului, eventualele afecțiuni medicale, tratamentele medicamentoase urmate și starea gingiilor.",
      },
      {
        q: "Cât durează implanturile dentare?",
        a: "Cu o igienă orală corespunzătoare și controale dentare regulate, implanturile dentare pot dura între 15 și 25 de ani sau chiar o viață întreagă. Longevitatea acestora depinde în mare măsură de starea generală de sănătate, igiena orală și stilul de viață al pacientului.",
      },
    ],
    priceFrom: 3000,
    image: "/photos/implanturi.jpg",
    imageAlt: "Model de implant dentar",
  },
];

export function getService(slug: string) {
  return serviceList.find((s) => s.slug === slug);
}

/** „de la 650 lei/dinte" — doar prețul minim, mereu cu „de la". */
export function priceLabel(s: Service) {
  return `de la ${s.priceFrom} lei${s.priceUnit ? `/${s.priceUnit}` : ""}`;
}

export function serviceDescription(s: Service) {
  return `${s.short} Preț ${priceLabel(s)}, la Drafta dental, Strada Justinian 10, București.`;
}
