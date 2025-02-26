"use client";

import { motion } from "framer-motion";
import Head from "next/head";

const roadmapData = [
  {
    phase: "Phase 1",
    title: "Foundation & Token Launch",
    details: [
      "🔹 SOLREWARD token deployment on Solana",
      "🔹 Liquidity locked on Raydium",
      "🔹 Website launch with SolRewards Dashboard",
      "🔹 Initial marketing & community growth",
    ],
  },
  {
    phase: "Phase 2",
    title: "Security & Stability Enhancements",
    details: [
      "🔹 Implement **anti-bot & anti-dump** protections",
      "🔹 Enable **real-time SOL reflections** for holders",
      "🔹 Strengthen security & multi-signature wallets",
      "🔹 Expand partnerships & community involvement",
      "🔹 Community AMA sessions & governance updates",
    ],
  },
  {
    phase: "Phase 3",
    title: "Staking & Reward Systems",
    details: [
      "🔹 Launch **staking pools** for passive income",
      "🔹 Introduce **Hyper Staking Mechanism** for boosted APR",
      "🔹 Activate **token buyback & burn mechanisms**",
      "🔹 Governance voting system for roadmap decisions",
      "🔹 Educational content for onboarding new users",
    ],
  },
  {
    phase: "Phase 4",
    title: "Ecosystem Expansion",
    details: [
      "🔹 Introduce **SolReward Marketplace** for trading",
      "🔹 Governance voting integration (DAO decision-making)",
      "🔹 Partner with Solana-based DeFi platforms",
      "🔹 Explore **cross-chain compatibility** for SOLR",
      "🔹 Research additional real-world utilities",
    ],
  },
];

export default function Roadmap() {
  return (
    <>
      <Head>
        <title>SOLREWARD Roadmap 2025 | Token Growth & Expansion</title>
        <meta
          name="description"
          content="Explore the official SOLREWARD roadmap for 2025 & beyond. See our plans for token growth, security enhancements, staking, and ecosystem expansion."
        />
        <meta name="keywords" content="Solana, Crypto, SOLREWARD, Staking, DeFi, Blockchain, Roadmap, Passive Income" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="SOLREWARD Roadmap 2025" />
        <meta property="og:description" content="See the future plans for SOLREWARD, including staking, security updates, and ecosystem expansion." />
        <meta property="og:image" content="https://solreward.com/meta-roadmap.png" />
        <meta property="og:url" content="https://solreward.com/roadmap" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SOLREWARD Roadmap 2025" />
        <meta name="twitter:description" content="Learn about the SOLREWARD token roadmap and upcoming developments." />
        <meta name="twitter:image" content="https://solreward.com/meta-roadmap.png" />
        <link rel="canonical" href="https://solreward.com/roadmap" />
      </Head>

      <motion.section
        className="container mx-auto pt-[100px] pb-32 px-6 lg:px-12 min-h-screen bg-[#121212] border border-purple-500 shadow-lg text-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        {/* 🔥 Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-center pixel-hover text-green-400 mb-16">
          SOLREWARD Roadmap 2025 & Beyond
        </h1>

        {/* 🛤️ Roadmap Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {roadmapData.map(({ phase, title, details }, index) => (
            <motion.div
              key={index}
              className="bg-black bg-opacity-60 p-6 rounded-lg shadow-md border border-green-500 transition-transform duration-300 hover:scale-105"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <h2 className="text-2xl font-bold text-green-400">{phase} - {title}</h2>
              <ul className="mt-4 space-y-2 text-gray-300">
                {details.map((detail, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <span className="text-green-500" aria-hidden="true">✅</span>
                    <span className="sr-only">Step {idx + 1}:</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* ✅ Floating Background Elements */}
        <motion.div
          className="absolute top-10 left-10 w-16 h-16 sm:w-24 sm:h-24 bg-green-500 opacity-20 rounded-full blur-xl animate-pulse"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.4, scale: 1.2 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        ></motion.div>

        <motion.div
          className="absolute bottom-10 right-10 w-20 h-20 sm:w-32 sm:h-32 bg-purple-600 opacity-20 rounded-full blur-xl animate-pulse"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.4, scale: 1.2 }}
          transition={{ duration: 2.5, repeat: Infinity, repeatType: "reverse" }}
        ></motion.div>
      </motion.section>
    </>
  );
}
