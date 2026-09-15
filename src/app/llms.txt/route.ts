import { posts } from "@/content/blog";
import { priceLabel, serviceList } from "@/content/services";
import { practice } from "@/content/site";

export async function GET() {
  const body = `# ${practice.name}

> Cabinet stomatologic de familie in ${practice.address.street}, ${practice.address.locality}, din anul 2000.
> Stomatologia regandita: aparatura moderna si un ambient prietenos, unde nu esti tratat ca o simpla cifra.

## Contact
- Adresa: ${practice.address.street}, ${practice.address.locality}
- Telefon: ${practice.phone}
- Program: ${practice.hours}
- E-mail: ${practice.email}

## Servicii si preturi de pornire
${serviceList.map((s) => `- [${s.title}](${practice.url}/servicii/${s.slug}): ${priceLabel(s)}`).join("\n")}

## Pagini
- [Acasa](${practice.url}/): servicii, locatie, echipa, intrebari frecvente, programare
- [Servicii](${practice.url}/servicii): toate tratamentele, cu preturile de pornire
- [Despre noi](${practice.url}/despre-noi): medicii cabinetului, entitatea canonica de autor
- [Blog](${practice.url}/blog): raspunsuri la intrebarile pacientilor

## Articole
${posts.map((p) => `- [${p.title}](${practice.url}/blog/${p.slug}): ${p.metaDescription}`).join("\n")}

## Note
Continutul blogului are caracter informativ si nu inlocuieste consultatia.
`;
  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
