import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./ui/Reveal";
import { cn } from "@/lib/utils";

/** Image and text on a 5/7 split, separated by a hairline instead of a box. */
export function MediaSplit({ title, image, alt, children, links, flip = false, tone = "stone", priority = false }: { title: string; image: string; alt: string; children?: React.ReactNode; links?: { label: string; href: string }[]; flip?: boolean; tone?: "stone" | "white"; priority?: boolean }) {
  return (
    <Reveal className="container-x mt-16 lg:mt-24">
      <div className={cn("grid-12 border-t border-line pt-8 lg:pt-12", tone === "white" && "")}>
        <div className={cn("duotone relative col-span-12 aspect-[4/3] lg:col-span-5 lg:aspect-[4/5]", flip && "lg:order-2 lg:col-start-8")}>
          <Image src={image} alt={alt} fill priority={priority} sizes="(min-width:1024px) 40vw, 100vw" className="object-cover" />
        </div>
        <div className={cn("col-span-12 lg:col-span-6", flip ? "lg:order-1 lg:col-start-1" : "lg:col-start-7")}>
          <h2 className="headline headline-lg text-pine">{title}</h2>
          {children && <div className="lead mt-6 text-muted">{children}</div>}
          {links && (
            <ul className="mt-8 grid border-t border-line sm:grid-cols-2 sm:gap-x-8">
              {links.map((l) => (
                <li key={l.href + l.label} className="border-b border-line">
                  <Link href={l.href} className="group flex items-center justify-between gap-4 py-3 text-base text-ink transition-colors duration-200 hover:text-copper-deep">
                    {l.label}
                    <ArrowUpRight className="h-3.5 w-3.5 flex-none text-copper opacity-0 transition-all duration-300 ease-out-expo group-hover:translate-x-1 group-hover:opacity-100" strokeWidth={2} aria-hidden />
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </Reveal>
  );
}

export function ArrowLink({ href, children }: { href: string; children: React.ReactNode }) {
  return <Link href={href} className="arrow-link">{children}<ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2} aria-hidden /></Link>;
}
