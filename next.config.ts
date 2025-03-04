import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/sitemap.xml",
        headers: [
          {
            key: "Content-Type",
            value: "application/xml; charset=utf-8",
          },
          {
            key: "Cache-Control",
            value: "public, max-age=0, must-revalidate",
          },
        ],
      },
    ];
  },
  // ✅ Ensure Static Exports Work on Netlify
  output: "standalone",
  trailingSlash: true,
  experimental: {
    appDir: true,
  },
};

export default nextConfig;