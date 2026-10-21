import { articles, getArticle } from "@/lib/articles";
import { ogSize, renderOgImage } from "@/lib/og";

export const size = ogSize;
export const contentType = "image/png";
export const alt = "FGL LEGAL — Legal Matters";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const article = getArticle((await params).slug)!;
  return renderOgImage({
    kicker: `Legal Matters · ${article.category}`,
    title: article.title,
    byline: `By ${article.author}`,
  });
}
