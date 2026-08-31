import type { Metadata, Viewport } from "next";
import { brandConfig } from "@/brand.config";
import ScrollMotion from "@/components/motion/ScrollMotion";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0D1B2A",
};

export const metadata: Metadata = {
  title: `${brandConfig.name} — Modern Medicine. Personalized Health. Real Results.`,
  description: `${brandConfig.name} offers Semaglutide and Tirzepatide weight-management programs with licensed medical oversight, 24/7 AI accountability coaching, and compounding pharmacy delivery.`,
  keywords: [
    "Reform Vital",
    "semaglutide",
    "tirzepatide",
    "weight management",
    "weight management",
    "medical weight loss",
    "AI health coach",
    "telehealth platform",
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
        <link
          rel="preload"
          as="image"
          type="image/webp"
          href="/images/hero-commercial-wide.webp"
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
