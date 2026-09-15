import { faq, practice } from "@/content/site";
import { doctors } from "@/content/doctors";

/**
 * Date structurate. Valorile vin din src/content/site.ts — cât timp acolo sunt
 * date-exemplu, nu publicați pagina indexabilă (vezi TODO_PLACEHOLDER).
 */
export const dentistJsonLd = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: practice.name,
  url: practice.url,
  telephone: practice.phone,
  email: practice.email,
  foundingDate: "2000",
  address: {
    "@type": "PostalAddress",
    streetAddress: practice.address.street,
    addressLocality: "București",
    addressRegion: "Sector 2",
    postalCode: practice.address.postalCode,
    addressCountry: practice.address.country,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
      ],
      opens: "10:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "10:00",
      closes: "14:00",
    },
  ],
  employee: doctors.map((d) => ({
    "@type": "Person",
    "@id": `${practice.url}/medici/${d.slug}`,
    name: `${d.prefix} ${d.name}`,
    jobTitle: d.jobTitle,
    url: `${practice.url}/medici/${d.slug}`,
  })),
  areaServed: "București",
  // TODO: adăugați `geo`, `image`, `priceRange` și `aggregateRating` doar cu
  // valori reale.
};

export const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.items.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};
