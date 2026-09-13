import Image from "next/image";
import { PageHead } from "@/components/PageHead";
import { ArrowLink } from "@/components/MediaSplit";
import { careerTracks } from "@/data/company";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({ title: "Einstiegswege", description: "Einstiegswege bei Ostholm Rütter: Lawyers, Legal Talents, Legal Assistants, Business Professionals, Business Talents (Demo).", path: "/karriere/lawyers" });

const details: Record<string, string[]> = {
  lawyers: ["Direkter Mandatskontakt ab dem ersten Tag", "Strukturiertes Associate-Programm über vier Jahre", "Secondments bei Mandanten und Partnerkanzleien im Ausland", "Transparente Kriterien für Counsel und Partnerschaft"],
  talents: ["Referendariat in allen Praxisgruppen und an allen Standorten", "Praktika ab dem fünften Semester", "Wissenschaftliche Mitarbeit neben Promotion oder LL.M.", "Examensvorbereitung mit Repetitorium-Zuschuss"],
  assistants: ["Ausbildung zur Rechtsanwaltsfachangestellten mit Übernahmegarantie bei Eignung", "Weiterbildung zur Rechtsfachwirtin", "Moderne Arbeitsplätze und flexible Arbeitszeiten", "Standortübergreifende Teams"],
  business: ["Finance, IT, Marketing, HR, Knowledge Management", "Projektverantwortung in einem wachsenden Unternehmen", "Weiterbildungsbudget für jede Mitarbeiterin und jeden Mitarbeiter", "Hybrides Arbeiten"],
  "business-talents": ["Ausbildung zur Kauffrau für Büromanagement", "Duales Studium BWL und Wirtschaftsinformatik", "Rotation durch mehrere Abteilungen", "Persönliche Mentorin oder Mentor"],
};

export default function Page() {
  return (
    <>
      <PageHead crumbs={[{ label: "Karriere", href: "/karriere" }, { label: "Einstiegswege" }]} title="Einstiegswege" />
      <div className="container-x mt-12 space-y-12">
        {careerTracks.map((t, i) => (
          <section key={t.slug} id={t.slug} className="scroll-mt-24 grid gap-8 border-t border-line pt-12 lg:grid-cols-12">
            <div className={i % 2 ? "lg:col-span-5 lg:order-2" : "lg:col-span-5"}><div className="relative aspect-[4/3] overflow-hidden"><Image src={t.image} alt="" fill sizes="(min-width:1024px) 40vw, 100vw" className="object-cover" /></div></div>
            <div className="lg:col-span-7">
              <h2 className="headline headline-lg text-pine">{t.title}</h2>
              <p className="mt-4 text-[16px] leading-relaxed text-ink">{t.text}</p>
              <ul className="mt-6 space-y-2 text-[15px]">{details[t.slug]?.map((d) => <li key={d} className="flex gap-3"><span aria-hidden className="mt-2.5 h-px w-4 shrink-0 bg-copper" />{d}</li>)}</ul>
              <p className="mt-6"><ArrowLink href="/karriere/jobs">Passende Jobs</ArrowLink></p>
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
