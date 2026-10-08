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
    { label: "Implanturi la Dental Drafta", href: "/servicii/implanturi-dentare" },
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
    {
      label: "All-on-4 sau All-on-6: ce înseamnă și cum diferă?",
      href: "/blog/all-on-4-vs-all-on-6",
    },
    { label: "Programare online", href: "/#programare" },
  ],
  verify: [
    "Procentul concret cu care intervenția simultană reduce costul total față de două intervenții separate. Nu se publică o cifră neverificată.",
    "Intervalul orar real al unei intervenții bimaxilare la Dental Drafta.",
    "Dacă Dental Drafta realizează efectiv reabilitări bimaxilare pe implanturi și cu ce protocoale. Întregul articol presupune că da.",
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
            ["Preț de pornire la Dental Drafta", "1700 lei pe dinte", "650 lei pe dinte"],
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
          text: "Ambele variante sunt disponibile la Dental Drafta, iar prețurile de pornire sunt afișate pe paginile fiecărui tratament. Costul exact se stabilește după consultație, în funcție de numărul de dinți și de starea lor.",
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
      a: "La Dental Drafta, fațetele de compozit pornesc de la 650 lei pe dinte, iar cele ceramice de la 1700 lei pe dinte. Prețul exact se stabilește după consultație, în funcție de numărul de dinți și de situația clinică.",
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
    { label: "Fațete ceramice la Dental Drafta", href: "/servicii/fatete-ceramice" },
    { label: "Fațete de compozit la Dental Drafta", href: "/servicii/fatete-de-compozit" },
    {
      label: "Se pot pune implanturi pe ambele arcade în aceeași ședință?",
      href: "/blog/implanturi-ambele-arcade-aceeasi-sedinta",
    },
    {
      label: "Fațetele pot corecta culoarea dinților foarte închiși?",
      href: "/blog/fatete-pentru-dinti-patati",
    },
    { label: "Programare", href: "/#programare" },
  ],
  verify: [
    "Ce sisteme ceramice folosește cabinetul. Studiul din 2021 arată diferențe semnificative între ceramicile feldspatice și celelalte, iar articolul nu numește niciun material anume.",
    "Dacă se fac fațete fără șlefuire la Dental Drafta și în ce situații.",
    "Dacă prețurile de pornire includ proba, simularea digitală și lucrarea provizorie.",
    "Numărul real de ședințe pentru fiecare variantă, în cabinet.",
    "Intervalele de viață citate pe paginile de servicii (5 până la 7 ani pentru compozit, 10 până la 15 ani pentru ceramică) provin din textele cabinetului. În articol s-au folosit ratele de supraviețuire din studii, nu aceste intervale.",
    "Aviz medical: articolul nu a fost revizuit de un medic.",
    "Credențialele autorului (facultate, an, competențe, număr CMDR) lipsesc din entitatea de autor.",
  ],
};

