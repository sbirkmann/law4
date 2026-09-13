import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHead } from "@/components/PageHead";
import { InsightRows } from "@/components/ListRows";
import { capabilities, getCapability } from "@/data/practices";
import { lawyers } from "@/data/lawyers";
import { insights } from "@/data/insights";
import { buildMetadata } from "@/lib/metadata";

type Params = { slug: string };
export function generateStaticParams(): Params[] { return capabilities.map((c) => ({ slug: c.slug })); }
export async function generateMetadata({ params }: { params: Promise<Params> }) {
  const { slug } = await params; const c = getCapability(slug); if (!c) return {};
  return buildMetadata({ title: c.title, description: c.lead, path: `/kompetenz/${c.slug}`, image: c.image });
}

export default async function CapabilityPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params; const c = getCapability(slug); if (!c) notFound();
  const parent = c.kind === "industry" ? { label: "Branchenschwerpunkte", href: "/kompetenz/branchenschwerpunkte" } : { label: "Beratungsspektrum", href: "/kompetenz/beratungsspektrum" };
  const team = lawyers.filter((l) => l.practices.includes(c.slug));
  const related = insights.filter((i) => i.practice === c.slug).slice(0, 4);
  return (
    <>
      <PageHead crumbs={[{ label: "Kompetenz", href: "/kompetenz" }, parent, { label: c.title }]} title={c.title} eyebrow="Auf einen Blick" intro={<p>{c.lead}</p>} />
      <section className="container-x mt-16 grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <div className="space-y-5 text-base leading-relaxed text-ink">{c.body.map((p, i) => <p key={i}>{p}</p>)}</div>
          <h2 className="headline headline-md mt-10 text-copper">Schwerpunkte</h2>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">{c.highlights.map((h) => <li key={h} className="flex gap-3 text-base"><span aria-hidden className="mt-2.5 h-px w-4 shrink-0 bg-copper" />{h}</li>)}</ul>
        </div>
        <div className="lg:col-span-5">
          <div className="relative aspect-[4/3] overflow-hidden"><Image src={c.image} alt="" fill sizes="(min-width:1024px) 40vw, 100vw" className="object-cover" /></div>
          {team.length > 0 && (
            <div className="mt-8 bg-stone p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted">Ihre Ansprechpartner</p>
              <ul className="mt-4 space-y-4">
                {team.map((l) => (
                  <li key={l.slug}><Link href={`/experten/${l.slug}`} className="group flex items-center gap-3"><span className="relative h-14 w-14 shrink-0 overflow-hidden bg-paper"><Image src={l.image} alt="" fill sizes="56px" className="object-cover object-top" /></span><span><span className="block text-base font-medium text-ink group-hover:text-copper">{l.name}</span><span className="block text-sm text-muted">{l.title}</span></span></Link></li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>
      {related.length > 0 && <section className="container-x mt-16"><h2 className="headline headline-lg text-pine">Aktuelles zu {c.title}</h2><div className="mt-6"><InsightRows items={related} /></div></section>}
    </>
  );
}
