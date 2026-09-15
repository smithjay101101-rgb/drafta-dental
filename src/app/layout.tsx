import type { Metadata, Viewport } from "next";
import { Figtree, Urbanist } from "next/font/google";
import "./globals.css";
import { practice } from "@/content/site";

const urbanist = Urbanist({
  subsets: ["latin", "latin-ext"],
  weight: ["600", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-urbanist",
  display: "swap",
});

const figtree = Figtree({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  variable: "--font-figtree",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(practice.url),
  title: "Drafta dental",
  description:
    "Drafta dental, cabinet stomatologic de familie din centrul Bucureștiului, din anul 2000. Stomatologia regândită: igienizare, albire, fațete, coroane, punți și implanturi.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "ro_RO",
    siteName: practice.name,
    title: "Drafta dental",
    description:
      "Cabinet stomatologic de familie în Strada Justinian 10, București. Programează-te online sau la telefon.",
    // TODO: imagine OG reală (1200×630) după ce există fotografii.
  },
  robots: {
    // TODO: scoateți blocarea după ce datele-exemplu sunt înlocuite.
    index: false,
    follow: false,
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ro" className={`${urbanist.variable} ${figtree.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
