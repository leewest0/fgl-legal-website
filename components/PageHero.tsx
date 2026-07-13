import { BraceMark } from "./ui";

/** Compact interior-page banner in deep forest, shared across sub-pages. */
export default function PageHero({
  kicker,
  title,
  intro,
}: {
  kicker: string;
  title: string;
  intro?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-forest-900 px-gutter py-20 text-paper sm:py-24">
      <BraceMark className="pointer-events-none absolute -right-8 top-1/2 hidden -translate-y-1/2 text-[24rem] leading-none text-gold/[0.06] sm:block" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(100%_100%_at_10%_0%,rgba(21,121,74,0.3),transparent_55%)]" />
      <div className="relative mx-auto w-full max-w-6xl">
        <span className="kicker flex items-center gap-3 text-gold">
          <span className="h-px w-8 bg-gold" />
          {kicker}
        </span>
        <h1 className="font-display mt-6 max-w-3xl text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {intro && (
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-paper/75 sm:text-lg">
            {intro}
          </p>
        )}
      </div>
    </section>
  );
}
