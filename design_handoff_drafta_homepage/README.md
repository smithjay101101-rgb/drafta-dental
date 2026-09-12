# Handoff: Drafta dental — Homepage (RO)

## Overview
Marketing homepage for **Drafta dental**, a single-location dental practice in Bucharest (Calea Dorobanţilor 128, Sector 1). Site language is **Romanian**. Goal of the page: get the visitor to request an appointment (form submit or phone call). Secondary goal: answer the objections that keep people away from a dentist (cost uncertainty, being rushed, being judged).

## About the design files
The files in this bundle are **design references written in HTML** — prototypes that show intended look and behavior. They are not production code to copy.

- `Drafta Dental - Homepage.dc.html` — the homepage design. Open it in a browser (keep `support.js` next to it).
- `Drafta Dental - Brand Handoff.dc.html` — brand sheet: palette, application rules, typography, sitemap.
- `assets/brand-visuals.png` — the original brand board (logo, palette, fonts) from the client.

Recreate these designs in the target codebase's existing environment (React/Next, Vue, Astro, WordPress block theme, etc.) using its established components and conventions. If there is no codebase yet, pick a framework suited to a marketing site with one form (Next.js or Astro are both fine) and implement there. All markup in the prototype uses inline styles because of the prototyping tool — in production use the codebase's styling system (CSS modules, Tailwind, etc.).

## Fidelity
**High-fidelity.** Colors, typography, spacing, radii and copy are final unless the client changes them. Reproduce the layout closely. Two things are deliberately unfinished:

1. **All images are hatched placeholders** with a monospace caption saying what belongs there. Replace with real photography of the practice (stock dental photos as interim). Placeholder pattern used in the prototype: `repeating-linear-gradient(135deg, #E4EAF2 0 14px, #EFF3F8 14px 28px)`.
2. **Content marked as placeholder** — see "Placeholder data" at the end. Do not publish invented numbers, names or reviews.

## Page structure

Order of sections, all in one document, anchors in parentheses:

1. Sticky header
2. Hero (`#top`)
3. About (`#despre`)
4. Services grid, with photos (`#servicii`)
5. Location (`#locatie`)
6. Team, 2 doctors (`#echipa`)
7. Reviews band, indigo (no id)
8. Other dental services, logo-only cards (`#alte-servicii`)
9. FAQ accordion (`#faq`)
10. Booking block with form (`#programare`)
11. Footer

Page max-width: **1320px**, horizontal padding **28px**. Vertical section padding: **104px** top and bottom (hero: 96px top). Interior text blocks cap at `30em`.

---

## Screens / sections

### 1. Header (sticky)
- `position: sticky; top: 0; z-index: 40`, background `rgba(255,255,255,0.94)` + `backdrop-filter: blur(12px)`, no border.
- Row: padding `16px 28px`, `display:flex; align-items:center; gap:20px`. **One row tall (~83px) at every width.**
- Left: logo mark (40×40) + wordmark "Drafta" (Urbanist 900, 24px, letter-spacing −0.01em) with "dental" under it (Figtree, 10px, letter-spacing 0.42em).
- Center (≥900px only): pill nav — container `background:#F4F6FA; border-radius:999px; padding:6px`, `flex-wrap:nowrap; overflow-x:auto; flex:1 1 200px; min-width:170px`. Links 15px/500, padding `10px 18px`, `border-radius:999px`, `white-space:nowrap`, hover `background:#fff`. Items: Despre noi, Servicii, Locaţie, Echipa, Întrebări.
- Right: primary pill "Programează-te" (`#434279` bg, white, 15px/600, padding `13px 24px`, radius 999px, hover bg `#8DB7D2`). At ≥900px also a secondary pill "Sună" (1.5px border `#CBC7D8`, hover border `#434279`).
- **< 900px:** pill nav is not rendered; a "Meniu" button (`#F4F6FA` bg, 15px/600, radius 999px, min-height 46px) replaces the "Sună" pill. Tapping it opens a panel below the header row: `border-top: 1px solid #EBEAF1`, white, padding `12px 28px 20px`, links 17px/500, `min-height: 48px` each, hover `#F4F6FA`, last item "Sună: 0721 000 128" at 600 weight. Clicking any link closes the panel. Breakpoint switch is driven by `window.innerWidth < 900` and a resize listener; a CSS media query is the better production implementation.

