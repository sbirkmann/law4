import { PageHead } from "@/components/PageHead";
import { ArrowLink } from "@/components/MediaSplit";
import { jobs } from "@/data/company";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({ title: "Jobangebote", description: "Offene Stellen bei Ostholm Rütter (Demo).", path: "/karriere/jobs" });

export default function Page() {
  return (
    <>
      <PageHead crumbs={[{ label: "Karriere", href: "/karriere" }, { label: "Jobangebote" }]} title="Jobangebote" />
      <section className="container-x mt-12">
        <ul className="divide-y divide-line border-t border-line">
          {jobs.map((j) => <li key={j.title} className="grid gap-2 py-5 sm:grid-cols-[1fr_140px_140px_auto] sm:items-center sm:gap-6"><span className="text-[16px] font-medium text-ink">{j.title}</span><span className="text-[13.5px] text-muted">{j.office}</span><span className="text-[13.5px] text-muted">{j.type}</span><ArrowLink href="/kontakt">Bewerben</ArrowLink></li>)}
        </ul>
        <p className="mt-6 text-[13px] text-muted">Demo-Stellenanzeigen ohne echte Bewerbungsmöglichkeit.</p>
      </section>
    </>
  );
}
