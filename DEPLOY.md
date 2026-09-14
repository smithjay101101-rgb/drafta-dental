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
3. **Root Directory: `./`** (implicit). Aplicația Next stă în rădăcina
   repo-ului tocmai ca să nu fie nevoie de nicio setare.
4. Rezultă o origine proprie: un subdomeniu `*.vercel.app`.
5. La lansare, domeniul clientului (`draftadental.ro`) se leagă de acest proiect
   și devine originea finală.

### Protecția implicită

Vercel pune by default o autentificare peste deployment-uri: linkul cere cont
Vercel, deci clientul nu poate deschide preview-ul. Se oprește din
*Settings → Deployment Protection → Vercel Authentication → Disabled*.

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

## Domeniul draftadental.ro

Domeniul e înregistrat la CYBER_FOLKS, pe nameserverele lor
(`ns1`–`ns4.cyberfolks.ro`). **Nameserverele rămân acolo** — schimbăm doar două
înregistrări DNS. Așa nu se atinge nimic altceva din zonă.

Site-ul rulează mai departe pe Vercel. Cyber_Folks ține doar domeniul.

### Cele două înregistrări de adăugat

În panoul Cyber_Folks: *Domeniile mele* → rotița de lângă `draftadental.ro` →
**Administrare zonă DNS**.

| Tip   | Nume / Host | Valoare                              | TTL     |
|-------|-------------|--------------------------------------|---------|
| A     | `@`         | `216.198.79.1`                       | implicit |
| CNAME | `www`       | `55c40d676d7703e5.vercel-dns-017.com.` | implicit |

Punctul final din valoarea CNAME se păstrează dacă panoul îl acceptă.

### Cine e canonic

`www.draftadental.ro` e adresa canonică — coincide cu `practice.url` din
`src/content/site.ts`, deci toate `canonical`, sitemap-ul, RSS-ul și JSON-LD-ul
arată spre ea. Apexul `draftadental.ro` face redirect 308 spre `www`.

Motivul pentru care `www` e canonic și nu apexul: `www` merge prin CNAME, pe care
Vercel îl poate muta singur dacă își schimbă infrastructura. Apexul are nevoie de
un IP fix, care se poate învechi.

### SSL

Nu se cumpără nimic. Vercel emite certificatul Let's Encrypt automat, în câteva
minute după ce DNS-ul se propagă. X-ul roșu de lângă domeniu în panoul
Cyber_Folks se referă la SSL-ul *lor* de hosting, care nu ne interesează.

### Verificare

```sh
dig +short www.draftadental.ro          # trebuie să dea CNAME-ul Vercel
curl -sI https://www.draftadental.ro | head -1   # HTTP/2 200
```

### Înainte de lansarea reală

`src/app/layout.tsx` are încă `robots: { index: false, follow: false }`. Site-ul
va fi viu pe domeniu, dar invizibil în Google — intenționat, cât timp mai există
fotografii de stoc și articol-machetă. Se scoate când conținutul e final.