/**
 * Scris de Dr. Andrei Drafta (versiunea din 3 octombrie 2026), adus la
 * structura blogului. Citările sunt verificate în sursele primare; unde ciorna
 * atribuia ceva greșit, corectura e în `verify`.
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
    "Implant dentar imediat sau după vindecare? Cum diferă protocoalele, când se poate pune în ziua extracției și cât durează până la dintele final.",
  answer:
    "La implantul imediat, extracția și inserarea implantului se fac în aceeași ședință, direct în alveola dintelui scos. La implantul după vindecare, medicul așteaptă 4 până la 8 săptămâni, 12 până la 16 săptămâni sau peste 6 luni, în funcție de cât s-au refăcut gingia și osul. Supraviețuirea implantului este de peste 95 la sută în majoritatea studiilor, pentru ambele variante. Diferența principală este estetică: în zona frontală, gingia se retrage mai des după implantul imediat.",
  authorId: "andrei-drafta",
  datePublished: "2026-09-26",
  dateModified: "2026-10-03",
  categories: ["Implant dentar", "Chirurgie dentară"],
  keyTakeaways: [
    "Clasificarea ITI (International Team for Implantology) numește implantul pus în ziua extracției „Tipul 1”. Implantul după vindecare se pune la 4 până la 8 săptămâni, la 12 până la 16 săptămâni sau după peste 6 luni (Clinical Implant Dentistry and Related Research, 2026).",
    "Majoritatea studiilor raportează o supraviețuire a implanturilor de peste 95 la sută, cu valori similare pentru implantul imediat și pentru cel pus la 4 până la 8 săptămâni (International Journal of Oral & Maxillofacial Implants, 2009).",
    "În zona frontală superioară, gingia se retrage cu peste 1 mm în 9 până la 41 la sută din cazurile cu implant imediat, cu o mediană de 26 la sută, la 1 până la 3 ani (International Journal of Oral & Maxillofacial Implants, 2014).",
    "Implantul imediat cere pereți osoși intacți, un perete spre buză de cel puțin 1 mm, gingie groasă, lipsa unei infecții acute și os suficient pentru fixare (Clinical Oral Implants Research, 2018).",
    "Un spațiu de cel puțin 2 mm între implant și peretele osos dinspre buză crește supraviețuirea implantului imediat, iar o infecție cronică la vârful rădăcinii nu îl contraindică (Clinical Oral Implants Research, 2023).",
    "După extracție, creasta osoasă pierde în 6 luni între 29 și 63 la sută din lățime și între 11 și 22 la sută din înălțime (Clinical Oral Implants Research, 2012).",
  ],
  sections: [
    {
      id: "diferenta",
      heading: "Care este diferența dintre implantul imediat și implantul după vindecare?",
      blocks: [
        {
          kind: "p",
          text: "Diferența ține de momentul în care medicul inserează implantul față de extracție. La implantul imediat, dintele se scoate și implantul se pune în aceeași ședință. La implantul după vindecare, medicul așteaptă între 4 săptămâni și peste 6 luni, timp în care gingia și osul se refac parțial sau complet.",
        },
        {
          kind: "p",
          text: "Specialiștii ITI au împărțit aceste momente în patru tipuri. Criteriul este ce s-a vindecat în alveolă, adică în lăcașul din os în care stătea rădăcina dintelui.",
        },
        {
          kind: "table",
          caption: "Momentul inserării implantului după extracție, după clasificarea ITI",
          head: ["Protocol", "Momentul inserării", "Starea alveolei", "Avantaj principal", "Limită principală"],
          rows: [
            ["Tipul 1: implant imediat", "În ziua extracției", "Alveolă proaspătă, fără gingie care să o acopere", "O singură intervenție pentru extracție și implant", "Risc mai mare de retragere a gingiei în zona frontală"],
            ["Tipul 2: implant precoce", "La 4 până la 8 săptămâni", "Gingia acoperă alveola, osul nu s-a format încă", "Gingie suficientă pentru închiderea plăgii", "Necesită frecvent adiție osoasă în aceeași ședință"],
            ["Tipul 3: implant precoce", "La 12 până la 16 săptămâni", "Os nou format parțial în alveolă", "Stabilitatea implantului se obține mai ușor", "Tratament mai lung decât la tipurile 1 și 2"],
            ["Tipul 4: implant tardiv", "După peste 6 luni", "Os și gingie vindecate", "Zonă stabilă, ușor de evaluat", "Cea mai mare pierdere de os și cel mai lung tratament"],
          ],
        },
        {
          kind: "p",
          text: "Un rezultat estetic bun se poate obține indiferent de momentul inserării. Alegerea depinde de starea osului și a gingiei din jurul dintelui care urmează să fie scos, iar medicul o evaluează înainte de extracție.",
        },
      ],
    },
    {
      id: "implant-imediat",
      heading: "Ce înseamnă implant dentar imediat?",
      blocks: [
        {
          kind: "p",
          text: "Implantul dentar imediat înseamnă că medicul extrage dintele și inserează implantul în alveolă în cadrul aceleiași intervenții. Pentru pacient, asta înseamnă o singură ședință chirurgicală în loc de două.",
        },
        {
          kind: "p",
          text: "Implantul dentar este un șurub, de obicei din titan sau dintr-un aliaj de titan, care înlocuiește rădăcina dintelui. După inserare, osul crește pe suprafața implantului și îl fixează. Procesul se numește osteointegrare.",
        },
        {
          kind: "p",
          text: "Alveola unui dinte extras are forma rădăcinii și este mai largă decât implantul. Medicul poziționează implantul spre palat sau spre limbă și lasă un spațiu față de peretele osos dinspre buză. Consensul ITI din 2023 arată că un spațiu de cel puțin 2 mm crește supraviețuirea implantului imediat (Clinical Oral Implants Research, 2023). Spațiul rămas se poate umple cu material de adiție osoasă, adică granule care susțin formarea de os nou.",
        },
        {
          kind: "p",
          text: "Implantul imediat nu aduce automat și un dinte nou în aceeași zi. Momentul în care se atașează coroana pe implant este o decizie separată. ITI numește încărcare imediată atașarea lucrării în prima săptămână după inserare și încărcare convențională atașarea după mai mult de 2 luni de vindecare (Clinical Implant Dentistry and Related Research, 2026).",
        },
      ],
    },
    {
      id: "dupa-vindecare",
      heading: "Ce înseamnă implant după vindecarea extracției?",
      blocks: [
        {
          kind: "p",
          text: "Implantul după vindecare înseamnă că dintele se extrage, zona se lasă să se vindece, iar implantul se inserează într-o a doua intervenție. Pauza durează între 4 săptămâni și peste 6 luni, în funcție de vindecarea pe care o urmărește medicul.",
        },
        {
          kind: "p",
          text: "La 4 până la 8 săptămâni, adică tipul 2, gingia a acoperit alveola, dar osul nou nu s-a format încă în cantitate semnificativă. În zona frontală, acest moment se alege mai ales când peretele osos dinspre buză are sub 1 mm sau lipsește, cu condiția să existe os suficient spre palat și spre vârful rădăcinii.",
        },
        {
          kind: "p",
          text: "Implantul de tipul 2 se combină frecvent cu o adiție osoasă pe fața dinspre buză a crestei, ca să refacă volumul pierdut. În cele două studii despre această tehnică, peretele osos din față a rămas vizibil pe tomografia 3D în peste 90 la sută din cazuri (International Journal of Oral & Maxillofacial Implants, 2014).",
        },
        {
          kind: "p",
          text: "La 12 până la 16 săptămâni, adică tipul 3, alveola are deja os nou format parțial. Stabilitatea primară, adică fixarea mecanică a implantului imediat după inserare, se obține mai ușor. În schimb, tratamentul durează mai mult decât la tipurile 1 și 2.",
        },
        {
          kind: "p",
          text: "După peste 6 luni, adică tipul 4, osul și gingia s-au vindecat, dar pereții alveolei s-au resorbit cel mai mult. În primele 6 luni după extracție, creasta pierde între 29 și 63 la sută din lățime și între 11 și 22 la sută din înălțime, cel mai repede în primele 3 până la 6 luni (Clinical Oral Implants Research, 2012). Dacă pierderea e mare, medicul poate recomanda o adiție osoasă înaintea implantului.",
        },
        {
          kind: "takeaway",
          items: [
            "Așteptarea mai lungă aduce os mai stabil în alveolă, dar o creastă mai îngustă și mai joasă.",
          ],
        },
      ],
    },
    {
      id: "aceeasi-sedinta",
      heading: "Când poate medicul insera implantul în aceeași ședință cu extracția?",
      blocks: [
        {
          kind: "p",
          text: "Când alveola îndeplinește condițiile recomandate de ITI pentru implantul imediat cu dinte provizoriu (Clinical Oral Implants Research, 2018):",
        },
        {
          kind: "ul",
          items: [
            "Pereții alveolei sunt intacți, iar peretele osos dinspre buză are cel puțin 1 mm grosime.",
            "Gingia este groasă, adică un fenotip gingival gros, care se retrage mai greu.",
            "Zona nu are o infecție acută.",
            "Există os suficient spre vârful rădăcinii și spre palat, ca implantul să stea în poziția corectă și să fie stabil.",
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
          text: "Medicul verifică aceste condiții examinând gingia și pe o radiografie 3D numită CBCT, adică tomografie computerizată cu fascicul conic. Unele detalii apar abia în timpul extracției: dacă peretele dinspre buză se fracturează când dintele este scos, medicul poate decide pe loc să amâne implantul.",
        },
        {
          kind: "p",
          text: "Condițiile nu sunt absolute. Consensul ITI din 2023 precizează că, la o gingie subțire sau la un perete osos sub 1 mm, implantul imediat poate fi totuși luat în considerare, cu o evaluare atentă a defectului (Clinical Oral Implants Research, 2023).",
        },
      ],
    },
    {
      id: "avantaje-riscuri",
      heading: "Care sunt avantajele și riscurile implantului imediat?",
      blocks: [
        {
          kind: "p",
          text: "Principalul avantaj este numărul mai mic de intervenții, fiindcă extracția și implantul se fac într-o singură ședință. Principalul risc este estetic: gingia se poate retrage în dreptul implantului din zona frontală.",
        },
        {
          kind: "p",
          text: "Supraviețuirea implantului, adică faptul că implantul rămâne fixat în os, diferă puțin între protocoale. O analiză pe 91 de studii a găsit rate de peste 95 la sută în majoritatea lor, cu valori similare pentru tipul 1 și tipul 2 (International Journal of Oral & Maxillofacial Implants, 2009). O meta-analiză mai recentă, pe 11 studii randomizate, a găsit totuși mai puține eșecuri la implantul amânat (Oral, 2024). Rezultatele variază între studii, iar selecția cazului contează.",
        },
        {
          kind: "p",
          text: "Riscul estetic are o documentație mai clară. După implantul imediat în zona frontală superioară, gingia se retrage cu peste 1 mm în 9 până la 41 la sută din cazuri, cu o mediană de 26 la sută, în primii 1 până la 3 ani. În cele două studii cu implant precoce, de tipul 2 și 3, nu a apărut niciun caz de acest fel (International Journal of Oral & Maxillofacial Implants, 2014). Retragerea este asociată cu trei factori (International Journal of Oral & Maxillofacial Implants, 2009):",
        },
        {
          kind: "ul",
          items: [
            "un perete osos dinspre buză subțire sau deteriorat;",
            "implantul poziționat prea aproape de buză;",
            "gingia subțire.",
          ],
        },
        {
          kind: "p",
          text: "Remodelarea osului continuă și după implantul imediat. Implantul nu oprește resorbția crestei, iar medicul ține cont de asta când planifică poziția implantului și eventuala adiție osoasă.",
        },
        {
          kind: "takeaway",
          items: [
            "Implantul imediat scurtează tratamentul și reduce numărul de intervenții.",
            "Riscul lui principal este retragerea gingiei în zona frontală, nu pierderea implantului.",
          ],
        },
      ],
    },
    {
      id: "infectie",
      heading: "Ce se întâmplă dacă dintele extras are o infecție?",
      blocks: [
        {
          kind: "p",
          text: "Infecția acută, cu umflătură, puroi sau durere intensă, exclude de regulă implantul imediat (Clinical Oral Implants Research, 2018). O infecție cronică la vârful rădăcinii nu îl contraindică, dacă osul rămas permite fixarea stabilă a implantului (Clinical Oral Implants Research, 2023). Infecția cronică apare ca o leziune pe radiografie și dă adesea puține simptome.",
        },
        {
          kind: "p",
          text: "Medicul decide în funcție de extinderea infecției și de cantitatea de os rămasă după extracție. Dacă infecția a distrus o parte din peretele osos, varianta obișnuită este extracția, vindecarea și implantul la 4 până la 8 săptămâni sau mai târziu.",
        },
      ],
    },
    {
      id: "durata",
      heading: "Cât durează până la dintele definitiv?",
      blocks: [
        {
          kind: "p",
          text: "Durata totală depinde de momentul în care se inserează implantul și de momentul în care se atașează coroana. ITI consideră convențională încărcarea după mai mult de 2 luni de vindecare (Clinical Implant Dentistry and Related Research, 2026). În practică, vindecarea implantului durează de regulă 3 până la 6 luni. La implantul imediat, această perioadă începe chiar din ziua extracției, deci dintele definitiv vine mai repede.",
        },
        {
          kind: "table",
          caption: "Durata orientativă până la coroana definitivă. Estimări clinice ale cabinetului, nu rezultate de studiu",
          head: ["Protocol", "De la extracție la implant", "Vindecarea implantului", "Total până la coroana definitivă"],
          rows: [
            ["Tipul 1: imediat", "0, aceeași ședință", "3 până la 6 luni", "Aproximativ 3 până la 6 luni"],
            ["Tipul 2: precoce", "4 până la 8 săptămâni", "3 până la 6 luni", "Aproximativ 4 până la 8 luni"],
            ["Tipul 3: precoce", "12 până la 16 săptămâni", "3 până la 6 luni", "Aproximativ 6 până la 10 luni"],
            ["Tipul 4: tardiv", "Peste 6 luni", "3 până la 6 luni", "8 luni sau mai mult"],
          ],
        },
        {
          kind: "p",
          text: "Adiția osoasă, calitatea osului și timpul de lucru al laboratorului pot prelungi tratamentul. În perioada de vindecare, pacientul primește de obicei o soluție provizorie. Dacă implantul are o stabilitate primară suficientă, medicul poate atașa o coroană provizorie în prima săptămână. Altfel, pacientul poartă o lucrare provizorie care nu apasă pe implant.",
        },
        {
          kind: "p",
          text: "Toate etapele, de la extracție la coroană, sunt explicate în articolul despre cât durează un implant dentar.",
        },
      ],
    },
    {
      id: "alegere",
      heading: "Cum alege medicul protocolul potrivit?",
      blocks: [
        {
          kind: "p",
          text: "Medicul alege protocolul după starea osului și a gingiei, evaluate la consultația dinaintea extracției, și după poziția dintelui. Criteriile generale de sănătate sunt aceleași pentru orice pacient cu implant, indiferent de momentul inserării.",
        },
        {
          kind: "p",
          text: "Zona contează. În zona frontală, riscul de retragere a gingiei cântărește mai mult, pentru că marginea gingiei se vede la zâmbet. La molari, rădăcinile multiple lasă o alveolă largă, iar medicul urmărește în primul rând stabilitatea implantului.",
        },
        {
          kind: "p",
          text: "Planificarea pornește de la tomografia CBCT și, în multe cazuri, de la o scanare digitală a dinților. Medicul are nevoie și de istoricul medical, inclusiv de lista completă a medicamentelor. Apoi pacientul și medicul discută variantele posibile: numărul de intervenții, durata totală și riscurile fiecărui protocol în cazul respectiv.",
        },
      ],
    },
    {
      id: "cand-la-medic",
      heading: "Când trebuie mers la medic?",
      blocks: [
        {
          kind: "p",
          text: "Dacă un dinte este fracturat sau medicul a spus că trebuie scos, consultația de implantologie se programează înaintea extracției. Implantul imediat se poate face doar în ședința extracției, deci evaluarea trebuie să aibă loc înainte.",
        },
        {
          kind: "p",
          text: "După extracție sau după implant, medicul trebuie contactat dacă:",
        },
        {
          kind: "ul",
          items: [
            "durerea crește după primele zile, în loc să scadă;",
            "umflătura se mărește sau apare febra;",
            "apare puroi sau un gust neplăcut care persistă;",
            "sângerarea nu se oprește la apăsarea cu o compresă;",
            "implantul sau lucrarea provizorie se mișcă.",
          ],
        },
      ],
    },
  ],
  faq: [
    {
      q: "Se poate pune implant imediat după orice extracție?",
      a: "Nu. Implantul imediat cere pereți osoși intacți, un perete dinspre buză de cel puțin 1 mm, gingie groasă, lipsa unei infecții acute și os suficient pentru fixarea implantului. Medicul verifică aceste condiții pe tomografia 3D și la examinarea clinică.",
    },
    {
      q: "Este mai riscant implantul imediat decât implantul pus după vindecare?",
      a: "Supraviețuirea este similară în majoritatea studiilor, peste 95 la sută, deși o meta-analiză pe studii randomizate a găsit mai puține eșecuri la implantul amânat. Riscul mai mare la implantul imediat este estetic: în zona frontală superioară, gingia se retrage cu peste 1 mm în 9 până la 41 la sută din cazuri, cu o mediană de 26 la sută.",
    },
    {
      q: "Cât durează până la dintele definitiv cu implant imediat?",
      a: "În practică, vindecarea implantului durează 3 până la 6 luni, iar la implantul imediat această perioadă începe din ziua extracției. Dacă implantul are stabilitate suficientă, medicul poate atașa o coroană provizorie în prima săptămână.",
    },
    {
      q: "Primesc dinte provizoriu în aceeași zi cu implantul imediat?",
      a: "Depinde de stabilitatea implantului. Coroana provizorie se atașează pe implant doar dacă implantul are o stabilitate primară suficientă. Altfel, se poartă o lucrare provizorie care nu apasă pe implant în timpul vindecării.",
    },
    {
      q: "Se poate pune implant imediat dacă dintele are infecție?",
      a: "Infecția acută exclude de regulă implantul imediat. Conform consensului ITI din 2023, infecția cronică de la vârful rădăcinii nu este o contraindicație, dacă osul rămas permite fixarea stabilă a implantului.",
    },
    {
      q: "Pierd os dacă aștept vindecarea înainte de implant?",
      a: "Da. În primele 6 luni după extracție, creasta osoasă pierde între 29 și 63 la sută din lățime și între 11 și 22 la sută din înălțime, cel mai repede în primele 3 până la 6 luni. De aceea, când condițiile o permit, un implant pus mai devreme găsește mai mult os.",
    },
  ],
  sources: [
    {
      id: "jomi-2009",
      label: "Rezultatele clinice și estetice ale implanturilor puse după extracție: revizuire pe 91 de studii",
      publisher: "International Journal of Oral & Maxillofacial Implants",
      year: "2009",
      url: "https://pubmed.ncbi.nlm.nih.gov/19885446/",
    },
    {
      id: "jomi-2014",
      label: "Rezultatele estetice ale implantului imediat și ale celui precoce în zona frontală superioară: revizuire sistematică pentru consensul ITI",
      publisher: "International Journal of Oral & Maxillofacial Implants",
      year: "2014",
      url: "https://doi.org/10.11607/jomi.2014suppl.g3.3",
    },
    {
      id: "coir-2018",
      label: "Raportul de consens ITI, grupul 2: protocoale de inserare și încărcare, cu condițiile pentru implantul imediat",
      publisher: "Clinical Oral Implants Research",
      year: "2018",
      url: "https://doi.org/10.1111/clr.13298",
    },
    {
      id: "coir-2023",
      label: "Raportul de consens ITI, grupul 5: protocoale de inserare și încărcare a implanturilor",
      publisher: "Clinical Oral Implants Research",
      year: "2023",
      url: "https://doi.org/10.1111/clr.14137",
    },
    {
      id: "oral-2024",
      label: "Supraviețuirea și pierderea de os la implanturile imediate față de cele amânate: meta-analiză pe 11 studii randomizate",
      publisher: "Oral",
      year: "2024",
      url: "https://doi.org/10.3390/oral4030027",
    },
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
  ],
  related: [
    { label: "Implanturi la Dental Drafta", href: "/servicii/implanturi-dentare" },
    {
      label: "Cât durează un implant dentar de la extracție până la coroana definitivă?",
      href: "/blog/cat-dureaza-un-implant-dentar",
    },
    {
      label: "Se poate pune implant dacă nu mai este suficient os?",
      href: "/blog/implant-dentar-fara-os-suficient",
    },
    {
      label: "Implant dentar fără adiție de os: când este posibil?",
      href: "/blog/implant-dentar-fara-aditie-de-os",
    },
    { label: "Programare", href: "/#programare" },
  ],
  verify: [
    "Corectat față de ciornă: ITI definește încărcarea convențională ca „după mai mult de 2 luni”, nu „3-6 luni”. Intervalul de 3-6 luni a rămas ca practică a cabinetului, la fel tabelul de durate.",
    "Corectat față de ciornă: retragerea gingiei din revizuirea din 2014 este „peste 1 mm”, nu „cel puțin 1 mm”.",
    "Adăugat din consensul ITI 2023: la gingie subțire sau perete sub 1 mm, implantul imediat „poate fi totuși luat în considerare”. Ciorna prezenta condițiile ca stricte.",
    "Fără sursă verificată, păstrate fără atribuire: folosirea tipului 2 când peretele dinspre buză are sub 1 mm (ciorna o atribuia echipei Buser), „8 luni sau mai mult” pentru tipul 4 și faptul că implantul imediat nu oprește resorbția crestei.",
    "Scos din ciornă: „recomandările bazate pe consensul ITI preferă inserarea în primele 4 luni”. Nu apare în sursele găsite; răspunsul din întrebările frecvente se sprijină acum pe datele de resorbție.",
    "Legătura din ciornă către /blog/implant-imediat-dupa-extractie nu a fost pusă: articolul nu există. Ideea nr. 5 se suprapune mult cu acesta.",
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
    { label: "Implanturi la Dental Drafta", href: "/servicii/implanturi-dentare" },
    {
      label: "Implant dentar imediat sau după vindecarea extracției: care este diferența?",
      href: "/blog/implant-dentar-imediat-sau-dupa-vindecare",
    },
    {
      label: "Se poate pune implant dacă nu mai este suficient os?",
      href: "/blog/implant-dentar-fara-os-suficient",
    },
    { label: "Programare", href: "/#programare" },
  ],
  verify: [
    "Tabelul de scenarii adună intervalele din definițiile ITI. Nu este măsurat într-un studiu și trebuie confirmat de medic ca reflectând practica cabinetului.",
    "Cât durează realizarea coroanei în laboratorul cu care lucrează cabinetul. Articolul nu dă o cifră.",
    "Numărul real de ședințe la Dental Drafta, de la consultație la coroană.",
    "Ce soluție provizorie mobilă oferă cabinetul când dintele provizoriu fix nu este posibil.",
    "Dacă se folosesc implanturi scurte la Dental Drafta ca alternativă la ridicarea de sinus.",
    "Cifra de 85 la sută pentru fumători vine din ITI Academy, aceeași sursă ca în articolul despre ambele arcade, nu dintr-un studiu primar.",
    "Aviz medical: articolul nu a fost revizuit de un medic.",
    "Credențialele autorului (facultate, an, competențe, număr CMDR) lipsesc din entitatea de autor.",
  ],
};

/**
 * ⚠️ Nu a trecut prin avizul unui medic. Nu se publică fără revizuire medicală.
 * Pornește de la ciorna primită. Citările au fost verificate în rezumatele
 * surselor primare și corectate unde ciorna le atribuia altceva (vezi `verify`).
 */
