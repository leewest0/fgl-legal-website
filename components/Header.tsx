"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { LogoImage } from "./Logo";
import { nav, firm } from "@/lib/content";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`header-enter sticky top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-ink/10 bg-paper/90 backdrop-blur-md"
          : "border-b border-transparent bg-paper"
      }`}
    >
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between gap-8 px-gutter">
        <div className="nav-in shrink-0" style={{ animationDelay: "0.1s" }}>
          <LogoImage
            priority
            src="/logo-mark.png"
            width={1280}
            height={607}
            className="h-19 w-auto"
          />
        </div>

        <nav className="hidden items-center gap-10 lg:flex" aria-label="Primary">
          {nav.map((item, i) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                style={{ animationDelay: `${0.15 + i * 0.06}s` }}
                className={`nav-in link-underline text-[0.95rem] font-medium tracking-wide transition-colors ${
                  active ? "text-forest" : "text-ink hover:text-forest"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="nav-in hidden shrink-0 items-center gap-6 lg:flex" style={{ animationDelay: "0.4s" }}>
          <a
            href={`tel:${firm.phones[0].replace(/\s/g, "")}`}
            className="flex items-center gap-2 whitespace-nowrap text-[0.9rem] font-medium text-ink transition-colors hover:text-forest"
          >
            <Phone size={16} className="text-gold" />
            {firm.phones[0]}
          </a>
          <Link
            href="/contact"
            className="whitespace-nowrap bg-forest px-6 py-3.5 text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-paper shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-forest-800 hover:shadow-md"
          >
            Book a Consultation
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="flex h-11 w-11 items-center justify-center text-forest-900 lg:hidden"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-x-0 top-20 z-40 origin-top overflow-hidden border-t border-ink/10 bg-paper transition-[max-height,opacity] duration-300 lg:hidden ${
          open ? "max-h-[80vh] opacity-100" : "pointer-events-none max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col px-gutter py-4" aria-label="Mobile">
          {nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`border-b border-ink/10 py-4 font-display text-xl ${
                  active ? "text-forest" : "text-forest-900"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-6 bg-forest px-5 py-4 text-center text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-paper"
          >
            Book a Consultation
          </Link>
          <a
            href={`tel:${firm.phones[0].replace(/\s/g, "")}`}
            className="mt-4 flex items-center justify-center gap-2 py-2 text-sm text-ink-500"
          >
            <Phone size={15} className="text-gold" />
            {firm.phones[0]}
          </a>
        </nav>
      </div>
    </header>
  );
}
