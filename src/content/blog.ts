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
    { label: "Implanturi la Drafta dental", href: "/servicii/implanturi-dentare" },
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
    "Blocul de articole conexe are acum o legătură internă către al doilea articol. Mai sunt necesare încă 1 pana la 2 articole pentru o rețea internă completă.",
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

export const posts: Post[] = [fateteCeramiceCompozit, implanturiBimaxilar];

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
