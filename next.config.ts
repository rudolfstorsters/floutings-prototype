import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "floutings.lv",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "http",
        hostname: "floutings.lv",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
  turbopack: {
    root: path.resolve(__dirname),
  },
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
};

export default nextConfig;
