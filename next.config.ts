import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Poll so Fast Refresh picks up edits reliably on Windows
  watchOptions: {
    pollIntervalMs: 1000,
  },
  images: {
    qualities: [60, 65, 70, 75],
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1400],
    imageSizes: [48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 2678400, // 31 days
  },
  async headers() {
    return [
      {
        source: "/images/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/start",
        destination: "https://intake.reformvital.com",
        permanent: false,
      },
      {
        source: "/portal",
        destination: "https://patient.reformvital.com",
        permanent: false,
      },
      {
        source: "/ai-coach",
        destination: "/",
        permanent: false,
      },
    ];
  },
  allowedDevOrigins: ["127.0.0.1", "localhost"],
};

export default nextConfig;
