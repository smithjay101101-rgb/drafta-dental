import { posts } from "@/content/blog";
import { practice } from "@/content/site";

export async function GET() {
  const body = `# ${practice.name}

> Cabinet stomatologic in ${practice.address.street}, ${practice.address.locality}.
> Consultatie de 45 de minute, plan de tratament scris cu pret fix, acelasi medic
> de la prima vizita la ultimul control.

## Contact
- Adresa: ${practice.address.street}, ${practice.address.locality}
- Telefon: ${practice.phone}
- Program: ${practice.hours}

## Pagini
- [Acasa](${practice.url}/): servicii, locatie, echipa, intrebari frecvente, programare
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