### 2. Hero (`#top`)
Centered, `text-align:center`, padding `96px 24px 0`, inner max-width 1000px.
- H1: Urbanist 900, `clamp(44px, 7vw, 88px)`, line-height 1.02, letter-spacing −0.035em, `text-wrap: balance`. Copy: **"O experienţă dentară _mai bună_, prin grijă şi claritate."** — "mai bună" is `font-style: italic; color:#6E8FB8`.
- Sub: 20px/1.6, color `#5A5F75`, max-width 30em, margin-top 28px. Copy: "Stomatologie modernă, fără reproşuri şi fără grabă, în Dorobanţi. Aligneri, albire, implanturi şi urgenţe — programare în aceeaşi zi."
- Buttons (gap 14px, centered, margin-top 36px): "Programare online" (indigo pill, 17px/600, padding `17px 34px`) and "Sună: 0721 000 128" (outline pill `1.5px #CBC7D8`, padding `16px 30px`).
- Rating row (margin-top 26px): `★★★★★` in `#8DB7D2` 19px, letter-spacing 2px, plus "Peste 600 de recenzii de 5 stele" at 16px `#5A5F75`. In production use an inline SVG star, not the text glyph.
- Wide image: max-width 1320px, margin-top 64px, `aspect-ratio: 21/9`, `border-radius: 28px`. Caption: "foto stock lată: interiorul cabinetului".

### 3. About (`#despre`)
Two columns, `repeat(auto-fit, minmax(320px, 1fr))`, gap 56px, `align-items:center`.
- Left: eyebrow pill ("Despre noi", `#F4F6FA`, 13px/600, uppercase, letter-spacing 0.08em, padding `8px 15px`, radius 999px); H2 Urbanist 900 `clamp(32px,4.4vw,52px)`, line-height 1.08, letter-spacing −0.03em — "Cabinetul în care nimeni nu vă face morală."; body 18px/1.65 `#5A5F75`; then 3 bullet rows (8px `#8DB7D2` dot, 17px/1.6 text, gap 12px):
  - "Consultaţie de 45 de minute, nu de zece."
  - "Acelaşi medic de la prima vizită la ultimul control."
  - "Plată în rate, fără dobândă, până în 12 luni."
- Right: square image, `border-radius: 28px 28px 200px 200px` (the logo smile shape). Caption: "foto: pacientă şi medic, discuţie".

### 4. Services (`#servicii`)
Section background `#F7F9FC`. Centered header: H2 "Ce facem" + sub "Toate tratamentele într-un singur cabinet, cu aceeaşi echipă." (margin-bottom 52px).
Grid `repeat(auto-fit, minmax(290px, 1fr))`, gap 20px. Five photo cards + one indigo CTA card.
- Photo card: white, `border-radius: 22px`, `overflow: hidden`. Image area `aspect-ratio: 16/11`. Text area padding `24px 26px 28px`: H3 Urbanist 800 22px, body 16px/1.55. Hover: `background:#434279; color:#fff`.
- Cards: **Igienizare şi control** ("Detartraj, air-flow şi periaj profesional. O şedinţă de 50 de minute, la şase luni."), **Albire şi faţete** ("Albire în cabinet într-o singură vizită, faţete ceramice cu simulare digitală înainte."), **Aligneri şi aparate** ("Scanare intraorală, fără amprentă clasică. Vedeţi rezultatul simulat de la prima vizită."), **Implanturi** ("Planificare pe CT 3D, chirurgie ghidată şi coroana finală, tot aici. Garanţie 10 ani."), **Urgenţe** ("Ţinem două intervale libere zilnic. Sunaţi până la 17:00 şi vă vedem în aceeaşi zi.").
- Sixth card: indigo `#434279`, white text, padding 32px, H3 "Nu ştiţi de ce aveţi nevoie?" + body + white pill button "Programează consultaţia" (hover `#8DB7D2`, white text) pinned to the bottom.

