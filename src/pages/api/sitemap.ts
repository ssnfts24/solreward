import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader("Content-Type", "text/xml");

  // 🚀 Define the XML structure
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url><loc>https://solreward.com/</loc></url>
    <url><loc>https://solreward.com/token-info</loc></url>
    <url><loc>https://solreward.com/whitepaper</loc></url>
    <url><loc>https://solreward.com/how-it-works</loc></url>
    <url><loc>https://solreward.com/roadmap</loc></url>
  </urlset>`;

  res.status(200).send(sitemap);
}
