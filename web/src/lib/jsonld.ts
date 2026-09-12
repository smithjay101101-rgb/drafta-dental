import { faq, practice, team } from "@/content/site";

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
      opens: "09:00",
      closes: "20:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "15:00",
    },
  ],
  employee: team.members.map((member) => ({
    "@type": "Person",
    name: member.name,
    jobTitle: member.specialty,
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
