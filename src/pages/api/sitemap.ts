import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader("Content-Type", "text/xml");
  res.setHeader("Cache-Control", "public, s-maxage=86400, stale-while-revalidate=43200");

  // ✅ List of Static Pages
  const pages = [
    "",
    "how-it-works",
    "token-info",
    "roadmap",
    "whitepaper",
    "contact",
  ];

  // ✅ Generate XML Sitemap
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${pages
      .map(
        (page) => `
    <url>
      <loc>https://solreward.com/${page}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>${page === "" ? "1.0" : "0.8"}</priority>
    </url>`
      )
      .join("")}
  </urlset>`;

  res.status(200).send(xml);
}
