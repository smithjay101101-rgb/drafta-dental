import type { Post } from "./blog-types";

/**
 * ⚠️ CONȚINUT DEMO. Articolul este scris pentru structură, nu pentru publicare.
 * Nu a trecut prin avizul unui medic. Nu se publică fără revizuire medicală.
 * Lista completă de [VERIFY] este în câmpul `verify` de mai jos.
 */
const implanturiBimaxilar: Post = {
  slug: "implanturi-ambele-arcade-aceeasi-sedinta",
  track: "retrieval",
  image: "/photos/blog-implanturi-bimaxilar.jpg",
  imageAlt: "Mână cu mănușă ținând un implant dentar cu bontul și coroana",
  imageCaption: "foto: implant dentar cu bont și coroană",
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
    { label: "Implanturi la Drafta dental", href: "/servicii/implanturi-dentare" },
    {
      label: "Implant dentar imediat sau după vindecarea extracției: care este diferența?",
      href: "/blog/implant-dentar-imediat-sau-dupa-vindecare",
    },
    {
      label: "Cât durează un implant dentar de la extracție până la coroana definitivă?",
      href: "/blog/cat-dureaza-un-implant-dentar",
    },
    {
      label: "Fațete ceramice sau fațete de compozit: care este diferența?",
      href: "/blog/fatete-ceramice-sau-compozit",
    },
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
  ],
};

/**
 * ⚠️ Nu a trecut prin avizul unui medic. Nu se publică fără revizuire medicală.
 * Cifrele din articol sunt verificate în sursele primare, nu preluate din
 * rezumate. Lista de [VERIFY] este în câmpul `verify`.
 */
