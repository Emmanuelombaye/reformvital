import type { Metadata } from "next";
import { brandConfig } from "@/brand.config";
import "./globals.css";

export const metadata: Metadata = {
  title: `${brandConfig.name}: ${brandConfig.tagline}`,
  description: brandConfig.hero.subheadline,
  keywords: ["semaglutide", "tirzepatide", "glp-1", "weight loss", "telehealth", brandConfig.name.toLowerCase()],
  openGraph: {
    title: `${brandConfig.name}: ${brandConfig.tagline}`,
    description: brandConfig.hero.subheadline,
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
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
