# Fotografii

## Reale, de la cabinet

Originalele stau în `foto-client/`, în rădăcina repo-ului. Ce se află în folderul
acesta sunt copiile pregătite pentru web.

| Fișier | Slot | Original |
|---|---|---|
| `cabinet-principal.jpg` | Hero, 21:9 | `image principal.JPG`, redus la 2400px |
| `despre-radiografie.webp` | Despre noi, 1:1 | `guidance image.webp` |
| `cabinet.webp` | Locație, 4:3 | `poza cabinet.webp` |
| `medic-andrei-drafta.jpg` | Echipa, 4:5 | `doctor drafta andrei.jpeg` |
| `medic-sergiu-drafta.jpg` | Echipa, 4:5 | `dr drafta sergiu.jpeg` |

⚠️ **`despre-radiografie.webp` este modificat intenționat.** Pe folia de
radiografie se citeau numele unei paciente, data examinării și data nașterii.
Banda de antet a fost **pixelată ireversibil** înainte de a ajunge în `public/`:
sunt date medicale identificabile (GDPR art. 9) și nu au ce căuta pe un site
public. Originalul nemodificat a rămas în `foto-client/`. La orice fotografie
nouă, verificați din nou foliile, ecranele și documentele din cadru.

⚠️ **Portretele medicilor sunt prea mici.** Slotul e 4:5, afișat la ~440px
lățime, deci cere minimum 880×1100px. Fotografiile primite au 447×447 și
200×200, ambele pătrate. Cea a lui Dr. Sergiu Drafta se vede vizibil neclară,
mai ales pe ecrane retina. De cerut originalele de la cabinet.

Încadrarea se face din CSS (`object-cover` + `objectPosition`), nu prin decupare
distructivă: hero-ul folosește `center 38%` ca să nu taie capul medicului. Dacă
o față ajunge descentrată într-un portret pătrat, se reglează la fel, din
`src/components/Team.tsx`.

## Interimare (stock)

Cele cinci fotografii de pe cardurile de servicii sunt încă stock:
`igienizare.jpg`, `albire.jpg`, `aligneri.jpg`, `implanturi.jpg`, `urgente.jpg`.

Sursa: [Unsplash](https://unsplash.com), sub [licența Unsplash](https://unsplash.com/license)
(utilizare gratuită, comercială inclusă, fără atribuire obligatorie). Niciuna nu
este Unsplash+ / premium.

| Fișier | Cadrul cerut de design | Unsplash |
|---|---|---|
| `igienizare.jpg` | foto: igienizare | `8BkF0sTC6Uo` |
| `albire.jpg` | foto: albire | `RCQnbyQsnUg` |
| `aligneri.jpg` | foto: aligneri | `WFsNCIn8OF4` |
| `implanturi.jpg` | foto: implant | `W9YEY6G8LVM` |
| `urgente.jpg` | foto: urgență | `hl6uG9cHW5A` |

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
