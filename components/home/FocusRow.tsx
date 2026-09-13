import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { focusTopics } from "@/data/focus";
import { Eyebrow } from "@/components/ui/Headline";
import { Reveal } from "@/components/ui/Reveal";

/** Four focus topics on a hairline grid: index, 4:5 duotone image, serif title, short lead. */
export function FocusRow() {
  return (
    <section className="container-x section-quiet" aria-labelledby="fokus-title">
      <div className="grid-12 items-end">
        <div className="col-span-12 lg:col-span-6">
          <Eyebrow index="03">Fokusthemen</Eyebrow>
          <h2 id="fokus-title" className="headline headline-lg mt-6 text-pine">Entwicklungen, die wir aktiv begleiten</h2>
        </div>
        <div className="col-span-12 lg:col-span-4 lg:col-start-9">
          <p className="text-base text-muted">Ostholm Rütter begleitet aktuelle Entwicklungen und Rechtsthemen aktiv.</p>
          <Link href="/kompetenz/fokusthemen" className="arrow-link mt-4">Alle Fokusthemen<ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2} aria-hidden /></Link>
        </div>
      </div>
      <ul className="mt-12 grid grid-cols-2 border-t border-line lg:grid-cols-4 lg:border-l">
        {focusTopics.map((f, i) => (
          <Reveal as="li" key={f.slug} delay={i * 0.06} className="border-b border-line odd:border-r lg:border-r">
            <Link href={`/kompetenz/fokusthemen/${f.slug}`} className="group flex h-full flex-col p-4 transition-colors duration-200 hover:bg-stone lg:p-6">
              <span className="flex items-center justify-between">
                <span className="eyebrow-index" aria-hidden>{String(i + 1).padStart(2, "0")}</span>
                <ArrowUpRight className="h-4 w-4 text-copper transition-transform duration-300 ease-out-expo group-hover:translate-x-1" strokeWidth={1.75} aria-hidden />
              </span>
              <span className="duotone relative mt-6 block aspect-[4/5] w-full">
                <Image src={f.image} alt="" fill sizes="(min-width:1024px) 22vw, 45vw" className="object-cover" />
              </span>
              <span className="headline headline-md mt-6 block text-pine transition-colors duration-200 group-hover:text-copper-deep">{f.short}</span>
              <span className="mt-3 line-clamp-3 block text-sm text-muted">{f.lead}</span>
            </Link>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
