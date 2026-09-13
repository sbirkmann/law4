import type { Metadata, Viewport } from "next";
import { Barlow_Condensed, Lora, Source_Sans_3 } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/data/site";
import "./globals.css";

const source = Source_Sans_3({ subsets: ["latin"], variable: "--font-source", display: "swap", weight: ["400", "500", "600"] });
const barlow = Barlow_Condensed({ subsets: ["latin"], variable: "--font-barlow", display: "swap", weight: ["500", "600"] });
const lora = Lora({ subsets: ["latin"], variable: "--font-lora", display: "swap", weight: ["500"] });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "Ostholm Rütter | Wirtschaftskanzlei", template: "%s | Ostholm Rütter" },
  description: site.description,
  openGraph: { type: "website", locale: "de_DE", siteName: site.name, title: "Ostholm Rütter | Wirtschaftskanzlei", description: site.description, images: [{ url: "/images/og.jpg", width: 1800, height: 1200, alt: "Ostholm Rütter" }] },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
  alternates: { canonical: site.url },
};

export const viewport: Viewport = { themeColor: "#10352b", width: "device-width", initialScale: 1 };

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: site.legalName,
  description: site.description,
  url: site.url,
  telephone: site.phone,
  email: site.email,
  address: { "@type": "PostalAddress", streetAddress: "Taunusanlage 70", postalCode: "60325", addressLocality: "Frankfurt am Main", addressCountry: "DE" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${source.variable} ${barlow.variable} ${lora.variable}`}>
      <body className="flex min-h-dvh flex-col">
        <Header />
        <main id="inhalt" className="flex-1">{children}</main>
        <Footer />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
