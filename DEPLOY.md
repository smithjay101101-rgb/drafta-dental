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
5. La lansare, domeniul clientului (`dentaldrafta.ro`) se leagă de acest proiect
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

## Domeniul dentaldrafta.ro

Domeniul e înregistrat la CYBER_FOLKS, dar **nameserverele sunt la Vercel**:
`ns1.vercel-dns.com` și `ns2.vercel-dns.com` (setate în panoul Cyber_Folks, la
*Nameservere proprii*; câmpurile 3–5 rămân goale). Toată zona DNS se
administrează deci din Vercel, nu din Cyber_Folks. Cyber_Folks ține doar
înregistrarea domeniului și reînnoirea lui.

Pe Vercel, ambele adrese sunt în proiectul `drafta-dental`, contul `nick-95aa`:

| Domeniu               | Rol                                      |
|-----------------------|------------------------------------------|
| `www.dentaldrafta.ro` | Adresa canonică, servește site-ul        |
| `dentaldrafta.ro`     | Redirect 308 spre `www.dentaldrafta.ro`  |

Un domeniu nou trebuie **și** adăugat în proiectul Vercel
(*Settings → Domains*), nu doar trecut pe nameserverele Vercel. Fără asta,
nameserverele Vercel răspund `REFUSED` și site-ul nu se deschide.

### Cine e canonic

`www.dentaldrafta.ro` e adresa canonică — coincide cu `practice.url` din
`src/content/site.ts`, deci toate `canonical`, sitemap-ul, RSS-ul, `llms.txt` și
JSON-LD-ul arată spre ea.

### Vechiul domeniu, draftadental.ro

Primul domeniu al site-ului. A fost scos din proiectul Vercel pe 3 octombrie
2026, deci nu mai servește și nu mai redirecționează nimic (răspunde 404).
Un singur domeniu rămâne activ: `dentaldrafta.ro`.

În contul Vercel figurează încă, pentru că folosește nameserverele Vercel, iar
Vercel nu șterge un domeniu în situația asta. Se scoate complet punând în
Cyber_Folks nameserverele lor înapoi (`ns1`–`ns4.cyberfolks.ro`) sau lăsându-l
să expire.

### SSL

Nu se cumpără nimic. Vercel emite certificatul Let's Encrypt automat, în câteva
minute după ce DNS-ul se propagă.

### Verificare

```sh
dig +short NS dentaldrafta.ro                       # ns1/ns2.vercel-dns.com
curl -sI https://www.dentaldrafta.ro | head -1     # HTTP/2 200
curl -sI https://dentaldrafta.ro | grep -i location # https://www.dentaldrafta.ro/
```

Dacă `dig` nu dă nimic imediat după schimbare: registrul .ro publică zona în
loturi, iar resolverele păstrează un timp răspunsul negativ. Se verifică direct
la Google: `dig +short www.dentaldrafta.ro @8.8.8.8`.

### Înainte de lansarea reală

`src/app/layout.tsx` are încă `robots: { index: false, follow: false }`. Site-ul
va fi viu pe domeniu, dar invizibil în Google — intenționat, cât timp mai există
fotografii de stoc și articol-machetă. Se scoate când conținutul e final.

## IndexNow (Bing, Yandex, Seznam, Naver)

Cheia este fișierul `public/4e30073e3d2bbdbdf2234bb97c304098.txt`, servit la
`https://www.dentaldrafta.ro/4e30073e3d2bbdbdf2234bb97c304098.txt`. Nu se șterge: Bing verifică prin el că
notificările vin de la proprietarul site-ului.

După un articol nou sau o pagină modificată, notificarea se trimite așa:

```sh
curl -s -X POST https://api.indexnow.org/indexnow \
  -H "Content-Type: application/json; charset=utf-8" \
  -d '{"host":"www.dentaldrafta.ro","key":"4e30073e3d2bbdbdf2234bb97c304098","keyLocation":"https://www.dentaldrafta.ro/4e30073e3d2bbdbdf2234bb97c304098.txt","urlList":["https://www.dentaldrafta.ro/blog/ARTICOL-NOU"]}'
```

Răspuns 200 sau 202 înseamnă primit. Google nu folosește IndexNow; pentru Google
se cere indexarea din Search Console.

## Obligații legale afișate pe site

- **Pictograma ANPC SAL** în subsolul fiecărei pagini, cu link la
  https://reclamatiisal.anpc.ro (Ordinul ANPC 449/2022, modificat prin 270/2026).
  Detalii în `public/anpc/README.md`.
- **Identificarea furnizorului** (Legea 365/2002, art. 5): denumire, CUI, adresă,
  tot în subsol. Datele sunt în `src/content/legal.ts`, verificate în registrul ANAF.
- **Politica de confidențialitate** (`/confidentialitate`) și **termenii**
  (`/termeni`), cu textul în `src/content/legal.ts`.
