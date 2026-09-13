import type { Metadata, Viewport } from "next";
import { Instrument_Sans, Newsreader } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/data/site";
import "./globals.css";

const grotesk = Instrument_Sans({ subsets: ["latin"], variable: "--font-grotesk", display: "swap" });
const serif = Newsreader({ subsets: ["latin"], variable: "--font-serif-var", display: "swap", style: ["normal", "italic"], axes: ["opsz"] });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "Ostholm Rütter | Wirtschaftskanzlei", template: "%s | Ostholm Rütter" },
  description: site.description,
  openGraph: { type: "website", locale: "de_DE", siteName: site.name, title: "Ostholm Rütter | Wirtschaftskanzlei", description: site.description, images: [{ url: "/images/og.jpg", width: 1800, height: 1200, alt: "Ostholm Rütter" }] },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
  alternates: { canonical: site.url },
};

export const viewport: Viewport = { themeColor: "#0f2f26", width: "device-width", initialScale: 1 };

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
    <html lang="de" className={`${grotesk.variable} ${serif.variable}`}>
      <body className="flex min-h-dvh flex-col">
        <Header />
        <main id="inhalt" className="flex-1">{children}</main>
        <Footer />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
