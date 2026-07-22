import Link from "next/link";
import Image from "next/image";

/**
 * Official brand artwork (the full horizontal lockup) from /public/logo.png.
 * The image carries its own green background, so it's used as a self-contained
 * badge on the light header. On dark surfaces (footer/hero) we use the white
 * SVG <Logo>/<LogoMark> below instead, to avoid a mismatched green box.
 */
function LogoImage({
  href = "/",
  priority = false,
  className = "h-11 w-auto sm:h-12",
  src = "/logo.png",
  width = 140,
  height = 48,
}: {
  href?: string | null;
  priority?: boolean;
  className?: string;
  src?: string;
  width?: number;
  height?: number;
}) {
  const img = (
    <Image
      src={src}
      alt="FGL LEGAL (Adullam Chambers) — Legal Practitioners & Consultants"
      width={width}
      height={height}
      priority={priority}
      className={className}
    />
  );
  if (href === null) return img;
  return (
    <Link href={href} aria-label="FGL Legal — home" className="inline-flex">
      {img}
    </Link>
  );
}

/**
 * Recreation of the FGL LEGAL mark: a pillar / gavel form (arch + crossbar +
 * column + base) framed by the two curly braces from the brand logo.
 * `tone` controls colour so it reads on both light paper and dark green.
 * Used on dark surfaces where the raster logo's green background would clash.
 */
function LogoMark({
  className = "",
  color = "currentColor",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg
      viewBox="0 0 120 120"
      className={className}
      role="img"
      aria-label="FGL Legal mark"
      fill="none"
      stroke={color}
    >
      {/* left + right braces */}
      <path
        d="M34 20c-9 0-9 8-9 16 0 6-3 8-7 8 4 0 7 2 7 8 0 8 0 16 9 16"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M86 20c9 0 9 8 9 16 0 6 3 8 7 8-4 0-7 2-7 8 0 8 0 16-9 16"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* arch */}
      <path d="M46 28a14 14 0 0 1 28 0" strokeWidth="5" strokeLinecap="round" />
      {/* crossbar */}
      <line x1="40" y1="34" x2="80" y2="34" strokeWidth="6" strokeLinecap="round" />
      {/* column */}
      <line x1="60" y1="34" x2="60" y2="86" strokeWidth="6" strokeLinecap="round" />
      {/* base */}
      <line x1="44" y1="88" x2="76" y2="88" strokeWidth="6" strokeLinecap="round" />
    </svg>
  );
}

export default function Logo({
  tone = "dark",
  href = "/",
  showTagline = false,
  className = "",
}: {
  tone?: "dark" | "light";
  href?: string | null;
  showTagline?: boolean;
  className?: string;
}) {
  const markColor = tone === "light" ? "#ffffff" : "#15794a";
  const wordColor = tone === "light" ? "text-paper" : "text-forest-800";

  const inner = (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <LogoMark className="h-11 w-11 shrink-0" color={markColor} />
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-lg font-semibold tracking-tight sm:text-xl ${wordColor}`}
        >
          FGL&nbsp;LEGAL
        </span>
        <span className="mt-0.5 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-gold">
          Adullam Chambers
        </span>
        {showTagline && (
          <span
            className={`mt-1 text-[0.6rem] uppercase tracking-[0.22em] ${
              tone === "light" ? "text-paper/60" : "text-ink-500"
            }`}
          >
            Legal Practitioners &amp; Consultants
          </span>
        )}
      </span>
    </span>
  );

  if (href === null) return inner;
  return (
    <Link href={href} aria-label="FGL Legal — home" className="group">
      {inner}
    </Link>
  );
}

export { LogoMark, LogoImage };
