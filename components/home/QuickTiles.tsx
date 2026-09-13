import Link from "next/link";
import { Award, Briefcase, Globe, Lightbulb, Scale } from "lucide-react";
import { SectionHead } from "@/components/ui/Headline";
import { Reveal } from "@/components/ui/Reveal";

const tiles = [
  { label: "Mandate", href: "/aktuelles/news", icon: Scale },
  { label: "Experten", href: "/experten", icon: Award },
  { label: "Know-how", href: "/aktuelles/know-how", icon: Lightbulb },
  { label: "International", href: "/international", icon: Globe },
  { label: "Karriere", href: "/karriere", icon: Briefcase },
];

export function QuickTiles() {
  return (
    <section className="mt-20 bg-stone py-16 lg:mt-24 lg:py-20" aria-label="Auf einen Klick">
      <div className="container-x">
        <SectionHead eyebrow="Über uns" title="Auf einen Klick" />
        <ul className="mx-auto mt-10 grid max-w-5xl grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {tiles.map((t, i) => {
            const Icon = t.icon;
            return (
              <Reveal as="li" key={t.href} delay={i * 0.05}>
                <Link href={t.href} className="group flex flex-col items-center gap-5 bg-white px-4 py-8 transition-all duration-500 ease-out-expo hover:-translate-y-1 hover:shadow-[0_18px_40px_-20px_rgba(16,53,43,0.45)]">
                  <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-copper text-white transition-colors duration-500 group-hover:bg-pine">
                    <Icon className="h-7 w-7" strokeWidth={1.4} aria-hidden />
                  </span>
                  <span className="headline headline-md text-pine">{t.label}</span>
                </Link>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