### 5. Location (`#locatie`)
Two columns, gap 56px. Left: image `aspect-ratio: 4/3`, radius 28px, caption "foto / hartă: intrarea din Calea Dorobanţilor" — replace with an embedded map plus one photo of the entrance. Right: eyebrow "Locaţie", H2 "Un singur cabinet, în Dorobanţi.", body, then two labelled blocks (label: 13px, uppercase, letter-spacing 0.1em, `#6E7386`):
- Adresă — "Calea Dorobanţilor 128, Sector 1, Bucureşti"
- Program — "Luni – vineri: 09:00 – 20:00 · Sâmbătă: 09:00 – 15:00"
Then indigo pill "Vino la noi" → `#programare`.

### 6. Team (`#echipa`)
Background `#F7F9FC`. Centered header: H2 "Medicii dumneavoastră" + "Doi medici, o echipă. Îi cunoaşteţi pe amândoi de la prima vizită."
Grid of **2 cards only**, `repeat(auto-fit, minmax(300px,1fr))`, gap 24px, wrapper max-width 900px centered. Card: white, radius 22px, `overflow:hidden`, portrait `aspect-ratio: 4/5`, content padding 26px — name (Urbanist 800, 23px), specialty (15px, `#6E7386`), bio (16px/1.6).
- Dr. Andreea Drafta — "Protetică şi estetică dentară · fondator"
- Dr. Mihai Pavel — "Implantologie şi chirurgie orală"

### 7. Reviews band
Background `#434279`, white text. Centered `★★★★★` in `#8DB7D2` 22px + H2 "Ce spun pacienţii". Three cards, `repeat(auto-fit, minmax(290px,1fr))`, gap 22px: `border: 1px solid rgba(255,255,255,0.22)`, radius 22px, padding 30px, quote 18px/1.6, then name (600) and "pacient(ă) din 20XX" (14px, opacity .8).

### 8. Other dental services (`#alte-servicii`)
White. Centered H2 "Alte servicii dentare" + "De la tratamente de restaurare la estetică, vă acoperim."
Grid `repeat(auto-fit, minmax(220px,1fr))`, gap 20px. **Five logo-only cards, no photos:** `border: 1px solid #EBEAF1`, radius 22px, padding 28px, hover `background:#F7F9FC`. Each starts with the 34×34 logo mark, then H3 Urbanist 800 21px, then 16px/1.55 `#5A5F75` body.
Items: Obturaţii, Extracţii, Tratament de canal, Parodontologie, Gutiere de bruxism (copy in the HTML).

### 9. FAQ (`#faq`)
Background `#F7F9FC`, inner max-width 900px. H2 "Întrebări frecvente" centered, margin-bottom 44px. Six accordion rows, gap 14px.
Row: white, `1px solid #EBEAF1`, radius 18px. Header row is a `<summary>` with `display:flex; justify-content:space-between`, padding `22px 20px`, Urbanist 800 19px, min-height 48px, chevron `⌄` in `#8DB7D2`. Answer: 17px/1.65 `#5A5F75`, padding `0 20px 24px`.
Questions: where the practice is · what services · cost and instalments · accepting new patients · same-day emergencies · what makes them different. Answers are in the HTML file.
Production notes: rotate the chevron 180° on open, animate the panel height (200ms ease-out), allow multiple open rows, and emit `FAQPage` JSON-LD structured data.

