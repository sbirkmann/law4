import Link from "next/link";
import { Eyebrow } from "@/components/ui/Headline";
import { cn } from "@/lib/utils";

export function Breadcrumbs({ crumbs }: { crumbs: { label: string; href?: string }[] }) {
  return (
    <nav aria-label="Brotkrumen" className="container-x">
      <ol className="label flex flex-wrap gap-2 border-b border-line py-3 text-xs text-muted">
        <li><Link href="/" className="transition-colors hover:text-pine">Startseite</Link></li>
        {crumbs.map((c) => (
          <li key={c.label} className="flex gap-2"><span aria-hidden className="text-line-strong">/</span>{c.href ? <Link href={c.href} className="transition-colors hover:text-pine">{c.label}</Link> : <span className="text-ink">{c.label}</span>}</li>
        ))}
      </ol>
    </nav>
  );
}

/** Page head on the grid: eyebrow and h1 left (8 cols), serif intro on a second row (7 cols). */
export function PageHead({ crumbs, title, accent, eyebrow, intro, className }: { crumbs: { label: string; href?: string }[]; title: string; accent?: string; eyebrow?: string; intro?: React.ReactNode; className?: string }) {
  return (
    <>
      <Breadcrumbs crumbs={crumbs} />
      <header className={cn("container-x pt-12 lg:pt-16", className)}>
        <div className="grid-12">
          <div className="col-span-12 lg:col-span-9">
            {eyebrow && <div className="rise"><Eyebrow>{eyebrow}</Eyebrow></div>}
            <h1 className="rise headline text-display mt-6 text-pine [--rise-delay:80ms]">
              {title}
              {accent && <><br /><span className="italic text-copper">{accent}</span></>}
            </h1>
          </div>
          {intro && (
            <div className="rise col-span-12 border-t border-line pt-8 [--rise-delay:160ms] lg:col-span-7 lg:col-start-6">
              <div className="lead text-ink">{intro}</div>
            </div>
          )}
        </div>
      </header>
    </>
  );
}
