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
    "Stomatologie modernă în Dorobanți: aligneri, albire, implanturi și urgențe. Consultație de 45 de minute, plan de tratament scris, programare în aceeași zi.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "ro_RO",
    siteName: practice.name,
    title: "Drafta dental",
    description:
      "Cabinet stomatologic în Strada Justinian 10, București. Programare online sau telefonic, răspuns în aceeași zi lucrătoare.",
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
      <body>{children}</body>
    </html>
  );
}
