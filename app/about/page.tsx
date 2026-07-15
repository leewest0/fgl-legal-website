import type { Metadata } from "next";
import Image from "next/image";
import { Check } from "lucide-react";
import PageHero from "@/components/PageHero";
import { Button, Section, SectionHeading } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { about, coreValues, differentiators } from "@/lib/content";

export const metadata: Metadata = {
  title: "About the Firm",
  description:
    "Founded in 2021, FGL LEGAL (Adullam Chambers) provides outstanding legal services in an atmosphere of grace — accessible, practical, and commercially relevant counsel in Accra, Ghana.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        kicker="About Us"
        title="A new-generation firm, grounded in grace and rigour"
        intro="FGL LEGAL (Adullam Chambers) pairs traditional legal excellence with modern technology to deliver flexible, responsive, value-driven counsel."
      />

      {/* Story */}
      <Section tone="paper">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start lg:gap-16">
          <Reveal className="lg:col-span-7">
            <SectionHeading kicker="Who We Are" title="About FGL LEGAL" />
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-ink-500">
              {about.paragraphs.map((p, i) => (
                <p key={i} className={i === 0 ? "text-forest-900" : ""}>
                  {p}
                </p>
              ))}
            </div>
          </Reveal>
          <Reveal className="lg:col-span-5 lg:sticky lg:top-28" delay={120}>
            <div className="relative aspect-[4/5] overflow-hidden border border-ink/10">
              <div className="absolute -top-px left-0 z-10 h-px w-24 bg-gold" />
              <Image
                src="/image2.png"
                alt="An FGL Legal counsel reviewing documents at her desk beneath the scales of justice"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Vision & Mission */}
      <Section tone="forest">
        <div className="grid gap-6 md:grid-cols-2">
          <Reveal className="border border-paper/15 bg-forest-900/40 p-9">
            <span className="brace text-4xl">{"{"}</span>
            <span className="kicker mt-2 block text-gold">Our Vision</span>
            <p className="font-display mt-4 text-xl leading-snug text-paper sm:text-2xl">
              {about.vision}
            </p>
          </Reveal>
          <Reveal className="border border-paper/15 bg-forest-900/40 p-9" delay={120}>
            <span className="brace text-4xl">{"{"}</span>
            <span className="kicker mt-2 block text-gold">Our Mission</span>
            <p className="font-display mt-4 text-xl leading-snug text-paper sm:text-2xl">
              {about.mission}
            </p>
          </Reveal>
        </div>
      </Section>

      {/* Core values */}
      <Section tone="paper">
        <Reveal>
          <SectionHeading
            kicker="Our Core Values"
            title="The principles behind every engagement"
          />
        </Reveal>
        <div className="mt-14 grid gap-px overflow-hidden border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-3">
          {coreValues.map((v, i) => (
            <Reveal key={v.title} delay={(i % 3) * 80} className="bg-paper p-8">
              <span className="font-display text-sm text-gold">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display mt-3 text-xl text-forest-900">
                {v.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-500">{v.body}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Differentiators */}
      <Section tone="cream">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <SectionHeading
              kicker="Why FGL LEGAL?"
              title="What makes us different"
              intro="We combine the depth of traditional legal excellence with the efficiency of modern practice — so counsel is practical, predictable, and genuinely useful."
            />
            <div className="mt-9">
              <Button href="/contact" variant="outline">
                Start a Conversation
              </Button>
            </div>
          </Reveal>
          <div className="lg:col-span-7">
            <ul className="space-y-6">
              {differentiators.map((d, i) => (
                <Reveal as="li" key={d.title} delay={i * 80} className="flex gap-4">
                  <span className="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-forest text-paper">
                    <Check size={14} strokeWidth={3} />
                  </span>
                  <div>
                    <h3 className="font-display text-lg text-forest-900">
                      {d.title}
                    </h3>
                    <p className="mt-1 text-ink-500">{d.body}</p>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section tone="deep">
        <Reveal className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">
            Let&apos;s build lasting protection for what matters.
          </h2>
          <p className="mt-5 text-paper/75">
            Whether you&apos;re incorporating, resolving a dispute, or planning
            ahead — we&apos;re ready to help.
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
