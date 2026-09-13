import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHead } from "@/components/PageHead";
import { focusTopics, getFocus } from "@/data/focus";
import { lawyers } from "@/data/lawyers";
import { buildMetadata } from "@/lib/metadata";

type Params = { slug: string };
export function generateStaticParams(): Params[] { return focusTopics.map((f) => ({ slug: f.slug })); }
export async function generateMetadata({ params }: { params: Promise<Params> }) {
  const { slug } = await params; const f = getFocus(slug); if (!f) return {};
  return buildMetadata({ title: f.title, description: f.lead, path: `/kompetenz/fokusthemen/${f.slug}`, image: f.image });
}

export default async function FocusPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params; const f = getFocus(slug); if (!f) notFound();
  const team = lawyers.filter((l) => f.contacts.includes(l.slug));
  return (
    <>
      <PageHead crumbs={[{ label: "Kompetenz", href: "/kompetenz" }, { label: "Fokusthemen", href: "/kompetenz/fokusthemen" }, { label: f.short }]} title={f.title} eyebrow="Fokusthema" intro={<p>{f.lead}</p>} />
      <section className="container-x mt-16 grid gap-10 lg:grid-cols-12">
        <div className="space-y-5 text-base leading-relaxed text-ink lg:col-span-7">{f.body.map((p, i) => <p key={i}>{p}</p>)}</div>
        <div className="lg:col-span-5">
          <div className="relative aspect-[4/3] overflow-hidden"><Image src={f.image} alt="" fill sizes="(min-width:1024px) 40vw, 100vw" className="object-cover" /></div>
          <div className="mt-8 bg-stone p-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted">Ihre Ansprechpartner</p>
            <ul className="mt-4 space-y-4">{team.map((l) => <li key={l.slug}><Link href={`/experten/${l.slug}`} className="group flex items-center gap-3"><span className="relative h-14 w-14 shrink-0 overflow-hidden bg-paper"><Image src={l.image} alt="" fill sizes="56px" className="object-cover object-top" /></span><span><span className="block text-base font-medium text-ink group-hover:text-copper">{l.name}</span><span className="block text-sm text-muted">{l.title}</span></span></Link></li>)}</ul>
          </div>
        </div>
      </section>
    </>
  );
}
