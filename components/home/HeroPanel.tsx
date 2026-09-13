import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { site } from "@/data/site";
import { Eyebrow } from "@/components/ui/Headline";

const links = [
  { label: "Beratungsspektrum", href: "/kompetenz/beratungsspektrum" },
  { label: "Unsere Experten", href: "/experten" },
  { label: "Über die Sozietät", href: "/sozietaet" },
];

/** Hero: display headline across 9 columns, intro left (4), image right (7). CSS-only reveal, no client JS. */
export function HeroPanel() {
  return (
    <section className="container-x pb-16 pt-8 lg:pb-24 lg:pt-16" aria-labelledby="hero-title">
      <div className="grid-12">
        <div className="col-span-12 lg:col-span-10">
          <div className="rise"><Eyebrow>Wirtschaftskanzlei · Seit {site.founded} · Sechs Standorte</Eyebrow></div>
          <h1 id="hero-title" className="rise headline text-display mt-8 text-pine [--rise-delay:80ms]">{site.claim}</h1>
        </div>

        <div className="rise col-span-12 [--rise-delay:160ms] lg:col-span-4 lg:pt-6">
          <p className="measure text-base text-muted">
            Rund 620 Mitarbeitende, davon über 300 Anwältinnen und Anwälte, beraten an sechs Standorten Unternehmen, Investoren und die öffentliche Hand in allen Fragen des Wirtschaftsrechts.
          </p>
          <ul className="mt-8 divide-y divide-line border-y border-line">
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="row-link -mx-3 flex items-center justify-between px-3 py-3">
                  <span className="row-title text-sm font-medium tracking-wide text-pine">{l.label}</span>
                  <ArrowUpRight className="row-arrow h-4 w-4 text-muted" strokeWidth={1.75} aria-hidden />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="rise col-span-12 [--rise-delay:240ms] lg:col-span-7 lg:col-start-6">
          <div className="duotone relative aspect-[3/2] w-full">
            <Image src="/images/office-1.jpg" alt="Konferenzraum mit langem Tisch und schwarzen Stühlen" fill priority sizes="(min-width:1024px) 52vw, 100vw" className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
