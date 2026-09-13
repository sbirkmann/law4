import Link from "next/link";
import { footerLinks } from "@/data/site";
import { offices } from "@/data/offices";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-line bg-stone">
      <div className="container-x py-5 text-[12px] font-semibold uppercase tracking-[0.14em] text-muted">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <ul className="flex flex-wrap items-center gap-x-3 gap-y-2">
            <li><Link href="/sozietaet/standorte" className="hover:text-pine">Standorte</Link></li>
            {offices.map((o) => (
              <li key={o.slug} className="flex items-center gap-3"><span aria-hidden className="h-1 w-1 rounded-full bg-copper" /><Link href={`/sozietaet/standorte#${o.slug}`} className="hover:text-pine">{o.short}</Link></li>
            ))}
          </ul>
          <p><span className="text-pine">DE</span> <span className="mx-1 text-muted-light">|</span> EN</p>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="container-x flex flex-col gap-4 py-5 text-[12px] font-semibold uppercase tracking-[0.14em] text-muted sm:flex-row sm:items-center sm:justify-between">
          <ul className="flex flex-wrap items-center gap-x-3 gap-y-2">
            {footerLinks.map((l, i) => (
              <li key={l.label} className="flex items-center gap-3">{i > 0 && <span className="text-muted-light" aria-hidden>|</span>}<Link href={l.href} className="hover:text-pine">{l.label}</Link></li>
            ))}
          </ul>
          <ul className="flex items-center gap-4" aria-label="Soziale Netzwerke">
            <li><a href="#" aria-label="LinkedIn (Demo)" className="inline-flex h-6 w-6 items-center justify-center text-pine hover:text-copper"><svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden><path d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1-.02-5ZM3 9.5h4v11H3v-11Zm6.5 0h3.8v1.5h.1c.5-1 1.8-1.9 3.7-1.9 4 0 4.7 2.6 4.7 6v5.4h-4v-4.8c0-1.1 0-2.6-1.6-2.6s-1.8 1.2-1.8 2.5v4.9h-4v-11Z" /></svg></a></li>
            <li><a href="#" aria-label="Instagram (Demo)" className="inline-flex h-6 w-6 items-center justify-center text-pine hover:text-copper"><svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="3.5" /><circle cx="17.3" cy="6.7" r="0.9" fill="currentColor" stroke="none" /></svg></a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-line">
        <p className="container-x py-4 text-[12px] leading-relaxed text-muted">
          <strong className="font-semibold text-ink">Demo-Projekt:</strong> Ostholm Rütter ist eine fiktive Kanzlei. Alle Namen, Personen, Mandate, Kennzahlen, Auszeichnungen und Inhalte sind erfunden und dienen ausschließlich Demonstrationszwecken. Fotos: Unsplash. © {new Date().getFullYear()} Ostholm Rütter Rechtsanwälte PartG mbB (fiktiv).
        </p>
      </div>
    </footer>
  );
}