### 10. Booking block (`#programare`)
Card: `background:#F7F9FC; border-radius:32px; padding: clamp(32px,5vw,64px)`, two columns `repeat(auto-fit, minmax(300px,1fr))`, gap 48px.
- Left: H2 "Programaţi-vă în două minute." + body with the phone number as a 600-weight link.
- Right: white card, radius 24px, padding 30px. Three fields, gap 16px, each `<label>` with a visible 14px/600 text label above the input:
  - Nume — text, placeholder "Maria Ionescu"
  - Telefon — tel, placeholder "07xx xxx xxx"
  - "Ce vă deranjează?" — textarea, 3 rows, placeholder "Ex. durere la un molar de jos, de trei zile"
  Inputs: 16px, padding `13px 14px`, `1.5px solid #DDDCE6`, radius 12px, `min-height: 48px`, focus `border-color:#434279; outline:none` (production: keep a visible focus ring, don't just swap the border). Submit: full-width indigo pill, 17px/600, min-height 52px, hover `#8DB7D2`, label "Trimite cererea". Below: 13px `#6E7386` GDPR line.

### 11. Footer
`border-top: 1px solid #EBEAF1`, padding `56px 28px 40px`. Four columns `repeat(auto-fit, minmax(200px,1fr))`, gap 40px: logo + address; Servicii; Cabinet; Contact. Column labels 13px uppercase letter-spacing 0.1em `#6E7386`; links 15px, gap 10px. Bottom row: "© 2026 Drafta dental · Bucureşti" + Confidenţialitate / Termeni, 14px `#6E7386`.

---

## Interactions & behavior
- **Anchor navigation** only; all nav links are in-page hashes today. When subpages exist (see Sitemap), swap them for real routes. Add `scroll-margin-top: 100px` on section targets so the sticky header doesn't cover headings. Do not use `scrollIntoView` hacks.
- **Mobile menu** — open/close on button tap, closes on link click. Add: close on Escape, close on outside click, trap focus while open, `aria-expanded` on the button.
- **FAQ accordion** — native `<details>`/`<summary>` in the prototype. Keyboard accessible already; keep that if you build your own.
- **Hover states** — cards lift by color change only (no transform). Buttons: indigo → `#8DB7D2`. Transitions 150–200ms ease-out; respect `prefers-reduced-motion`.
- **Form** — client-side validation on blur: name required (min 2 chars), phone required (Romanian format, allow spaces), message optional. Errors under the field, in a danger color plus an icon (not color alone), `role="alert"`. On submit: disable the button, show a spinner, then a success message replacing the form ("Am primit cererea. Vă sunăm în aceeaşi zi lucrătoare."). Needs a backend endpoint + explicit GDPR consent checkbox before launch.
- **Responsive** — every grid is `auto-fit/minmax`, so the page reflows with no fixed widths. Verified at 375, 430, 768, 900, 1024, 1440. No horizontal scroll.

## State management
Minimal. The prototype holds three pieces of state:
- `narrow: boolean` — `window.innerWidth < 900`, updated on resize (replace with a CSS media query in production).
- `menuOpen: boolean` — mobile menu, reset to false when crossing the breakpoint.
- FAQ open/closed — handled by the browser via `<details>`.
Plus, in production: form field values, per-field errors, and submit status (`idle | submitting | success | error`).

## Design tokens

**Colors**
| Token | Value | Use |
|---|---|---|
| indigo | `#434279` | Body text, primary buttons, reviews band, logo mark |
| bleu | `#8DB7D2` | Accent, hover, stars, chevrons, logo smile. **Never carries small text** |
| bleu-text | `#6E8FB8` | The italic accent word in H1, link hover |
| white | `#FFFFFF` | Page background (dominant) |
| surface | `#F7F9FC` | Alternating sections, booking card |
| surface-2 | `#F4F6FA` | Nav pill, eyebrow pills, menu button |
| line | `#EBEAF1` | 1px borders, dividers |
| line-input | `#DDDCE6` | Input borders |
| line-button | `#CBC7D8` | Secondary button border |
| text-muted | `#5A5F75` | Body copy on light backgrounds |
| text-label | `#6E7386` | Labels, captions, footer meta |

Contrast: indigo on white ≈ 9.5:1; `#5A5F75` on white ≈ 6.5:1; `#6E7386` on white ≈ 5.3:1. Keep bleu for non-text use only. The rose family from the brand board (`#E094A0`, `#F2B6C0`, `#CBC7D8`) is reserved for print/social and is not used on the site.

**Typography** — Google Fonts: `Urbanist` (600/800/900 + italic 800/900) and `Figtree` (400/500/600).
| Role | Font | Size | Weight | Tracking |
|---|---|---|---|---|
| H1 | Urbanist | clamp(44,7vw,88) | 900 | −0.035em |
| H2 | Urbanist | clamp(32,4.4vw,52) | 900 | −0.03em |
| H3 card | Urbanist | 21–23px | 800 | — |
| Wordmark | Urbanist | 24px | 900 | −0.01em |
| Body large | Figtree | 18–20px / 1.65 | 400 | — |
| Body | Figtree | 16–17px / 1.55–1.6 | 400 | — |
| Label / eyebrow | Figtree | 13px | 600 | 0.08–0.1em, uppercase |
| Button | Figtree | 15–17px | 600 | — |

**Spacing** — 4px scale. Section padding 104px (mobile: reduce to 64px). Grid gaps 14 / 20 / 22 / 24 / 40 / 48 / 56px. Page padding 28px (24px on mobile).

**Radii** — 12px inputs · 18px FAQ rows · 20–22px cards · 24px inner white card · 28px images · 32px booking block · 999px pills. Logo-derived shape: `28px 28px 200px 200px` (hero-adjacent images), `18px 18px 84px 84px` (portraits), `10px 10px 20px 20px` (logo mark).

**Shadows** — none anywhere. Separation is done with `#EBEAF1` hairlines and `#F7F9FC` fills. Keep it that way.

## Logo
The mark is built from two divs in the prototype: a 40×40 indigo square with `border-radius: 10px 10px 20px 20px`, containing a 22×11 bleu half-pill (`border-radius: 0 0 11px 11px`) pinned to the bottom with 7px padding. **Ask the client for the real SVG** and use that instead; the CSS version is an approximation. Lockup: mark + "Drafta" (Urbanist 900) with "dental" letter-spaced underneath. On indigo backgrounds the mark is white with a bleu smile (see `assets/brand-visuals.png`).

## Assets
- No production images exist yet. Every image is a hatched placeholder with a caption naming the shot needed: wide interior shot, patient + doctor conversation, five service photos, entrance/map, two portraits.
- `assets/brand-visuals.png` — client brand board (logo variants, palette hexes, fonts).
- Icons: only the logo mark and the star glyph are used. Replace `★` with an SVG star. If more icons are needed later, use one stroke-consistent set (Lucide) — no emoji.

## Sitemap to build next
Homepage is done. Planned pages, in priority order:
1. **Booking flow** — 4 steps with a progress bar ("Pasul 1 din 4", percentage right-aligned): (1) new or existing patient, (2) service, (3) doctor + time slot, (4) contact details and confirmation. Each step is a centered white card, radius ~24px, on `#F7F9FC`; options are full-width selectable rows (`#F7F9FC` fill, hairline border, title 17px/600 + description 15px `#5A5F75`, min-height 64px, hover/selected takes the indigo border). Allow going back without losing input; confirm by SMS and e-mail, reminder 24h before.
2. **One page per service** — what it solves, how the visit goes, duration, starting price, FAQ, booking CTA.
3. **Full price list** — grouped table; everything price-related lives here, not on the homepage.
4. **Emergencies** — short page, sticky call button on mobile.
5. **Before & after** — real cases, with patient consent.
6. **About the practice** — history, equipment, sterilisation.

## Placeholder data — replace before launch
- Address, phone (`0721 000 128`), e-mail (`programari@draftadental.ro`), opening hours — examples.
- "Peste 600 de recenzii de 5 stele", "Peste 900 de implanturi puse", "din 2016", "Garanţie 10 ani" — invented. Use real figures or delete.
- Doctor names and bios — invented.
- All three reviews — invented. Pull real ones from Google with permission.
- The form posts nowhere.
- Missing for launch: map embed, company details (CUI, J număr), privacy policy, terms, cookie banner, `hreflang`/meta tags, `LocalBusiness` + `Dentist` JSON-LD.

## Files in this bundle
| File | What it is |
|---|---|
| `Drafta Dental - Homepage.dc.html` | The homepage design (open in a browser with `support.js` alongside) |
| `Drafta Dental - Brand Handoff.dc.html` | Brand sheet: palette, rules, typography, sitemap |
| `support.js` | Runtime for the two HTML prototypes — not part of the deliverable |
| `assets/brand-visuals.png` | Client brand board |
