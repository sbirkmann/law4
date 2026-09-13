import { PageHead } from "@/components/PageHead";
import { site } from "@/data/site";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({ title: "Datenschutz", description: "Datenschutzhinweise der Demo-Website Ostholm Rütter.", path: "/datenschutz" });

const sections = [
  { id: "verantwortlich", h: "1. Verantwortliche Stelle", p: [`Verantwortlich im Sinne der DSGVO ist (fiktiv): ${site.legalName}, Taunusanlage 70, 60325 Frankfurt am Main, ${site.email}.`] },
  { id: "daten", h: "2. Verarbeitete Daten", p: ["Diese Demo setzt keine Analyse-, Tracking- oder Marketing-Dienste ein und setzt keine einwilligungspflichtigen Cookies. Beim Aufruf verarbeitet der Hosting-Anbieter technisch notwendige Verbindungsdaten in Server-Logs (Art. 6 Abs. 1 lit. f DSGVO)."] },
  { id: "formular", h: "3. Kontaktformular", p: ["Das Formular versendet keine Daten. Eingaben werden ausschließlich im Browser verarbeitet und verworfen."] },
  { id: "cookies", h: "4. Cookies", p: ["Es werden keine Cookies gesetzt, die einer Einwilligung bedürfen. Deshalb gibt es keine Cookie-Einstellungen."] },
  { id: "betrug", h: "5. Warnung vor Betrugsversuchen", p: ["Wie viele Kanzleien wäre auch eine echte Kanzlei dieses Namens Ziel von Phishing. Wir versenden keine Zahlungsaufforderungen per E-Mail. Im Zweifel rufen Sie das jeweilige Büro an."] },
  { id: "rechte", h: "6. Ihre Rechte", p: ["Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit, Widerspruch (Art. 15 bis 21 DSGVO) sowie Beschwerde bei einer Aufsichtsbehörde, in Hessen beim Hessischen Beauftragten für Datenschutz und Informationsfreiheit."] },
  { id: "stand", h: "7. Stand", p: ["September 2026. Demo-Fassung ohne Rechtswirkung."] },
];

export default function Page() {
  return (
    <>
      <PageHead crumbs={[{ label: "Datenschutz" }]} title="Datenschutzhinweis" />
      <div className="container-x mt-12 mx-auto max-w-3xl space-y-8 text-[15.5px] leading-relaxed text-ink">
        {sections.map((s) => <section key={s.id} id={s.id} className="scroll-mt-24"><h2 className="headline headline-md text-pine">{s.h}</h2>{s.p.map((t, i) => <p key={i} className="mt-3">{t}</p>)}</section>)}
      </div>
    </>
  );
}
