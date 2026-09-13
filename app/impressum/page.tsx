import { PageHead } from "@/components/PageHead";
import { site } from "@/data/site";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({ title: "Impressum", description: "Impressum der Demo-Website Ostholm Rütter.", path: "/impressum" });

export default function Page() {
  return (
    <>
      <PageHead crumbs={[{ label: "Impressum" }]} title="Impressum" />
      <div className="container-x mt-12 mx-auto max-w-3xl space-y-8 text-base leading-relaxed text-ink">
        <div className="bg-stone p-6"><p><strong className="font-semibold">Demo-Hinweis:</strong> Diese Website ist ein fiktives Demonstrationsprojekt. Es gibt keine Kanzlei Ostholm Rütter. Alle Angaben sind erfunden und erfüllen keine gesetzlichen Impressumspflichten.</p></div>
        <section><h2 className="headline headline-md text-pine">Angaben gemäß § 5 DDG</h2><p className="mt-3">{site.legalName}<br />Taunusanlage 70<br />60325 Frankfurt am Main<br />Telefon: {site.phone}<br />E-Mail: {site.email}</p></section>
        <section><h2 className="headline headline-md text-pine">Vertretungsberechtigte Partner</h2><p className="mt-3">Dr. Katharina Ostholm, Dr. Matthias Rütter (Managementkomitee, fiktiv)</p></section>
        <section><h2 className="headline headline-md text-pine">Berufsrecht</h2><p className="mt-3">Die Berufsbezeichnung „Rechtsanwältin“ bzw. „Rechtsanwalt“ wurde in der Bundesrepublik Deutschland verliehen. Zuständige Kammer (fiktiv): Rechtsanwaltskammer Frankfurt am Main. Berufsrechtliche Regelungen: BRAO, BORA, FAO, RVG.</p></section>
        <section><h2 className="headline headline-md text-pine">Registereintrag und Umsatzsteuer</h2><p className="mt-3">Partnerschaftsregister (fiktiv): Amtsgericht Frankfurt am Main, PR 00000. USt-IdNr. DE 000000000 (fiktiv).</p></section>
        <section id="barrierefreiheit" className="scroll-mt-24"><h2 className="headline headline-md text-pine">Barrierefreiheit</h2><p className="mt-3">Diese Demo folgt den WCAG-2.1-Grundsätzen: semantische Struktur, Tastaturbedienbarkeit, ausreichende Kontraste, reduzierte Bewegung bei entsprechender Systemeinstellung.</p></section>
        <section id="lieferketten" className="scroll-mt-24"><h2 className="headline headline-md text-pine">Transparenz in Lieferketten</h2><p className="mt-3">Als fiktive Kanzlei ohne reale Lieferkette entfällt eine Erklärung. Auf einer echten Website stünde hier die Erklärung nach dem Lieferkettensorgfaltspflichtengesetz.</p></section>
        <section><h2 className="headline headline-md text-pine">Bildnachweise</h2><p className="mt-3">Alle Fotos stammen von Unsplash und werden ausschließlich zu Demonstrationszwecken verwendet. Urheber siehe /images/credits.json.</p></section>
      </div>
    </>
  );
}