const osInsuficient: Post = {
  slug: "implant-dentar-fara-os-suficient",
  track: "retrieval",
  image: "/photos/blog-os-insuficient.jpg",
  imageAlt: "Monitor cu o tomografie dentară: reconstrucție 3D a maxilarelor și secțiuni prin os",
  imageCaption: "foto: pe tomografie se măsoară lățimea și înălțimea osului, în milimetri",
  title: "Se poate pune implant dacă nu mai este suficient os?",
  metaTitle: "Implant dentar când osul este insuficient: opțiuni și durată",
  metaDescription:
    "Implant și cu os insuficient: cum se măsoară osul pe CBCT, când se recomandă adiția osoasă sau sinus liftul, ce alternative există și cât durează.",
  answer:
    "Da, în cele mai multe cazuri. Soluția depinde de cât os lipsește și unde. Un deficit mic se completează cu adiție de os în aceeași ședință cu implantul. Un deficit mare se reconstruiește întâi, iar implantul vine după câteva luni. La maxilarul superior, în zona laterală, lipsa de înălțime se compensează prin sinus lift, iar în unele situații un implant scurt sau îngust evită complet adiția.",
  authorId: "andrei-drafta",
  datePublished: "2026-09-30",
  dateModified: "2026-09-30",
  categories: ["Implant dentar", "Chirurgie dentară"],
  keyTakeaways: [
    "După extracție, creasta pierde în medie 3,8 mm în lățime și 1,2 mm în înălțime în 6 luni, cel mai repede în primele 3 până la 6 luni (Clinical Oral Implants Research, 2012).",
    "Când peretele de os dinspre obraz rămâne de cel puțin 1,8 până la 2 mm după pregătirea locului, pierderea de os scade semnificativ (Annals of Periodontology, 2000).",
    "La 5 ani, implanturile de 6 mm au avut o supraviețuire de 98,5 la sută, față de 100 la sută pentru implanturile lungi cu sinus lift, fără diferență semnificativă și fără diferență de complicații (Journal of Clinical Periodontology, 2018).",
    "Cu os rezidual de cel mult 6 mm sub sinus, sinus liftul intern și cel lateral nu au diferit semnificativ ca supraviețuire a implantului sau ca perforare a membranei (Clinical Oral Implants Research, 2023).",
    "Implanturile înguste de 3 până la 3,5 mm nu au avut o supraviețuire diferită de cele standard. Cele sub 3 mm au avut o supraviețuire semnificativ mai mică (Clinical Oral Implants Research, 2018).",
    "La 5 ani, implanturile puse în os augmentat au pierdut în medie 1,9 mm de os în jurul lor, față de 0,8 mm în osul propriu (Journal of Dentistry, 2025).",
  ],
  sections: [
    {
      id: "evaluare",
      heading: "Cum se evaluează volumul osos?",
      blocks: [
        {
          kind: "p",
          text: "Evaluarea pornește de la examenul clinic, iar decizia se ia pe tomografia computerizată cu fascicul conic (CBCT). Imaginea 3D arată lățimea crestei și înălțimea disponibilă până la structurile care trebuie ocolite: nervul alveolar inferior la mandibulă și sinusul maxilar la maxilar. O radiografie panoramică nu oferă aceste măsurători în secțiune.",
        },
        {
          kind: "p",
          text: "Implantul are nevoie de os pe toate părțile. Reperul de lucru este un perete de aproximativ 1,5 până la 2 mm în jurul implantului, mai ales pe partea dinspre obraz. Un studiu pe peste 3.000 de implanturi a arătat că, atunci când peretele dinspre obraz rămâne de 1,8 până la 2 mm după pregătirea locului, pierderea de os scade semnificativ și apare chiar câștig de os (Annals of Periodontology, 2000). Pentru un implant cu diametrul de 4 mm, asta înseamnă o creastă lată de aproximativ 7 până la 8 mm.",
        },
        {
          kind: "p",
          text: "Contează și cât timp a trecut de la extracție. Pe studiile făcute la om, creasta a pierdut în medie 3,8 mm în lățime și 1,2 mm în înălțime în primele 6 luni, cel mai repede în primele 3 până la 6 luni (Clinical Oral Implants Research, 2012). Un dinte extras acum câțiva ani lasă de regulă o creastă mai îngustă.",
        },
      ],
    },
    {
      id: "aditie",
      heading: "Ce este adiția osoasă?",
      blocks: [
        {
          kind: "p",
          text: "La adiția osoasă, numită și regenerare osoasă ghidată, zona deficitară se umple cu material de adiție și se acoperă cu o membrană. Materialul poate fi os propriu, recoltat din altă zonă a gurii, sau os de origine animală prelucrat, de regulă bovin. Pe acest suport, corpul formează os nou în câteva luni.",
        },
        {
          kind: "table",
          caption: "Adiția osoasă simultană față de adiția în etape",
          head: ["Protocol", "Când se alege", "Ce urmează"],
          rows: [
            ["Adiție simultană", "Implantul are stabilitate, iar defectul este mic, de exemplu o porțiune de perete lipsă", "Osul se reface în timpul integrării implantului"],
            ["Adiție în etape", "Implantul nu ar avea stabilitate sau defectul este mare", "Implantul vine după vindecarea adiției, orientativ după 4 până la 6 luni"],
          ],
        },
        {
          kind: "p",
          text: "Adiția funcționează, dar are un cost pe termen lung. O meta-analiză pe studii cu urmărire de cel puțin 5 ani a găsit o pierdere medie de os în jurul implantului de 1,9 mm în osul augmentat, față de 0,8 mm în osul propriu (Journal of Dentistry, 2025). Acesta este unul dintre motivele pentru care, acolo unde se poate, se caută o soluție fără adiție.",
        },
      ],
    },
    {
      id: "sinus-lift",
      heading: "Când este necesar sinus liftul?",
      blocks: [
        {
          kind: "p",
          text: "La maxilarul superior, în zona premolarilor și a molarilor, sinusul maxilar stă deasupra rădăcinilor. După extracție, osul se retrage dinspre gură, iar sinusul coboară spre creastă. Între cele două rămân uneori doar câțiva milimetri de os.",
        },
        {
          kind: "p",
          text: "La sinus lift, chirurgul ridică membrana care căptușește sinusul și pune material de adiție dedesubt. Există două variante:",
        },
        {
          kind: "ul",
          items: [
            "Sinus lift intern, sau crestal: se lucrează prin locul implantului, iar implantul intră de regulă în aceeași ședință. Se alege, orientativ, când rămân cel puțin 5 mm de os.",
            "Sinus lift extern, sau lateral: se deschide o fereastră în peretele lateral al sinusului. Se alege, orientativ, când osul rămas scade sub 4 până la 5 mm. Implantul intră simultan sau după vindecarea grefei.",
          ],
        },
        {
          kind: "figure",
          src: "/photos/blog-os-insuficient-interventie.jpg",
          alt: "Chirurg dentar cu lupe și mască, în timpul unei intervenții la un pacient",
          caption: "foto: adiția osoasă și sinus liftul se fac sub anestezie locală",
        },
        {
          kind: "p",
          text: "Pragurile nu sunt fixe. O meta-analiză pe zone cu cel mult 6 mm de os rămas nu a găsit o diferență semnificativă între cele două tehnici ca supraviețuire a implantului, perforare a membranei sau pierdere de os. Tehnica internă a avut o supraviețuire de 96,5 la sută la cel puțin un an și o rată de perforare a membranei de 5,4 la sută (Clinical Oral Implants Research, 2023).",
        },
        {
          kind: "p",
          text: "Grefa din sinus are nevoie de timp. Într-o meta-analiză pe 136 de studii, grefele lăsate să se vindece peste 4,5 luni au format semnificativ mai mult os nou decât cele mai scurte (Journal of Periodontal Research, 2017). După intervenție, se evită o perioadă suflatul nasului și zborul cu avionul.",
        },
      ],
    },
    {
      id: "alternative",
      heading: "Ce alternative există la adiția osoasă?",
      blocks: [
        {
          kind: "ul",
          items: [
            "Implanturi scurte, de 6 mm. La pacienți cu 5 până la 7 mm de os sub sinus, un studiu randomizat multicentric a găsit la 5 ani o supraviețuire de 98,5 la sută pentru implanturile scurte și de 100 la sută pentru cele lungi cu sinus lift, fără diferențe semnificative de pierdere de os sau de complicații (Journal of Clinical Periodontology, 2018).",
            "Implanturi înguste. Cele de 3 până la 3,5 mm nu au avut o supraviețuire diferită de cele standard, iar cele sub 3 mm au avut o supraviețuire semnificativ mai mică (Clinical Oral Implants Research, 2018). Se folosesc pe creste subțiri și în spații mici, de exemplu la incisivii laterali superiori sau la incisivii inferiori.",
            "Implanturi înclinate. Pe arcadele fără dinți, protocolul All-on-4 ocolește sinusul și nervul prin înclinarea implanturilor din spate.",
            "Implanturi zigomatice, ancorate în osul pomețului, la atrofia severă a maxilarului. Supraviețuirea raportată este între 95,9 și 98,5 la sută, dar dovezile vin mai ales din studii nerandomizate, iar intervenția cere experiență specializată (Journal of Oral Implantology, 2022).",
          ],
        },
        {
          kind: "p",
          text: "Dacă pacientul preferă să evite o intervenție de adiție, o punte sau o proteză rămân opțiuni valide. Când se poate pune implant fără adiție este explicat separat, în articolul dedicat.",
        },
      ],
    },
    {
      id: "durata",
      heading: "Cum influențează osul durata tratamentului?",
      blocks: [
        {
          kind: "table",
          caption: "Durata orientativă până la coroana definitivă, în funcție de os. Estimări clinice, nu rezultate de studiu",
          head: ["Situația", "Ce se face", "Durată orientativă"],
          rows: [
            ["Os suficient", "Implant, apoi integrare în os", "3 până la 6 luni"],
            ["Deficit mic de lățime", "Adiție simultană cu implantul", "5 până la 8 luni"],
            ["Deficit mare", "Adiție în etape, implant după 4 până la 6 luni", "9 până la 12 luni"],
            ["Peste 5 mm de os sub sinus", "Sinus lift intern, cu implant simultan", "5 până la 8 luni"],
            ["Sub 4 până la 5 mm de os sub sinus", "Sinus lift extern, implant după 6 până la 9 luni", "10 până la 15 luni"],
          ],
        },
        {
          kind: "p",
          text: "Durata reală se stabilește după tomografie. Fumatul și diabetul necontrolat încetinesc vindecarea osului și cresc riscul ca adiția să nu reușească. Toate etapele, de la extracție la coroană, sunt explicate în articolul despre cât durează un implant dentar.",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Este obligatorie adiția de os?",
      a: "Nu. Se recomandă atunci când implantul nu ar avea suficient os în jur pentru stabilitate și pentru susținerea gingiei. Uneori, o altă poziție a implantului, un implant scurt sau unul îngust rezolvă situația fără adiție.",
    },
    {
      q: "Cât durează vindecarea?",
      a: "După o adiție simultană, osul se vindecă odată cu implantul. La adiția în etape, implantul vine orientativ după 4 până la 6 luni, apoi urmează integrarea lui. După sinus lift, grefele lăsate peste 4,5 luni au format semnificativ mai mult os nou.",
    },
    {
      q: "CBCT-ul este necesar?",
      a: "La un deficit osos, da. Ghidurile Asociației Europene de Osteointegrare cer ca tomografia să fie justificată, adică să aducă informații pe care alte investigații nu le dau, iar doza să fie cât mai mică. Măsurarea osului în secțiune, lângă nerv sau sinus, este tocmai o astfel de situație.",
    },
    {
      q: "Implanturile scurte sunt la fel de bune ca sinus liftul?",
      a: "La pacienți cu 5 până la 7 mm de os sub sinus, un studiu randomizat nu a găsit la 5 ani diferențe semnificative: supraviețuire de 98,5 la sută pentru implanturile de 6 mm și de 100 la sută pentru cele lungi cu sinus lift.",
    },
    {
      q: "Ce se întâmplă dacă aștept mulți ani după extracție?",
      a: "Creasta continuă să se retragă, cel mai repede în primele luni. După câțiva ani, osul este de regulă mai îngust și mai jos, iar probabilitatea de a avea nevoie de adiție crește.",
    },
    {
      q: "Ce restricții am după sinus lift?",
      a: "O perioadă după intervenție se evită suflatul nasului, strănutul cu gura închisă și zborul cu avionul, pentru a nu pune presiune pe membrana sinusului. Durata exactă se stabilește la control.",
    },
  ],
  sources: [
    {
      id: "coir-2012",
      label: "Modificările dimensionale ale osului și gingiei după extracție la om: revizuire sistematică",
      publisher: "Clinical Oral Implants Research",
      year: "2012",
      url: "https://doi.org/10.1111/j.1600-0501.2011.02375.x",
    },
    {
      id: "ap-2000",
      label: "Influența grosimii osului asupra răspunsului osos vestibular, de la inserare la descoperirea implantului",
      publisher: "Annals of Periodontology",
      year: "2000",
      url: "https://doi.org/10.1902/annals.2000.5.1.119",
    },
    {
      id: "eao-2012",
      label: "Ghidurile EAO pentru imagistica de diagnostic în implantologie",
      publisher: "Clinical Oral Implants Research",
      year: "2012",
      url: "https://doi.org/10.1111/j.1600-0501.2012.02441.x",
    },
    {
      id: "jcp-2018",
      label: "Implanturi scurte de 6 mm față de implanturi lungi cu sinus lift: studiu randomizat multicentric, date la 5 ani",
      publisher: "Journal of Clinical Periodontology",
      year: "2018",
      url: "https://doi.org/10.1111/jcpe.13025",
    },
    {
      id: "coir-2023",
      label: "Sinus lift transcrestal față de lateral la os rezidual de cel mult 6 mm: revizuire sistematică și meta-analiză",
      publisher: "Clinical Oral Implants Research",
      year: "2023",
      url: "https://doi.org/10.1111/clr.14155",
    },
    {
      id: "jpr-2017",
      label: "Materiale de grefă și timpul de vindecare după ridicarea de sinus: revizuire sistematică și meta-analiză histomorfometrică",
      publisher: "Journal of Periodontal Research",
      year: "2017",
      url: "https://doi.org/10.1111/jre.12402",
    },
    {
      id: "coir-2018",
      label: "Implanturi cu diametru redus: revizuire sistematică și meta-analiză",
      publisher: "Clinical Oral Implants Research",
      year: "2018",
      url: "https://doi.org/10.1111/clr.13272",
    },
    {
      id: "jdent-2025",
      label: "Pierderea de os în jurul implanturilor din os augmentat față de os propriu, la cel puțin 5 ani: revizuire sistematică și meta-analiză",
      publisher: "Journal of Dentistry",
      year: "2025",
      url: "https://doi.org/10.1016/j.jdent.2025.105808",
    },
    {
      id: "joi-2022",
      label: "Supraviețuirea și complicațiile implanturilor zigomatice: revizuire sistematică",
      publisher: "Journal of Oral Implantology",
      year: "2022",
      url: "https://doi.org/10.1563/aaid-joi-d-22-00008",
    },
  ],
  related: [
    { label: "Implanturi la Dental Drafta", href: "/servicii/implanturi-dentare" },
    {
      label: "Implant dentar fără adiție de os: când este posibil?",
      href: "/blog/implant-dentar-fara-aditie-de-os",
    },
    {
      label: "Cât durează un implant dentar de la extracție până la coroana definitivă?",
      href: "/blog/cat-dureaza-un-implant-dentar",
    },
    {
      label: "Implant dentar imediat sau după vindecarea extracției: care este diferența?",
      href: "/blog/implant-dentar-imediat-sau-dupa-vindecare",
    },
    { label: "Programare", href: "/#programare" },
  ],
  verify: [
    "Tabelul de durate este preluat din ciornă. Sunt estimări clinice, fără sursă, și trebuie confirmate de medic.",
    "Pragurile pentru sinus lift intern și extern (5 mm, 4 până la 5 mm) și intervalul de 4 până la 6 luni la adiția în etape sunt repere din ciornă, fără sursă. Meta-analiza din 2023 arată că pragurile nu sunt stricte.",
    "Corectat față de ciornă: studiul Thoma din 2018 nu a găsit mai puține complicații la implanturile scurte, ci complicații biologice și tehnice fără diferență semnificativă.",
    "Recomandarea EAO a fost formulată după rezumat (principiul justificării și al dozei minime). Textul integral al ghidului nu a fost citit.",
    "Legăturile din ciornă către articolele #7, #12, #14 și #15 nu au fost puse: articolele nu există încă. De adăugat când apar.",
    "Dacă Dental Drafta face sinus lift, adiție osoasă și implanturi zigomatice, și cu ce materiale de adiție.",
    "Aviz medical: articolul nu a fost revizuit de un medic. Autorul din ciornă era un loc gol, „Dr. Nume Prenume”. Articolul a fost atribuit lui Dr. Andrei Drafta.",
  ],
};

/**
 * ⚠️ Nu a trecut prin avizul unui medic. Nu se publică fără revizuire medicală.
 * Pornește de la ciorna primită. Citările au fost verificate în rezumatele
 * surselor primare și corectate unde ciorna le atribuia altceva (vezi `verify`).
 */
const faraAditie: Post = {
  slug: "implant-dentar-fara-aditie-de-os",
  track: "retrieval",
  image: "/photos/blog-implant-fara-aditie.jpg",
  imageAlt: "Modele din ghips ale arcadelor dentare, pe o masă de lucru cu instrumente stomatologice",
  imageCaption: "foto: modelele de studiu ajută la planificarea poziției implantului",
  title: "Implant dentar fără adiție de os: când este posibil?",
  metaTitle: "Implant dentar fără adiție de os: când este posibil",
  metaDescription:
    "De cât os e nevoie pentru un implant fără adiție, când ajută implanturile scurte sau înguste și cum se stabilește poziția implantului pe CBCT.",
  answer:
    "Un implant se poate pune fără adiție atunci când osul existent îl acoperă pe toate părțile, cu un perete de aproximativ 1,5 până la 2 mm, și permite o poziție corectă pentru coroana viitoare. Când creasta este mai subțire sau mai joasă, un implant scurt, unul îngust sau o altă poziție pot evita adiția. Decizia se ia pe tomografie și pe planificarea digitală.",
  authorId: "andrei-drafta",
  datePublished: "2026-09-30",
  dateModified: "2026-09-30",
  categories: ["Implant dentar", "Chirurgie dentară"],
  keyTakeaways: [
    "Pierderea de os din jurul implantului scade semnificativ când peretele de os dinspre obraz rămâne de 1,8 până la 2 mm după pregătirea locului (Annals of Periodontology, 2000).",
    "Între două implanturi, osul s-a retras în medie 0,45 mm la distanțe de peste 3 mm, față de 1,04 mm la distanțe de 3 mm sau mai puțin (Journal of Periodontology, 2000).",
    "Poziția implantului în toate cele trei direcții contează la fel de mult ca volumul osului, mai ales în zona frontală (International Journal of Oral & Maxillofacial Implants, 2004).",
    "Implanturile de 6 mm au avut la 5 ani aceeași supraviețuire ca implanturile lungi cu sinus lift, fără diferență semnificativă (Journal of Clinical Periodontology, 2018).",
    "Implanturile înguste de 3 până la 3,5 mm nu au avut o supraviețuire diferită de cele standard. Cele sub 3 mm au avut o supraviețuire semnificativ mai mică (Clinical Oral Implants Research, 2018).",
    "În zona frontală, implantul imediat a dus la retragerea gingiei cu peste 1 mm într-o mediană de 26 la sută din cazuri, mai ales acolo unde peretele osos din față lipsea (International Journal of Oral & Maxillofacial Implants, 2014).",
  ],
  sections: [
    {
      id: "volum",
      heading: "Ce volum osos este necesar?",
      blocks: [
        {
          kind: "p",
          text: "Implantul are nevoie de os în jurul lui ca să se integreze și ca să susțină gingia pe termen lung. Chirurgii lucrează cu câteva repere:",
        },
        {
          kind: "table",
          caption: "Repere orientative pentru volumul osos din jurul unui implant",
          head: ["Dimensiune", "Reper orientativ"],
          rows: [
            ["Lățimea crestei", "Diametrul implantului plus 1,5 până la 2 mm pe fiecare parte"],
            ["Înălțimea la mandibulă", "Lungimea implantului plus o marjă de siguranță de aproximativ 2 mm până la nervul alveolar inferior"],
            ["Distanța față de dintele vecin", "Cel puțin 1,5 mm"],
            ["Distanța între două implanturi", "Cel puțin 3 mm"],
          ],
        },
        {
          kind: "p",
          text: "Două dintre repere au studii în spate. Pe peste 3.000 de implanturi, pierderea de os de pe partea dinspre obraz a scăzut semnificativ când peretele a rămas de 1,8 până la 2 mm după pregătirea locului (Annals of Periodontology, 2000). Între două implanturi aflate la peste 3 mm, osul s-a retras în medie 0,45 mm, față de 1,04 mm când distanța a fost de 3 mm sau mai mică, iar de acest os depinde papila dintre ele (Journal of Periodontology, 2000).",
        },
        {
          kind: "p",
          text: "Un implant standard are 3,5 până la 4,5 mm în diametru și 8 până la 13 mm în lungime. Dacă osul permite aceste dimensiuni, adiția nu este necesară.",
        },
        {
          kind: "p",
          text: "Contează și momentul. La om, creasta pierde 29 până la 63 la sută din lățime în primele 6 luni după extracție, cel mai repede în primele 3 până la 6 luni (Clinical Oral Implants Research, 2012). Studiile pe animale arată de ce: peretele dinspre obraz este format dintr-un os care se resoarbe odată cu dispariția dintelui, deci pierde înălțime mai mult decât cel dinspre limbă (Journal of Clinical Periodontology, 2005, studiu la câini). Un implant pus la câteva săptămâni după extracție găsește de regulă mai mult os decât unul pus după câțiva ani.",
        },
      ],
    },
    {
      id: "pozitie",
      heading: "Ce înseamnă poziția tridimensională a implantului?",
      blocks: [
        {
          kind: "p",
          text: "Chirurgul planifică implantul în trei direcții, iar în zona frontală fiecare are o „zonă de confort” și o „zonă de pericol” (International Journal of Oral & Maxillofacial Implants, 2004):",
        },
        {
          kind: "ul",
          items: [
            "Față-spate, adică mezio-distal: implantul păstrează distanța față de dinții vecini și față de alt implant, ca osul dintre ele și papila să rămână.",
            "Obraz-limbă, adică vestibulo-oral: în zona frontală, implantul se mută ușor spre palat, ca să lase os pe partea dinspre buză.",
            "Adâncime, adică apico-coronar: umărul implantului se așază față de marginea gingiei și de dinții vecini, nici prea sus, ca să nu se vadă metalul, nici prea adânc.",
          ],
        },
        {
          kind: "p",
          text: "Uneori, implantul se înclină câteva grade ca să folosească osul disponibil, iar adiția se evită. Limita apare când înclinarea ar strica poziția coroanei. Un implant bine integrat, dar pus greșit, produce o coroană greu de curățat sau inestetică.",
        },
      ],
    },
    {
      id: "scurte-inguste",
      heading: "Implanturile scurte sau înguste pot evita adiția?",
      blocks: [
        {
          kind: "table",
          caption: "Tipuri de implant, după dimensiuni",
          head: ["Tip", "Dimensiuni", "Unde se folosește", "Limită"],
          rows: [
            ["Standard", "3,5 până la 4,5 mm diametru, 8 până la 13 mm lungime", "Majoritatea situațiilor cu os suficient", "Cere volum osos complet"],
            ["Scurt", "6 mm lungime sau mai puțin", "Zona din spate, deasupra nervului sau sub sinus", "Coroana iese mai înaltă decât implantul"],
            ["Îngust", "Sub 3,5 mm diametru", "Incisivi laterali superiori, incisivi inferiori, creste subțiri", "Rezistă mai puțin la forțe mari de masticație"],
          ],
        },
        {
          kind: "p",
          text: "Pentru implanturile scurte există un studiu randomizat multicentric cu 5 ani de urmărire, la pacienți cu 5 până la 7 mm de os sub sinus. Supraviețuirea a fost de 98,5 la sută pentru implanturile de 6 mm și de 100 la sută pentru cele lungi cu sinus lift, fără diferențe semnificative de pierdere de os, de complicații sau de calitate a vieții raportată de pacienți (Journal of Clinical Periodontology, 2018).",
        },
        {
          kind: "p",
          text: "Pentru implanturile înguste, o meta-analiză a împărțit implanturile după diametru. Cele de 3 până la 3,25 mm și cele de 3,3 până la 3,5 mm nu au avut o supraviețuire diferită de implanturile standard, cu 97,3 și 97,7 la sută. Cele sub 3 mm, numite și mini-implanturi, au avut o supraviețuire semnificativ mai mică, de 94,7 la sută. Datele pe termen lung despre complicații lipsesc încă (Clinical Oral Implants Research, 2018).",
        },
        {
          kind: "figure",
          src: "/photos/blog-implant-fara-aditie-radiografie.jpg",
          alt: "Asistentă medicală care îi arată unei paciente o radiografie panoramică pe o tabletă",
          caption: "foto: planul se discută pe imagini, înainte de intervenție",
        },
      ],
    },
    {
      id: "limite",
      heading: "Care sunt limitele evitării adiției?",
      blocks: [
        {
          kind: "p",
          text: "În zona frontală, limita o stabilește estetica. Dacă peretele osos dinspre buză este prea subțire, gingia se poate retrage în timp, iar metalul implantului poate deveni vizibil ca o umbră gri. La implanturile imediate din zona frontală, retragerea gingiei cu peste 1 mm a apărut într-o mediană de 26 la sută din cazuri, iar peretele osos din față, nevizibil pe tomografie, a fost asociat cu mai multă retragere (International Journal of Oral & Maxillofacial Implants, 2014). În aceste cazuri se recomandă de obicei adiția, chiar dacă implantul ar fi stabil fără ea.",
        },
        {
          kind: "p",
          text: "În zona molarilor contează forțele de masticație. Scrâșnitul dinților pune presiune mare pe un implant scurt sau îngust, iar atunci pot fi preferate două implanturi sau un implant mai lat, după adiție.",
        },
        {
          kind: "p",
          text: "Dacă lipsesc mulți milimetri de os, nicio variantă de implant nu compensează. Opțiunile pentru deficitele mari sunt explicate în articolul despre implantul dentar când osul este insuficient.",
        },
      ],
    },
    {
      id: "planificare",
      heading: "Cum ajută planificarea digitală?",
      blocks: [
        {
          kind: "p",
          text: "Tomografia se combină cu o scanare intraorală, iar în program se proiectează întâi coroana, apoi implantul sub ea. Pe ecran se vede cât os rămâne în jurul fiecărui milimetru de implant și se pot încerca mai multe dimensiuni și unghiuri înainte de intervenție. Planul se transferă în gură printr-un ghid chirurgical imprimat 3D.",
        },
        {
          kind: "takeaway",
          items: [
            "Planificarea digitală nu creează os, dar arată dacă osul existent ajunge.",
            "Decizia de a evita adiția se ia pe măsurători, nu pe preferință.",
          ],
        },
      ],
    },
  ],
  faq: [
    {
      q: "Există implant fără os?",
      a: "Nu. Orice implant are nevoie de os ca să se integreze. La atrofia severă a maxilarului se pot folosi implanturi zigomatice, ancorate în osul pomețului, care rămâne tot un suport osos.",
    },
    {
      q: "Implanturile scurte sunt o alternativă?",
      a: "Da, în zona din spate, când osul este suficient de lat, dar prea jos. Pot evita un sinus lift sau o adiție pe verticală. La 5 ani, implanturile de 6 mm au avut o supraviețuire de 98,5 la sută, comparabilă cu a implanturilor lungi cu sinus lift. Înainte de alegere se verifică forțele de masticație și raportul dintre coroană și implant.",
    },
    {
      q: "Cum se stabilește dacă am suficient os?",
      a: "Prin examen clinic și tomografie CBCT. Pe imaginea 3D se măsoară lățimea și înălțimea crestei și distanța până la nerv sau sinus, apoi valorile se compară cu dimensiunea implantului planificat pentru coroana respectivă.",
    },
    {
      q: "Implanturile înguste sunt la fel de rezistente?",
      a: "Cele de 3 până la 3,5 mm au avut o supraviețuire comparabilă cu a implanturilor standard. Cele sub 3 mm au avut o supraviețuire semnificativ mai mică și se folosesc mai ales în situații speciale. Implanturile înguste nu sunt potrivite pentru forțe mari de masticație.",
    },
    {
      q: "De ce contează când pun implantul după extracție?",
      a: "Pentru că osul se retrage cel mai repede în primele 3 până la 6 luni. Cu cât trece mai mult timp, cu atât crește probabilitatea ca implantul să ceară adiție.",
    },
  ],
  sources: [
    {
      id: "ap-2000",
      label: "Influența grosimii osului asupra răspunsului osos vestibular, de la inserare la descoperirea implantului",
      publisher: "Annals of Periodontology",
      year: "2000",
      url: "https://doi.org/10.1902/annals.2000.5.1.119",
    },
    {
      id: "jop-2000",
      label: "Efectul distanței dintre implanturi asupra înălțimii osului dintre ele",
      publisher: "Journal of Periodontology",
      year: "2000",
      url: "https://doi.org/10.1902/jop.2000.71.4.546",
    },
    {
      id: "jomi-2004",
      label: "Optimizarea esteticii implanturilor în zona frontală superioară: considerente anatomice și chirurgicale",
      publisher: "International Journal of Oral & Maxillofacial Implants",
      year: "2004",
      url: "https://pubmed.ncbi.nlm.nih.gov/15635945/",
    },
    {
      id: "coir-2012",
      label: "Modificările dimensionale ale osului și gingiei după extracție la om: revizuire sistematică",
      publisher: "Clinical Oral Implants Research",
      year: "2012",
      url: "https://doi.org/10.1111/j.1600-0501.2011.02375.x",
    },
    {
      id: "jcp-2005",
      label: "Modificările dimensionale ale crestei după extracție: studiu experimental la câini",
      publisher: "Journal of Clinical Periodontology",
      year: "2005",
      url: "https://doi.org/10.1111/j.1600-051X.2005.00642.x",
    },
    {
      id: "jcp-2018",
      label: "Implanturi scurte de 6 mm față de implanturi lungi cu sinus lift: studiu randomizat multicentric, date la 5 ani",
      publisher: "Journal of Clinical Periodontology",
      year: "2018",
      url: "https://doi.org/10.1111/jcpe.13025",
    },
    {
      id: "coir-2018",
      label: "Implanturi cu diametru redus: revizuire sistematică și meta-analiză",
      publisher: "Clinical Oral Implants Research",
      year: "2018",
      url: "https://doi.org/10.1111/clr.13272",
    },
    {
      id: "jomi-2014",
      label: "Rezultatele estetice ale implantului imediat și ale celui precoce în zona frontală superioară: revizuire sistematică",
      publisher: "International Journal of Oral & Maxillofacial Implants",
      year: "2014",
      url: "https://doi.org/10.11607/jomi.2014suppl.g3.3",
    },
  ],
  related: [
    { label: "Implanturi la Dental Drafta", href: "/servicii/implanturi-dentare" },
    {
      label: "Se poate pune implant dacă nu mai este suficient os?",
      href: "/blog/implant-dentar-fara-os-suficient",
    },
    {
      label: "Implant dentar imediat sau după vindecarea extracției: care este diferența?",
      href: "/blog/implant-dentar-imediat-sau-dupa-vindecare",
    },
    {
      label: "Se pot pune implanturi pe ambele arcade în aceeași ședință?",
      href: "/blog/implanturi-ambele-arcade-aceeasi-sedinta",
    },
    {
      label: "Ce este implantul dentar ghidat digital și cum se realizează?",
      href: "/blog/implant-dentar-ghidat-digital",
    },
    { label: "Programare", href: "/#programare" },
  ],
  verify: [
    "Reperele de 1,5 mm față de dintele vecin și de 2 mm până la nerv sunt din ciornă, fără sursă verificată. Au rămas în tabel ca repere orientative.",
    "Corectat față de ciornă: adâncimea „3 până la 4 mm sub marginea gingiei” atribuită lui Buser 2004 nu apare în rezumat și a fost scoasă. De confirmat valoarea din textul integral, dacă medicul vrea o cifră.",
    "Corectat față de ciornă: studiul Araújo și Lindhe din 2005 este pe câini. Cifrele pentru om vin din revizuirea din 2012.",
    "Corectat față de ciornă: studiul Thoma din 2018 nu a găsit mai puține complicații la implanturile scurte. Afirmația despre aliajul titan-zirconiu nu apare în meta-analiza din 2018 și a fost scoasă.",
    "Legăturile din ciornă către articolele #7, #12 și #15 nu au fost puse: articolele nu există încă.",
    "Dacă Dental Drafta face planificare digitală cu ghid chirurgical imprimat 3D. Articolul presupune că da.",
    "Aviz medical: articolul nu a fost revizuit de un medic. Autorul din ciornă era un loc gol, „Dr. Nume Prenume”. Articolul a fost atribuit lui Dr. Andrei Drafta.",
  ],
};

/**
 * Scris de Dr. Andrei Drafta (3 octombrie 2026), adus la structura blogului.
 * Citările sunt verificate în sursele primare; corecturile sunt în `verify`.
 * Ambele fotografii sunt de pe Wikimedia Commons, CC BY-SA: autorul și licența
 * trebuie să rămână în legendă.
 */
const ghidatDigital: Post = {
  slug: "implant-dentar-ghidat-digital",
  track: "retrieval",
  image: "/photos/ghid-chirurgical-implant-printat-3d.jpg",
  imageAlt: "Ghid chirurgical printat 3D, așezat pe un model dentar, pentru inserarea ghidată a unui implant",
  imageCaption: "foto: ghid chirurgical printat 3D, cu manșoane metalice (Svonf, CC BY-SA 3.0, Wikimedia Commons)",
  title: "Ce este implantul dentar ghidat digital și cum se realizează?",
  metaTitle: "Implant dentar ghidat digital: ce este și cum se face",
  metaDescription:
    "Medicul planifică implantul pe CBCT și îl inserează printr-un ghid chirurgical. Vezi cât de precisă e metoda, etapele și limitele ei.",
  answer:
    "La implantul ghidat digital, medicul planifică pe calculator poziția, adâncimea și înclinarea implantului, pe baza unei tomografii 3D (CBCT) și a unei scanări a dinților. Planul se transferă apoi în gură printr-un ghid chirurgical printat 3D, prin care trec frezele și implantul. Metoda este mai precisă decât inserarea liberă: complet ghidat, abaterea medie la vârful implantului a fost sub 1 mm, față de peste 2 mm cu mâna liberă.",
  authorId: "andrei-drafta",
  datePublished: "2026-10-03",
  dateModified: "2026-10-03",
  categories: ["Implant dentar", "Chirurgie dentară"],
  keyTakeaways: [
    "Pe 55 de studii, chirurgia complet ghidată a avut abateri medii de 0,72 mm la intrarea implantului, 0,88 mm la vârf și 2,57°, față de 1,56 mm, 2,22 mm și 7,46° la inserarea liberă (International Journal of Implant Dentistry, 2025).",
    "Pe 20 de studii clinice și 2.238 de implanturi, ghidul static a avut o abatere medie de 1,2 mm la intrare, 1,4 mm la vârf și 3,5°, cu precizie mai bună la pacienții care mai au dinți (Clinical Oral Implants Research, 2018).",
    "Pentru că abaterile la vârf ajung la 1 până la 2 mm, se recomandă o marjă de siguranță de 2 mm față de nerv și de alte structuri sensibile (International Journal of Implant Dentistry, 2025).",
    "Implanturile puse ghidat au avut o supraviețuire medie de 97,3 la sută după cel puțin 12 luni, pe 1.941 de implanturi (International Journal of Oral & Maxillofacial Implants, 2014).",
    "Chirurgia ghidată se poate face cu incizie sau fără, iar ghidurile sprijinite pe dinți, pe gingie sau pe mini-implanturi au fost mai precise decât cele sprijinite pe os (consensul ITI, 2013).",
    "Consensul ITI din 2018 nu a găsit un avantaj demonstrat al ghidului static față de chirurgia convențională la durere, cost și complicații din timpul intervenției (Clinical Oral Implants Research, 2018).",
  ],
  sections: [
    {
      id: "ce-inseamna",
      heading: "Ce înseamnă implant dentar ghidat digital?",
      blocks: [
        {
          kind: "p",
          text: "Înseamnă că poziția, adâncimea și înclinarea implantului se stabilesc pe calculator înainte de intervenție. În timpul operației, medicul folosește un ghid chirurgical care conduce frezele pe traseul planificat. Pentru pacient, diferența apare mai ales în pregătire: cele mai multe decizii se iau înainte de ziua intervenției.",
        },
        {
          kind: "p",
          text: "Chirurgia ghidată statică folosește un ghid care reproduce poziția virtuală a implantului din datele tomografiei. Odată fabricat, ghidul static nu permite modificarea poziției implantului în timpul intervenției.",
        },
        {
          kind: "p",
          text: "Există și o variantă dinamică, numită navigație dinamică: o cameră urmărește freza în timp real, iar medicul vede pe ecran poziția ei față de plan. La inserarea liberă, medicul se orientează după radiografii și după reperele din gură, fără ghid.",
        },
      ],
    },
    {
      id: "precizie",
      heading: "Cât de precisă este chirurgia ghidată față de inserarea liberă?",
      blocks: [
        {
          kind: "p",
          text: "În medie, chirurgia ghidată este mai precisă decât inserarea liberă, iar varianta complet ghidată are cele mai mici abateri. Abaterea înseamnă diferența dintre poziția planificată pe calculator și poziția reală a implantului în os, măsurată la intrarea implantului, la vârful lui și ca unghi.",
        },
        {
          kind: "table",
          caption: "Abaterea medie față de plan, după metodă. Meta-analiză pe 55 de studii (International Journal of Implant Dentistry, 2025)",
          head: ["Metodă", "Ce conduce freza", "La intrare", "La vârf", "Unghi"],
          rows: [
            ["Inserare liberă", "Repere clinice și radiografii, fără ghid", "1,56 mm", "2,22 mm", "7,46°"],
            ["Parțial ghidat", "Doar prima freză, freza pilot, trece prin ghid", "1,13 mm", "1,43 mm", "5,94°"],
            ["Complet ghidat, ghid static", "Toate frezele și implantul trec prin ghid", "0,72 mm", "0,88 mm", "2,57°"],
            ["Navigație dinamică", "O cameră urmărește freza în timp real", "1,01 mm", "1,36 mm", "3,67°"],
          ],
        },
        {
          kind: "p",
          text: "Diferențele dintre inserarea liberă și metodele asistate de calculator au fost semnificative, iar ghidul complet a fost semnificativ mai precis decât navigația dinamică la intrarea implantului (International Journal of Implant Dentistry, 2025).",
        },
        {
          kind: "p",
          text: "Consensul ITI din 2018 a analizat 20 de studii clinice cu ghid static, pe 2.238 de implanturi la 471 de pacienți, și a raportat abateri medii de 1,2 mm la intrare, 1,4 mm la vârf și 3,5° ca unghi. Precizia a fost mai bună la pacienții care mai au dinți pe arcadă decât la cei fără dinți (Clinical Oral Implants Research, 2018).",
        },
        {
          kind: "p",
          text: "Abaterile la vârf ajung la 1 până la 2 mm. De aceea, ambele analize recomandă o marjă de siguranță de cel puțin 2 mm în planificare, față de structurile sensibile, cum este nervul mandibular.",
        },
        {
          kind: "takeaway",
          items: [
            "Complet ghidat, abaterea medie la vârf a fost sub 1 mm, față de peste 2 mm la inserarea liberă.",
            "Nicio metodă nu este perfectă, de aceea planul păstrează 2 mm de siguranță față de nerv.",
          ],
        },
      ],
    },
    {
      id: "cbct-scanare",
      heading: "Ce rol au CBCT-ul și scanarea intraorală?",
      blocks: [
        {
          kind: "p",
          text: "CBCT-ul arată osul, iar scanarea intraorală arată dinții și gingia, iar planificarea are nevoie de amândouă. CBCT, adică tomografia computerizată cu fascicul conic, este o radiografie 3D a maxilarelor. Pe ea se măsoară înălțimea și lățimea osului și se vede poziția nervului mandibular și a sinusului maxilar.",
        },
        {
          kind: "p",
          text: "Scanarea intraorală înlocuiește amprenta clasică: o cameră mică trece peste dinți și obține un model 3D al arcadei, vizibil imediat pe ecran. Programul de planificare suprapune apoi CBCT-ul și scanarea, folosind dinții ca repere comune. Medicul verifică suprapunerea, pentru că o aliniere greșită s-ar transmite în ghid. De obicei, CBCT-ul și scanarea se fac în aceeași vizită.",
        },
      ],
    },
    {
      id: "planificare",
      heading: "Cum se face planificarea virtuală a implantului?",
      blocks: [
        {
          kind: "p",
          text: "Planificarea pornește de la dintele final. Întâi se proiectează coroana pe calculator, apoi implantul se așază în os sub ea. Consensul ITI cere ca chirurgia ghidată să fie condusă protetic, adică poziția implantului urmează lucrarea finală (Clinical Oral Implants Research, 2018).",
        },
        {
          kind: "figure",
          src: "/photos/planificare-virtuala-implant-cbct.jpg",
          alt: "Planificare virtuală a unui implant dentar pe imagini CBCT, cu reconstrucție 3D și secțiuni prin os",
          caption: "foto: planificarea implantului pe secțiunile CBCT (Svonf, CC BY-SA 3.0, Wikimedia Commons)",
          aspect: "1024 / 543",
        },
        {
          kind: "p",
          text: "În programul de planificare se aleg lungimea și diametrul implantului și se măsoară distanța față de nerv, sinus și rădăcinile vecine. Tot acolo se verifică dacă osul permite poziția dorită. Dacă osul lipsește, planul arată de la început unde este nevoie de adiție osoasă, adică de adăugare de os sau de material de grefă. Planul se poate arăta pacientului pe ecran, la consultație.",
        },
      ],
    },
    {
      id: "ghid",
      heading: "Ce este ghidul chirurgical și cum se fabrică?",
      blocks: [
        {
          kind: "p",
          text: "Ghidul chirurgical este o placă printată 3D după planul virtual, cu manșoane metalice prin care trec frezele. Se așază pe dinți, pe gingie sau pe mini-implanturi temporare. Manșoanele limitează direcția și adâncimea frezelor, astfel încât locul implantului urmează planul.",
        },
        {
          kind: "p",
          text: "Ghidurile sprijinite pe dinți, pe gingie sau pe mini-implanturi au fost mai precise decât cele sprijinite direct pe os, iar consensul ITI recomandă doar primele (consensul ITI, 2013). La pacienții cu dinți, ghidul se sprijină de obicei pe dinții vecini. La pacienții fără dinți, ghidul stă pe gingie și se poate fixa cu mici știfturi.",
        },
        {
          kind: "p",
          text: "Ghidul se fabrică fie în cabinet, cu o imprimantă 3D, fie într-un laborator dentar.",
        },
      ],
    },
    {
      id: "interventie",
      heading: "Cum decurge intervenția ghidată?",
      blocks: [
        {
          kind: "ul",
          items: [
            "Se face anestezia locală a zonei.",
            "Ghidul se așază în gură și se verifică dacă stă stabil pe dinți sau pe gingie.",
            "Locul implantului se pregătește cu freze de diametru crescător, trecute prin manșoane.",
            "Implantul se inserează tot prin ghid, apoi ghidul se îndepărtează și zona se închide.",
          ],
        },
        {
          kind: "p",
          text: "Inserarea implantului prin ghid contează: după pregătirea locului prin ghid, implantul pus tot prin ghid a fost mai precis decât cel pus cu mâna liberă (consensul ITI, 2013).",
        },
        {
          kind: "p",
          text: "Ghidul ajută judecata clinică a medicului, fără să o înlocuiască. Potrivirea greșită și sprijinul insuficient sunt cauze practice de eroare. Dacă ghidul nu stă corect, medicul poate modifica planul sau poate continua fără ghid. Durata intervenției depinde de numărul de implanturi.",
        },
        {
          kind: "p",
          text: "Chirurgia ghidată se poate combina cu diferite protocoale de încărcare, la pacienți cu unul sau mai mulți dinți lipsă și la cei fără dinți (consensul ITI, 2013). Asta include o coroană provizorie în primele zile, dacă implantul are stabilitate suficientă.",
        },
      ],
    },
    {
      id: "incizie",
      heading: "Implantul ghidat digital înseamnă intervenție fără incizie?",
      blocks: [
        {
          kind: "p",
          text: "Nu întotdeauna. Ghidul se poate folosi fără incizie, tehnică numită flapless, sau cu ridicarea unui lambou, adică a unei porțiuni de gingie, pentru a vedea osul (consensul ITI, 2013).",
        },
        {
          kind: "p",
          text: "Alegerea depinde de mucoasa keratinizată, adică de gingia fermă și atașată din jurul dinților. Consensul ITI din 2018 cere ca înainte de planificare să se evalueze cantitatea și calitatea acestei gingii. Dacă este nevoie de adiție osoasă, intervenția se face de regulă cu incizie.",
        },
        {
          kind: "p",
          text: "Tehnica fără incizie are un beneficiu documentat la pacienții fără dinți: durerea după intervenție poate fi mai mică decât la intervenția cu lambou (Clinical Oral Implants Research, 2018).",
        },
      ],
    },
    {
      id: "limite",
      heading: "Pentru cine este potrivită chirurgia ghidată și care sunt limitele ei?",
      blocks: [
        {
          kind: "p",
          text: "Consensul ITI din 2018 nu vede o contraindicație pentru folosirea ghidului static în locul chirurgiei convenționale și îl recomandă ca instrument suplimentar de diagnostic, planificare și chirurgie. Ghidul se alege mai ales când poziția implantului are puțină marjă, de exemplu lângă nerv sau lângă sinus, ori când se pun mai multe implanturi.",
        },
        {
          kind: "p",
          text: "Metoda are și limite clare:",
        },
        {
          kind: "ul",
          items: [
            "Deschiderea gurii. Ghidul și frezele cer spațiu vertical între arcade, iar în zona molarilor o deschidere redusă poate face ghidul greu de folosit (Bioengineering, 2024).",
            "Răcirea și vizibilitatea. Manșoanele închise îngreunează răcirea osului cu ser fiziologic și reduc vizibilitatea. Manșoanele deschise lateral rezolvă o parte din problemă, cu o precizie comparabilă când manșonul stă aproape de os (Clinical Oral Implants Research, 2022).",
            "Arcadele fără dinți. Precizia medie este mai mică decât la pacienții care mai au dinți.",
            "Complicațiile din timpul tratamentului. Într-o revizuire pe 14 studii, în 36,4 la sută din cazuri au apărut complicații în timpul intervenției sau la lucrare, printre care fracturarea ghidului, schimbarea planului din lipsă de stabilitate sau nevoia unei adiții suplimentare (International Journal of Oral & Maxillofacial Implants, 2014).",
            "Durere, cost și complicații. Consensul ITI nu a găsit un avantaj demonstrat față de chirurgia convențională la aceste criterii, iar efectul asupra timpului și costului rămâne neclar (Clinical Oral Implants Research, 2018).",
          ],
        },
      ],
    },
    {
      id: "cand-la-medic",
      heading: "Când trebuie mers la medic?",
      blocks: [
        {
          kind: "p",
          text: "Dacă lipsește un dinte sau un dinte trebuie extras, se programează o consultație de implantologie. La prima vizită sunt utile radiografiile vechi și lista completă a medicamentelor.",
        },
        {
          kind: "p",
          text: "După inserarea implantului, medicul trebuie contactat dacă:",
        },
        {
          kind: "ul",
          items: [
            "durerea crește după primele zile, în loc să scadă;",
            "umflătura se mărește sau apare febra;",
            "sângerarea nu se oprește la apăsarea cu o compresă;",
            "buza sau bărbia rămân amorțite după ce trece efectul anesteziei;",
            "implantul sau lucrarea provizorie se mișcă.",
          ],
        },
      ],
    },
  ],
  faq: [
    {
      q: "Este mai precisă chirurgia ghidată decât implantul pus cu mâna liberă?",
      a: "Da, în medie. O meta-analiză pe 55 de studii a găsit la chirurgia complet ghidată abateri medii de 0,72 mm la intrare și 2,57° ca înclinare, față de 1,56 mm și 7,46° la inserarea liberă. Precizia depinde și de tipul ghidului și de numărul de dinți rămași.",
    },
    {
      q: "Implantul ghidat digital înseamnă întotdeauna fără tăietură?",
      a: "Nu. Ghidul se poate folosi fără incizie sau cu ridicarea gingiei, în funcție de os și de cantitatea de gingie fermă din zonă. Consensul ITI cere evaluarea gingiei fixe înainte de planificarea unei intervenții fără incizie.",
    },
    {
      q: "Este potrivită chirurgia ghidată pentru orice pacient?",
      a: "Consensul ITI nu vede o contraindicație pentru folosirea ghidului în locul chirurgiei convenționale. Limitele apar mai ales la deschiderea redusă a gurii în zona molarilor și la arcadele fără dinți, unde precizia medie este mai mică.",
    },
    {
      q: "Doare mai puțin un implant ghidat digital?",
      a: "Consensul ITI din 2018 nu a găsit un avantaj demonstrat al chirurgiei ghidate la durere și disconfort, comparativ cu chirurgia convențională. Excepția este tehnica fără incizie la pacienții fără dinți, unde durerea după intervenție poate fi mai mică.",
    },
    {
      q: "Implantul inserat ghidat rezistă la fel de bine ca unul inserat clasic?",
      a: "Datele de până acum sunt bune: implanturile puse ghidat au avut o supraviețuire medie de 97,3 la sută după cel puțin 12 luni, pe 1.941 de implanturi. Datele pe termen lung sunt încă puține.",
    },
    {
      q: "Se poate face implant ghidat pe toată arcada?",
      a: "Da. Chirurgia ghidată se poate folosi la pacienții cu unul sau mai mulți dinți lipsă și la cei fără dinți, cu diferite protocoale de încărcare. La arcadele fără dinți, precizia medie este mai mică decât la pacienții care mai au dinți.",
    },
  ],
  sources: [
    {
      id: "ijid-2025",
      label: "Inserare liberă față de inserare asistată de calculator: revizuire sistematică și meta-analiză, partea 1, precizia poziției implantului",
      publisher: "International Journal of Implant Dentistry",
      year: "2025",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12048383/",
    },
    {
      id: "coir-2018-tahmaseb",
      label: "Precizia chirurgiei de implant asistate static de calculator: revizuire sistematică și meta-analiză pentru consensul ITI",
      publisher: "Clinical Oral Implants Research",
      year: "2018",
      url: "https://doi.org/10.1111/clr.13346",
    },
    {
      id: "coir-2018-joda",
      label: "Chirurgia de implant asistată static de calculator: durere, cost și complicații, revizuire sistematică pentru consensul ITI",
      publisher: "Clinical Oral Implants Research",
      year: "2018",
      url: "https://doi.org/10.1111/clr.13136",
    },
    {
      id: "iti-2013",
      label: "Chirurgia de implant ghidată pe calculator: declarațiile de consens ITI",
      publisher: "ITI Academy",
      year: "2013",
      url: "https://academy.iti.org/academy/consensus-database/consensus-statement/-/consensus/computer-guided-implant-surgery/1213",
    },
    {
      id: "jomi-2014-tahmaseb",
      label: "Aplicațiile tehnologiei computerizate în chirurgia implantară: revizuire sistematică",
      publisher: "International Journal of Oral & Maxillofacial Implants",
      year: "2014",
      url: "https://doi.org/10.11607/jomi.2014suppl.g1.2",
    },
    {
      id: "bioeng-2024",
      label: "Eficiența unui ghid chirurgical digital nou în spațiu redus între arcade",
      publisher: "Bioengineering",
      year: "2024",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11674003/",
    },
    {
      id: "coir-2022",
      label: "Precizia inserării ghidate cu manșoane deschise și închise: studiu in vitro",
      publisher: "Clinical Oral Implants Research",
      year: "2022",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9302989/",
    },
  ],
  related: [
    { label: "Implanturi la Dental Drafta", href: "/servicii/implanturi-dentare" },
    {
      label: "Implant dentar fără adiție de os: când este posibil?",
      href: "/blog/implant-dentar-fara-aditie-de-os",
    },
    {
      label: "Se poate pune implant dacă nu mai este suficient os?",
      href: "/blog/implant-dentar-fara-os-suficient",
    },
    {
      label: "Implant dentar imediat sau după vindecarea extracției: care este diferența?",
      href: "/blog/implant-dentar-imediat-sau-dupa-vindecare",
    },
    { label: "Programare", href: "/#programare" },
  ],
  verify: [
    "Abaterea la vârf: rezumatul lui Tahmaseb 2018 dă 1,4 mm, iar declarația de consens ITI dă 1,5 mm. În articol a rămas 1,4 mm, cu sursa articolului.",
    "Supraviețuirea de 97,3 la sută vine din consensul ITI din 2013 (Tahmaseb 2014), nu din cel din 2018. Ciorna o atribuia consensului fără an. „Comparabilă cu implanturile convenționale” a fost înlocuit cu „date pe termen lung încă puține”, cum spun autorii.",
    "Adăugat din aceeași sursă: complicații în 36,4 la sută din cazuri, inclusiv fracturarea ghidului.",
    "Fără sursă găsită, păstrate fără atribuire: fixarea ghidului cu știfturi la arcadele fără dinți, incizia când e nevoie de adiție, alegerea ghidului lângă nerv sau sinus. Afirmația „flapless poate plasa implantul în afara gingiei fixe” a fost redusă la ce spune consensul: evaluarea gingiei înainte de planificare.",
    "Marcajele [CHECK] din ciornă (CBCT și scanare în aceeași vizită, ghid fabricat în cabinet sau în laborator, planul arătat pe ecran) au rămas ca practică a cabinetului.",
    "Fotografiile sunt CC BY-SA de pe Wikimedia Commons: autorul și licența trebuie păstrate în legendă. Captura de software arată marca implantului (BIOMET 3i), nu date de pacient.",
    "Legăturile din ciornă către /blog/implant-dentar-fara-taietura și /blog/analize-inainte-de-implant-dentar nu au fost puse: articolele nu există încă.",
    "Credențialele autorului (facultate, an, competențe, număr CMDR) lipsesc din entitatea de autor.",
  ],
};

/**
 * Subiectul nr. 3 din foaia editorială. Citările sunt verificate în rezumatele
 * surselor primare și în declarațiile de consens ITI. Lista de [VERIFY] este
 * în câmpul `verify`.
 */
const allOn4vs6: Post = {
  slug: "all-on-4-vs-all-on-6",
  track: "retrieval",
  image: "/photos/all-on-4-model-implanturi.jpg",
  imageAlt: "Model dentar transparent cu implanturi inserate în os, sub dinți",
  imageCaption: "foto: model transparent cu implanturi, pentru explicarea lucrărilor pe arcadă",
  title: "All-on-4 sau All-on-6: ce înseamnă și cum diferă?",
  metaTitle: "All-on-4 vs All-on-6: ce înseamnă și cum diferă",
  metaDescription:
    "All-on-4 și All-on-6 explicate: câte implanturi, cum se distribuie, ce spun studiile despre rezistență și complicații și cum se alege soluția.",
  answer:
    "Amândouă înlocuiesc toți dinții unei arcade cu o lucrare fixă, prinsă pe implanturi. La All-on-4, lucrarea stă pe patru implanturi, iar cele din spate sunt înclinate ca să ocolească sinusul sau nervul, de multe ori fără adiție de os. La All-on-6 sunt șase implanturi, deci mai multe puncte de sprijin. Studiile arată o supraviețuire similară a implanturilor, așa că alegerea depinde de os, de arcadă, de mușcătură și de buget, nu de o regulă de tipul „mai multe e mereu mai bine”.",
  authorId: "andrei-drafta",
  datePublished: "2026-10-08",
  dateModified: "2026-10-08",
  categories: ["Implant dentar", "Protetică dentară", "Chirurgie dentară"],
  keyTakeaways: [
    "Consensul ITI recomandă cel puțin patru implanturi distribuite corespunzător pentru o lucrare fixă dintr-o singură bucată pe toată arcada (Clinical Oral Implants Research, 2018).",
    "Pe 93 de studii, cu o urmărire mediană de 8 ani, supraviețuirea implanturilor și a lucrărilor nu a diferit semnificativ între mai puțin de cinci și cinci sau mai multe implanturi pe arcadă (Clinical Oral Implants Research, 2018).",
    "O meta-analiză pe 55 de studii a găsit, la peste 5 ani, o supraviețuire de 98,1 la sută pentru All-on-4 și de 97,5 la sută pentru All-on-6, cu o pierdere de os de 1,28 mm, respectiv 0,94 mm (International Journal of Oral and Maxillofacial Surgery, 2026).",
    "Într-un studiu randomizat pe maxilar, la 5 ani, patru implanturi nu au fost inferioare celor șase, dar au avut mai multe complicații tehnice, 16,6 la sută față de 0, și un cost mai mic (Clinical Oral Implants Research, 2025).",
    "Implanturile înclinate nu au eșuat mai des decât cele drepte, dar au pierdut puțin mai mult os pe termen lung, în medie 0,18 mm (International Journal of Oral & Maxillofacial Implants, 2024).",
    "Pe 245 de pacienți urmăriți până la 10 ani, All-on-4 la mandibulă a avut o supraviețuire a implanturilor de 94,8 la sută și a lucrărilor de 99,2 la sută (Journal of the American Dental Association, 2011).",
  ],
  sections: [
    {
      id: "ce-inseamna",
      heading: "Ce înseamnă All-on-4 și All-on-6?",
      blocks: [
        {
          kind: "p",
          text: "Sunt două variante ale aceluiași principiu: o arcadă întreagă de dinți, fixă, susținută de implanturi. Lucrarea se prinde cu șuruburi pe implanturi, nu se scoate acasă și nu acoperă cerul gurii, ca o proteză mobilă.",
        },
        {
          kind: "p",
          text: "All-on-4 este numele unui protocol cu patru implanturi: două drepte în zona din față și două înclinate în zona din spate. All-on-6 este denumirea folosită pentru varianta cu șase implanturi, de obicei mai drepte și distribuite pe toată arcada. Numele sunt comerciale; în literatura de specialitate se vorbește despre lucrări fixe pe patru sau pe șase implanturi.",
        },
      ],
    },
    {
      id: "diferente",
      heading: "Cum diferă numărul și distribuția implanturilor?",
      blocks: [
        {
          kind: "table",
          caption: "All-on-4 față de All-on-6, pe criteriile care contează pentru pacient",
          head: ["Criteriu", "All-on-4", "All-on-6"],
          rows: [
            ["Număr de implanturi pe arcadă", "4", "6"],
            ["Poziția implanturilor", "Două drepte în față, două înclinate în spate", "Distribuite pe toată arcada, de obicei mai drepte"],
            ["Nevoia de adiție osoasă", "Mai rar, pentru că implanturile înclinate folosesc osul existent", "Mai des, dacă osul din spate nu permite șase implanturi"],
            ["Supraviețuire la peste 5 ani", "98,1 la sută", "97,5 la sută"],
            ["Pierdere de os la 5 ani", "1,28 mm", "0,94 mm"],
            ["Dacă se pierde un implant", "Lucrarea rămâne pe trei, de regulă trebuie refăcută", "Rămân cinci puncte de sprijin"],
            ["Lucrare din mai multe bucăți", "Nu", "Posibilă"],
            ["Cost", "Mai mic", "Mai mare, pentru că sunt mai multe implanturi"],
          ],
        },
        {
          kind: "p",
          text: "Datele de supraviețuire și de pierdere de os din tabel vin dintr-o meta-analiză pe 55 de studii, ale cărei autori atrag atenția că studiile diferă mult între ele, deci cifrele se citesc cu prudență (International Journal of Oral and Maxillofacial Surgery, 2026).",
        },
      ],
    },
    {
      id: "rezistenta",
      heading: "Care dintre ele rezistă mai mult?",
      blocks: [
        {
          kind: "p",
          text: "Diferența de rezistență este mică. Revizuirea care stă la baza consensului ITI a analizat 93 de studii, cu o urmărire între 1 și 15 ani, și nu a găsit o diferență semnificativă de supraviețuire a implanturilor sau a lucrărilor între mai puțin de cinci și cinci sau mai multe implanturi pe arcadă (Clinical Oral Implants Research, 2018).",
        },
        {
          kind: "p",
          text: "Un studiu randomizat multicentric pe maxilar a comparat direct cele două variante, la 47 de pacienți cu 233 de implanturi. La 5 ani, supraviețuirea a fost de 100 la sută cu patru implanturi și de 99,3 la sută cu șase, fără diferență de pierdere de os. Grupul cu patru implanturi a avut însă complicații tehnice în 16,6 la sută din cazuri, față de niciunul în grupul cu șase, iar costul a fost mai mic cu patru (Clinical Oral Implants Research, 2025).",
        },
        {
          kind: "p",
          text: "Pe termen lung, All-on-4 la mandibulă are una dintre cele mai lungi urmăriri: pe 245 de pacienți și 980 de implanturi, supraviețuirea implanturilor a fost de 94,8 la sută, iar a lucrărilor de 99,2 la sută, la până la 10 ani (Journal of the American Dental Association, 2011).",
        },
        {
          kind: "takeaway",
          items: [
            "Mai multe implanturi nu înseamnă automat o lucrare care rezistă mai mult.",
            "Diferența dintre cele două se vede mai ales la complicațiile tehnice și la cost, nu la supraviețuirea implanturilor.",
          ],
        },
      ],
    },
    {
      id: "os",
      heading: "Ce rol are volumul osos?",
      blocks: [
        {
          kind: "p",
          text: "Volumul osos decide de multe ori între cele două. După pierderea dinților, osul se retrage, iar în spate apar două obstacole: sinusul maxilar sus și nervul mandibular jos. Implanturile înclinate din All-on-4 ocolesc aceste zone și folosesc osul din față, care se păstrează de obicei mai bine.",
        },
        {
          kind: "p",
          text: "Consensul ITI enumeră implanturile înclinate printre opțiunile care reduc cât de invazivă este intervenția, alături de implanturile scurte sau înguste. Adiția de os este recomandată atunci când planul protetic cere mai multe implanturi sau o distribuție mai bună (consensul ITI, 2018).",
        },
        {
          kind: "p",
          text: "Implanturile înclinate nu eșuează mai des decât cele drepte. O revizuire a meta-analizelor publicate nu a găsit diferență de eșec, dar a găsit o pierdere de os puțin mai mare pe termen lung, în medie 0,18 mm (International Journal of Oral & Maxillofacial Implants, 2024).",
        },
      ],
    },
    {
      id: "biomecanica",
      heading: "Ce se schimbă la lucrarea protetică?",
      blocks: [
        {
          kind: "p",
          text: "Cu cât implanturile sunt mai puține, cu atât fiecare preia mai multă forță, iar lucrarea are de obicei o porțiune în consolă în spate, adică dinți care nu au implant dedesubt. De aici vin, în parte, complicațiile tehnice mai frecvente la patru implanturi: șuruburi slăbite, fisuri sau fracturi ale dinților din lucrare.",
        },
        {
          kind: "figure",
          src: "/photos/all-on-6-lucrare-arcada.jpg",
          alt: "Lucrare dentară pe toată arcada, pe un model din ghips, în laboratorul de tehnică dentară",
          caption: "foto: lucrare pe toată arcada, în laborator, înainte de montare",
        },
        {
          kind: "p",
          text: "Consensul ITI cere ca, la alegerea numărului de implanturi, să se țină cont de ce s-ar întâmpla dacă un implant s-ar pierde mai târziu. Cu șase implanturi, lucrarea se poate face și din mai multe bucăți, iar pierderea unui implant lasă mai mult sprijin (consensul ITI, 2018).",
        },
        {
          kind: "p",
          text: "Materialul contează și el. Meta-analiza din 2026 notează că lucrările din zirconiu pot reduce complicațiile mecanice (International Journal of Oral and Maxillofacial Surgery, 2026).",
        },
      ],
    },
    {
      id: "imediat",
      heading: "Se pot face dinți ficși imediat?",
      blocks: [
        {
          kind: "p",
          text: "Da, la ambele variante, dacă implanturile se fixează suficient de stabil la inserare. Pe 62 de studii și peste 13.000 de implanturi la pacienți fără dinți, încărcarea imediată cu o lucrare fixă a avut o supraviețuire a implanturilor între 90,1 și 100 la sută, la o urmărire de 1 până la 10 ani, cu condiția selectării atente a cazurilor (International Journal of Oral & Maxillofacial Implants, 2014).",
        },
        {
          kind: "p",
          text: "Lucrarea montată în prima zi este de regulă una provizorie. Lucrarea definitivă se face după integrarea implanturilor în os. Când ambele arcade se tratează odată, cele două lucrări provizorii se reglează una față de cealaltă, cum este explicat în articolul despre implanturile pe ambele arcade.",
        },
      ],
    },
    {
      id: "alegere",
      heading: "Cum se alege soluția?",
      blocks: [
        {
          kind: "p",
          text: "Pornind de la lucrarea finală, nu de la numărul de implanturi. Consensul ITI cere ca planul protetic să fie stabilit înaintea celui chirurgical (consensul ITI, 2018). Câteva repere care apar constant în discuție:",
        },
        {
          kind: "ul",
          items: [
            "Osul disponibil, măsurat pe tomografie: dacă în spate nu este os pentru șase implanturi fără adiție, All-on-4 cu implanturi înclinate evită o intervenție în plus.",
            "Arcada: la maxilar, osul este mai puțin dens, iar mulți medici preferă mai multe implanturi; la mandibulă, patru implanturi sunt frecvent suficiente.",
            "Mușcătura: o forță mare de masticație sau scrâșnitul dinților cer mai mult sprijin și un material rezistent.",
            "Siguranța pe termen lung: cu șase implanturi, pierderea unuia afectează mai puțin lucrarea.",
            "Bugetul: patru implanturi costă mai puțin la început și, în studiul randomizat, și în total.",
          ],
        },
      ],
    },
  ],
  faq: [
    {
      q: "Mai multe implanturi înseamnă automat mai bine?",
      a: "Nu. Pe 93 de studii, supraviețuirea nu a diferit semnificativ între mai puțin de cinci și cinci sau mai multe implanturi pe arcadă. Șase implanturi aduc mai mult sprijin și mai puține complicații tehnice, dar cer mai mult os și costă mai mult.",
    },
    {
      q: "Se pot face dinți ficși imediat?",
      a: "Da, la ambele variante, dacă implanturile sunt suficient de stabile la inserare. Încărcarea imediată a avut o supraviețuire a implanturilor între 90,1 și 100 la sută în studiile analizate. Lucrarea din prima zi este provizorie; cea definitivă vine după integrarea implanturilor.",
    },
    {
      q: "Cum se alege soluția?",
      a: "Pornind de la lucrarea finală și de la osul disponibil, măsurat pe tomografie. Contează și arcada, mușcătura, riscul de a pierde un implant pe termen lung și bugetul.",
    },
    {
      q: "Cât rezistă o lucrare All-on-4?",
      a: "Pe 245 de pacienți urmăriți până la 10 ani, supraviețuirea implanturilor a fost de 94,8 la sută, iar a lucrărilor de 99,2 la sută. Cu igienă bună și controale regulate, lucrarea poate funcționa mulți ani.",
    },
    {
      q: "Se poate face All-on-4 fără adiție de os?",
      a: "De multe ori da. Implanturile din spate se înclină ca să ocolească sinusul sau nervul și să folosească osul existent. Decizia se ia pe tomografie, după ce se măsoară osul.",
    },
    {
      q: "Care costă mai mult?",
      a: "All-on-6, pentru că are mai multe implanturi și piese protetice. În studiul randomizat pe maxilar, costul a fost mai mic cu patru implanturi atât la început, cât și în total. Prețul exact se stabilește după consultație.",
    },
  ],
  sources: [
    {
      id: "coir-2018-iti",
      label: "Raportul de consens ITI, grupul 2: protetica și implantologia, cu recomandările privind numărul de implanturi",
      publisher: "Clinical Oral Implants Research",
      year: "2018",
      url: "https://doi.org/10.1111/clr.13298",
    },
    {
      id: "coir-2018-polido",
      label: "Numărul de implanturi pentru lucrări fixe pe toată arcada: revizuire sistematică și meta-analiză",
      publisher: "Clinical Oral Implants Research",
      year: "2018",
      url: "https://doi.org/10.1111/clr.13312",
    },
    {
      id: "ijoms-2026",
      label: "Lucrări fixe All-on-4 și All-on-6 la pacienții fără dinți: revizuire sistematică și meta-analiză",
      publisher: "International Journal of Oral and Maxillofacial Surgery",
      year: "2026",
      url: "https://doi.org/10.1016/j.ijom.2026.04.002",
    },
    {
      id: "coir-2025",
      label: "Lucrări fixe pe maxilar pe patru față de șase implanturi: rezultatele la 5 ani ale unui studiu randomizat multicentric",
      publisher: "Clinical Oral Implants Research",
      year: "2025",
      url: "https://doi.org/10.1111/clr.14383",
    },
    {
      id: "jomi-2024",
      label: "Eșecul și pierderea de os la implanturile înclinate față de cele drepte: revizuire a meta-analizelor",
      publisher: "International Journal of Oral & Maxillofacial Implants",
      year: "2024",
      url: "https://doi.org/10.11607/jomi.10885",
    },
    {
      id: "jada-2011",
      label: "Supraviețuirea implanturilor All-on-4 la mandibulă, cu urmărire de până la 10 ani",
      publisher: "Journal of the American Dental Association",
      year: "2011",
      url: "https://doi.org/10.14219/jada.archive.2011.0170",
    },
    {
      id: "jomi-2014-loading",
      label: "Protocoalele de încărcare a implanturilor la pacienții fără dinți cu lucrări fixe: revizuire sistematică și meta-analiză",
      publisher: "International Journal of Oral & Maxillofacial Implants",
      year: "2014",
      url: "https://doi.org/10.11607/jomi.2014suppl.g4.3",
    },
    {
      id: "iti-2018-numar",
      label: "Numărul de implanturi pentru lucrări fixe pe toată arcada: declarațiile de consens ITI",
      publisher: "ITI Academy",
      year: "2018",
      url: "https://academy.iti.org/academy/consensus-database/consensus-statement/-/consensus/number-of-implants-placed-for-complete-arch-fixed-prostheses/1701",
    },
  ],
  related: [
    { label: "Implanturi la Dental Drafta", href: "/servicii/implanturi-dentare" },
    {
      label: "Se pot pune implanturi pe ambele arcade în aceeași ședință?",
      href: "/blog/implanturi-ambele-arcade-aceeasi-sedinta",
    },
    {
      label: "Se poate pune implant dacă nu mai este suficient os?",
      href: "/blog/implant-dentar-fara-os-suficient",
    },
    {
      label: "Ce este implantul dentar ghidat digital și cum se realizează?",
      href: "/blog/implant-dentar-ghidat-digital",
    },
    { label: "Programare", href: "/#programare" },
  ],
  verify: [
    "Dacă Dental Drafta face lucrări All-on-4 și All-on-6, cu ce sisteme de implant și din ce material sunt lucrările definitive.",
    "„All-on-4” este marcă Nobel Biocare. Articolul o folosește ca denumire uzuală, fără a recomanda un producător.",
    "Rândurile „Dacă se pierde un implant”, „Lucrare din mai multe bucăți” și „Nevoia de adiție osoasă” din tabel sunt deduse din recomandările ITI și din principiul tehnicii, nu cifre de studiu.",
    "Prețul orientativ pentru o arcadă completă la cabinet nu apare în articol.",
    "Credențialele autorului (facultate, an, competențe, număr CMDR) lipsesc din entitatea de autor.",
  ],
};

/**
 * Subiectul nr. 4 din foaia editorială. Citările sunt verificate în rezumatele
 * surselor primare. Studiul despre grosimea ceramicii este de laborator, iar
 * articolul o spune. Lista de [VERIFY] este în câmpul `verify`.
 */
const fateteDintiPatati: Post = {
  slug: "fatete-pentru-dinti-patati",
  track: "retrieval",
  image: "/photos/fatete-dinti-inchisi-cheie-culori.jpg",
  imageAlt: "Cheie de culori dentară, cu mostre de la nuanțe foarte deschise la nuanțe închise",
  imageCaption: "foto: cheia de culori, de la nuanțe deschise la nuanțe închise",
  title: "Fațetele pot corecta culoarea dinților foarte închiși?",
  metaTitle: "Fațete pentru dinți pătați sau închiși la culoare",
  metaDescription:
    "Pot fațetele acoperi dinții foarte închiși la culoare? Cauzele petelor, albirea înainte, dinții devitali și cât de groasă trebuie să fie ceramica.",
  answer:
    "Da, în cele mai multe cazuri, dar cu cât dintele este mai închis, cu atât fațeta are mai mult de ascuns. Ceramica trebuie atunci să fie mai opacă sau mai groasă, iar uneori se face o albire înainte, ca diferența de acoperit să fie mai mică. Într-un studiu de laborator, o fațetă din ceramică de 0,4 până la 0,5 mm, opacă și cimentată cu un ciment de culoarea dintelui, a ascuns complet o dentină închisă. La pigmentări foarte puternice, o coroană poate fi alegerea mai bună.",
  authorId: "andrei-drafta",
  datePublished: "2026-10-08",
  dateModified: "2026-10-08",
  categories: ["Estetică dentară", "Fațete dentare"],
  keyTakeaways: [
    "Într-un studiu de laborator, ceramica de disilicat de litiu a ascuns complet o dentină închisă la culoare de la 0,4 până la 0,5 mm grosime, cu un material opac și un ciment de culoarea dintelui (Journal of Esthetic and Restorative Dentistry, 2024).",
    "Cu o ceramică translucidă și un ciment transparent, diferența de culoare se mai vedea chiar la 0,7 până la 0,8 mm (Journal of Esthetic and Restorative Dentistry, 2024).",
    "Ochiul observă diferențe mici de culoare: pragul de la care jumătate dintre observatori văd o diferență este ΔE00 0,8, iar cel de la care jumătate o consideră inacceptabilă este 1,8 (Journal of Esthetic and Restorative Dentistry, 2015).",
    "Albirea scade aderența adezivilor la smalț și dentină, dar efectul dispare după două până la trei săptămâni (Operative Dentistry, 2021).",
    "Albirea internă schimbă semnificativ nuanța dinților devitali, adică a celor cu tratament de canal (Journal of Endodontics, 2022).",
    "Faptul că dintele are sau nu tratament de canal nu a schimbat semnificativ supraviețuirea fațetelor ceramice; contează cât smalț rămâne pentru lipire (Journal of Esthetic and Restorative Dentistry, 2025).",
  ],
  sections: [
    {
      id: "cauze",
      heading: "De ce se închid dinții la culoare?",
      blocks: [
        {
          kind: "p",
          text: "Cauza contează, pentru că de ea depinde dacă pata se scoate, se albește sau trebuie acoperită. Medicii despart două tipuri de pigmentare.",
        },
        {
          kind: "ul",
          items: [
            "Pete de suprafață, venite din cafea, ceai, vin roșu sau fumat. Se îndepărtează de regulă prin igienizare și albire, fără fațete.",
            "Pigmentări din interiorul dintelui: după tratamente cu tetraciclină în copilărie, din fluoroză, după un traumatism sau un tratament de canal, ori odată cu vârsta. Acestea nu pleacă la periaj, iar albirea le reduce doar în parte.",
          ],
        },
        {
          kind: "p",
          text: "Fațetele intră în discuție mai ales la a doua categorie, când albirea singură nu ajunge sau când se schimbă și forma dinților.",
        },
      ],
    },
    {
      id: "orice-culoare",
      heading: "Pot fațetele acoperi orice culoare?",
      blocks: [
        {
          kind: "p",
          text: "Aproape orice culoare, dar nu cu orice fațetă. O fațetă subțire și translucidă lasă să se vadă dintele de dedesubt, ceea ce e un avantaj la un dinte sănătos și o problemă la unul închis la culoare. Pentru a ascunde o culoare închisă, ceramica trebuie să fie mai opacă, mai groasă sau amândouă.",
        },
        {
          kind: "p",
          text: "Ochiul este exigent. Un studiu pe 175 de observatori a stabilit că o diferență de culoare de ΔE00 0,8 este observată de jumătate dintre ei, iar una de 1,8 este considerată inacceptabilă de jumătate (Journal of Esthetic and Restorative Dentistry, 2015). De aceea, între o fațetă care „acoperă” și una care acoperă fără să se vadă diferența sunt zecimi de milimetru.",
        },
        {
          kind: "p",
          text: "La pigmentări foarte puternice, fațeta ar trebui să fie atât de groasă și de opacă încât ar cere o șlefuire mare și ar arăta artificial. Atunci, o coroană sau o combinație de albire și fațetă sunt de obicei soluții mai bune.",
        },
      ],
    },
    {
      id: "grosime",
      heading: "Cât de groasă trebuie să fie ceramica?",
      blocks: [
        {
          kind: "p",
          text: "Un studiu de laborator pe dentină naturală și dentină închisă la culoare a căutat grosimea minimă de la care observatorii nu mai vedeau diferența, pentru ceramică de disilicat de litiu (Journal of Esthetic and Restorative Dentistry, 2024).",
        },
        {
          kind: "table",
          caption: "Grosimea de la care ceramica a ascuns dentina închisă la culoare, într-un studiu de laborator",
          head: ["Ceramica", "Cimentul", "Grosimea care a ascuns culoarea"],
          rows: [
            ["Opacă", "De culoarea dintelui", "0,5 mm, fără diferențe vizibile peste această grosime"],
            ["Opacă", "Transparent", "0,4 mm, dar cu diferențe încă vizibile la unele grosimi mai mari"],
            ["Translucidă", "De culoarea dintelui", "0,4 mm, cu diferențe încă vizibile la 0,5 și 0,8 mm"],
            ["Translucidă", "Transparent", "0,6 mm, cu diferențe încă vizibile la 0,7 și 0,8 mm"],
          ],
        },
        {
          kind: "p",
          text: "Concluzia autorilor: ascunderea se poate obține de la 0,4 până la 0,5 mm, cu un material opac și un ciment de culoarea dintelui. Studiul a folosit dentină bovină colorată, nu dinți de pacienți, deci la un dinte foarte închis în gură pot fi necesare valori mai mari.",
        },
        {
          kind: "takeaway",
          items: [
            "Opacitatea ceramicii și culoarea cimentului contează aproape la fel de mult ca grosimea.",
            "Cu cât dintele e mai închis, cu atât crește nevoia de spațiu, deci de șlefuire.",
          ],
        },
      ],
    },
    {
      id: "albire",
      heading: "Trebuie albire înainte de fațete?",
      blocks: [
        {
          kind: "p",
          text: "Adesea da, pentru că reduce diferența pe care fațeta trebuie să o ascundă. Un dinte mai deschis permite o fațetă mai subțire și mai translucidă, deci mai puțină șlefuire și un aspect mai natural.",
        },
        {
          kind: "p",
          text: "Ordinea și pauza contează. Albirea scade aderența adezivilor la smalț și dentină, iar o meta-analiză pe 52 de studii de laborator a arătat că efectul nu mai apare după două până la trei săptămâni (Operative Dentistry, 2021). De aceea, fațetele se cimentează de regulă la cel puțin două săptămâni după albire, timp în care și nuanța dinților se stabilizează.",
        },
      ],
    },
    {
      id: "devital",
      heading: "Un dinte devital poate fi mascat?",
      blocks: [
        {
          kind: "p",
          text: "Da. Un dinte cu tratament de canal se închide adesea la culoare din interior. Primul pas este de obicei albirea internă: substanța de albire se pune în interiorul dintelui, nu pe suprafață. O meta-analiză a găsit o schimbare semnificativă a nuanței după albirea internă, cu mai multe substanțe folosite frecvent (Journal of Endodontics, 2022).",
        },
        {
          kind: "p",
          text: "Dacă după albire diferența rămâne, fațeta o poate ascunde. Faptul că dintele are tratament de canal nu a schimbat semnificativ supraviețuirea fațetelor ceramice într-un studiu pe 672 de fațete. Ce a contat a fost cât smalț a rămas pentru lipire: 96,7 la sută supraviețuire pe smalț, față de 93,9 la sută când peste 30 la sută din suprafață era dentină (Journal of Esthetic and Restorative Dentistry, 2025).",
        },
      ],
    },
    {
      id: "natural",
      heading: "Cum se păstrează aspectul natural?",
      blocks: [
        {
          kind: "p",
          text: "Echilibrul este greu: o fațetă prea opacă ascunde culoarea, dar arată ca un dinte fals, plat și prea alb. O fațetă prea translucidă arată natural, dar lasă să se vadă dintele închis. Soluția se caută caz cu caz.",
        },
        {
          kind: "figure",
          src: "/photos/fatete-dinti-inchisi-alegerea-nuantei.jpg",
          alt: "Mâini cu mănuși care țin o cheie de culori dentară, folosită la alegerea nuanței",
          caption: "foto: alegerea nuanței se face pe cheia de culori, la lumină naturală",
        },
        {
          kind: "ul",
          items: [
            "Nuanța se alege pe cheia de culori și pe fotografii, nu doar la lumina din cabinet.",
            "Un mock-up, adică o probă provizorie a formei, arată rezultatul înainte de șlefuire.",
            "Se pot combina straturi: un strat interior care ascunde culoarea și unul exterior translucid, care dă naturalețea.",
            "Proba cu pastă de probă, înainte de cimentare, arată cum influențează cimentul culoarea finală.",
          ],
        },
      ],
    },
    {
      id: "pe-scurt",
      heading: "Ce se face, în funcție de cauză?",
      blocks: [
        {
          kind: "table",
          caption: "Abordarea obișnuită, după tipul de pigmentare. Decizia finală se ia la consultație",
          head: ["Situația", "Primul pas", "Când intră în discuție fațetele"],
          rows: [
            ["Pete de suprafață, de la cafea, ceai sau fumat", "Igienizare și albire", "Rar, doar dacă se schimbă și forma"],
            ["Pigmentare ușoară sau medie în interiorul dintelui", "Albire, apoi evaluare", "Dacă diferența rămâne după albire"],
            ["Pigmentare puternică, de exemplu după tetraciclină", "Albire, pentru a reduce contrastul", "Fațete opace sau coroane, după caz"],
            ["Un singur dinte devital, închis la culoare", "Albire internă", "Dacă diferența față de dinții vecini rămâne"],
          ],
        },
      ],
    },
  ],
  faq: [
    {
      q: "Fațetele acoperă orice culoare?",
      a: "Aproape orice culoare, dar cu cât dintele e mai închis, cu atât fațeta trebuie să fie mai opacă și mai groasă. Într-un studiu de laborator, 0,4 până la 0,5 mm de ceramică opacă, cu ciment de culoarea dintelui, au ascuns complet o dentină închisă. La pigmentări foarte puternice, o coroană poate fi alegerea mai bună.",
    },
    {
      q: "Trebuie albire înainte?",
      a: "Adesea da, pentru că reduce diferența de acoperit și permite o fațetă mai subțire. Fațetele se cimentează de regulă la cel puțin două săptămâni după albire, pentru că albirea scade temporar aderența adezivilor.",
    },
    {
      q: "Un dinte devital poate fi mascat?",
      a: "Da. Primul pas este de obicei albirea internă, care schimbă semnificativ nuanța dinților cu tratament de canal. Dacă diferența rămâne, o fațetă o poate ascunde, iar tratamentul de canal nu a scăzut semnificativ supraviețuirea fațetelor.",
    },
    {
      q: "Se șlefuiește mai mult la dinții foarte închiși?",
      a: "De obicei da, pentru că ceramica are nevoie de grosime ca să ascundă culoarea. Albirea înainte poate reduce această nevoie. Cât smalț rămâne contează pentru rezistență, așa că șlefuirea se planifică pe un mock-up.",
    },
    {
      q: "Coroană sau fațetă pentru un dinte foarte închis?",
      a: "Depinde de cât de închis este și de cât țesut sănătos a rămas. Dacă fațeta ar trebui să fie foarte groasă și opacă, sau dacă dintele este și foarte distrus, coroana este de obicei soluția mai bună.",
    },
  ],
  sources: [
    {
      id: "jerd-2024",
      label: "Capacitatea restaurărilor minim invazive din disilicat de litiu de a ascunde dinții pigmentați: rolul grosimii, translucidității și cimentului",
      publisher: "Journal of Esthetic and Restorative Dentistry",
      year: "2024",
      url: "https://doi.org/10.1111/jerd.13146",
    },
    {
      id: "jerd-2015",
      label: "Pragurile de diferență de culoare în stomatologie",
      publisher: "Journal of Esthetic and Restorative Dentistry",
      year: "2015",
      url: "https://doi.org/10.1111/jerd.12149",
    },
    {
      id: "opdent-2021",
      label: "Albirea vitală influențează aderența adezivilor la smalț și dentină: revizuire sistematică și meta-analiză",
      publisher: "Operative Dentistry",
      year: "2021",
      url: "https://doi.org/10.2341/20-035-lit",
    },
    {
      id: "joe-2022",
      label: "Eficiența substanțelor folosite la albirea internă: revizuire sistematică și meta-analiză",
      publisher: "Journal of Endodontics",
      year: "2022",
      url: "https://doi.org/10.1016/j.joen.2021.10.011",
    },
    {
      id: "jerd-2025",
      label: "Supraviețuirea fațetelor ceramice în funcție de expunerea dentinei și de vitalitatea dintelui, la 1 până la 15 ani",
      publisher: "Journal of Esthetic and Restorative Dentistry",
      year: "2025",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12618969/",
    },
  ],
  related: [
    { label: "Fațete ceramice la Dental Drafta", href: "/servicii/fatete-ceramice" },
    { label: "Albire dentară la Dental Drafta", href: "/servicii/albire-dentara" },
    {
      label: "Fațete ceramice sau fațete de compozit: care este diferența?",
      href: "/blog/fatete-ceramice-sau-compozit",
    },
    { label: "Programare", href: "/#programare" },
  ],
  verify: [
    "Ce sisteme ceramice și ce cimenturi folosește cabinetul pentru dinții pigmentați.",
    "Dacă Dental Drafta face albire internă la dinții devitali.",
    "Intervalul de cel puțin două săptămâni între albire și cimentare este dedus din meta-analiza din 2021, care este pe studii de laborator; de confirmat cu protocolul cabinetului.",
    "Cauzele pigmentării din prima secțiune sunt cunoștințe generale, fără cifre, deci fără citare.",
    "Subiectul nr. 2 din foaia editorială (fațete ceramice sau bonding cu compozit) se suprapune cu articolul existent despre fațete ceramice sau de compozit; recomandat să fie integrat acolo, nu publicat separat.",
    "Credențialele autorului (facultate, an, competențe, număr CMDR) lipsesc din entitatea de autor.",
  ],
};

export const posts: Post[] = [
  allOn4vs6,
  fateteDintiPatati,
  ghidatDigital,
  faraAditie,
  osInsuficient,
  implantImediat,
  durataImplant,
  fateteCeramiceCompozit,
  implanturiBimaxilar,
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}
