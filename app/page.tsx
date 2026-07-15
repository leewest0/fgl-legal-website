import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Button, Section, SectionHeading, BraceMark } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import {
  hero,
  whyChoose,
  about,
  practiceAreas,
  industries,
  team,
  faqs,
  firm,
} from "@/lib/content";

export default function Home() {
  return (
    <>
      {/* ------------------------------------------------------ Hero */}
      <section className="relative overflow-hidden bg-forest-900 text-paper">
        {/* oversized brace watermark */}
        <BraceMark className="pointer-events-none absolute -right-16 top-1/2 hidden -translate-y-1/2 text-[38rem] leading-none text-gold/[0.06] md:block" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_90%_at_15%_10%,rgba(21,121,74,0.35),transparent_60%)]" />

        <div className="relative mx-auto grid w-full max-w-6xl gap-14 px-gutter py-24 sm:py-32 lg:grid-cols-12 lg:items-center">
          <div className="rise lg:col-span-7">
            <span className="kicker flex items-center gap-3 text-gold">
              <span className="h-px w-8 bg-gold" />
              Est. {firm.founded} · Accra, Ghana
            </span>
            <h1 className="font-display mt-7 text-[2.7rem] font-semibold leading-[1.02] sm:text-6xl lg:text-[4.1rem]">
              Legal Solutions Built{" "}
              <span className="text-gold-300">Around Your Business</span>
            </h1>
            <p className="mt-7 max-w-xl font-display text-xl italic text-paper/85 sm:text-2xl">
              {hero.subline}
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button href="/contact" variant="solid">
                Book a Consultation
              </Button>
              <Button href="/practice-areas" variant="outline" tone="light">
                Our Practice Areas
              </Button>
            </div>
          </div>

          {/* hero image */}
          <div className="rise lg:col-span-5" style={{ animationDelay: "120ms" }}>
            <div className="relative aspect-[3/4] overflow-hidden border border-paper/15">
              <div className="absolute -top-px left-0 z-10 h-px w-24 bg-gold" />
              <Image
                src="/fgllegal-image-1.png"
                alt="A wooden gavel resting on a pair of leather-bound law books in warm window light"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ Why choose */}
      <Section tone="paper">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <SectionHeading
              kicker={whyChoose.kicker}
              title={whyChoose.title}
              intro={whyChoose.intro}
              as="h2"
            />
          </Reveal>
          <div className="lg:col-span-7">
            <ul className="divide-y divide-ink/10 border-t border-ink/10">
              {whyChoose.features.map((f, i) => (
                <Reveal
                  as="li"
                  key={f.title}
                  delay={i * 80}
                  className="group grid gap-4 py-7 sm:grid-cols-[auto_1fr] sm:gap-8"
                >
                  <span className="font-display text-2xl text-gold">
                    0{i + 1}
                  </span>
                  <div>
                    <h3 className="font-display text-xl text-forest-900">
                      {f.title}
                    </h3>
                    <p className="mt-2 text-ink-500">{f.body}</p>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* ------------------------------------------- Feature band */}
      <section className="relative h-[58vh] min-h-[360px] w-full overflow-hidden">
        <Image
          src="/image3.png"
          alt="An FGL Legal counsel smiling by the office window"
          fill
          sizes="100vw"
          className="object-cover object-[center_20%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-900/92 via-forest-900/70 to-forest-900/25" />
        <div className="absolute inset-0 flex items-center px-gutter">
          <Reveal className="mx-auto w-full max-w-6xl">
            <div className="max-w-xl">
              <span className="brace text-5xl leading-none text-gold">{"{"}</span>
              <p className="font-display mt-4 text-2xl font-medium leading-snug text-paper sm:text-3xl">
                Approachable counsel, rigorous advice — a firm built for the way
                you do business today.
              </p>
              <div className="rule-gold mt-7 w-16" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------------------------------------- About teaser */}
      <Section tone="forest">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
          <Reveal className="lg:col-span-6">
            <span className="kicker text-gold">{about.kicker}</span>
            <h2 className="font-display mt-5 text-3xl font-semibold leading-tight text-paper sm:text-4xl">
              Outstanding legal services, in an atmosphere of grace.
            </h2>
            <div className="rule-gold mt-6 w-16" />
            <p className="mt-6 text-paper/75">{about.paragraphs[0]}</p>
            <p className="mt-4 text-paper/75">{about.paragraphs[3]}</p>
            <div className="mt-9">
              <Button href="/about" variant="outline" tone="light">
                More About the Firm
              </Button>
            </div>
          </Reveal>
          <Reveal className="lg:col-span-6" delay={120}>
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="border border-paper/15 bg-forest-900/50 p-7">
                <span className="kicker text-gold">Our Vision</span>
                <p className="mt-4 text-sm leading-relaxed text-paper/80">
                  {about.vision}
                </p>
              </div>
              <div className="border border-paper/15 bg-forest-900/50 p-7">
                <span className="kicker text-gold">Our Mission</span>
                <p className="mt-4 text-sm leading-relaxed text-paper/80">
                  {about.mission}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ---------------------------------------- Practice areas index */}
      <Section tone="paper">
        <Reveal className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
          <SectionHeading
            kicker="Our Practice Areas"
            title="Counsel across the matters that move your business"
            className="max-w-lg"
          />
          <Link
            href="/practice-areas"
            className="link-underline inline-flex items-center gap-2 whitespace-nowrap text-sm font-semibold uppercase tracking-[0.14em] text-forest"
          >
            View all 8 areas <ArrowUpRight size={16} />
          </Link>
        </Reveal>

        <ol className="mt-12 border-t border-ink/10">
          {practiceAreas.map((p, i) => (
            <Reveal as="li" key={p.slug} delay={i * 60}>
              <Link
                href={`/practice-areas#${p.slug}`}
                className="group grid grid-cols-[auto_1fr_auto] items-center gap-5 border-b border-ink/10 py-6 transition-colors hover:bg-paper-200/60 sm:gap-8 sm:py-7"
              >
                <span className="font-display text-lg text-gold sm:text-xl">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="min-w-0">
                  <span className="font-display block text-xl text-forest-900 transition-colors group-hover:text-forest sm:text-2xl">
                    {p.title}
                  </span>
                  <span className="mt-1 hidden text-sm text-ink-500 sm:block">
                    {p.short}
                  </span>
                </span>
                <ArrowUpRight
                  size={22}
                  className="text-ink-500 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold"
                />
              </Link>
            </Reveal>
          ))}
        </ol>
      </Section>

      {/* ---------------------------------------------- Industries */}
      <Section tone="cream">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <Reveal className="lg:col-span-4">
            <SectionHeading kicker="Industries We Serve" title="Sectors we know" />
          </Reveal>
          <Reveal className="lg:col-span-8" delay={120}>
            <div className="flex flex-wrap gap-3">
              {industries.map((ind) => (
                <span
                  key={ind}
                  className="border border-forest/20 bg-paper px-4 py-2.5 text-sm text-forest-800"
                >
                  {ind}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      {/* -------------------------------------------------- Team teaser */}
      <Section tone="paper">
        <Reveal className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
          <SectionHeading
            kicker="Our Team"
            title="Experienced counsel you can build a relationship with"
            className="max-w-lg"
          />
          <Link
            href="/team"
            className="link-underline inline-flex items-center gap-2 whitespace-nowrap text-sm font-semibold uppercase tracking-[0.14em] text-forest"
          >
            Meet the team <ArrowUpRight size={16} />
          </Link>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {team.map((m, i) => (
            <Reveal key={m.name} delay={i * 100}>
              <Link
                href="/team"
                className="group flex items-center gap-6 border border-ink/10 bg-paper-200/40 p-6 transition-colors hover:border-forest/30"
              >
                <span className="font-display grid h-20 w-20 shrink-0 place-items-center bg-forest-800 text-2xl text-gold-300">
                  {m.initials}
                </span>
                <span>
                  <span className="font-display block text-xl text-forest-900">
                    {m.name}
                  </span>
                  <span className="mt-1 block text-sm uppercase tracking-[0.12em] text-gold">
                    {m.role}
                  </span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ---------------------------------------------------- FAQ strip */}
      <Section tone="cream">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-4">
            <SectionHeading kicker="FAQ" title="Good to know" />
          </Reveal>
          <div className="lg:col-span-8">
            <dl className="divide-y divide-ink/10 border-t border-ink/10">
              {faqs.map((f, i) => (
                <Reveal key={f.q} delay={i * 60} className="py-6">
                  <dt className="font-display text-lg text-forest-900">{f.q}</dt>
                  <dd className="mt-2 text-ink-500">{f.a}</dd>
                </Reveal>
              ))}
            </dl>
          </div>
        </div>
      </Section>

      {/* ---------------------------------------------------- CTA band */}
      <section className="relative overflow-hidden bg-forest-800 px-gutter py-20 text-paper sm:py-24">
        <BraceMark className="pointer-events-none absolute -left-10 top-1/2 hidden -translate-y-1/2 text-[22rem] leading-none text-gold/[0.07] sm:block" />
        <Reveal className="relative mx-auto flex w-full max-w-4xl flex-col items-center text-center">
          <span className="kicker text-gold">Let&apos;s Discuss Your Legal Needs</span>
          <h2 className="font-display mt-5 text-3xl font-semibold leading-tight sm:text-5xl">
            Ready to protect what you&apos;re building?
          </h2>
          <p className="mt-5 max-w-xl text-paper/75">
            Reach out for a consultation — in person at our Kaneshie office or
            virtually, wherever you are.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Button href="/contact" variant="solid">
              Book a Consultation
            </Button>
            <a
              href={`tel:${firm.phones[0].replace(/\s/g, "")}`}
              className="inline-flex items-center gap-2.5 px-6 py-3 text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-paper transition-colors hover:text-gold"
            >
              {firm.phones[0]}
            </a>
          </div>
        </Reveal>
      </section>
    </>
  );
}
