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
  title: "Drafta dental: cabinet stomatologic în București",
  description:
    "Drafta dental, cabinet stomatologic de familie din centrul Bucureștiului, din anul 2000. Stomatologia regândită: igienizare, albire, fațete, coroane, punți și implanturi.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "ro_RO",
    siteName: practice.name,
    title: "Drafta dental: cabinet stomatologic în București",
    description:
      "Cabinet stomatologic de familie în Strada Justinian 10, București. Programează-te online sau la telefon.",
    images: [
      {
        url: "/og-drafta-dental.jpg",
        width: 1200,
        height: 630,
        alt: "Cabinetul Drafta dental din Strada Justinian 10, București",
      },
    ],
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
