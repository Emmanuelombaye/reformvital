import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Poll so Fast Refresh picks up edits reliably on Windows
  watchOptions: {
    pollIntervalMs: 1000,
  },
  images: {
    qualities: [75, 85, 90],
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 2678400, // 31 days
  },
  allowedDevOrigins: ["127.0.0.1", "localhost"],
};

export default nextConfig;
