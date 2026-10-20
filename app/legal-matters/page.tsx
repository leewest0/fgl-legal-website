import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { Section } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import {
  formatDate,
  readingMinutes,
  sortedArticles,
  type Article,
} from "@/lib/articles";

export const metadata: Metadata = {
  title: "Legal Matters",
  description:
    "Commentary and insight from FGL LEGAL (Adullam Chambers) on law, policy and current affairs in Ghana.",
};

function Meta({ article, light = false }: { article: Article; light?: boolean }) {
  return (
    <p
      className={`flex flex-wrap items-center gap-x-3 gap-y-1 text-xs uppercase tracking-[0.14em] ${
        light ? "text-paper/60" : "text-ink-500"
      }`}
    >
      <span className="font-semibold text-gold">{article.category}</span>
      <span aria-hidden>·</span>
      <time dateTime={article.date}>{formatDate(article.date)}</time>
      <span aria-hidden>·</span>
      <span>{readingMinutes(article)} min read</span>
    </p>
  );
}

function FeaturedCard({ article }: { article: Article }) {
  return (
    <Link
      href={`/legal-matters/${article.slug}`}
      className="group relative block overflow-hidden bg-forest-900 p-8 text-paper sm:p-12"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(90%_120%_at_0%_0%,rgba(21,121,74,0.35),transparent_60%)]" />
      <span
        aria-hidden
        className="brace pointer-events-none absolute right-6 top-1/2 hidden -translate-y-1/2 select-none text-[13rem] leading-none opacity-25 md:block"
      >
        {"}"}
      </span>
      <div className="relative max-w-3xl">
        <span className="kicker mb-6 inline-block bg-gold px-3 py-1 text-[0.65rem] text-forest-900">
          Latest
        </span>
        <Meta article={article} light />
        <h2 className="font-display mt-5 text-3xl font-semibold leading-[1.1] transition-colors group-hover:text-gold-300 sm:text-4xl">
          {article.title}
        </h2>
        <p className="mt-5 text-base leading-relaxed text-paper/75 sm:text-lg">
          {article.excerpt}
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
          <span className="text-sm text-paper/70">By {article.author}</span>
          <span className="inline-flex items-center gap-2 text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-gold">
            Read article
            <span
              aria-hidden
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </span>
        </div>
      </div>
    </Link>
  );
}

function ArticleCard({ article }: { article: Article }) {
  return (
    <Link
      href={`/legal-matters/${article.slug}`}
      className="group flex h-full flex-col border border-ink/10 bg-paper p-7 transition-colors hover:border-forest/40"
    >
      <Meta article={article} />
      <h3 className="font-display mt-4 text-2xl font-semibold leading-snug text-forest-900 transition-colors group-hover:text-forest">
        {article.title}
      </h3>
      <p className="mt-3 flex-1 leading-relaxed text-ink-500">{article.excerpt}</p>
      <span className="mt-6 inline-flex items-center gap-2 text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-forest">
        Read article
        <span
          aria-hidden
          className="transition-transform duration-300 group-hover:translate-x-1"
        >
          →
        </span>
      </span>
    </Link>
  );
}

export default function LegalMattersPage() {
  const [featured, ...rest] = sortedArticles;
  return (
    <>
      <PageHero
        kicker="Legal Matters"
        title="Commentary on the law, and the matters arising"
        intro="Our lawyers' perspectives on the legal questions shaping Ghana — from the courtroom and the boardroom to the classroom."
      />

      <Section tone="paper">
        {featured ? (
          <div className="space-y-12">
            <Reveal>
              <FeaturedCard article={featured} />
            </Reveal>
            {rest.length > 0 && (
              <div className="grid gap-8 md:grid-cols-2">
                {rest.map((a, i) => (
                  <Reveal key={a.slug} delay={i * 80}>
                    <ArticleCard article={a} />
                  </Reveal>
                ))}
              </div>
            )}
          </div>
        ) : (
          <p className="text-ink-500">New articles are on the way. Check back soon.</p>
        )}
      </Section>
    </>
  );
}
