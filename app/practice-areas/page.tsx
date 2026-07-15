import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import { Button, Section } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { practiceAreas } from "@/lib/content";

export const metadata: Metadata = {
  title: "Practice Areas",
  description:
    "Corporate & commercial, litigation & ADR, property, banking & finance, insurance, intellectual property, family law, and wills, probate & estates — comprehensive legal counsel from FGL LEGAL (Adullam Chambers).",
};

export default function PracticeAreasPage() {
  return (
    <>
      <PageHero
        kicker="Our Practice Areas"
        title="Comprehensive counsel across eight core disciplines"
        intro="From company formation to estate planning, our lawyers deliver strategic, commercially-aware advice tailored to each matter."
      />

      {/* Quick index */}
      <Section tone="cream" className="!py-12">
        <Reveal>
          <nav aria-label="Practice areas" className="flex flex-wrap gap-3">
            {practiceAreas.map((p, i) => (
            <a
              key={p.slug}
              href={`#${p.slug}`}
              className="group inline-flex items-center gap-2 border border-forest/20 bg-paper px-4 py-2 text-sm text-forest-800 transition-colors hover:border-forest hover:bg-forest hover:text-paper"
            >
              <span className="font-display text-gold group-hover:text-gold-300">
                {String(i + 1).padStart(2, "0")}
              </span>
              {p.title.replace(" & Alternative Dispute Resolution", " & ADR")}
            </a>
            ))}
          </nav>
        </Reveal>
      </Section>

      {/* Detailed sections */}
      <Section tone="paper" className="!pt-8">
        <div className="divide-y divide-ink/10 border-t border-ink/10">
          {practiceAreas.map((p, i) => (
            <article
              key={p.slug}
              id={p.slug}
              className="grid scroll-mt-28 gap-8 py-14 lg:grid-cols-12 lg:gap-12"
            >
              <Reveal className="lg:col-span-5">
                <span className="font-display text-5xl text-gold/40">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="font-display mt-3 text-2xl font-semibold leading-tight text-forest-900 sm:text-3xl">
                  {p.title}
                </h2>
                <div className="rule-gold mt-5 w-14" />
                <p className="mt-5 max-w-md text-ink-500">{p.body}</p>
              </Reveal>
              <Reveal className="lg:col-span-7" delay={120}>
                <h3 className="kicker text-gold">Services include</h3>
                <ul className="mt-5 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                  {p.services.map((s) => (
                    <li
                      key={s}
                      className="flex items-center gap-3 border-b border-ink/10 pb-3 text-forest-900"
                    >
                      <span className="h-1.5 w-1.5 shrink-0 rotate-45 bg-gold" />
                      {s}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </article>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section tone="forest">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <div className="relative aspect-[16/10] overflow-hidden border border-paper/15 lg:aspect-[4/5]">
              <div className="absolute -top-px left-0 z-10 h-px w-24 bg-gold" />
              <Image
                src="/image4.png"
                alt="A gavel resting beside a stack of leather-bound law books"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal className="lg:col-span-7" delay={120}>
            <h2 className="font-display max-w-lg text-2xl font-semibold leading-tight sm:text-3xl">
              Not sure which area your matter falls under?
            </h2>
            <p className="mt-3 text-paper/75">
              Tell us what you&apos;re facing — we&apos;ll point you in the right
              direction.
            </p>
            <div className="mt-7">
              <Button href="/contact" variant="solid">
                Ask a Lawyer
              </Button>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
