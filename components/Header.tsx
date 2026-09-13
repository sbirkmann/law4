"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, ChevronDown, Menu, Search, X } from "lucide-react";
import { Logo } from "./Logo";
import { nav, type NavItem } from "@/data/site";
import { industries, practices } from "@/data/practices";
import { focusTopics } from "@/data/focus";
import { cn } from "@/lib/utils";

type Column = { title: string; href: string; items: { label: string; href: string }[] };

/** Builds the mega-menu columns for a top-level item. "Kompetenz" pulls the practice areas from the data layer. */
function columnsFor(item: NavItem): Column[] {
  if (item.href === "/kompetenz") {
    return [
      { title: "Beratungsspektrum", href: "/kompetenz/beratungsspektrum", items: practices.map((p) => ({ label: p.title, href: `/kompetenz/${p.slug}` })) },
      { title: "Branchenschwerpunkte", href: "/kompetenz/branchenschwerpunkte", items: industries.map((p) => ({ label: p.title, href: `/kompetenz/${p.slug}` })) },
      { title: "Fokusthemen", href: "/kompetenz/fokusthemen", items: focusTopics.map((f) => ({ label: f.title, href: `/kompetenz/fokusthemen/${f.slug}` })) },
    ];
  }
  const groups = (item.children ?? []).filter((c) => c.children);
  const flat = (item.children ?? []).filter((c) => !c.children);
  const cols: Column[] = [];
  if (flat.length) cols.push({ title: item.label, href: item.href, items: flat.map((c) => ({ label: c.label, href: c.href })) });
  for (const g of groups) cols.push({ title: g.label, href: g.href, items: (g.children ?? []).map((c) => ({ label: c.label, href: c.href })) });
  return cols;
}

