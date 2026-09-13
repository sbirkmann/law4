import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";
import { insights } from "@/data/insights";
import { Reveal } from "@/components/ui/Reveal";

export function HeroPanel() {
  const tiles = insights.slice(0, 6);
  return (
    <section className="container-x pt-8 lg:pt-12" aria-labelledby="hero-title">
      <div className="relative lg:min-h-[600px]">
        <div className="panel-animated flex aspect-[16/9] w-full items-center justify-center text-white lg:absolute lg:left-0 lg:top-0 lg:aspect-auto lg:h-[540px] lg:w-[48%] lg:justify-start">
          <div className="relative z-10 px-6 py-10 text-center sm:px-12 lg:w-[64%] lg:pr-[9%] lg:text-right">
            <p className="text-[11px] uppercase tracking-[0.32em] text-white/60">Seit {site.founded} · Sechs Standorte</p>
            <h1 id="hero-title" className="font-serif mt-5 text-[34px] font-medium leading-none tracking-tight sm:text-[40px]">{site.name}</h1>
            <span aria-hidden className="mt-6 inline-block h-px w-12 bg-copper" />
            <p className="mt-6 text-[17px] font-light leading-relaxed text-white/90 sm:text-[19px]">{site.claim}</p>
          </div>
        </div>
        <ul className="relative z-10 mt-4 grid gap-4 sm:grid-cols-2 lg:ml-[35%] lg:mt-0 lg:grid-cols-3 lg:pt-[84px]">
          {tiles.map((t, i) => (
            <Reveal as="li" key={t.slug} delay={i * 0.06}>
              <Link href={`/aktuelles/${t.slug}`} className="group relative block aspect-[5/4] overflow-hidden bg-stone shadow-[0_18px_40px_-24px_rgba(0,0,0,0.45)]">
                <span className="duotone absolute inset-0 block"><Image src={t.image} alt="" fill sizes="(min-width:1024px) 22vw, (min-width:640px) 50vw, 100vw" className="object-cover transition-transform duration-[1200ms] ease-out-expo group-hover:scale-105" /></span>
                <span className="absolute bottom-0 left-0 right-5 border-t-2 border-copper bg-white px-5 py-4 transition-colors group-hover:text-copper">
                  <span className="block text-[10px] uppercase tracking-[0.22em] text-muted">{t.type === "Deal" ? "Mandat" : t.type === "Presse" ? "Kanzlei News" : "Know-how"}</span>
                  <span className="mt-1 block break-words text-[14.5px] leading-snug text-ink [hyphens:auto]" lang="de">{t.title}</span>
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
