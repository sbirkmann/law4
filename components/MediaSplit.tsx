import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./ui/Reveal";
import { cn } from "@/lib/utils";

export function MediaSplit({ title, image, alt, children, links, flip = false, tone = "stone" }: { title: string; image: string; alt: string; children?: React.ReactNode; links?: { label: string; href: string }[]; flip?: boolean; tone?: "stone" | "white" }) {
  return (
    <Reveal className="container-x mt-16 lg:mt-20">
      <div className={cn("grid lg:grid-cols-12", tone === "stone" ? "bg-stone" : "bg-white ring-1 ring-line")}>
        <div className={cn("relative aspect-[4/3] lg:col-span-5 lg:aspect-auto lg:min-h-[420px]", flip && "lg:order-2")}>
          <Image src={image} alt={alt} fill sizes="(min-width:1024px) 40vw, 100vw" className="object-cover" />
        </div>
        <div className={cn("p-7 sm:p-10 lg:col-span-7 lg:p-12", flip && "lg:order-1")}>
          <h2 className="headline headline-lg text-copper">{title}</h2>
          {children && <div className="mt-6 text-[15.5px] leading-relaxed text-ink">{children}</div>}
          {links && (
            <ul className="mt-6 grid gap-x-8 gap-y-2.5 sm:grid-cols-2">
              {links.map((l) => <li key={l.href + l.label}><Link href={l.href} className="text-[15.5px] text-ink transition-colors hover:text-copper">{l.label}</Link></li>)}
            </ul>
          )}
        </div>
      </div>
    </Reveal>
  );
}

export function ArrowLink({ href, children }: { href: string; children: React.ReactNode }) {
  return <Link href={href} className="arrow-link"><ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.5} aria-hidden />{children}</Link>;
}
