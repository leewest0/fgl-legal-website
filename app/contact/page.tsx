import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import PageHero from "@/components/PageHero";
import { Section, SectionHeading } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import FAQAccordion from "@/components/FAQAccordion";
import { firm } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a consultation with FGL LEGAL (Adullam Chambers). Visit our Kaneshie office in Accra, call us, or send a message — in-person and virtual consultations available.",
};

export default function ContactPage() {
  const mapQuery = encodeURIComponent(
    "Teiko Ansah Street, Kaneshie, Accra, Ghana"
  );
  return (
    <>
      <PageHero
        kicker="Contact Us"
        title="Let's discuss your legal needs"
        intro="Reach out by phone, email, or the form below. We offer both in-person and virtual consultations."
      />

      <Section tone="paper">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          {/* Details */}
          <Reveal className="lg:col-span-5">
            <SectionHeading kicker="Get in Touch" title="Speak with our team" />

            <ul className="mt-10 space-y-8">
              <li className="flex gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center bg-forest-800 text-gold-300">
                  <MapPin size={18} />
                </span>
                <div>
                  <h3 className="kicker text-gold">Office</h3>
                  <p className="mt-2 leading-relaxed text-forest-900">
                    {firm.address.line1}
                    <br />
                    {firm.address.line2}
                    <br />
                    {firm.address.line3}
                    <br />
                    {firm.address.city}
                  </p>
                </div>
              </li>

              <li className="flex gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center bg-forest-800 text-gold-300">
                  <Phone size={18} />
                </span>
                <div>
                  <h3 className="kicker text-gold">Phone</h3>
                  <p className="mt-2 flex flex-col gap-1">
                    {firm.phones.map((p) => (
                      <a
                        key={p}
                        href={`tel:${p.replace(/\s/g, "")}`}
                        className="text-forest-900 transition-colors hover:text-forest link-underline w-fit"
                      >
                        {p}
                      </a>
                    ))}
                  </p>
                </div>
              </li>

              <li className="flex gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center bg-forest-800 text-gold-300">
                  <Mail size={18} />
                </span>
                <div>
                  <h3 className="kicker text-gold">Email</h3>
                  <a
                    href={`mailto:${firm.email}`}
                    className="mt-2 block w-fit break-all text-forest-900 transition-colors hover:text-forest link-underline"
                  >
                    {firm.email}
                  </a>
                </div>
              </li>

              <li className="flex gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center bg-forest-800 text-gold-300">
                  <Clock size={18} />
                </span>
                <div>
                  <h3 className="kicker text-gold">Consultations</h3>
                  <p className="mt-2 text-forest-900">
                    In-person &amp; virtual, by appointment.
                  </p>
                </div>
              </li>
            </ul>
          </Reveal>

          {/* Form */}
          <Reveal className="lg:col-span-7" delay={120}>
            <div className="border border-ink/10 bg-paper-200/40 p-7 sm:p-9">
              <h2 className="font-display text-2xl text-forest-900">
                Request a consultation
              </h2>
              <p className="mt-2 text-sm text-ink-500">
                Fields marked <span className="text-gold">*</span> are required.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Map */}
      <Section tone="cream" className="!py-0">
        <Reveal className="relative overflow-hidden border border-ink/10 bg-forest-800">
          {/* Fallback shown behind the iframe if the map can't load */}
          <div className="pointer-events-none absolute inset-0 grid place-items-center px-6 text-center">
            <div>
              <p className="kicker text-gold">Find Us</p>
              <p className="mt-2 font-display text-xl text-paper">
                {firm.address.line1}, {firm.address.line2}
              </p>
            </div>
          </div>
          <iframe
            title="FGL LEGAL office location — Kaneshie, Accra"
            src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
            width="100%"
            height="420"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="relative block w-full grayscale-[0.15]"
          />
        </Reveal>
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
          target="_blank"
          rel="noopener noreferrer"
          className="link-underline mt-4 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-forest"
        >
          Get directions →
        </a>
      </Section>

      {/* FAQ */}
      <Section tone="paper">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-4">
            <SectionHeading
              kicker="FAQ"
              title="Frequently asked questions"
            />
          </Reveal>
          <Reveal className="lg:col-span-8" delay={120}>
            <FAQAccordion />
          </Reveal>
        </div>
      </Section>
    </>
  );
}