const fateteCeramiceCompozit: Post = {
  slug: "fatete-ceramice-sau-compozit",
  track: "retrieval",
  image: "/photos/blog-fatete-ceramice-compozit.jpg",
  imageAlt: "Fațete ceramice subțiri, așezate pe un fundal negru",
  imageCaption: "foto: fațete ceramice înainte de cimentare",
  title: "Fațete ceramice sau fațete de compozit: care este diferența?",
  metaTitle: "Fațete ceramice sau de compozit: care e diferența?",
  metaDescription:
    "Diferența dintre fațetele ceramice și cele de compozit: supraviețuire la 10 ani, cât smalț se șlefuiește, pete, reparații și prețul de pornire.",
  answer:
    "Fațetele de compozit se aplică direct pe dinte, într-o singură ședință, și costă mai puțin. Fațetele ceramice se realizează în laborator, cer două ședințe și rezistă mai bine în timp: la zece ani, rata de supraviețuire raportată este de 95,5 la sută pentru cele ceramice, față de 91 la sută pentru cele de compozit, la o urmărire medie între doi și opt ani. Diferența nu este doar de preț, ci și de cât smalț se șlefuiește, de cum se comportă la pete și de felul în care se repară.",
  authorId: "andrei-drafta",
  datePublished: "2026-09-21",
  dateModified: "2026-09-21",
  categories: ["Estetică dentară", "Fațete dentare", "Stomatologie restauratoare"],
  keyTakeaways: [
    "La zece ani, fațetele ceramice au o rată de supraviețuire de 95,5 la sută, calculată pe 25 de studii clinice și 6.500 de fațete (Journal of Clinical Medicine, 2021).",
    "Fațetele de compozit aplicate direct pe dinte au o supraviețuire de 91 la sută, la o urmărire medie între 24 și 97 de luni (Journal of Evidence-Based Dental Practice, 2023).",
    "La doi până la trei ani, studiile randomizate nu găsesc o diferență semnificativă de supraviețuire între cele două materiale. Diferența se vede pe termen lung (Frontiers in Dental Medicine, 2026).",
    "Cea mai frecventă problemă a fațetelor ceramice este fractura, urmată de desprindere, iar ambele apar mai des în primii ani după cimentare (Journal of Clinical Medicine, 2021).",
    "Fațeta ceramică lipită numai pe smalț supraviețuiește în 96,7 la sută din cazuri, față de 93,9 la sută atunci când peste 30 la sută din suprafață este dentină, adică un risc de eșec de aproape cinci ori mai mare (Journal of Esthetic and Restorative Dentistry, 2025).",
    "Compozitul își pierde luciul și se colorează marginal mai repede decât ceramica, în schimb se poate repara direct în cabinet (Frontiers in Dental Medicine, 2026).",
  ],
  sections: [
    {
      id: "ce-sunt",
      heading: "Ce sunt, de fapt, cele două tipuri de fațete?",
      blocks: [
        {
          kind: "p",
          text: "Amândouă acoperă fața văzută a dintelui și schimbă forma, culoarea sau poziția aparentă a acestuia. Diferă prin material și prin locul în care sunt construite.",
        },
        {
          kind: "p",
          text: "Fațeta de compozit se construiește direct pe dinte, în cabinet. Medicul aplică rășina compozită în straturi, o modelează și o lustruiește în aceeași ședință. Rezultatul depinde aproape în întregime de mâna care lucrează, pentru că fațeta se sculptează pe loc.",
        },
        {
          kind: "p",
          text: "Fațeta ceramică se realizează în laborator, după o amprentă sau o scanare intraorală, apoi se cimentează pe dinte la a doua ședință. Între cele două vizite, dintele rămâne protejat de o lucrare provizorie.",
        },
      ],
    },
    {
      id: "durabilitate",
      heading: "Care dintre ele rezistă mai mult?",
      blocks: [
        {
          kind: "p",
          text: "Ceramica, dar diferența apare târziu. O revizuire sistematică pe 25 de studii clinice și 6.500 de fațete ceramice a găsit o rată de supraviețuire de 95,5 la sută la zece ani (Journal of Clinical Medicine, 2021).",
        },
        {
          kind: "p",
          text: "Pentru compozit, o revizuire sistematică și meta-analiză a raportat 91 la sută supraviețuire pentru fațetele aplicate direct pe dinte, la o urmărire medie între 24 și 97 de luni. Varianta indirectă, realizată în laborator din compozit, a ieșit mai slab, cu 84 la sută (Journal of Evidence-Based Dental Practice, 2023).",
        },
        {
          kind: "p",
          text: "Important pentru cine compară în cabinet: la doi până la trei ani, studiile randomizate nu găsesc o diferență semnificativă între cele două materiale. Cu alte cuvinte, în primii ani fațeta de compozit arată și rezistă comparabil. Diferența se acumulează după (Frontiers in Dental Medicine, 2026).",
        },
        {
          kind: "takeaway",
          items: [
            "Pe termen scurt, diferența de rezistență este mică.",
            "Pe termen lung, ceramica pierde mai puține fațete.",
            "Cea mai frecventă problemă la ceramică este fractura, urmată de desprindere, iar ambele apar mai des în primii ani după cimentare.",
          ],
        },
      ],
    },
    {
      id: "smalt",
      heading: "Cât din dinte se șlefuiește pentru fiecare?",
      blocks: [
        {
          kind: "p",
          text: "Aceasta este întrebarea care contează cel mai mult pe termen lung, pentru că șlefuirea nu se poate da înapoi. Compozitul cere de regulă o pregătire minimă, uneori deloc. Ceramica are nevoie de un spațiu în care să încapă, deci de o șlefuire mai consistentă, care variază în funcție de caz și de material.",
        },
        {
          kind: "p",
          text: "Cât smalț rămâne după șlefuire schimbă direct prognosticul. Un studiu pe 672 de fațete ceramice la 189 de pacienți, urmărite între 1 și 15 ani, a împărțit cazurile după cât din suprafața pregătită era dentină expusă.",
        },
        {
          kind: "table",
          caption: "Supraviețuirea fațetelor ceramice, în funcție de suportul pe care sunt lipite",
          head: ["Suportul de lipire", "Fațete urmărite", "Supraviețuire"],
          rows: [
            ["Doar smalț", "290", "96,7 la sută"],
            ["Sub 30 la sută dentină", "306", "95,3 la sută"],
            ["Peste 30 la sută dentină", "76", "93,9 la sută"],
          ],
        },
        {
          kind: "p",
          text: "Diferența dintre prima și ultima grupă este semnificativă statistic, iar riscul de eșec la fațetele lipite pe mai mult de 30 la sută dentină este de aproape cinci ori mai mare. Faptul că dintele a avut sau nu tratament de canal nu a schimbat semnificativ rezultatul (Journal of Esthetic and Restorative Dentistry, 2025).",
        },
        {
          kind: "p",
          text: "Concluzia practică: o fațetă ceramică lipită pe smalț sănătos este o lucrare de durată. Una lipită pe un dinte șlefuit adânc sau refăcut anterior cu obturații mari pornește cu un handicap, indiferent de material.",
        },
      ],
    },
    {
      id: "pete-reparatii",
      heading: "Ce se întâmplă în timp cu aspectul și cu reparațiile?",
      blocks: [
        {
          kind: "p",
          text: "Compozitul se modifică vizibil mai repede: își pierde luciul suprafeței și se colorează pe margini, mai ales la cafea, ceai, vin roșu și fumat. Ceramica este stabilă cromatic și își păstrează luciul mult mai mult timp (Frontiers in Dental Medicine, 2026).",
        },
        {
          kind: "p",
          text: "În schimb, compozitul are un avantaj real atunci când apare o problemă: o ciobitură se poate repara direct în cabinet, într-o ședință, adăugând material peste cel existent. O fațetă ceramică fracturată se înlocuiește de obicei, pentru că materialul nu se completează la fel de previzibil.",
        },
        {
          kind: "p",
          text: "Acesta este și motivul pentru care compozitul se recomandă frecvent la pacienți tineri sau în situații care se vor mai schimba: repararea și ajustarea sunt simple, iar costul unei corecturi este mic.",
        },
      ],
    },
    {
      id: "comparatie",
      heading: "Care este diferența, pe scurt?",
      blocks: [
        {
          kind: "table",
          caption: "Fațete ceramice față de fațete de compozit",
          head: ["Criteriu", "Ceramice", "Compozit"],
          rows: [
            ["Unde se realizează", "În laborator, după amprentă sau scanare", "Direct pe dinte, în cabinet"],
            ["Număr de ședințe", "Două", "Una"],
            ["Supraviețuire raportată", "95,5 la sută la 10 ani", "91 la sută, la 2 până la 8 ani"],
            ["Problema cea mai frecventă", "Fractura, apoi desprinderea", "Fractura, pierderea retenției, colorarea"],
            ["Comportament la pete", "Stabil în timp", "Pierde luciul, se colorează marginal"],
            ["Reparație", "De regulă se înlocuiește fațeta", "Se repară direct în cabinet"],
            ["Preț de pornire la Drafta dental", "1700 lei pe dinte", "650 lei pe dinte"],
          ],
        },
      ],
    },
    {
      id: "cum-alegi",
      heading: "Cum alegi între ele?",
      blocks: [
        {
          kind: "p",
          text: "Alegerea se face la consultație, după ce medicul vede cât smalț există, cum se închide mușcătura și ce se dorește schimbat. Câteva repere care apar constant în discuție:",
        },
        {
          kind: "ul",
          items: [
            "Dacă dinții sunt în mare parte intacți și se corectează detalii de formă sau culoare, compozitul rezolvă într-o ședință, cu un cost mai mic.",
            "Dacă se schimbă aspectul mai multor dinți și se dorește un rezultat care ține mulți ani, ceramica are datele mai bune la zece ani.",
            "Dacă smalțul este subțire sau există obturații întinse pe fața văzută, prognosticul scade pentru ambele, iar planul se discută separat.",
            "Dacă se scrâșnesc dinții noaptea, riscul de fractură crește, iar o gutieră de protecție intră în discuție indiferent de material.",
            "Dacă bugetul contează acum, compozitul poate fi o etapă, nu neapărat o alegere definitivă.",
          ],
        },
        {
          kind: "p",
          text: "Ambele variante sunt disponibile la Drafta dental, iar prețurile de pornire sunt afișate pe paginile fiecărui tratament. Costul exact se stabilește după consultație, în funcție de numărul de dinți și de starea lor.",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Care fațete rezistă mai mult, cele ceramice sau cele de compozit?",
      a: "Cele ceramice. La zece ani, rata de supraviețuire raportată este de 95,5 la sută pentru ceramică. Pentru compozitul aplicat direct pe dinte, supraviețuirea este de 91 la sută, la o urmărire medie între 24 și 97 de luni. În primii doi până la trei ani, diferența nu este semnificativă.",
    },
    {
      q: "Care este diferența de preț?",
      a: "La Drafta dental, fațetele de compozit pornesc de la 650 lei pe dinte, iar cele ceramice de la 1700 lei pe dinte. Prețul exact se stabilește după consultație, în funcție de numărul de dinți și de situația clinică.",
    },
    {
      q: "Se șlefuiește dintele în ambele cazuri?",
      a: "Compozitul cere de regulă o pregătire minimă, uneori deloc. Ceramica are nevoie de spațiu pentru grosimea ei, deci de o șlefuire mai consistentă. Cât smalț rămâne contează: fațetele ceramice lipite numai pe smalț supraviețuiesc în 96,7 la sută din cazuri, față de 93,9 la sută când peste 30 la sută din suprafață este dentină.",
    },
    {
      q: "Se pot repara fațetele?",
      a: "Fațeta de compozit se repară direct în cabinet, într-o singură ședință. O fațetă ceramică fracturată se înlocuiește de obicei, pentru că materialul nu se completează la fel de previzibil.",
    },
    {
      q: "Se pătează fațetele în timp?",
      a: "Compozitul își pierde luciul și se colorează pe margini mai repede, mai ales la cafea, ceai, vin roșu și fumat. Ceramica își păstrează culoarea și luciul mult mai mult timp.",
    },
    {
      q: "Câte ședințe durează fiecare?",
      a: "Fațetele de compozit se fac într-o singură ședință, pentru că se construiesc direct pe dinte. Cele ceramice cer două: una pentru pregătire și amprentă sau scanare, alta pentru cimentare, după ce lucrarea vine din laborator.",
    },
    {
      q: "Pot trece de la compozit la ceramică mai târziu?",
      a: "Da, iar acesta este unul dintre motivele pentru care compozitul se alege uneori ca etapă. Trecerea presupune o nouă pregătire a dintelui, deci decizia se discută la consultație, ținând cont de cât smalț a rămas.",
    },
    {
      q: "Ce se întâmplă dacă scrâșnesc dinții noaptea?",
      a: "Crește riscul de fractură, care este deja cea mai frecventă problemă a fațetelor ceramice. În astfel de cazuri se discută o gutieră de protecție purtată noaptea, indiferent de materialul ales.",
    },
  ],
  sources: [
    {
      id: "jcm-2021",
      label: "Supraviețuirea pe termen lung și complicațiile fațetelor ceramice: revizuire sistematică pe 25 de studii și 6.500 de fațete",
      publisher: "Journal of Clinical Medicine",
      year: "2021",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7961608/",
    },
    {
      id: "jebdp-2023",
      label: "Ratele de supraviețuire și complicațiile fațetelor din rășină compozită: revizuire sistematică și meta-analiză",
      publisher: "Journal of Evidence-Based Dental Practice",
      year: "2023",
      url: "https://www.sciencedirect.com/science/article/abs/pii/S1532338223001033",
    },
    {
      id: "jerd-2025",
      label: "Supraviețuirea fațetelor ceramice în funcție de expunerea dentinei și de vitalitatea dintelui, la 1 până la 15 ani",
      publisher: "Journal of Esthetic and Restorative Dentistry",
      year: "2025",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12618969/",
    },
    {
      id: "fdm-2026",
      label: "Longevitatea clinică a fațetelor directe din rășină compozită pe dinții frontali",
      publisher: "Frontiers in Dental Medicine",
      year: "2026",
      url: "https://www.frontiersin.org/journals/dental-medicine/articles/10.3389/fdmed.2026.1915125/full",
    },
  ],
  related: [
    { label: "Fațete ceramice la Drafta dental", href: "/servicii/fatete-ceramice" },
    { label: "Fațete de compozit la Drafta dental", href: "/servicii/fatete-de-compozit" },
    {
      label: "Se pot pune implanturi pe ambele arcade în aceeași ședință?",
      href: "/blog/implanturi-ambele-arcade-aceeasi-sedinta",
    },
    { label: "Programare", href: "/#programare" },
  ],
  verify: [
    "Ce sisteme ceramice folosește cabinetul. Studiul din 2021 arată diferențe semnificative între ceramicile feldspatice și celelalte, iar articolul nu numește niciun material anume.",
    "Dacă se fac fațete fără șlefuire la Drafta dental și în ce situații.",
    "Dacă prețurile de pornire includ proba, simularea digitală și lucrarea provizorie.",
    "Numărul real de ședințe pentru fiecare variantă, în cabinet.",
    "Intervalele de viață citate pe paginile de servicii (5 până la 7 ani pentru compozit, 10 până la 15 ani pentru ceramică) provin din textele cabinetului. În articol s-au folosit ratele de supraviețuire din studii, nu aceste intervale.",
    "Aviz medical: articolul nu a fost revizuit de un medic.",
    "Credențialele autorului (facultate, an, competențe, număr CMDR) lipsesc din entitatea de autor.",
  ],
};

/**
 * ⚠️ Nu a trecut prin avizul unui medic. Nu se publică fără revizuire medicală.
 * Cifrele sunt verificate în rezumatele și textele integrale ale surselor
 * primare. Lista de [VERIFY] este în câmpul `verify`.
 */
const implantImediat: Post = {
  slug: "implant-dentar-imediat-sau-dupa-vindecare",
  track: "retrieval",
  image: "/photos/blog-implant-imediat.jpg",
  imageAlt: "Model dentar în secțiune, cu un implant între doi dinți naturali",
  imageCaption: "foto: implant dentar în os, model în secțiune",
  title: "Implant dentar imediat sau după vindecarea extracției: care este diferența?",
  metaTitle: "Implant dentar imediat sau după vindecare: diferența",
  metaDescription:
    "Implant în ziua extracției sau după vindecare: ce spun studiile despre risc, gingie și os, cine poate primi implant imediat și cât durează.",
  answer:
    "Implantul imediat se inserează în aceeași ședință cu extracția. Implantul după vindecare se pune după 4 până la 8 săptămâni, după 12 până la 16 săptămâni sau după mai mult de 6 luni, în funcție de cât s-a refăcut zona. Varianta imediată scurtează tratamentul și evită o a doua intervenție, dar are un risc ceva mai mare de pierdere timpurie a implantului și de retragere a gingiei, deci se alege doar când osul, gingia și absența infecției acute o permit.",
  authorId: "andrei-drafta",
  datePublished: "2026-09-26",
  dateModified: "2026-09-26",
  categories: ["Implant dentar", "Chirurgie dentară"],
  keyTakeaways: [
    "Consensul ITI împarte momentul inserării în patru tipuri: în ziua extracției, după 4 până la 8 săptămâni, după 12 până la 16 săptămâni și după mai mult de 6 luni (Clinical Implant Dentistry and Related Research, 2026).",
    "Într-o meta-analiză pe 473 de implanturi unitare, supraviețuirea a fost de 94,9 la sută pentru implantul imediat și de 98,9 la sută pentru cel pus la cel puțin 3 luni după extracție. Toate pierderile au fost timpurii (Journal of Clinical Periodontology, 2019).",
    "Pe 163 de publicații și peste 56.000 de implanturi, riscul de eșec a fost mai mare în alveola proaspătă decât în osul vindecat, diferența fiind semnificativă la maxilar, dar nu și la mandibulă (Materials, 2021).",
    "În zona frontală, retragerea gingiei cu peste 1 mm a apărut în 9 până la 41 la sută din cazurile cu implant imediat, cu o mediană de 26 la sută, față de niciun caz în cele două studii cu inserare precoce (International Journal of Oral & Maxillofacial Implants, 2014).",
    "După extracție, creasta osoasă pierde 29 până la 63 la sută din lățime și 11 până la 22 la sută din înălțime în 6 luni, cel mai repede în primele 3 până la 6 luni (Clinical Oral Implants Research, 2012).",
    "O infecție în jurul dintelui extras nu exclude automat implantul imediat: pe 2.281 de alveole, supraviețuirea nu a diferit semnificativ între alveolele infectate, curățate temeinic, și cele neinfectate (Journal of Oral & Maxillofacial Research, 2020).",
  ],
  sections: [
    {
      id: "ce-inseamna",
      heading: "Ce înseamnă implant imediat și ce înseamnă implant după vindecare?",
      blocks: [
        {
          kind: "p",
          text: "Diferența ține de momentul în care se inserează implantul față de extracție. Consensul Internațional de Implantologie (ITI) folosește patru tipuri, iar clasificarea este aceeași în toate studiile citate mai jos.",
        },
        {
          kind: "table",
          caption: "Momentul inserării implantului după extracție, după clasificarea ITI",
          head: ["Tip", "Când se pune implantul", "Ce s-a vindecat până atunci"],
          rows: [
            ["Tip 1, imediat", "În aceeași ședință cu extracția", "Nimic, implantul intră în alveola proaspătă"],
            ["Tip 2, precoce", "După 4 până la 8 săptămâni", "Gingia s-a închis peste alveolă"],
            ["Tip 3, precoce", "După 12 până la 16 săptămâni", "Osul s-a refăcut parțial în alveolă"],
            ["Tip 4, tardiv", "După mai mult de 6 luni", "Osul s-a vindecat complet"],
          ],
        },
        {
          kind: "p",
          text: "Clasificarea se combină cu momentul în care implantul primește dintele: încărcare imediată în prima săptămână, precoce între o săptămână și două luni, convențională după mai mult de două luni. Un „tip 1A” înseamnă deci implant pus în ziua extracției și dinte provizoriu în aceeași săptămână (Clinical Implant Dentistry and Related Research, 2026).",
        },
      ],
    },
    {
      id: "risc",
      heading: "Este mai riscant implantul imediat?",
      blocks: [
        {
          kind: "p",
          text: "Puțin mai riscant, iar diferența apare la început. O revizuire sistematică și meta-analiză a comparat implantul unitar imediat cu cel pus la cel puțin 3 luni după extracție, pe 473 de implanturi urmărite între 1 și 8 ani. Supraviețuirea a fost de 94,9 la sută pentru implantul imediat și de 98,9 la sută pentru cel amânat. Toate pierderile au fost timpurii, adică în perioada de integrare în os (Journal of Clinical Periodontology, 2019).",
        },
        {
          kind: "p",
          text: "Aceeași revizuire a observat o tendință de supraviețuire mai mică la implantul imediat atunci când nu s-au administrat antibiotice după intervenție. Aspectul estetic al gingiei, măsurat cu un scor standard, a ieșit însă similar în cele două grupe.",
        },
        {
          kind: "p",
          text: "O meta-analiză mult mai largă, pe 163 de publicații, 17.278 de implanturi în alveole proaspete și 38.738 în os vindecat, a ajuns la aceeași concluzie: riscul de eșec este mai mare în alveola proaspătă. Diferența a fost semnificativă la maxilar, dar nu și la mandibulă, iar pierderea de os din jurul implantului nu a diferit semnificativ între grupe (Materials, 2021).",
        },
        {
          kind: "p",
          text: "Cea mai recentă revizuire ITI arată de ce cifrele nu trebuie citite izolat: pentru implantul imediat cu dinte provizoriu în prima săptămână, supraviețuirea cumulată a fost de 98 la sută, iar protocolul este considerat validat științific. Studiile din care vine această cifră au selectat însă pacienții strict, cu perete osos intact și stabilitate bună la inserare (Clinical Implant Dentistry and Related Research, 2026).",
        },
        {
          kind: "takeaway",
          items: [
            "Riscul suplimentar al implantului imediat este mic și apare în primele luni, nu după ani.",
            "Rezultatele bune ale implantului imediat vin din selecția cazurilor. Nu orice extracție se potrivește.",
          ],
        },
      ],
    },
    {
      id: "gingie-os",
      heading: "Ce se întâmplă cu gingia și cu osul în fiecare variantă?",
      blocks: [
        {
          kind: "p",
          text: "Aici este diferența care contează cel mai mult la dinții din față. O revizuire sistematică pe implanturi puse după extracția dinților frontali superiori și a premolarilor a găsit la implantul imediat o retragere a gingiei de pe fața văzută cu peste 1 mm în 9 până la 41 la sută din cazuri, cu o mediană de 26 la sută, la 1 până la 3 ani. În cele două studii cu inserare precoce, de tip 2 și 3, nu a existat niciun caz de acest fel (International Journal of Oral & Maxillofacial Implants, 2014).",
        },
        {
          kind: "p",
          text: "În două studii cu implant imediat și adiție de os, peretele osos din față nu mai era vizibil pe tomografie în 36 și, respectiv, 57 la sută din cazuri, iar tocmai acolo gingia se retrăsese mai mult. Studiile mai noi au pus condiții stricte pentru implantul imediat, cum ar fi gingia groasă și peretele osos intact, tocmai pentru a reduce acest risc.",
        },
        {
          kind: "p",
          text: "Nici așteptarea nu este fără cost. După extracție, creasta osoasă se retrage: în 6 luni pierde 29 până la 63 la sută din lățime și 11 până la 22 la sută din înălțime, cel mai repede în primele 3 până la 6 luni (Clinical Oral Implants Research, 2012). De aceea, inserarea precoce, la câteva săptămâni, păstrează o parte din avantajele ambelor variante: gingia s-a închis, iar osul nu a apucat să se retragă mult.",
        },
      ],
    },
    {
      id: "orice-extractie",
      heading: "Se poate pune implant imediat după orice extracție?",
      blocks: [
        {
          kind: "p",
          text: "Nu. Decizia se ia pe tomografia computerizată cu fascicul conic (CBCT) și se confirmă în timpul intervenției, după ce dintele a fost scos. Studiile care stau la baza protocolului imediat au cerut, de regulă, următoarele condiții:",
        },
        {
          kind: "ul",
          items: [
            "Peretele osos din față al alveolei este intact după extracție, fără lipsă de os sau fisuri.",
            "Există suficient os dincolo de vârful rădăcinii și pe partea dinspre cerul gurii, încât implantul să se fixeze stabil.",
            "Implantul se fixează ferm la inserare. În studiile analizate, pragul cerut a variat de regulă între 25 și 45 N cm (Clinical Implant Dentistry and Related Research, 2026).",
            "Gingia este groasă și nu există boală parodontală activă.",
            "Nu este nevoie de adiție de os sau de grefă de gingie înainte de implant.",
          ],
        },
        {
          kind: "figure",
          src: "/photos/blog-implant-imediat-cbct.jpg",
          alt: "Medic care analizează pe negatoscop reconstrucții 3D și secțiuni de tomografie dentară",
          caption: "foto: reconstrucțiile 3D și secțiunile tomografiei arată grosimea peretelui osos înainte de decizie",
        },
        {
          kind: "p",
          text: "Dacă una dintre condiții lipsește, varianta sigură este inserarea precoce sau tardivă. Consensul ITI din 2023 consideră implantul imediat cu dinte provizoriu predictibil în zona frontală superioară „în condiții favorabile”, cu mențiunea că pot apărea complicații chirurgicale, tehnice și biologice (Clinical Oral Implants Research, 2023).",
        },
      ],
    },
    {
      id: "infectie",
      heading: "Ce se întâmplă dacă dintele extras are infecție?",
      blocks: [
        {
          kind: "p",
          text: "Infecția din jurul rădăcinii nu exclude automat implantul imediat. O revizuire sistematică pe 9 studii și 2.281 de alveole nu a găsit o diferență semnificativă de supraviețuire între implanturile puse în alveole infectate și cele puse în alveole neinfectate. Nici nivelul osului, nici adâncimea pungilor nu au diferit semnificativ (Journal of Oral & Maxillofacial Research, 2020).",
        },
        {
          kind: "p",
          text: "Condiția este curățarea temeinică a alveolei înainte de inserare. O altă revizuire, pe cinci studii clinice, a ajuns la aceeași concluzie și recomandă atenție la lățimea gingiei fixe în zona estetică (Acta Odontologica Scandinavica, 2018). O infecție acută, cu puroi sau umflătură, se tratează de regulă mai întâi, iar implantul se amână.",
        },
      ],
    },
    {
      id: "comparatie",
      heading: "Care este diferența, pe scurt?",
      blocks: [
        {
          kind: "table",
          caption: "Implant imediat față de implant după vindecarea extracției",
          head: ["Criteriu", "Imediat (tip 1)", "După vindecare (tip 2 până la 4)"],
          rows: [
            ["Intervenții chirurgicale", "Una: extracția și implantul odată", "Două: extracția, apoi implantul"],
            ["Supraviețuire, implant unitar", "94,9 la sută", "98,9 la sută, la cel puțin 3 luni după extracție"],
            ["Când apar pierderile", "Timpuriu, în faza de integrare", "Timpuriu, în faza de integrare"],
            ["Retragerea gingiei cu peste 1 mm, zona frontală", "9 până la 41 la sută din cazuri", "Niciun caz în studiile cu inserare precoce"],
            ["Dinte provizoriu fix în prima săptămână", "Posibil, dacă stabilitatea permite", "Posibil și după vindecare, dacă stabilitatea permite"],
            ["Condiții de os și gingie", "Stricte", "Mai puțin stricte"],
            ["Durata totală", "Cea mai scurtă", "Mai lungă cu intervalul de vindecare, între 4 săptămâni și peste 6 luni"],
          ],
        },
      ],
    },
    {
      id: "durata",
      heading: "Cât durează până la dintele definitiv?",
      blocks: [
        {
          kind: "p",
          text: "Cu implant imediat se câștigă tot intervalul de vindecare a alveolei, adică între 4 săptămâni și peste 6 luni. După inserare, implantul are nevoie oricum de timp să se integreze în os înainte de lucrarea definitivă, iar dacă stabilitatea permite, pacientul poartă între timp un dinte provizoriu fix.",
        },
        {
          kind: "p",
          text: "Calendarul complet, pe etape și pe scenarii, este explicat separat în articolul despre cât durează un implant dentar de la extracție până la coroana definitivă.",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Se poate pune implant imediat după orice extracție?",
      a: "Nu. Este nevoie de un perete osos intact în fața alveolei, de os suficient dincolo de vârful rădăcinii pentru o fixare stabilă, de gingie sănătoasă și de absența unei infecții acute. Decizia se ia pe tomografie și se confirmă în timpul intervenției.",
    },
    {
      q: "Este mai riscant implantul imediat?",
      a: "Puțin. Într-o meta-analiză pe 473 de implanturi unitare, supraviețuirea a fost de 94,9 la sută pentru implantul imediat, față de 98,9 la sută pentru cel pus la cel puțin 3 luni după extracție. Pierderile au fost toate timpurii. În zona frontală, riscul de retragere a gingiei este și el mai mare.",
    },
    {
      q: "Cât durează până la dintele definitiv?",
      a: "Cu implant imediat se câștigă intervalul de vindecare a alveolei, între 4 săptămâni și peste 6 luni. Implantul trebuie apoi să se integreze în os înainte de lucrarea definitivă, iar dacă stabilitatea permite, pacientul poartă între timp un dinte provizoriu fix.",
    },
    {
      q: "Primesc un dinte provizoriu în ziua extracției?",
      a: "Este posibil dacă implantul se fixează suficient de stabil la inserare. Pentru implantul imediat cu dinte provizoriu în prima săptămână, cea mai recentă revizuire ITI raportează o supraviețuire cumulată de 98 la sută, la pacienți selectați strict.",
    },
    {
      q: "Se poate pune implant imediat dacă dintele are infecție?",
      a: "Uneori, da. Pe 2.281 de alveole, supraviețuirea nu a diferit semnificativ între alveolele infectate, curățate temeinic înainte de inserare, și cele neinfectate. O infecție acută, cu puroi sau umflătură, se tratează de regulă mai întâi.",
    },
    {
      q: "Dacă aștept, se pierde os?",
      a: "Da. În primele 6 luni după extracție, creasta pierde 29 până la 63 la sută din lățime și 11 până la 22 la sută din înălțime, cel mai repede în primele 3 până la 6 luni. De aceea, o așteptare lungă poate face necesară adiția de os.",
    },
    {
      q: "Doare mai mult implantul imediat?",
      a: "Intervenția se face sub anestezie locală. Pentru că extracția și implantul se fac într-o singură ședință, pacientul trece o singură dată prin perioada de disconfort de după intervenție, în loc de două ori.",
    },
  ],
  sources: [
    {
      id: "cidrr-2026",
      label: "Stadiul actual al dovezilor pentru protocoalele de inserare și încărcare a implanturilor la pacienții parțial edentați: revizuire sistematică",
      publisher: "Clinical Implant Dentistry and Related Research",
      year: "2026",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12828728/",
    },
    {
      id: "jcp-2019",
      label: "Implantul imediat față de implantul amânat pentru înlocuirea unui singur dinte: revizuire sistematică și meta-analiză",
      publisher: "Journal of Clinical Periodontology",
      year: "2019",
      url: "https://doi.org/10.1111/jcpe.13054",
    },
    {
      id: "materials-2021",
      label: "Implanturi în alveole proaspete față de os vindecat: revizuire sistematică și meta-analiză pe 163 de publicații",
      publisher: "Materials",
      year: "2021",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8708389/",
    },
    {
      id: "jomi-2014",
      label: "Rezultatele estetice ale implantului imediat și ale celui precoce în zona frontală superioară: revizuire sistematică",
      publisher: "International Journal of Oral & Maxillofacial Implants",
      year: "2014",
      url: "https://doi.org/10.11607/jomi.2014suppl.g3.3",
    },
    {
      id: "coir-2012",
      label: "Modificările dimensionale ale osului și gingiei după extracție la om: revizuire sistematică",
      publisher: "Clinical Oral Implants Research",
      year: "2012",
      url: "https://doi.org/10.1111/j.1600-0501.2011.02375.x",
    },
    {
      id: "coir-2023",
      label: "Raportul de consens ITI, grupul 5: protocoale de inserare și încărcare a implanturilor",
      publisher: "Clinical Oral Implants Research",
      year: "2023",
      url: "https://doi.org/10.1111/clr.14137",
    },
    {
      id: "jomr-2020",
      label: "Implant imediat în alveole infectate față de alveole neinfectate: revizuire sistematică și meta-analiză",
      publisher: "Journal of Oral & Maxillofacial Research",
      year: "2020",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7393932/",
    },
    {
      id: "aos-2018",
      label: "Implant imediat în alveole infectate și neinfectate: revizuire sistematică și meta-analiză",
      publisher: "Acta Odontologica Scandinavica",
      year: "2018",
      url: "https://doi.org/10.1080/00016357.2018.1453084",
    },
  ],
  related: [
    { label: "Implanturi la Drafta dental", href: "/servicii/implanturi-dentare" },
    {
      label: "Cât durează un implant dentar de la extracție până la coroana definitivă?",
      href: "/blog/cat-dureaza-un-implant-dentar",
    },
    {
      label: "Se pot pune implanturi pe ambele arcade în aceeași ședință?",
      href: "/blog/implanturi-ambele-arcade-aceeasi-sedinta",
    },
    { label: "Programare", href: "/#programare" },
  ],
  verify: [
    "Dacă Drafta dental face implant imediat și în ce situații. Articolul presupune că da, cu selecția de cazuri descrisă.",
    "Dacă cabinetul face tomografie CBCT pe loc sau trimite pacientul la un centru de imagistică.",
    "Protocolul de antibiotic folosit în cabinet după implantul imediat. Articolul menționează doar tendința din meta-analiza din 2019.",
    "Ideea nr. 5 din lista de subiecte („Implant imediat după extracție: când se poate și când nu?”) se suprapune mult cu acest articol. De decis dacă devine articol separat sau se unește cu acesta.",
    "Aviz medical: articolul nu a fost revizuit de un medic.",
    "Credențialele autorului (facultate, an, competențe, număr CMDR) lipsesc din entitatea de autor.",
  ],
};

/**
 * ⚠️ Nu a trecut prin avizul unui medic. Nu se publică fără revizuire medicală.
 * Intervalele din tabelul de scenarii sunt adunate din definițiile ITI, nu
 * măsurate într-un studiu. Lista de [VERIFY] este în câmpul `verify`.
 */
const durataImplant: Post = {
  slug: "cat-dureaza-un-implant-dentar",
  track: "retrieval",
  image: "/photos/blog-durata-implant.jpg",
  imageAlt: "Model dentar în secțiune cu un implant cu coroană, între un premolar și un molar",
  imageCaption: "foto: implant integrat în os, cu coroana montată",
  title: "Cât durează un implant dentar de la extracție până la coroana definitivă?",
  metaTitle: "Cât durează un implant dentar, de la extracție la coroană",
  metaDescription:
    "Etapele unui implant dentar, de la extracție la coroana definitivă: cât se așteaptă după extracție, cât se vindecă implantul și ce prelungește tratamentul.",
  answer:
    "De la câteva luni la aproximativ un an. Durata se adună din trei intervale: cât se așteaptă după extracție, de la zero la peste 6 luni, cât are nevoie implantul să se integreze în os, de regulă peste 2 luni, și, dacă lipsește os, cât durează vindecarea adiției. Un dinte provizoriu fix se poate monta uneori în prima săptămână după implant, deci pacientul nu stă neapărat fără dinte în tot acest timp.",
  authorId: "andrei-drafta",
  datePublished: "2026-09-26",
  dateModified: "2026-09-26",
  categories: ["Implant dentar", "Chirurgie dentară", "Protetică dentară"],
  keyTakeaways: [
    "După extracție, implantul se poate pune în aceeași ședință, după 4 până la 8 săptămâni, după 12 până la 16 săptămâni sau după mai mult de 6 luni (Clinical Implant Dentistry and Related Research, 2026).",
    "Implantul primește dintele fie în prima săptămână, fie între o săptămână și două luni, fie după mai mult de două luni. Ultima variantă, încărcarea convențională, are cea mai lungă documentare (Clinical Implant Dentistry and Related Research, 2026).",
    "Dintele provizoriu fix în prima săptămână după implant a avut o supraviețuire cumulată de 98 la sută la implantul imediat și de 97,2 la sută la implantul pus în os vindecat (Clinical Implant Dentistry and Related Research, 2026).",
    "În 6 luni după extracție, creasta pierde 29 până la 63 la sută din lățime, deci o așteptare lungă poate adăuga o adiție de os la calendar (Clinical Oral Implants Research, 2012).",
    "După ridicarea sinusului cu grefă, osul nou a fost semnificativ mai mult după 4,5 luni de vindecare decât înainte, fără o diferență semnificativă între 6 și 10 luni pentru majoritatea materialelor (Journal of Periodontal Research, 2017).",
    "La maxilarul posterior cu os puțin, implanturile scurte, de cel mult 8 mm, au avut aceeași rată de eșec ca implanturile standard cu ridicare de sinus, în 8 studii randomizate (Journal of Stomatology, Oral and Maxillofacial Surgery, 2026).",
  ],
  sections: [
    {
      id: "etape",
      heading: "Care sunt etapele, de la extracție la coroană?",
      blocks: [
        {
          kind: "p",
          text: "Tratamentul are patru etape, iar durata totală depinde de cât durează fiecare. Unele se pot suprapune, altele nu.",
        },
        {
          kind: "ul",
          items: [
            "Evaluarea: consultația, tomografia CBCT și planul de tratament.",
            "Extracția și vindecarea alveolei, dacă implantul nu se pune în aceeași ședință.",
            "Inserarea implantului și integrarea lui în os, numită osteointegrare.",
            "Lucrarea definitivă: amprenta sau scanarea, realizarea coroanei în laborator și montarea ei.",
          ],
        },
        {
          kind: "table",
          caption: "Intervalele de timp standard, după definițiile consensului ITI",
          head: ["Etapa", "Variante", "Interval"],
          rows: [
            ["De la extracție la implant", "Imediat, în aceeași ședință", "0"],
            ["De la extracție la implant", "Precoce, după vindecarea gingiei", "4 până la 8 săptămâni"],
            ["De la extracție la implant", "Precoce, după vindecarea parțială a osului", "12 până la 16 săptămâni"],
            ["De la extracție la implant", "Tardiv, după vindecarea completă a osului", "Peste 6 luni"],
            ["De la implant la dinte", "Încărcare imediată", "În prima săptămână"],
            ["De la implant la dinte", "Încărcare precoce", "Între 1 săptămână și 2 luni"],
            ["De la implant la dinte", "Încărcare convențională", "Peste 2 luni"],
          ],
        },
      ],
    },
    {
      id: "scenarii",
      heading: "Cât durează în total, în situațiile obișnuite?",
      blocks: [
        {
          kind: "p",
          text: "Adunând intervalele de mai sus pentru varianta cea mai des folosită, cu încărcare convențională, rezultă calendarele orientative de mai jos. La fiecare se adaugă timpul de realizare a coroanei în laborator.",
        },
        {
          kind: "table",
          caption: "Durata orientativă de la extracție până la momentul în care implantul poate primi coroana, cu încărcare convențională",
          head: ["Situația", "Extracție → implant", "Implant → coroană", "Total orientativ"],
          rows: [
            ["Implant imediat", "0", "Peste 2 luni", "Peste 2 luni"],
            ["Implant după vindecarea gingiei", "4 până la 8 săptămâni", "Peste 2 luni", "Aproximativ 3 până la 4 luni"],
            ["Implant după vindecarea parțială a osului", "12 până la 16 săptămâni", "Peste 2 luni", "Aproximativ 5 până la 6 luni"],
            ["Implant în os complet vindecat", "Peste 6 luni", "Peste 2 luni", "Peste 8 luni"],
            ["Ridicare de sinus cu grefă, apoi implant", "Vindecarea grefei, de regulă peste 4,5 luni", "Peste 2 luni", "Adesea aproape de un an"],
          ],
        },
        {
          kind: "p",
          text: "Intervalele sunt praguri minime, nu promisiuni. Momentul exact se stabilește după stabilitatea implantului măsurată la inserare și la control, iar la mandibulă, unde osul este mai dens, vindecarea este mai rapidă decât la maxilar (Journal of Periodontal & Implant Science, 2014).",
        },
      ],
    },
    {
      id: "vindecare-implant",
      heading: "În cât timp se vindecă implantul?",
      blocks: [
        {
          kind: "p",
          text: "Implantul se integrează în os în primele săptămâni și luni după inserare. Tot atunci apar și aproape toate pierderile de implant: într-o meta-analiză pe implanturi unitare, toate eșecurile au fost timpurii, în această fază (Journal of Clinical Periodontology, 2019).",
        },
        {
          kind: "figure",
          src: "/photos/blog-durata-implant-interventie.jpg",
          alt: "Medic cu mănuși care pregătește instrumentele pe tava de lângă scaunul stomatologic, cu pacienta în fundal",
          caption: "foto: ziua inserării implantului, sub anestezie locală",
        },
        {
          kind: "p",
          text: "De aceea, încărcarea convențională, după mai mult de două luni, rămâne reperul cu cea mai lungă documentare. Pentru implantul pus în os vindecat, cu vindecare convențională, supraviețuirea cumulată a fost de 97,5 la sută în cea mai recentă revizuire ITI, pe 140 de studii și 10.456 de implanturi (Clinical Implant Dentistry and Related Research, 2026).",
        },
      ],
    },
    {
      id: "provizoriu",
      heading: "Pot primi un dinte provizoriu imediat?",
      blocks: [
        {
          kind: "p",
          text: "Da, dacă implantul se fixează suficient de ferm la inserare. În acest caz, un dinte provizoriu fix se montează în prima săptămână, iar coroana definitivă vine după vindecare.",
        },
        {
          kind: "p",
          text: "Supraviețuirea cumulată a fost de 98 la sută pentru implantul imediat cu dinte provizoriu în prima săptămână și de 97,2 la sută pentru implantul pus în os vindecat și încărcat imediat. Ambele protocoale sunt considerate validate. În studiile analizate, stabilitatea cerută la inserare a variat de regulă între 25 și 45 N cm (Clinical Implant Dentistry and Related Research, 2026).",
        },
        {
          kind: "p",
          text: "Aceeași revizuire semnalează o excepție: implantul imediat încărcat între o săptămână și două luni a avut o supraviețuire mai mică și mai variabilă, de 91,6 la sută. De aceea, încărcarea precoce după un implant imediat se alege cu grijă.",
        },
        {
          kind: "takeaway",
          items: [
            "Dintele provizoriu fix nu scurtează vindecarea implantului, dar scurtează perioada fără dinte.",
            "Dacă implantul nu are stabilitatea necesară la inserare, dintele provizoriu fix se amână, fără ca planul să fie compromis.",
          ],
        },
      ],
    },
    {
      id: "prelungire",
      heading: "Ce poate prelungi tratamentul?",
      blocks: [
        {
          kind: "ul",
          items: [
            "Lipsa de os. Adiția de os sau ridicarea de sinus adaugă o perioadă de vindecare înainte de implant sau împreună cu el. După ridicarea de sinus, grefele lăsate peste 4,5 luni au format semnificativ mai mult os nou, iar între aproximativ 6 și 10 luni diferența nu a mai fost semnificativă pentru majoritatea materialelor (Journal of Periodontal Research, 2017).",
            "Așteptarea prea lungă după extracție. Creasta pierde 29 până la 63 la sută din lățime în 6 luni, iar un implant amânat mult poate ajunge să ceară adiție de os (Clinical Oral Implants Research, 2012).",
            "Infecția acută în zona extracției, care se tratează de regulă înainte de implant.",
            "Stabilitatea insuficientă la inserare, care mută dintele provizoriu și coroana mai târziu.",
            "Fumatul, care scade rata de succes a implanturilor la aproximativ 85 la sută, față de peste 95 la sută la nefumători (ITI Academy).",
            "Pierderea timpurie a implantului, care cere vindecarea zonei și o nouă inserare.",
          ],
        },
        {
          kind: "p",
          text: "Uneori, adiția de os se poate evita. La maxilarul posterior cu înălțime redusă a osului, implanturile scurte, de cel mult 8 mm, au avut aceeași rată de eșec ca implanturile standard cu ridicare de sinus, în 8 studii randomizate, și mai puțină pierdere de os în jurul implantului (Journal of Stomatology, Oral and Maxillofacial Surgery, 2026). Dacă varianta se potrivește, se vede pe tomografie.",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Cât durează un implant dentar, de la extracție la coroană?",
      a: "De la câteva luni la aproximativ un an. Cu implant imediat și vindecare convențională, implantul poate primi coroana după mai mult de 2 luni. Cu implant în os complet vindecat, după peste 8 luni. Dacă este nevoie de ridicare de sinus, calendarul se apropie adesea de un an.",
    },
    {
      q: "În cât timp se vindecă implantul?",
      a: "Încărcarea convențională, cu cea mai lungă documentare, se face după mai mult de două luni de la inserare. La mandibulă, unde osul este mai dens, vindecarea este mai rapidă decât la maxilar. Momentul exact se stabilește după stabilitatea măsurată a implantului.",
    },
    {
      q: "Pot primi un dinte provizoriu imediat?",
      a: "Da, dacă implantul se fixează ferm la inserare. Un dinte provizoriu fix montat în prima săptămână a avut o supraviețuire cumulată de 98 la sută la implantul imediat și de 97,2 la sută la implantul pus în os vindecat. Coroana definitivă vine după vindecare.",
    },
    {
      q: "Ce poate prelungi tratamentul?",
      a: "Lipsa de os, care cere adiție sau ridicare de sinus, o infecție acută în zona extracției, stabilitatea insuficientă la inserare, fumatul și, rar, pierderea timpurie a implantului. Și o așteptare prea lungă după extracție poate face necesară adiția de os.",
    },
    {
      q: "Cât trebuie să aștept după extracție până la implant?",
      a: "Depinde de os și de gingie. Implantul se poate pune în aceeași ședință, după 4 până la 8 săptămâni, după 12 până la 16 săptămâni sau după mai mult de 6 luni. Varianta se alege pe tomografie, înainte de extracție.",
    },
    {
      q: "Stau fără dinte în tot acest timp?",
      a: "Nu neapărat. Dacă stabilitatea permite, se montează un dinte provizoriu fix în prima săptămână după implant. Altfel, există soluții provizorii mobile pentru perioada de vindecare, discutate la planificare.",
    },
    {
      q: "Câte ședințe sunt necesare?",
      a: "De regulă cel puțin trei: inserarea implantului, amprenta sau scanarea pentru coroană și montarea coroanei, la care se adaugă consultația inițială și controalele. Adiția de os sau extracția separată adaugă ședințe.",
    },
  ],
  sources: [
    {
      id: "cidrr-2026",
      label: "Stadiul actual al dovezilor pentru protocoalele de inserare și încărcare a implanturilor la pacienții parțial edentați: revizuire sistematică",
      publisher: "Clinical Implant Dentistry and Related Research",
      year: "2026",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12828728/",
    },
    {
      id: "coir-2012",
      label: "Modificările dimensionale ale osului și gingiei după extracție la om: revizuire sistematică",
      publisher: "Clinical Oral Implants Research",
      year: "2012",
      url: "https://doi.org/10.1111/j.1600-0501.2011.02375.x",
    },
    {
      id: "jpr-2017",
      label: "Materiale de grefă și timpul de vindecare după ridicarea de sinus: revizuire sistematică și meta-analiză histomorfometrică",
      publisher: "Journal of Periodontal Research",
      year: "2017",
      url: "https://doi.org/10.1111/jre.12402",
    },
    {
      id: "jormas-2026",
      label: "Implanturi scurte față de implanturi standard cu ridicare de sinus la maxilarul posterior atrofic: meta-analiză a studiilor randomizate",
      publisher: "Journal of Stomatology, Oral and Maxillofacial Surgery",
      year: "2026",
      url: "https://doi.org/10.1016/j.jormas.2026.102913",
    },
    {
      id: "jcp-2019",
      label: "Implantul imediat față de implantul amânat pentru înlocuirea unui singur dinte: revizuire sistematică și meta-analiză",
      publisher: "Journal of Clinical Periodontology",
      year: "2019",
      url: "https://doi.org/10.1111/jcpe.13054",
    },
    {
      id: "jpis-2014",
      label: "Comparație radiologică a osteogenezei alveolare la mandibulă și maxilar, pe șase săptămâni",
      publisher: "Journal of Periodontal & Implant Science",
      year: "2014",
      url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4289173/",
    },
    {
      id: "iti-d01m09",
      label: "Factori de risc sistemici în terapia implantară, inclusiv fumatul",
      publisher: "ITI Academy",
      year: "2024",
      url: "https://www.iti.org/iti-academy-modules/narration/D01-M09.html",
    },
  ],
  related: [
    { label: "Implanturi la Drafta dental", href: "/servicii/implanturi-dentare" },
    {
      label: "Implant dentar imediat sau după vindecarea extracției: care este diferența?",
      href: "/blog/implant-dentar-imediat-sau-dupa-vindecare",
    },
    {
      label: "Se pot pune implanturi pe ambele arcade în aceeași ședință?",
      href: "/blog/implanturi-ambele-arcade-aceeasi-sedinta",
    },
    { label: "Programare", href: "/#programare" },
  ],
  verify: [
    "Tabelul de scenarii adună intervalele din definițiile ITI. Nu este măsurat într-un studiu și trebuie confirmat de medic ca reflectând practica cabinetului.",
    "Cât durează realizarea coroanei în laboratorul cu care lucrează cabinetul. Articolul nu dă o cifră.",
    "Numărul real de ședințe la Drafta dental, de la consultație la coroană.",
    "Ce soluție provizorie mobilă oferă cabinetul când dintele provizoriu fix nu este posibil.",
    "Dacă se folosesc implanturi scurte la Drafta dental ca alternativă la ridicarea de sinus.",
    "Cifra de 85 la sută pentru fumători vine din ITI Academy, aceeași sursă ca în articolul despre ambele arcade, nu dintr-un studiu primar.",
    "Aviz medical: articolul nu a fost revizuit de un medic.",
    "Credențialele autorului (facultate, an, competențe, număr CMDR) lipsesc din entitatea de autor.",
  ],
};

export const posts: Post[] = [
  implantImediat,
  durataImplant,
  fateteCeramiceCompozit,
  implanturiBimaxilar,
];

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
