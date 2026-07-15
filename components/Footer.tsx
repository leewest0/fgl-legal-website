import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import { LogoImage } from "./Logo";
import { firm, nav, practiceAreas } from "@/lib/content";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-forest-900 text-paper">
      <div className="mx-auto w-full max-w-6xl px-gutter py-16">
        <div className="grid gap-12 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-4">
            <LogoImage
              className="h-14 w-auto overflow-hidden rounded-md sm:h-16"
            />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-paper/70">
              A new-generation Ghanaian law firm pairing legal excellence with
              commercial insight — in an atmosphere of grace.
            </p>
            <p className="mt-6 text-xs uppercase tracking-[0.18em] text-gold">
              Est. {firm.founded} · {firm.location}
            </p>
          </div>

          {/* Navigate */}
          <div className="md:col-span-2">
            <h3 className="kicker text-paper/50">Navigate</h3>
            <ul className="mt-5 space-y-3 text-sm">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-paper/80 transition-colors hover:text-gold"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Practice */}
          <div className="md:col-span-3">
            <h3 className="kicker text-paper/50">Practice</h3>
            <ul className="mt-5 space-y-3 text-sm">
              {practiceAreas.slice(0, 6).map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/practice-areas#${p.slug}`}
                    className="text-paper/80 transition-colors hover:text-gold"
                  >
                    {p.title.replace(" & Alternative Dispute Resolution", " & ADR")}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <h3 className="kicker text-paper/50">Contact</h3>
            <ul className="mt-5 space-y-4 text-sm text-paper/80">
              <li className="flex gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0 text-gold" />
                <span>
                  {firm.address.line1}
                  <br />
                  {firm.address.line2}
                  <br />
                  {firm.address.line3}
                </span>
              </li>
              <li className="flex gap-3">
                <Phone size={16} className="mt-0.5 shrink-0 text-gold" />
                <span className="flex flex-col">
                  {firm.phones.map((p) => (
                    <a
                      key={p}
                      href={`tel:${p.replace(/\s/g, "")}`}
                      className="transition-colors hover:text-gold"
                    >
                      {p}
                    </a>
                  ))}
                </span>
              </li>
              <li className="flex gap-3">
                <Mail size={16} className="mt-0.5 shrink-0 text-gold" />
                <a
                  href={`mailto:${firm.email}`}
                  className="break-all transition-colors hover:text-gold"
                >
                  {firm.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-paper/15 pt-6 text-xs text-paper/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {firm.full}. All rights reserved.
          </p>
          <p className="uppercase tracking-[0.16em]">{firm.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
