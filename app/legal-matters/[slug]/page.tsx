import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BraceMark, Button } from "@/components/ui";
import { firm } from "@/lib/content";
import {
  articles,
  formatDate,
  getArticle,
  readingMinutes,
  type Article,
  type ArticleBlock,
} from "@/lib/articles";

type Params = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const article = getArticle((await params).slug);
  if (!article) return {};
  const title = article.seo?.title ?? article.title;
  const description = article.seo?.description ?? article.excerpt;
  const url = `/legal-matters/${article.slug}`;
  return {
    title: { absolute: `${title} | FGL Legal` },
    description,
    keywords: article.seo?.keywords,
    authors: [{ name: article.author }],
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      siteName: firm.full,
      locale: "en_GH",
      title,
      description,
      url,
      publishedTime: article.date,
      modifiedTime: article.date,
      authors: [article.author],
      section: article.category,
      tags: article.tags,
    },
    twitter: { card: "summary_large_image", title, description },
  };
}

function articleJsonLd(article: Article) {
  const url = `${firm.url}/legal-matters/${article.slug}`;
  const words = article.body
    .map((b) => (b.type === "list" ? b.items.join(" ") : b.text))
    .join(" ")
    .split(/\s+/).length;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${url}#article`,
        headline: article.title,
        alternativeHeadline: article.seo?.title,
        description: article.seo?.description ?? article.excerpt,
        image: [`${url}/opengraph-image`],
        datePublished: article.date,
        dateModified: article.date,
        author: { "@type": "Person", name: article.author },
        publisher: {
          "@type": "LegalService",
          name: firm.full,
          url: firm.url,
          logo: { "@type": "ImageObject", url: `${firm.url}/icon.png` },
        },
        mainEntityOfPage: { "@type": "WebPage", "@id": url },
        url,
        articleSection: article.category,
        keywords: article.seo?.keywords.join(", "),
        about: article.tags,
        wordCount: words,
        inLanguage: "en-GH",
        isAccessibleForFree: true,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: firm.url },
          {
            "@type": "ListItem",
            position: 2,
            name: "Legal Matters",
            item: `${firm.url}/legal-matters`,
          },
          { "@type": "ListItem", position: 3, name: article.title, item: url },
        ],
      },
    ],
  };
}

function Block({ block, first }: { block: ArticleBlock; first: boolean }) {
  switch (block.type) {
    case "h2":
      return (
        <h2 className="font-display mt-14 text-2xl font-semibold leading-snug text-forest-900 sm:text-[1.75rem]">
          <span className="mb-4 block h-px w-12 bg-gold" />
          {block.text}
        </h2>
      );
    case "quote":
      return (
        <blockquote className="font-display relative my-10 pl-6 text-2xl italic leading-snug text-forest-900 before:absolute before:inset-y-1 before:left-0 before:w-0.5 before:bg-gold sm:text-[1.65rem]">
          {block.text}
        </blockquote>
      );
    case "list":
      return (
        <ol className="mt-6 list-[lower-roman] space-y-3 pl-8 marker:font-semibold marker:text-gold">
          {block.items.map((item) => (
            <li key={item} className="pl-2">
              {item}
            </li>
          ))}
        </ol>
      );
    default:
      return (
        <p
          className={`mt-6 ${
            first
              ? "first-letter:font-display first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-6xl first-letter:font-semibold first-letter:leading-[0.85] first-letter:text-forest"
              : ""
          }`}
        >
          {block.text}
        </p>
      );
  }
}

export default async function ArticlePage({ params }: Params) {
  const article = getArticle((await params).slug);
  if (!article) notFound();

  const minutes = readingMinutes(article);

  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleJsonLd(article)).replace(/</g, "\\u003c"),
        }}
      />
      <header className="relative overflow-hidden bg-forest-900 px-gutter py-16 text-paper sm:py-24">
        <BraceMark className="pointer-events-none absolute -right-8 top-1/2 hidden -translate-y-1/2 text-[24rem] leading-none text-gold/[0.06] sm:block" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(100%_100%_at_10%_0%,rgba(21,121,74,0.3),transparent_55%)]" />
        <div className="rise relative mx-auto w-full max-w-3xl">
          <Link
            href="/legal-matters"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-paper/60 transition-colors hover:text-gold"
          >
            <span aria-hidden>←</span> Legal Matters
          </Link>
          <p className="kicker mt-8 flex items-center gap-3 text-gold">
            <span className="h-px w-8 bg-gold" />
            {article.category}
          </p>
          <h1 className="font-display mt-5 text-3xl font-semibold leading-[1.1] sm:text-5xl">
            {article.title}
          </h1>
          <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-paper/70">
            <span className="font-medium text-paper">By {article.author}</span>
            <span aria-hidden className="text-paper/30">|</span>
            <time dateTime={article.date}>{formatDate(article.date)}</time>
            <span aria-hidden className="text-paper/30">|</span>
            <span>{minutes} min read</span>
          </div>
        </div>
      </header>

      <div className="bg-paper px-gutter py-16 sm:py-20">
        <div className="mx-auto w-full max-w-3xl text-[1.075rem] leading-[1.8] text-ink">
          {article.body.map((block, i) => (
            <Block key={i} block={block} first={i === 0} />
          ))}

          {article.tags.length > 0 && (
            <ul className="mt-14 flex flex-wrap gap-2 border-t border-ink/10 pt-8">
              {article.tags.map((t) => (
                <li
                  key={t}
                  className="border border-ink/15 px-3 py-1 text-xs font-medium uppercase tracking-[0.12em] text-ink-500"
                >
                  {t}
                </li>
              ))}
            </ul>
          )}

          {article.references && article.references.length > 0 && (
            <section className="mt-12 bg-paper-200 p-6 sm:p-8">
              <h2 className="kicker text-forest">References</h2>
              <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm leading-relaxed text-ink-500 marker:text-gold">
                {article.references.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ol>
            </section>
          )}

          <p className="mt-10 text-sm italic leading-relaxed text-ink-500">
            This article is provided for general information and public
            commentary only. It does not constitute legal advice, and reading
            it does not create a lawyer–client relationship.
          </p>

          <aside className="mt-12 flex flex-col items-start gap-6 border border-forest/20 bg-forest/5 p-8 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-display text-xl font-semibold text-forest-900">
                Need advice on a related matter?
              </p>
              <p className="mt-1 text-ink-500">
                Speak with our team in confidence.
              </p>
            </div>
            <Button href="/contact" className="shrink-0">
              Book a Consultation
            </Button>
          </aside>

          <div className="mt-12">
            <Link
              href="/legal-matters"
              className="inline-flex items-center gap-2 text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-forest link-underline"
            >
              <span aria-hidden>←</span> All articles
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
