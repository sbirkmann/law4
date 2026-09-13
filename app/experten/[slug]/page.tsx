import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Mail, Phone } from "lucide-react";
import { Breadcrumbs } from "@/components/PageHead";
import { InsightRows } from "@/components/ListRows";
import { getLawyer, lawyers } from "@/data/lawyers";
import { offices } from "@/data/offices";
import { capabilities } from "@/data/practices";
import { insights } from "@/data/insights";
import { buildMetadata } from "@/lib/metadata";

type Params = { slug: string };
export function generateStaticParams(): Params[] { return lawyers.map((l) => ({ slug: l.slug })); }
export async function generateMetadata({ params }: { params: Promise<Params> }) {
  const { slug } = await params; const l = getLawyer(slug); if (!l) return {};
  return buildMetadata({ title: `${l.name} – ${l.title}`, description: l.bio.slice(0, 155), path: `/experten/${l.slug}`, image: l.image });
}

export default async function LawyerPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params; const l = getLawyer(slug); if (!l) notFound();
  const office = offices.find((o) => o.slug === l.office);
  const items = insights.filter((i) => i.authors.includes(l.slug));
  return (
    <>
      <Breadcrumbs crumbs={[{ label: "Experten", href: "/experten" }, { label: l.name }]} />
      <article className="container-x pt-12 lg:pt-16">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4"><div className="relative aspect-[4/5] overflow-hidden bg-stone"><Image src={l.image} alt={`Portrait von ${l.name}`} fill priority sizes="(min-width:1024px) 33vw, 100vw" className="object-cover object-top" /></div></div>
          <div className="lg:col-span-8">
            <p className="text-sm uppercase tracking-widest text-copper">{l.title}</p>
            <h1 className="headline headline-xl mt-2 text-pine">{l.name}</h1>
            <p className="mt-2 text-base text-muted">Rechtsanwältin/Rechtsanwalt · <Link href={`/sozietaet/standorte#${l.office}`} className="hover:text-copper">{office?.city}</Link></p>
            <div className="mt-6 flex flex-wrap gap-6 text-base">
              <a href={`tel:${l.phone.replace(/\s/g, "")}`} className="inline-flex items-center gap-2 hover:text-copper"><Phone className="h-4 w-4" strokeWidth={1.75} aria-hidden />{l.phone}</a>
              <a href={`mailto:${l.email}`} className="inline-flex items-center gap-2 hover:text-copper"><Mail className="h-4 w-4" strokeWidth={1.75} aria-hidden />{l.email}</a>
            </div>
            <p className="mt-8 text-base leading-relaxed text-ink">{l.bio}</p>
            <div className="mt-10 grid gap-8 sm:grid-cols-3">
              <div><h2 className="text-xs font-semibold uppercase tracking-wider text-muted">Kompetenzen</h2><ul className="mt-3 space-y-1.5 text-base">{l.practices.map((p) => { const c = capabilities.find((x) => x.slug === p); return c ? <li key={p}><Link href={`/kompetenz/${c.slug}`} className="hover:text-copper">{c.title}</Link></li> : null; })}</ul></div>
              <div><h2 className="text-xs font-semibold uppercase tracking-wider text-muted">Werdegang</h2><ul className="mt-3 space-y-1.5 text-base">{l.education.map((e) => <li key={e}>{e}</li>)}</ul></div>
              <div><h2 className="text-xs font-semibold uppercase tracking-wider text-muted">Sprachen</h2><ul className="mt-3 space-y-1.5 text-base">{l.languages.map((e) => <li key={e}>{e}</li>)}</ul></div>
            </div>
          </div>
        </div>
      </article>
      {items.length > 0 && <section className="container-x mt-16"><h2 className="headline headline-lg text-pine">Beiträge und Mandate</h2><div className="mt-6"><InsightRows items={items} /></div></section>}
    </>
  );
}
