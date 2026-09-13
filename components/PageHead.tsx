import Link from "next/link";
import { cn } from "@/lib/utils";

export function Breadcrumbs({ crumbs }: { crumbs: { label: string; href?: string }[] }) {
  return (
    <nav aria-label="Brotkrumen" className="bg-stone">
      <ol className="container-x flex flex-wrap gap-2 py-2.5 text-[12px] text-muted">
        <li><Link href="/" className="hover:text-pine">Startseite</Link></li>
        {crumbs.map((c) => (
          <li key={c.label} className="flex gap-2"><span aria-hidden>›</span>{c.href ? <Link href={c.href} className="hover:text-pine">{c.label}</Link> : <span className="text-ink">{c.label}</span>}</li>
        ))}
      </ol>
    </nav>
  );
}

export function PageHead({ crumbs, title, accent, eyebrow, intro, className }: { crumbs: { label: string; href?: string }[]; title: string; accent?: string; eyebrow?: string; intro?: React.ReactNode; className?: string }) {
  return (
    <>
      <Breadcrumbs crumbs={crumbs} />
      <header className={cn("container-x pt-14 text-center lg:pt-20", className)}>
        <h1 className="headline headline-xl text-pine">
          {title}
          {accent && <><br /><span className="text-copper">{accent}</span></>}
        </h1>
        {intro && (
          <div className="relative mx-auto mt-14 max-w-3xl border border-line px-6 pb-8 pt-8 text-left sm:px-10">
            {eyebrow && <p className="absolute -top-2.5 left-1/2 -translate-x-1/2 whitespace-nowrap bg-white px-4 text-[13px] uppercase tracking-[0.22em] text-muted">{eyebrow}</p>}
            <div className="text-[16px] leading-relaxed text-ink">{intro}</div>
          </div>
        )}
      </header>
    </>
  );
}
