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
                <Link href={t.href} className="card group flex flex-col items-center gap-5 px-4 py-9">
                  <span className="inline-flex h-16 w-16 items-center justify-center rounded-full border border-copper/60 text-copper transition-all duration-500 group-hover:border-pine group-hover:bg-pine group-hover:text-white">
                    <Icon className="h-6 w-6" strokeWidth={1.25} aria-hidden />
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
