import Link from "next/link";
import type { ReactNode } from "react";

/* ---------------------------------------------------------------- Button */

type ButtonProps = {
  href?: string;
  children: ReactNode;
  variant?: "solid" | "outline" | "ghost";
  tone?: "dark" | "light";
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
};

const base =
  "group inline-flex items-center justify-center gap-2.5 px-6 py-3 text-[0.8rem] font-semibold uppercase tracking-[0.14em] transition-colors duration-300 disabled:cursor-not-allowed disabled:opacity-60";

function styles(variant: string, tone: string) {
  if (variant === "solid")
    return "bg-forest text-paper hover:bg-forest-800";
  if (variant === "outline")
    return tone === "light"
      ? "border border-paper/40 text-paper hover:border-gold hover:text-gold"
      : "border border-forest/25 text-forest-800 hover:border-forest hover:bg-forest hover:text-paper";
  // ghost
  return tone === "light"
    ? "text-paper hover:text-gold"
    : "text-forest-800 hover:text-forest";
}

export function Button({
  href,
  children,
  variant = "solid",
  tone = "dark",
  className = "",
  type = "button",
  disabled,
}: ButtonProps) {
  const cls = `${base} ${styles(variant, tone)} ${className}`;
  const content = (
    <>
      {children}
      <span
        aria-hidden
        className="transition-transform duration-300 group-hover:translate-x-1"
      >
        →
      </span>
    </>
  );
  if (href)
    return (
      <Link href={href} className={cls}>
        {content}
      </Link>
    );
  return (
    <button type={type} disabled={disabled} className={cls}>
      {content}
    </button>
  );
}

/* --------------------------------------------------------------- Section */

export function Section({
  children,
  className = "",
  id,
  tone = "paper",
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  tone?: "paper" | "cream" | "forest" | "deep";
}) {
  const bg =
    tone === "forest"
      ? "bg-forest-800 text-paper"
      : tone === "deep"
        ? "bg-forest-900 text-paper"
        : tone === "cream"
          ? "bg-paper-200 text-ink"
          : "bg-paper text-ink";
  return (
    <section
      id={id}
      className={`${bg} px-gutter py-20 sm:py-28 ${className}`}
    >
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}

/* -------------------------------------------------------- SectionHeading */

export function SectionHeading({
  kicker,
  title,
  intro,
  tone = "dark",
  align = "left",
  className = "",
  as = "h2",
}: {
  kicker?: string;
  title: ReactNode;
  intro?: ReactNode;
  tone?: "dark" | "light";
  align?: "left" | "center";
  className?: string;
  as?: "h1" | "h2";
}) {
  const Tag = as;
  const alignCls = align === "center" ? "items-center text-center mx-auto" : "items-start";
  const introColor = tone === "light" ? "text-paper/75" : "text-ink-500";
  const titleColor = tone === "light" ? "text-paper" : "text-forest-900";
  return (
    <div className={`flex max-w-2xl flex-col ${alignCls} ${className}`}>
      {kicker && (
        <span className="kicker mb-4 flex items-center gap-3 text-gold">
          <span className="brace text-lg leading-none">{"{"}</span>
          {kicker}
          <span className="brace text-lg leading-none">{"}"}</span>
        </span>
      )}
      <Tag
        className={`font-display text-3xl font-semibold leading-[1.08] sm:text-4xl md:text-[2.75rem] ${titleColor}`}
      >
        {title}
      </Tag>
      <div className={`rule-gold mt-6 w-16 ${align === "center" ? "mx-auto" : ""}`} />
      {intro && (
        <p className={`mt-6 max-w-xl text-base leading-relaxed sm:text-lg ${introColor}`}>
          {intro}
        </p>
      )}
    </div>
  );
}

/* ----------------------------------------------------------------- Brace */
/* Large decorative bracket used as a recurring motif. */
export function BraceMark({ className = "" }: { className?: string }) {
  return (
    <span aria-hidden className={`brace select-none ${className}`}>
      {"{ }"}
    </span>
  );
}
