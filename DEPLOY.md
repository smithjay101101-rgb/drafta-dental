# Publicare — și de ce nu se mai amestecă site-urile

## Ce s-a întâmplat la `alice` și `toan`

Nu repo-urile au fost problema: `alice-real-estate` și `toan-huy-hoang` erau deja
două repo-uri separate. Problema e **originea comună**.

GitHub Pages pune toate proiectele unui cont pe **un singur domeniu**:

```
https://smithjay101101-rgb.github.io/alice-real-estate/
https://smithjay101101-rgb.github.io/toan-huy-hoang/
                └──────────── aceeași origine ────────────┘
```

Un singur domeniu înseamnă un singur „rădăcină" `/`. Iar ambele site-uri conțin
linkuri și resurse scrise **de la rădăcină**:

```html
<!-- alice project/index.html -->
<a href="/rentals?location=my-khe">          <!-- iese din /alice-real-estate/ -->

<!-- toan luxury website/index.html -->
<link rel="icon" href="/favicon.svg" />       <!-- cere favicon-ul altui site -->
<link rel="preload" href="/fonts/jost-400-latin.woff2" />
```

De la `/alice-real-estate/`, un link către `/rentals` nu duce la
`/alice-real-estate/rentals`, ci la `smithjay101101-rgb.github.io/rentals` — adică
afară din site, în rădăcina contului, unde stă alt proiect. De aici „s-au
amestecat site-urile". Separarea repo-urilor nu putea repara asta niciodată.

Pe aceeași origine se mai împart, în plus: `localStorage`, cookie-urile,
service worker-ele (un service worker înregistrat pe `/` interceptează *toate*
celelalte proiecte) și `sessionStorage`.

## Regula

**Un site = o origine.** Nu un folder într-o origine comună.

## Pentru site-ul acesta

Proiectul e Next.js și are o rută de server (`/api/programare`, formularul de
programare). GitHub Pages servește doar fișiere statice, deci **nu poate rula
acest site** — ceea ce rezolvă problema de la sine, dacă publicarea se face unde
trebuie.

Recomandat: **Vercel**, un proiect nou, legat de acest repo.

1. Repo propriu pe GitHub — doar acest proiect, nimic altceva.
2. Pe Vercel: *Add New → Project* → alege repo-ul.
3. **Root Directory: `web`** (aplicația Next stă în `web/`, nu în rădăcina repo-ului).
4. Rezultă o origine proprie: `drafta-dental.vercel.app`.
5. La lansare, domeniul clientului (`draftadental.ro`) se leagă de acest proiect
   și devine originea finală.

Fiecare proiect Vercel are propriul subdomeniu, deci `alice` și `toan` nu au cum
să mai intre peste el: origini diferite, storage diferit, rădăcini `/` diferite.

## Dacă totuși se publică vreodată pe un subpath

Nu este cazul aici, dar ca regulă generală: pe un host cu origine comună, nicio
cale nu are voie să înceapă cu `/`. Se folosesc căi relative, iar în Next.js se
setează `basePath` în `next.config.ts` — atunci `next/link`, `next/image` și
resursele statice primesc automat prefixul.

## Înainte de publicare

`src/app/layout.tsx` conține `robots: { index: false, follow: false }`. Rămâne
așa cât timp pagina are date-exemplu (vezi `web/README.md`, secțiunea „Ce
lipsește până la lansare").
