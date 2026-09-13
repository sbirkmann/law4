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
        <div className="panel-animated flex aspect-[16/9] w-full items-center justify-center text-white lg:justify-start lg:absolute lg:left-0 lg:top-0 lg:aspect-auto lg:h-[540px] lg:w-[48%]">
          <div className="relative z-10 px-6 py-10 text-center sm:px-12 lg:w-[64%] lg:pr-[9%] lg:text-right">
            <h1 id="hero-title" className="font-sans text-[32px] font-medium tracking-tight sm:text-[36px]">{site.name}</h1>
            <p className="mt-8 text-[18px] leading-relaxed sm:text-[21px]">{site.claim}</p>
          </div>
        </div>
        <ul className="relative z-10 mt-4 grid gap-4 sm:grid-cols-2 lg:ml-[35%] lg:mt-0 lg:grid-cols-3 lg:pt-[84px]">
          {tiles.map((t, i) => (
            <Reveal as="li" key={t.slug} delay={i * 0.06}>
              <Link href={`/aktuelles/${t.slug}`} className="group relative block aspect-[5/4] overflow-hidden bg-stone shadow-[0_10px_30px_-18px_rgba(0,0,0,0.5)]">
                <Image src={t.image} alt="" fill sizes="(min-width:1024px) 22vw, (min-width:640px) 50vw, 100vw" className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-105" />
                <span className="absolute bottom-0 left-0 right-4 bg-white px-5 py-4 text-[15px] leading-snug text-ink transition-colors group-hover:text-copper">{t.title}</span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
