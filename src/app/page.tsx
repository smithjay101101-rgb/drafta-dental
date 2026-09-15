import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Location } from "@/components/Location";
import { Team } from "@/components/Team";
import { OtherServices } from "@/components/OtherServices";
import { Faq } from "@/components/Faq";
import { Booking } from "@/components/Booking";
import { Footer } from "@/components/Footer";
import { dentistJsonLd, faqJsonLd } from "@/lib/jsonld";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-indigo focus:px-5 focus:py-3 focus:text-white"
      >
        Sari la conținut
      </a>

      <Header />

      <main id="main">
        <Hero />
        <About />
        <Services />
        <Location />
        <Team />
        <OtherServices />
        <Faq />
        <Booking />
      </main>

      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(dentistJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </>
  );
}
