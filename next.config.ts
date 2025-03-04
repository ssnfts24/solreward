import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  headers: () => [
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
  ],
};

export default nextConfig;