export function Header() {
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const [openItem, setOpenItem] = useState<NavItem | null>(null);
  const [mobile, setMobile] = useState(false);
  const [mobileOpen, setMobileOpen] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const closeTimer = useRef<number | null>(null);

  const active = (href: string) => pathname === href || pathname.startsWith(href + "/");

  const open = (item: NavItem) => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    setOpenItem(item.children ? item : null);
  };
  const scheduleClose = () => { closeTimer.current = window.setTimeout(() => setOpenItem(null), 160); };
  const cancelClose = () => { if (closeTimer.current) window.clearTimeout(closeTimer.current); };

  useEffect(() => {
    const raf = requestAnimationFrame(() => { setOpenItem(null); setMobile(false); });
    return () => cancelAnimationFrame(raf);
  }, [pathname]);
  useEffect(() => {
    document.documentElement.style.overflow = mobile ? "hidden" : "";
    return () => { document.documentElement.style.overflow = ""; };
  }, [mobile]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") { setOpenItem(null); setMobile(false); } };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const solid = scrolled || !!openItem || mobile;
  const panel = { initial: { opacity: 0, y: -8 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -4 }, transition: { duration: reduce ? 0 : 0.24, ease: [0.16, 1, 0.3, 1] } } as const;

  return (
    <>
      <a href="#inhalt" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-pine focus:px-4 focus:py-2 focus:text-paper">Zum Inhalt springen</a>
      <div className="sticky top-0 z-50" onMouseLeave={scheduleClose} onMouseEnter={cancelClose}>
        <header
          className={cn(
            "border-b transition-[background-color,border-color,backdrop-filter] duration-300 ease-out-quart",
            solid ? "border-line bg-paper/95 backdrop-blur-md" : "border-transparent bg-transparent",
          )}
        >
          <div className={cn("container-x flex items-center justify-between transition-[height] duration-300 ease-out-quart", scrolled ? "h-16" : "h-20 lg:h-24")}>
            <Logo />
            <nav aria-label="Hauptnavigation" className="hidden lg:block">
              <ul className="flex items-center gap-8">
                {nav.map((item) => (
                  <li key={item.href} onMouseEnter={() => open(item)} onFocus={() => open(item)}>
                    <Link
                      href={item.href}
                      aria-current={active(item.href) ? "page" : undefined}
                      aria-haspopup={item.children ? "true" : undefined}
                      aria-expanded={item.children ? openItem?.href === item.href : undefined}
                      className={cn(
                        "relative inline-flex items-center gap-1 py-2 text-sm font-medium tracking-wide transition-colors duration-200",
                        "after:absolute after:inset-x-0 after:-bottom-px after:h-px after:origin-left after:scale-x-0 after:bg-copper after:transition-transform after:duration-300 after:ease-out-expo hover:after:scale-x-100",
                        active(item.href) || openItem?.href === item.href ? "text-pine after:scale-x-100" : "text-muted hover:text-pine",
                      )}
                    >
                      {item.label}
                      {item.children && <ChevronDown className={cn("h-3 w-3 transition-transform duration-300", openItem?.href === item.href && "rotate-180")} strokeWidth={2} aria-hidden />}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="flex items-center gap-4">
              <Link href="/experten#suche" aria-label="Experten suchen" className="hidden h-10 w-10 items-center justify-center text-pine transition hover:text-copper lg:inline-flex"><Search className="h-4 w-4" strokeWidth={1.75} /></Link>
              <p className="label hidden text-xs lg:block" aria-label="Sprache"><span className="text-pine">DE</span><span className="mx-2 text-line-strong" aria-hidden>|</span><span className="text-muted-light">EN</span></p>
              <button type="button" onClick={() => setMobile((v) => !v)} aria-expanded={mobile} aria-controls="mobilmenue" aria-label={mobile ? "Menü schließen" : "Menü öffnen"} className="inline-flex h-10 w-10 items-center justify-center text-pine lg:hidden">
                {mobile ? <X className="h-6 w-6" strokeWidth={1.5} /> : <Menu className="h-6 w-6" strokeWidth={1.5} />}
              </button>
            </div>
          </div>
        </header>

        {/* Mega menu */}
        <AnimatePresence>
          {openItem?.children && (
            <motion.div key={openItem.href} {...panel} className="absolute inset-x-0 hidden border-b border-line bg-paper shadow-[0_32px_48px_-40px_rgba(8,30,23,0.35)] lg:block" role="region" aria-label={`Untermenü ${openItem.label}`}>
              <div className="container-x grid-12 py-12">
                <div className="col-span-3 border-r border-line pr-8">
                  <p className="eyebrow">{openItem.label}</p>
                  {openItem.intro && <p className="lead mt-6 text-xl text-pine">{openItem.intro}</p>}
                  <Link href={openItem.href} className="arrow-link mt-8">Übersicht<ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2} aria-hidden /></Link>
                </div>
                <div className={cn("col-span-9 grid gap-8", columnsFor(openItem).length >= 3 ? "grid-cols-[1.6fr_1fr_1fr]" : "grid-cols-2")}>
                  {columnsFor(openItem).map((col) => (
                    <div key={col.href}>
                      <Link href={col.href} className="label block border-b border-line pb-3 text-xs text-muted transition-colors hover:text-copper">{col.title}</Link>
                      <ul className={cn("mt-4 gap-x-6", col.items.length > 7 && "columns-2")}>
                        {col.items.map((c) => (
                          <li key={c.href} className="break-inside-avoid">
                            <Link href={c.href} className={cn("block py-1 text-base leading-snug transition-colors hover:text-copper-deep", active(c.href) ? "text-copper-deep" : "text-ink")}>{c.label}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobile && (
          <motion.div id="mobilmenue" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: reduce ? 0 : 0.2 }} className="fixed inset-0 z-40 overflow-y-auto bg-pine pt-16 text-paper lg:hidden">
            <nav aria-label="Mobile Navigation" className="container-x py-8">
              <ul className="divide-y divide-paper/10 border-t border-paper/10">
                {nav.map((item) => (
                  <li key={item.href}>
                    <div className="flex items-center justify-between">
                      <Link href={item.href} className="headline headline-md py-4 text-paper">{item.label}</Link>
                      {item.children && (
                        <button type="button" aria-expanded={mobileOpen === item.href} onClick={() => setMobileOpen(mobileOpen === item.href ? null : item.href)} aria-label={`${item.label} aufklappen`} className="p-3 text-paper/70">
                          <ChevronDown className={cn("h-5 w-5 transition-transform duration-300", mobileOpen === item.href && "rotate-180")} />
                        </button>
                      )}
                    </div>
                    {item.children && mobileOpen === item.href && (
                      <ul className="border-t border-paper/10 pb-4 pt-2">
                        {item.children.map((c) => (
                          <li key={c.href}>
                            <Link href={c.href} className="block py-2 text-base text-paper/85">{c.label}</Link>
                            {c.children && (
                              <ul className="border-l border-paper/15 pl-4">
                                {c.children.map((g) => <li key={g.href}><Link href={g.href} className="block py-1 text-sm text-paper/65">{g.label}</Link></li>)}
                              </ul>
                            )}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
              <div className="label mt-8 flex gap-6 text-xs"><span>DE</span><span className="text-paper/50">EN</span></div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
