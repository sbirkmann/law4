import Link from "next/link";
import { footerLinks, site } from "@/data/site";
import { offices } from "@/data/offices";
import { Logo } from "./Logo";

const linkClass = "text-sm text-muted transition-colors duration-200 hover:text-pine";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-line bg-paper lg:mt-32">
      <div className="container-x grid-12 py-16 lg:py-24">
        <div className="col-span-12 lg:col-span-4">
          <Logo />
          <p className="mt-6 max-w-xs text-sm text-muted">{site.claim}</p>
          <p className="mt-6 text-sm text-muted">
            <a href={`mailto:${site.email}`} className="transition-colors hover:text-pine">{site.email}</a>
            <br />
            <a href={site.phoneHref} className="transition-colors hover:text-pine">T {site.phone}</a>
          </p>
        </div>
        <div className="col-span-6 lg:col-span-3 lg:col-start-6">
          <p className="label border-b border-line pb-3 text-xs text-muted">Standorte</p>
          <ul className="mt-4 space-y-2">
            {offices.map((o) => <li key={o.slug}><Link href={`/sozietaet/standorte#${o.slug}`} className={linkClass}>{o.short}</Link></li>)}
          </ul>
        </div>
        <div className="col-span-6 lg:col-span-3 lg:col-start-10">
          <p className="label border-b border-line pb-3 text-xs text-muted">Service</p>
          <ul className="mt-4 space-y-2">
            {footerLinks.map((l) => <li key={l.label}><Link href={l.href} className={linkClass}>{l.label}</Link></li>)}
          </ul>
          <ul className="mt-8 flex items-center gap-4" aria-label="Soziale Netzwerke">
            <li><a href="#" aria-label="LinkedIn (Demo)" className="inline-flex h-6 w-6 items-center justify-center text-pine transition-colors hover:text-copper"><svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden><path d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1-.02-5ZM3 9.5h4v11H3v-11Zm6.5 0h3.8v1.5h.1c.5-1 1.8-1.9 3.7-1.9 4 0 4.7 2.6 4.7 6v5.4h-4v-4.8c0-1.1 0-2.6-1.6-2.6s-1.8 1.2-1.8 2.5v4.9h-4v-11Z" /></svg></a></li>
            <li><a href="#" aria-label="Instagram (Demo)" className="inline-flex h-6 w-6 items-center justify-center text-pine transition-colors hover:text-copper"><svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="3.5" /><circle cx="17.3" cy="6.7" r="0.9" fill="currentColor" stroke="none" /></svg></a></li>
            <li className="label ml-2 text-xs" aria-label="Sprache"><span className="text-pine">DE</span><span className="mx-2 text-line-strong" aria-hidden>|</span><span className="text-muted-light">EN</span></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-line">
        <p className="container-x py-6 text-xs text-muted">
          <strong className="text-ink">Demo-Projekt:</strong> Ostholm Rütter ist eine fiktive Kanzlei. Alle Namen, Personen, Mandate, Kennzahlen, Auszeichnungen und Inhalte sind erfunden und dienen ausschließlich Demonstrationszwecken. Fotos: Unsplash. © {new Date().getFullYear()} Ostholm Rütter Rechtsanwälte PartG mbB (fiktiv).
        </p>
      </div>
    </footer>
  );
}
