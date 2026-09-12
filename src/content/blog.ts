import type { Post } from "./blog-types";

/**
 * ⚠️ CONȚINUT DEMO. Articolul este scris pentru structură, nu pentru publicare.
 * Nu a trecut prin avizul unui medic. Nu se publică fără revizuire medicală.
 * Lista completă de [VERIFY] este în câmpul `verify` de mai jos.
 */
const implanturiBimaxilar: Post = {
  slug: "implanturi-ambele-arcade-aceeasi-sedinta",
  track: "retrieval",
  title: "Se pot pune implanturi pe ambele arcade în aceeași ședință?",
  metaTitle: "Implanturi pe ambele arcade în aceeași ședință?",
  metaDescription:
    "Când se rezolvă ambele arcade într-o singură intervenție, când se etapizează și ce diferență apare la ocluzie, durată și cost.",
  answer:
    "Da, în majoritatea cazurilor de edentație totală pe ambele arcade, intervenția simultană este varianta preferată. Pacientul trece printr-o singură vindecare, iar cele două lucrări provizorii se construiesc una în raport cu cealaltă, deci ocluzia iese corectă din prima zi. Se etapizează atunci când starea generală de sănătate nu permite o intervenție lungă, când o arcadă are nevoie de reconstrucție osoasă, sau când pacientul preferă două intervenții scurte.",
  authorId: "andrei-drafta",
  datePublished: "2026-09-12",
  dateModified: "2026-09-12",
  categories: ["Implant dentar", "Chirurgie dentară", "Protetică dentară"],
  keyTakeaways: [
    "Reabilitarea pe ambele arcade în aceeași ședință presupune o singură perioadă de vindecare și un singur tratament medicamentos, în loc de două.",
    "Lucrările provizorii realizate simultan permit reglarea ocluziei între cele două arcade de la început, fără o referință care dispare la etapa următoare.",
    "Mandibula are os cortical mai dens decât maxilarul, care este predominant spongios, iar vindecarea la mandibulă este mai rapidă (Journal of Periodontal & Implant Science, 2014).",
    "Protocolul Brånemark clasic cerea 3 luni de vindecare la mandibulă și 6 luni la maxilar, iar suprafețele moderne pot scurta intervalul la 6 pana la 8 săptămâni când stabilitatea inițială este suficientă.",
    "Fumatul scade rata de succes a implanturilor la aproximativ 85 la sută, față de peste 95 la sută la nefumători (ITI Academy).",
    "Tratamentul cu bifosfonați nu este o contraindicație absolută pentru implanturi, dar cere protocol și profilaxie adaptate (BMC Oral Health, 2022).",
  ],
  sections: [
    {
      id: "ce-inseamna",
      heading: "Ce înseamnă o reabilitare pe ambele arcade?",
      blocks: [
        {
          kind: "p",
          text: "Înseamnă refacerea arcadei superioare și a celei inferioare pe implanturi, la pacienții fără dinți sau cu dinți care nu mai pot fi păstrați pe niciuna dintre arcade.",
        },
        {
          kind: "p",
          text: "Se folosesc de regulă protocoale cu patru sau șase implanturi pe arcadă. În protocolul All-on-4, două implanturi sunt verticale în zona anterioară și două sunt înclinate la 30 pana la 45 de grade în zona posterioară, pentru a evita structurile anatomice și a folosi osul disponibil.",
        },
        {
          kind: "p",
          text: "Numărul poate diferi între arcade. La mandibulă, unde osul este mai dens, patru implanturi sunt frecvent suficiente. La maxilar, unde osul este mai spongios și unde există sinusurile maxilare, se preferă adesea șase. Combinația șase sus și patru jos, adică zece în total, este una dintre cele mai des întâlnite.",
        },
      ],
    },
    {
      id: "de-ce-simultan",
      heading: "De ce se preferă intervenția simultană?",
      blocks: [
        {
          kind: "p",
          text: "Sunt trei motive, iar al doilea cântărește cel mai mult clinic, deși pacienții îl cunosc cel mai puțin.",
        },
        {
          kind: "p",
          text: "O singură vindecare. Orice intervenție presupune o perioadă de refacere a țesuturilor, tratament medicamentos și câteva zile de disconfort. Făcute odată, ambele arcade trec prin acest interval o singură dată. Etapizat, pacientul repetă tot ciclul: alimentație restrictivă, medicație, revenire la programul obișnuit.",
        },
        {
          kind: "p",
          text: "Ocluzia se construiește corect din prima zi. Când se reabilitează o singură arcadă, lucrarea provizorie se raportează la dinții existenți pe arcada opusă. Dacă acei dinți urmează să fie extrași la etapa următoare, referința dispare, iar ocluzia se reface de la zero. Realizate simultan, cele două lucrări provizorii se concep una în raport cu cealaltă, cu contacte distribuite pe toată suprafața. Asta reduce și riscul de fracturare a provizoriilor, care apare când forțele de masticație se concentrează în câteva puncte.",
        },
        {
          kind: "p",
          text: "Un singur calendar. Osteointegrarea se desfășoară în paralel pe ambele arcade, deci lucrările definitive se pot realiza în aceeași perioadă. Etapizat, calendarul se poate dubla.",
        },
        {
          kind: "takeaway",
          items: [
            "Argumentul decisiv pentru intervenția simultană este ocluzia, nu confortul: cele două lucrări provizorii se reglează una față de cealaltă.",
            "Etapizarea dublează perioadele de vindecare și poate dubla durata totală a tratamentului.",
          ],
        },
      ],
    },
    {
      id: "comparatie",
      heading: "Care este diferența concretă între simultan și etapizat?",
      blocks: [
        {
          kind: "table",
          caption:
            "Reabilitare bimaxilară simultană față de etapizată, pe criteriile care contează pentru pacient",
          head: ["Criteriu", "Simultan", "Etapizat"],
          rows: [
            ["Număr de intervenții chirurgicale", "1", "2"],
            ["Perioade de vindecare", "1", "2"],
            ["Serii de tratament medicamentos", "1", "2"],
            [
              "Reglarea ocluziei",
              "Cele două provizorii se construiesc una față de cealaltă",
              "Referința de pe arcada opusă dispare la etapa a doua",
            ],
            [
              "Durata până la lucrările definitive",
              "O singură osteointegrare, cele două arcade în paralel",
              "Două cicluri de osteointegrare, succesive",
            ],
            [
              "Deplasări pentru pacienții din alte localități",
              "Mai puține",
              "Aproximativ dublu",
            ],
            [
              "Cost total",
              "Mai mic. Anestezia, consumabilele și pregătirea sălii se consumă o singură dată",
              "Suma a două intervenții separate",
            ],
            [
              "Durata unei ședințe",
              "Mai lungă",
              "Mai scurtă, de două ori",
            ],
          ],
        },
      ],
    },
    {
      id: "vindecare",
      heading: "Cât durează vindecarea la maxilar față de mandibulă?",
      blocks: [
        {
          kind: "p",
          text: "Protocolul clasic descris de Brånemark cerea aproximativ 3 luni de vindecare pentru implanturile de la mandibulă și 6 luni pentru cele de la maxilar. Diferența vine din structura osului: mandibula conține os cortical mai dens, iar maxilarul os spongios, cu densitate mai mică.",
        },
        {
          kind: "p",
          text: "Un studiu radiologic comparativ pe șase săptămâni a măsurat o vindecare mai rapidă la mandibulă decât la maxilar, diferența fiind vizibilă mai ales în primele trei săptămâni (Journal of Periodontal & Implant Science, 2014).",
        },
        {
          kind: "p",
          text: "Cu suprafețele moderne de implant și cu stabilitate inițială suficientă, intervalul se poate scurta la 6 pana la 8 săptămâni pe ambele arcade. Valoarea concretă se stabilește în funcție de torque-ul obținut la inserare și de situația fiecărui caz, nu se promite dinainte.",
        },
        {
          kind: "table",
          caption: "Vindecare orientativă, pe arcadă",
          head: ["Arcadă", "Tip de os", "Protocol clasic", "Cu suprafețe moderne"],
          rows: [
            ["Mandibulă", "Predominant cortical, dens", "circa 3 luni", "6 pana la 8 săptămâni, dacă stabilitatea permite"],
            ["Maxilar", "Predominant spongios", "circa 6 luni", "6 pana la 8 săptămâni, dacă stabilitatea permite"],
          ],
        },
      ],
    },
    {
      id: "cand-nu",
      heading: "Când nu se recomandă intervenția simultană?",
      blocks: [
        {
          kind: "p",
          text: "Există situații în care etapizarea este alegerea corectă. Un plan de tratament serios le spune de la început.",
        },
        {
          kind: "ul",
          items: [
            "Când starea generală de sănătate nu permite o intervenție lungă. La pacienți cu afecțiuni cardiovasculare sau cu diabet dezechilibrat, medicul poate împărți tratamentul în două ședințe, uneori după consultarea medicului curant. Controlul glicemic slab este asociat cu risc crescut de infecție postoperatorie.",
            "Când o arcadă are nevoie de adiție osoasă sau de sinus lift, iar cealaltă permite inserarea imediată. Calendarele celor două arcade se despart atunci în mod natural.",
            "Când bugetul impune eșalonare. Se începe de regulă cu arcada care afectează cel mai mult masticația, iar planul rămâne deschis pentru etapa următoare.",
            "Când pacientul preferă două intervenții mai scurte. Este o opțiune validă, atât timp cât implicațiile asupra ocluziei și asupra duratei totale sunt înțelese.",
          ],
        },
        {
          kind: "p",
          text: "Fumatul nu exclude implanturile, dar scade rata de succes la aproximativ 85 la sută. Tratamentul cu bifosfonați nu este nici el o contraindicație absolută: o revizuire sistematică din 2022 arată că profilaxia farmacologică adecvată și un protocol adaptat reduc riscul de eșec, deși osteonecroza de maxilar rămâne o complicație rară și severă.",
        },
      ],
    },
    {
      id: "cum-decurge",
      heading: "Cum decurge o intervenție pe ambele arcade?",
      blocks: [
        {
          kind: "p",
          text: "Evaluarea începe cu o tomografie computerizată cu fascicul conic (CBCT), pe baza căreia se măsoară volumul osos disponibil pe fiecare arcadă și în fiecare zonă. Poziția fiecărui implant se stabilește virtual, în programul de planificare, înainte de intervenție.",
        },
        {
          kind: "p",
          text: "În ziua intervenției se fac extracțiile necesare și se inserează implanturile, ghidat digital. Dacă stabilitatea obținută la inserare este suficientă, se montează lucrările fixe provizorii pe ambele arcade, astfel încât pacientul nu rămâne fără dinți. Condiția se verifică în timpul intervenției.",
        },
        {
          kind: "p",
          text: "Urmează perioada de osteointegrare, apoi lucrările definitive, realizate împreună cu medicul protetician. Intervenția se face sub anestezie locală. Postoperator, disconfortul și edemul sunt mai pronunțate decât la o singură arcadă și cedează de regulă în aproximativ o săptămână.",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Se pot pune implanturi sus și jos în aceeași zi?",
      a: "Da, dacă evaluarea clinică și tomografia o permit. Este abordarea preferată la pacienții cu edentație totală pe ambele arcade, pentru că reduce numărul de intervenții și permite reglarea corectă a ocluziei între cele două lucrări provizorii.",
    },
    {
      q: "Câte implanturi sunt necesare pentru ambele arcade?",
      a: "De regulă între opt și douăsprezece, în funcție de os. O combinație frecventă este șase implanturi la maxilar și patru la mandibulă, adică zece în total. La maxilar se preferă mai multe pentru că osul este spongios și există sinusurile maxilare.",
    },
    {
      q: "Este mai dureroasă o intervenție pe ambele arcade?",
      a: "Intervenția se face sub anestezie locală și nu doare în timpul ei. Postoperator, disconfortul și edemul sunt mai pronunțate decât la o singură arcadă, se controlează cu medicația prescrisă și cedează de regulă în aproximativ o săptămână.",
    },
    {
      q: "Cât durează intervenția?",
      a: "Câteva ore, în funcție de numărul de extracții și de implanturi. Planificarea digitală prealabilă scurtează timpul petrecut în cabinet, pentru că poziția fiecărui implant este stabilită înainte de intervenție.",
    },
    {
      q: "Costă mai mult decât două intervenții separate?",
      a: "Costă mai puțin. Anestezia, consumabilele sterile, pregătirea sălii și o parte din planificarea digitală se consumă o singură dată, indiferent dacă se lucrează pe una sau pe două arcade. Diferența exactă se comunică în planul de tratament, după evaluare.",
    },
    {
      q: "Pot mânca normal imediat după intervenție?",
      a: "Nu imediat. Lucrările provizorii permit alimentația, dar cu alimente moi în prima perioadă. Revenirea la masticație normală se face treptat și complet după montarea lucrărilor definitive.",
    },
    {
      q: "Cât durează până primesc lucrarea definitivă?",
      a: "Între 6 săptămâni și 6 luni, în funcție de arcadă, de densitatea osului și de stabilitatea obținută la inserare. Protocolul clasic prevedea 3 luni la mandibulă și 6 luni la maxilar, iar suprafețele moderne pot scurta intervalul la 6 pana la 8 săptămâni.",
    },
    {
      q: "Fumatul împiedică punerea implanturilor?",
      a: "Nu le împiedică, dar scade rata de succes la aproximativ 85 la sută, față de peste 95 la sută la nefumători. Reducerea sau oprirea fumatului în perioada de vindecare îmbunătățește prognosticul.",
    },
  ],
  sources: [
    {
      id: "jpis-2014",
      label: "Comparație radiologică a osteogenezei alveolare la mandibulă și maxilar, pe șase săptămâni",
      publisher: "Journal of Periodontal & Implant Science",
      year: "2014",
      url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4289173/",
    },
    {
      id: "bmc-2022",
      label: "Impactul bifosfonaților asupra vindecării implanturilor: revizuire sistematică",
      publisher: "BMC Oral Health",
      year: "2022",
      url: "https://bmcoralhealth.biomedcentral.com/articles/10.1186/s12903-022-02330-y",
    },
    {
      id: "iti-d01m09",
      label: "Factori de risc sistemici în terapia implantară, inclusiv fumatul",
      publisher: "ITI Academy",
      year: "2024",
      url: "https://www.iti.org/iti-academy-modules/narration/D01-M09.html",
    },
    {
      id: "nct04769921",
      label: "Reabilitări de arcadă completă prin conceptul All-on-4 contemporan",
      publisher: "ClinicalTrials.gov",
      year: "2021",
      url: "https://clinicaltrials.gov/study/NCT04769921",
    },
  ],
  related: [
    { label: "Implanturi la Drafta dental", href: "/#servicii" },
    { label: "Medicii cabinetului", href: "/despre-noi" },
    { label: "Programare online", href: "/#programare" },
  ],
  verify: [
    "Procentul concret cu care intervenția simultană reduce costul total față de două intervenții separate. Nu se publică o cifră neverificată.",
    "Intervalul orar real al unei intervenții bimaxilare la Drafta dental.",
    "Dacă Drafta dental realizează efectiv reabilitări bimaxilare pe implanturi și cu ce protocoale. Întregul articol presupune că da.",
    "Rata de succes pe termen lung citată frecvent ca 98 pana la 99 la sută la 25 de ani apare doar pe site-uri de clinică, fără sursă primară. A fost lăsată în afara articolului.",
    "Aviz medical: articolul nu a fost revizuit de un medic. Conținut demo.",
    "Credențialele autorului (facultate, an, competențe, număr CMDR) lipsesc din entitatea de autor.",
    "Mai sunt necesare 1 pana la 3 articole ca blocul de articole conexe să conțină legături interne către alte postări, nu doar către pagini ale site-ului.",
  ],
};

export const posts: Post[] = [implanturiBimaxilar];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}

export function readingMinutes(post: Post) {
  const words = [
    post.answer,
    ...post.keyTakeaways,
    ...post.sections.flatMap((s) =>
      s.blocks.flatMap((b) =>
        b.kind === "p"
          ? [b.text]
          : b.kind === "ul" || b.kind === "takeaway"
            ? b.items
            : b.kind === "table"
              ? [...b.head, ...b.rows.flat()]
              : [],
      ),
    ),
    ...post.faq.flatMap((f) => [f.q, f.a]),
  ]
    .join(" ")
    .split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}
