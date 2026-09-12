# Fotografii

## Reale, de la cabinet

Originalele stau în `foto-client/`, în rădăcina repo-ului.

| Fișier | Slot | Sursa |
|---|---|---|
| `cabinet-principal.jpg` | Hero, 21:9 | `image principal.JPG`, redimensionat la 2400px |
| `despre-radiografie.webp` | Despre noi, 1:1 | `guidance image.webp` |
| `cabinet.webp` | Locație, 4:3 | `poza cabinet.webp` |

⚠️ **`despre-radiografie.webp` este modificat intenționat.** Pe folia de
radiografie din fotografie se citeau numele unei paciente, data examinării și
data nașterii. Banda de antet a fost **pixelată ireversibil** înainte de a ajunge
în `public/`: sunt date medicale identificabile (GDPR art. 9) și nu au ce căuta
pe un site public. Originalul nemodificat a rămas în `foto-client/`. Dacă se
înlocuiește fotografia, verificați din nou folia, ecranele și documentele din
cadru.

Încadrarea se face din CSS (`object-cover` + `objectPosition`), nu prin decupare
distructivă — hero-ul folosește `center 38%` ca să nu taie capul medicului.

## Interimare (stock)

⚠️ **Toate fotografiile din acest folder sunt STOCK, puse doar ca să se vadă
cum arată pagina.** Handoff-ul cere fotografii reale ale cabinetului înainte de
lansare („Replace with real photography of the practice (stock dental photos as
interim)").

Cele cinci fotografii de pe cardurile de servicii sunt încă stock.
Sursa: [Unsplash](https://unsplash.com), sub [licenţa Unsplash](https://unsplash.com/license)
(utilizare gratuită, comercială inclusă, fără atribuire obligatorie). Niciuna nu
este Unsplash+ / premium.

| Fişier | Slot în pagină | Cadrul cerut de design | Unsplash |
|---|---|---|---|
| `hero.jpg` | Hero, 21:9 | foto stock lată: interiorul cabinetului | `e7MJLM5VGjY` |
| `despre.jpg` | Despre noi, 1:1 | foto: pacientă şi medic, discuţie | `Bg81yWKZlMg` |
| `igienizare.jpg` | Servicii, 16:11 | foto: igienizare | `8BkF0sTC6Uo` |
| `albire.jpg` | Servicii, 16:11 | foto: albire | `RCQnbyQsnUg` |
| `aligneri.jpg` | Servicii, 16:11 | foto: aligneri | `WFsNCIn8OF4` |
| `implanturi.jpg` | Servicii, 16:11 | foto: implant | `W9YEY6G8LVM` |
| `urgente.jpg` | Servicii, 16:11 | foto: urgenţă | `hl6uG9cHW5A` |
| `locatie.jpg` | Locaţie, 4:3 | foto / hartă: intrarea din Calea Dorobanţilor | `pxOQ-P97sA8` |

Portretele stock au fost **șterse**: cardurile poartă acum numele reale ale
medicilor, iar sub un nume real nu poate sta chipul unui străin.

## Cum se înlocuiesc

Două variante:

1. **Păstrând numele** — puneţi fotografia reală peste fişierul din acest folder.
   Nu se modifică niciun fişier de cod.
2. **Revenind la haşura din prototip** — ştergeţi câmpurile `image` / `imageAlt`
   din `src/content/site.ts`. Slotul redevine placeholder-ul haşurat cu textul
   cadrului necesar.

`imageAlt` din `src/content/site.ts` descrie acum fotografia stock — de rescris
odată cu fotografiile reale (de exemplu numele real al medicului din portret).

## De reţinut

- `medic-1.jpg` şi `medic-2.jpg` sunt **persoane reale, fără legătură cu
  cabinetul**. Nu pot rămâne pe site lângă numele unor medici: ar fi o
  reprezentare falsă. Sunt cea mai urgentă înlocuire din listă.
- `locatie.jpg` este o sală de aşteptare oarecare, nu intrarea din Calea
  Dorobanţilor. Slotul cere şi o hartă încorporată.
