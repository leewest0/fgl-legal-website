import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import { Button, Section } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { team } from "@/lib/content";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet the lawyers behind FGL LEGAL (Adullam Chambers) — Managing Partner Adwoa Dapaah-Ntow and Partner Neneh Ayiku Akotiah, bringing deep courtroom, commercial, and banking experience.",
};

export default function TeamPage() {
  return (
    <>
      <PageHero
        kicker="Our Team"
        title="Seasoned counsel, invested in your outcome"
        intro="Our partners combine courtroom experience, commercial depth, and decades in banking and academia — so you get advice that is both rigorous and practical."
      />

      <Section tone="paper">
        <div className="space-y-16">
          {team.map((m, i) => (
            <article
              key={m.name}
              className={`grid gap-8 lg:grid-cols-12 lg:items-start lg:gap-12 ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* Portrait — photo when available, monogram plate otherwise */}
              <Reveal className="lg:col-span-4">
                <div className="relative aspect-[4/5] w-full max-w-xs overflow-hidden border border-ink/10 bg-forest-800">
                  <div className="absolute -top-px left-0 z-10 h-px w-24 bg-gold" />
                  {m.photo ? (
                    <Image
                      src={m.photo}
                      alt={`${m.name}, ${m.role} at FGL Legal`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover object-top"
                    />
                  ) : (
                    <>
                      <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_20%_0%,rgba(21,121,74,0.5),transparent_60%)]" />
                      <span className="brace absolute left-4 top-2 text-6xl text-gold/30">
                        {"{"}
                      </span>
                      <span className="brace absolute bottom-2 right-4 text-6xl text-gold/30">
                        {"}"}
                      </span>
                      <span className="font-display absolute inset-0 grid place-items-center text-7xl text-gold-300">
                        {m.initials}
                      </span>
                    </>
                  )}
                </div>
              </Reveal>

              <Reveal className="lg:col-span-8" delay={120}>
                <span className="kicker text-gold">{m.role}</span>
                <h2 className="font-display mt-3 text-3xl font-semibold text-forest-900 sm:text-4xl">
                  {m.name}
                </h2>
                <div className="rule-gold mt-5 w-14" />
                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-500">
                  {m.bio}
                </p>
                <div className="mt-7 flex flex-wrap gap-2.5">
                  {m.focus.map((f) => (
                    <span
                      key={f}
                      className="border border-forest/20 px-3 py-1.5 text-xs font-medium uppercase tracking-wider text-forest-800"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </Reveal>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="forest">
        <Reveal className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">
            Work directly with our partners
          </h2>
          <p className="mt-5 text-paper/75">
            At FGL LEGAL, you deal with experienced lawyers — not a queue. Book a
            consultation to get started.
          </p>
          <div className="mt-9">
            <Button href="/contact" variant="solid">
              Book a Consultation
            </Button>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
