import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { firm } from "@/lib/content";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = "https://fgllegalgh.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "FGL LEGAL (Adullam Chambers) — Legal Practitioners & Consultants",
    template: "%s · FGL LEGAL (Adullam Chambers)",
  },
  description:
    "A new-generation Ghanaian law firm in Accra pairing legal excellence with commercial insight. Corporate, litigation, property, banking, IP, family law and more — practical, timely, cost-effective counsel.",
  keywords: [
    "law firm Ghana",
    "Accra lawyers",
    "corporate law Ghana",
    "litigation Accra",
    "FGL Legal",
    "Adullam Chambers",
  ],
  authors: [{ name: firm.full }],
  openGraph: {
    title: "FGL LEGAL (Adullam Chambers) — Legal Practitioners & Consultants",
    description:
      "Modern legal counsel. Practical solutions. Trusted partnership. A new-generation law firm in Accra, Ghana.",
    url: siteUrl,
    siteName: firm.full,
    locale: "en_GH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FGL LEGAL (Adullam Chambers)",
    description: "Modern legal counsel. Practical solutions. Trusted partnership.",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <head>
        <noscript>
          {/* Without JS the reveal observer never fires — keep content visible */}
          <style>{`.reveal{opacity:1 !important;transform:none !important}`}</style>
        </noscript>
      </head>
      <body className="min-h-screen">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-forest focus:px-4 focus:py-2 focus:text-paper"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
