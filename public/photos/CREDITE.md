# Fotografii

## Reale, de la cabinet

Originalele stau în `foto-client/`, în rădăcina repo-ului. Ce se află în folderul
acesta sunt copiile pregătite pentru web.

| Fișier | Slot | Original |
|---|---|---|
| `cabinet-principal.jpg` | Hero, 21:9 | `image principal.JPG`, redus la 2400px |
| `despre-radiografie.webp` | Despre noi, 1:1 | `guidance image.webp` |
| `cabinet.webp` | Locație, 4:3 | `poza cabinet.webp` |
| `dr-andrei-drafta.jpg` | Echipa, 4:5 | `dr andrei drafta (portret nou).jpeg`, decupat 4:5 din 1030×1527 |
| `dr-sergiu-drafta.jpg` | Echipa, 4:5 | `dr sergiu drafta (portret nou).jpeg`, decupat 4:5 din 1030×1527 |

⚠️ **`despre-radiografie.webp` este modificat intenționat.** Pe folia de
radiografie se citeau numele unei paciente, data examinării și data nașterii.
Banda de antet a fost **pixelată ireversibil** înainte de a ajunge în `public/`:
sunt date medicale identificabile (GDPR art. 9) și nu au ce căuta pe un site
public. Originalul nemodificat a rămas în `foto-client/`. La orice fotografie
nouă, verificați din nou foliile, ecranele și documentele din cadru.

Portretele medicilor sunt fotografiile noi de la cabinet (1030×1527), decupate
4:5 la 1030×1288 de sus, ca să păstreze capul și aerul de deasupra. Slotul cere
minimum 880×1100px pentru ecrane retina, deci sunt suficient de mari. Vechile
portrete pătrate (447×447 și 200×200) au rămas în `foto-client/`.

Fișierele au primit nume noi (`dr-…-drafta.jpg`) odată cu fotografiile noi:
optimizatorul de imagini și cache-urile (browser, CDN) păstrează versiunea veche
sub același nume, deci un fișier înlocuit pe loc ar fi continuat să arate
portretele vechi.

Încadrarea se face din CSS (`object-cover` + `objectPosition`), nu prin decupare
distructivă: hero-ul folosește `center 38%` ca să nu taie capul medicului. Dacă
o față ajunge descentrată într-un portret pătrat, se reglează la fel, din
`src/components/Team.tsx`.

## Interimare (stock)

Fotografiile serviciilor sunt stock, până la fotografii reale din cabinet.

Sursa: [Unsplash](https://unsplash.com), sub [licența Unsplash](https://unsplash.com/license)
(utilizare gratuită, comercială inclusă, fără atribuire obligatorie). Niciuna nu
este Unsplash+ / premium. Au fost alese după imagine, nu după descrierea din
căutare, și fără ecusoane cu nume lizibile (ar părea personalul cabinetului).

| Fișier | Serviciu | Unsplash |
|---|---|---|
| `igienizare.jpg` | Consultație și igienizare | `8BkF0sTC6Uo` |
| `albire.jpg` | Albire dentară | `RCQnbyQsnUg` |
| `fatete-compozit.jpg` | Fațete de compozit | `oJFXtJPV9Pg` |
| `fatete-ceramice.jpg` | Fațete ceramice | `glPVwPr1FKo` |
| `coroane.jpg` | Coroane dentare | `1nJzcrGGktY` |
| `punti.jpg` | Punți dentare | `jlFav1Chpds` |
| `inlay-onlay.jpg` | Inlay-uri și onlay-uri | `joILn6p_oeM` |
| `tratament-canal.jpg` | Tratament de canal | `z8BIWPwV3zo` |
| `implanturi.jpg` | Implanturi dentare | `W9YEY6G8LVM` |
| `blog-fatete-ceramice-compozit.jpg` | Articol: fațete ceramice sau compozit | `WvVW7mRaZE8` |
| `blog-implanturi-bimaxilar.jpg` | Articol: implanturi pe ambele arcade | `eHwRLpfHSKY` |

Sursa: [Pexels](https://www.pexels.com), sub [licența Pexels](https://www.pexels.com/license/)
(utilizare gratuită, comercială inclusă, fără atribuire obligatorie). Aceleași
criterii de alegere ca mai sus. Adresa fotografiei: `pexels.com/photo/<id>`.

| Fișier | Folosit în | Pexels |
|---|---|---|
| `blog-implant-imediat.jpg` | Articol: implant imediat sau după vindecare (principală) | `6502305` |
| `blog-implant-imediat-cbct.jpg` | Articol: implant imediat sau după vindecare (în text) | `4297519` |
| `blog-durata-implant.jpg` | Articol: cât durează un implant (principală) | `4687905` |
| `blog-durata-implant-interventie.jpg` | Articol: cât durează un implant (în text) | `3952008` |

`blog-implant-imediat-cbct.jpg` arată foi de tomografie pe negatoscop. Au fost
verificate la rezoluție mare: se văd doar etichetele secțiunilor și numerele
dinților, fără nume, dată de naștere sau dată a examinării.

`aligneri.jpg` și `urgente.jpg` nu mai sunt folosite: alignerii și urgențele nu
apar printre serviciile de pe site-ul cabinetului.

## Regula pentru articole

**Fiecare articol de blog are o fotografie, liberă de drepturi.** Articolele noi
au două: cea principală și una în text, ca bloc `figure`. Regula nu e
doar scrisă aici: `image`, `imageAlt` și `imageCaption` sunt obligatorii în
tipul `Post` (src/content/blog-types.ts), deci un articol fără fotografie nu
trece de compilare.

Surse acceptate: Unsplash, Pexels sau fotografii ale cabinetului. Fotografia se
alege privind-o, nu după descrierea din căutare, și se trece în tabelul de mai
sus cu identificatorul ei. Fără imagini luate din căutarea Google.

La radiografii, atenție la datele pacientului: nume, dată de naștere sau dată a
examinării vizibile pe folie. Nu se publică așa (vezi nota de mai sus).

## Cum se înlocuiesc

Două variante:

1. **Păstrând numele** — puneți fotografia reală peste fișierul din acest folder.
   Nu se modifică niciun fișier de cod.
2. **Revenind la hașura din prototip** — ștergeți câmpurile `image` / `imageAlt`
   din `src/content/site.ts`. Slotul redevine placeholder-ul hașurat, cu textul
   cadrului necesar.

`imageAlt` din `src/content/site.ts` descrie fotografia curentă — de rescris
odată cu înlocuirea ei.

## De reținut

- Slotul „Locație" cere și o hartă încorporată, pe lângă fotografie. Fotografia
  de acum este cabinetul, nu intrarea din stradă.
- Textele din jurul fotografiilor spun încă „Dorobanți", deși adresa este acum
  Strada Justinian 10 — vezi nota din `src/content/site.ts`.
