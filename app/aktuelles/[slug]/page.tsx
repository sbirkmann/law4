import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/PageHead";
import { InsightRows } from "@/components/ListRows";
import { getInsight, insights } from "@/data/insights";
import { lawyers } from "@/data/lawyers";
import { capabilities } from "@/data/practices";
import { buildMetadata } from "@/lib/metadata";

type Params = { slug: string };
export function generateStaticParams(): Params[] { return insights.map((i) => ({ slug: i.slug })); }
export async function generateMetadata({ params }: { params: Promise<Params> }) {
  const { slug } = await params; const a = getInsight(slug); if (!a) return {};
  return buildMetadata({ title: a.title, description: a.excerpt, path: `/aktuelles/${a.slug}`, image: a.image, type: "article" });
}

export default async function ArticlePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params; const a = getInsight(slug); if (!a) notFound();
  const authors = lawyers.filter((l) => a.authors.includes(l.slug));
  const practice = capabilities.find((c) => c.slug === a.practice);
  const more = insights.filter((x) => x.slug !== a.slug && x.type === a.type).slice(0, 4);
  return (
    <>
      <Breadcrumbs crumbs={[{ label: "Aktuelles", href: "/aktuelles" }, { label: a.type === "Deal" ? "Mandat" : a.type === "Presse" ? "Kanzlei News" : "Know-how" }]} />
      <article className="container-x pt-12 lg:pt-16">
        <div className="mx-auto max-w-3xl">
          <p className="text-[12px] uppercase tracking-[0.2em] text-copper"><time dateTime={a.date}>{a.dateLabel}</time> · {a.type === "Deal" ? "Mandat" : a.type === "Presse" ? "Kanzlei News" : a.type}</p>
          <h1 className="headline headline-xl mt-4 text-pine">{a.title}</h1>
          <p className="mt-6 text-[17px] leading-relaxed text-ink">{a.excerpt}</p>
        </div>
        <div className="relative mx-auto mt-10 aspect-[16/7] max-w-5xl overflow-hidden"><Image src={a.image} alt="" fill priority sizes="100vw" className="object-cover" /></div>
        <div className="mx-auto mt-12 grid max-w-5xl gap-12 lg:grid-cols-12">
          <div className="space-y-6 text-[16px] leading-relaxed text-ink lg:col-span-8">
            {a.body.map((b, i) => <div key={i}>{b.heading && <h2 className="headline headline-md mb-2 mt-8 text-pine">{b.heading}</h2>}<p>{b.text}</p></div>)}
            <p className="border-l-2 border-copper pl-4 text-[13px] text-muted">Demo-Inhalt. Alle genannten Unternehmen, Mandate und Zahlen sind fiktiv.</p>
          </div>
          <aside className="lg:col-span-4">
            {practice && <><p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">Kompetenz</p><Link href={`/kompetenz/${practice.slug}`} className="mt-2 block text-[15px] text-ink hover:text-copper">{practice.title}</Link></>}
            {authors.length > 0 && <>
              <p className="mt-8 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">Ansprechpartner</p>
              <ul className="mt-3 space-y-4">
                {authors.map((l) => (
                  <li key={l.slug}><Link href={`/experten/${l.slug}`} className="group flex items-center gap-3"><span className="relative h-14 w-14 shrink-0 overflow-hidden bg-stone"><Image src={l.image} alt="" fill sizes="56px" className="object-cover object-top" /></span><span><span className="block text-[15px] font-medium text-ink group-hover:text-copper">{l.name}</span><span className="block text-[12.5px] text-muted">{l.title}</span></span></Link></li>
                ))}
              </ul>
            </>}
          </aside>
        </div>
      </article>
      {more.length > 0 && <section className="container-x mt-20"><h2 className="headline headline-lg text-pine">Weitere Beiträge</h2><div className="mt-6"><InsightRows items={more} /></div></section>}
    </>
  );
}
