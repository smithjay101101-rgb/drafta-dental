# Drafta dental — site

Homepage-ul cabinetului Drafta dental, construit după bundle-ul de design din
`../design_handoff_drafta_homepage/`.

## Stack

Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4.
Handoff-ul lăsa alegerea la latitudinea implementării („Next.js or Astro are
both fine") şi nu exista cod anterior.

```bash
npm run dev     # http://localhost:3000
npm run build
npm run start
npm run lint
```

## Structură

| Cale | Ce e |
|---|---|
| `src/app/globals.css` | Token-ii de design (`@theme`) + clasele de bază (`.shell`, `.section`, `.h1`, `.pill`…) |
| `src/content/site.ts` | **Tot textul paginii.** Datele inventate sunt marcate `TODO_PLACEHOLDER` |
| `src/components/` | Câte un component per secţiune, în ordinea din pagină |
| `src/lib/validation.ts` | Validarea formularului — aceleaşi reguli pe client şi pe server |
| `src/lib/jsonld.ts` | Date structurate `Dentist` + `FAQPage` |
| `src/app/api/programare/route.ts` | Endpoint-ul formularului (încă nu trimite nicăieri) |

Token-ii sunt cei din handoff, unul la unu. Singura culoare adăugată este
`--color-danger` (`#B3261E`, ~5.9:1 pe alb) — handoff-ul cerea erori de formular
într-o „danger color" fără să o definească.

## Abateri conştiente de la prototip

- **Breakpoint-ul header-ului** se face prin media query (`wide:`, 900px), nu
  prin `window.innerWidth` + resize listener. Handoff-ul cerea explicit asta.
- **Sub 480px** lockup-ul şi butoanele din header se strâng puţin (marcă 34px,
  „Drafta" 20px, padding mai mic). Fără asta, rândul depăşea 375px lăţime, iar
  cerinţa e un singur rând şi zero scroll orizontal la orice lăţime.
- **FAQ** foloseşte buton + `aria-expanded`/`aria-controls`, nu
  `<details>`/`<summary>`. `<details>` îşi ascunde conţinutul când e închis, deci
  înălţimea nu se poate anima (cerinţa era 200ms ease-out). Comportamentul la
  tastatură e identic; conţinutul închis iese din ordinea de citire prin
  `visibility: hidden`.
- **Steaua** e SVG, nu glifa `★`, conform notei din handoff.
- **Consimţământ GDPR**: formularul are checkbox obligatoriu, cerut de handoff
  înainte de lansare.
- **`robots: noindex`** e activ în `src/app/layout.tsx` cât timp pagina conţine
  date-exemplu. De scos la lansare.

## Ce lipseşte până la lansare

Din secţiunea „Placeholder data" a handoff-ului, plus ce a apărut la implementare:

- [ ] **Fotografii reale.** Momentan sunt puse fotografii STOCK de pe Unsplash,
      doar ca să se vadă pagina — vezi `public/photos/CREDITE.md` pentru sursa
      fiecăreia şi pentru cele două feluri de a le înlocui. Cele două portrete
      de medici sunt persoane reale fără legătură cu cabinetul: nu pot rămâne
      lângă nume de medici. Slotul „Locaţie" cere şi o hartă încorporată.
- [ ] SVG-ul oficial al logo-ului (`src/components/Logo.tsx` e o aproximare CSS).
- [ ] Date reale: adresă, telefon, e-mail, program, cifrele („peste 600 de
      recenzii", „peste 900 de implanturi", „din 2016", „garanţie 10 ani").
- [ ] Numele şi biografiile medicilor.
- [ ] Recenzii reale din Google, cu acordul pacienţilor.
- [ ] Hartă încorporată în secţiunea Locaţie.
- [ ] Backend pentru formular (e-mail/CRM) + rate limit sau captcha.
- [ ] Pagini `/confidentialitate` şi `/termeni` (linkurile din footer duc în gol),
      banner de cookies, date firmă (CUI, J).
- [ ] Imagine Open Graph 1200×630.
- [ ] `geo`, `image`, `priceRange`, `aggregateRating` în JSON-LD — doar cu valori reale.

## Verificat

Build şi lint trec. Pe Chrome headless, la 375 / 430 / 768 / 900 / 1024 / 1440:
zero scroll orizontal, header pe un singur rând peste tot. Meniul mobil se
deschide, se închide pe Escape (cu focusul întors pe buton), la click în afară şi
la click pe un link. Acordeonul FAQ deschide mai multe rânduri simultan şi animă
înălţimea. Formularul blochează trimiterea invalidă, arată erori cu icon + text
(nu doar culoare), trimite POST-ul valid şi înlocuieşte formularul cu mesajul de
confirmare. Ancorele şi câmpurile focalizate nu ajung sub header-ul lipit.
