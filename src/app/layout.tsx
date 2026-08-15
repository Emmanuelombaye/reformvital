import type { Metadata } from "next";
import { brandConfig } from "@/brand.config";
import ScrollMotion from "@/components/motion/ScrollMotion";
import "./globals.css";

export const metadata: Metadata = {
  title: `${brandConfig.name} — Modern Medicine. Personalized Health. Real Results.`,
  description: `${brandConfig.name} combines licensed medical oversight, GLP-1 weight loss, peptide optimization, 24/7 AI accountability coaching, and compounding pharmacy delivery.`,
  keywords: [
    "Reform Vital",
    "semaglutide",
    "tirzepatide",
    "retatrutide",
    "TRT",
    "hormone optimization",
    "BPC-157",
    "NAD+ therapy",
    "peptides",
    "AI health coach",
    "telehealth platform",
    "longevity medicine",
  ],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon-32.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    title: `${brandConfig.name} — ${brandConfig.tagline}`,
    description: brandConfig.hero.description,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Art-directed hero preload — only the viewport-matched file */}
        <link
          rel="preload"
          as="image"
          type="image/webp"
          href="/images/hero-commercial-wide.webp"
          media="(min-width: 901px)"
          fetchPriority="high"
        />
        <link
          rel="preload"
          as="image"
          type="image/webp"
          href="/images/hero-commercial-mobile.webp"
          media="(max-width: 900px)"
          fetchPriority="high"
        />
      </head>
      <body>
        <ScrollMotion />
        {children}
      </body>
    </html>
  );
}
