import { firm, hero } from "@/lib/content";
import { ogSize, renderOgImage } from "@/lib/og";

export const size = ogSize;
export const contentType = "image/png";
export const alt = `${firm.full} — ${firm.tagline}`;

export default function Image() {
  return renderOgImage({
    kicker: firm.tagline,
    title: hero.headline,
    byline: firm.location,
  });
}
