import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Eyebrow } from "@/components/ui/Headline";
import { Reveal } from "@/components/ui/Reveal";

const tiles = [
  { label: "Mandate", href: "/aktuelles/news", text: "Aktuelle Transaktionen und Verfahren" },
  { label: "Experten", href: "/experten", text: "Anwältinnen und Anwälte finden" },
  { label: "Know-how", href: "/aktuelles/know-how", text: "Fachbeiträge und Podcasts" },
  { label: "International", href: "/international", text: "Unabhängig, weltweit vernetzt" },
  { label: "Karriere", href: "/karriere", text: "Einstieg und Entwicklung" },
];

/** "Über uns · Auf einen Klick": a hairline-separated link row instead of icon cards. */
export function QuickTiles() {
  return (
    <section className="bg-stone" aria-label="Auf einen Klick">
      <div className="container-x section-quiet">
        <div className="grid-12 items-end">
          <div className="col-span-12 lg:col-span-5">
            <Eyebrow index="02">Über uns</Eyebrow>
            <h2 className="headline headline-lg mt-6 text-pine">Auf einen Klick</h2>
          </div>
          <p className="col-span-12 text-base text-muted lg:col-span-4 lg:col-start-9">Unabhängige Beratung an sechs Standorten. Was Sie über uns wissen sollten, in fünf Einstiegen.</p>
        </div>
        <ul className="mt-12 grid grid-cols-2 border-t border-line lg:grid-cols-5 lg:border-l">
          {tiles.map((t, i) => (
            <Reveal as="li" key={t.href} delay={i * 0.05} className="border-b border-line odd:border-r lg:border-r">
              <Link href={t.href} className="group flex h-full flex-col justify-between gap-6 px-3 py-6 transition-colors duration-200 hover:bg-paper lg:gap-12 lg:px-6 lg:py-8">
                <span className="eyebrow-index" aria-hidden>{String(i + 1).padStart(2, "0")}</span>
                <span>
                  <span className="headline headline-md block text-pine transition-colors duration-200 group-hover:text-copper-deep">{t.label}</span>
                  <span className="mt-2 block text-sm text-muted">{t.text}</span>
                  <ArrowUpRight className="mt-6 h-4 w-4 text-copper transition-transform duration-300 ease-out-expo group-hover:translate-x-1" strokeWidth={1.75} aria-hidden />
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
