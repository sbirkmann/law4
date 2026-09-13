import { PageHead } from "@/components/PageHead";
import { stories, values } from "@/data/company";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({ title: "Corporate Culture", description: "Kultur, Benefits, People und FAQ bei Ostholm Rütter (Demo).", path: "/karriere/kultur" });

const benefits = ["Flexible Arbeitszeitmodelle und hybrides Arbeiten", "Weiterbildungsbudget und Fachanwaltslehrgänge", "Elternzeit-Rückkehrprogramm mit Teilzeitpartnerschaft", "Sport- und Gesundheitsangebote an allen Standorten", "Deutschlandticket und Jobrad", "Sabbatical nach fünf Jahren"];
const faq = [
  { q: "Welche Examensnoten erwarten Sie?", a: "Zwei Prädikatsexamen sind die Regel, aber wir sehen Menschen, nicht nur Noten. Auslandserfahrung, Promotion oder ein technischer Hintergrund zählen ebenso." },
  { q: "Wie läuft der Bewerbungsprozess?", a: "Ein Gespräch mit zwei Partnerinnen oder Partnern, ein Kennenlerntag im Team, dann eine Entscheidung innerhalb von zwei Wochen." },
  { q: "Kann ich in Teilzeit Partnerin werden?", a: "Ja. Mehrere unserer Partnerinnen und Partner arbeiten in Teilzeitmodellen. Der Weg zur Partnerschaft berücksichtigt das." },
];

export default function Page() {
  return (
    <>
      <PageHead crumbs={[{ label: "Karriere", href: "/karriere" }, { label: "Corporate Culture" }]} title="Corporate Culture" eyebrow="So arbeiten wir" intro={<p>Kultur zeigt sich nicht in Leitbildern, sondern darin, wie Entscheidungen fallen, wie Feedback gegeben wird und wer im Meeting das Wort hat. Fünf Prinzipien, an denen wir uns messen lassen.</p>} />
      <section className="container-x mt-12"><ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">{values.map((v) => <li key={v.title}><h2 className="headline headline-md text-pine">{v.title}</h2><p className="mt-2 text-[14px] leading-relaxed text-muted">{v.text}</p></li>)}</ul></section>
      <section id="benefits" className="mt-16 scroll-mt-24 bg-stone py-14"><div className="container-x"><h2 className="headline headline-lg text-pine">Benefits</h2><ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{benefits.map((b) => <li key={b} className="bg-white p-5 text-[15px]">{b}</li>)}</ul></div></section>
      <section id="people" className="container-x mt-16 scroll-mt-24"><h2 className="headline headline-lg text-pine">People</h2><ul className="mt-6 grid gap-4 md:grid-cols-3">{stories.map((s) => <li key={s.name} className="border border-line p-7"><span className="bg-copper px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-white">{s.tag}</span><p className="mt-5 text-[15.5px] leading-relaxed">„{s.text}“</p><p className="mt-5 text-[13px] font-medium text-pine">{s.name}</p></li>)}</ul></section>
      <section id="faq" className="container-x mt-16 scroll-mt-24"><h2 className="headline headline-lg text-pine">FAQ</h2><dl className="mt-6 divide-y divide-line border-y border-line">{faq.map((f) => <div key={f.q} className="py-5"><dt className="text-[16px] font-medium text-ink">{f.q}</dt><dd className="mt-2 text-[15px] leading-relaxed text-muted">{f.a}</dd></div>)}</dl></section>
    </>
  );
}
