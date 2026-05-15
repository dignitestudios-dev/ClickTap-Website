import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ['image/webp'],
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "abc.com",
      },
    ],
  },
};

export default nextConfig;