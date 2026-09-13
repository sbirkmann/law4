"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ChevronDown, Menu, Search, X } from "lucide-react";
import { Logo } from "./Logo";
import { nav, type NavItem } from "@/data/site";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const [level1, setLevel1] = useState<NavItem | null>(null);
  const [level2, setLevel2] = useState<NavItem | null>(null);
  const [mobile, setMobile] = useState(false);
  const [mobileOpen, setMobileOpen] = useState<string | null>(null);
  const closeTimer = useRef<number | null>(null);

  const active = (href: string) => pathname === href || pathname.startsWith(href + "/");

  const open = (item: NavItem) => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    setLevel1(item.children ? item : null);
    setLevel2(null);
  };
  const scheduleClose = () => {
    closeTimer.current = window.setTimeout(() => { setLevel1(null); setLevel2(null); }, 180);
  };
  const cancelClose = () => { if (closeTimer.current) window.clearTimeout(closeTimer.current); };

  useEffect(() => {
    const raf = requestAnimationFrame(() => { setLevel1(null); setLevel2(null); setMobile(false); });
    return () => cancelAnimationFrame(raf);
  }, [pathname]);
  useEffect(() => {
    document.documentElement.style.overflow = mobile ? "hidden" : "";
    return () => { document.documentElement.style.overflow = ""; };
  }, [mobile]);

  const bar = { initial: reduce ? false : { opacity: 0, y: -6 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -4 }, transition: { duration: 0.22 } } as const;

  return (
    <>
      <a href="#inhalt" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-pine focus:px-4 focus:py-2 focus:text-white">Zum Inhalt springen</a>
      <div className="sticky top-0 z-50" onMouseLeave={scheduleClose} onMouseEnter={cancelClose}>
        <header className="border-b border-line bg-white">
          <div className="container-x flex h-[68px] items-center justify-between">
            <Logo />
            <nav aria-label="Hauptnavigation" className="hidden lg:block">
              <ul className="flex items-center gap-[1.15rem]">
                {nav.map((item) => (
                  <li key={item.href} onMouseEnter={() => open(item)} onFocus={() => open(item)}>
                    <Link
                      href={item.href}
                      aria-current={active(item.href) ? "page" : undefined}
                      aria-haspopup={item.children ? "true" : undefined}
                      aria-expanded={item.children ? level1?.href === item.href : undefined}
                      className={cn("font-condensed text-[14px] uppercase tracking-[0.2em] transition-colors", active(item.href) || level1?.href === item.href ? "text-pine" : "text-muted hover:text-pine")}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="flex items-center gap-3">
              <Link href="/experten#suche" aria-label="Suche" className="hidden h-10 w-10 items-center justify-center text-pine transition hover:text-copper lg:inline-flex"><Search className="h-5 w-5" strokeWidth={1.75} /></Link>
              <p className="hidden text-[13px] font-semibold tracking-wide lg:block" aria-label="Sprache"><span className="text-pine">DE</span> <span className="text-muted-light">EN</span></p>
              <button type="button" onClick={() => setMobile((v) => !v)} aria-expanded={mobile} aria-controls="mobilmenue" aria-label={mobile ? "Menü schließen" : "Menü öffnen"} className="inline-flex h-10 w-10 items-center justify-center text-pine lg:hidden">
                {mobile ? <X className="h-6 w-6" strokeWidth={1.5} /> : <Menu className="h-6 w-6" strokeWidth={1.5} />}
              </button>
            </div>
          </div>
        </header>

        {/* Megamenu: stacked full-width bars, level 2 dark, level 3 lighter */}
        <AnimatePresence>
          {level1?.children && (
            <motion.div key={level1.href} {...bar} className="absolute inset-x-0 hidden bg-pine text-white shadow-[0_12px_30px_-16px_rgba(0,0,0,0.5)] lg:block" role="region" aria-label={`Untermenü ${level1.label}`}>
              <ul className="container-x flex h-[68px] items-center justify-end gap-10">
                {level1.children.map((c) => (
                  <li key={c.href} onMouseEnter={() => setLevel2(c.children ? c : null)}>
                    <Link href={c.href} className={cn("inline-flex items-center gap-1.5 font-condensed text-[14px] uppercase tracking-[0.2em] transition-colors hover:text-copper-soft", (active(c.href) || level2?.href === c.href) && "text-copper-soft")}>
                      {c.label}
                      {c.children && <ChevronDown className="h-3.5 w-3.5" strokeWidth={2} aria-hidden />}
                    </Link>
                  </li>
                ))}
              </ul>
              <AnimatePresence>
                {level2?.children && (
                  <motion.ul key={level2.href} {...bar} className="border-t border-white/10 bg-pine-soft text-white">
                    <div className="container-x flex h-[56px] items-center justify-end gap-8">
                      {level2.children.map((g) => (
                        <li key={g.href}><Link href={g.href} className="text-[14px] font-medium tracking-wide transition-colors hover:text-pine-deep">{g.label}</Link></li>
                      ))}
                    </div>
                  </motion.ul>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobile && (
          <motion.div id="mobilmenue" initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }} className="fixed inset-0 z-40 overflow-y-auto bg-pine pt-[68px] text-white lg:hidden">
            <nav aria-label="Mobile Navigation" className="container-x py-6">
              <ul className="divide-y divide-white/10">
                {nav.map((item) => (
                  <li key={item.href}>
                    <div className="flex items-center justify-between">
                      <Link href={item.href} className="py-4 font-condensed text-[22px] uppercase tracking-[0.1em]">{item.label}</Link>
                      {item.children && (
                        <button type="button" aria-expanded={mobileOpen === item.href} onClick={() => setMobileOpen(mobileOpen === item.href ? null : item.href)} aria-label={`${item.label} aufklappen`} className="p-3">
                          <ChevronDown className={cn("h-5 w-5 transition-transform", mobileOpen === item.href && "rotate-180")} />
                        </button>
                      )}
                    </div>
                    {item.children && mobileOpen === item.href && (
                      <ul className="pb-4 pl-4">
                        {item.children.map((c) => (
                          <li key={c.href}>
                            <Link href={c.href} className="block py-2 text-[16px] text-white/85">{c.label}</Link>
                            {c.children && (
                              <ul className="pl-4">
                                {c.children.map((g) => <li key={g.href}><Link href={g.href} className="block py-1.5 text-[14px] text-white/65">{g.label}</Link></li>)}
                              </ul>
                            )}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex gap-6 text-[13px] font-semibold tracking-wide"><span>DE</span><span className="text-white/50">EN</span></div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
