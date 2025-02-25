"use client";

import { motion } from "framer-motion";

const roadmapData = [
  {
    phase: "Phase 1",
    title: "Foundation & Token Launch",
    details: [
      "🔹 SOLREWARD token deployment on Solana",
      "🔹 Liquidity locked on Raydium",
      "🔹 Smart contract audit & multi-sig wallet setup",
      "🔹 Website launch with SolRewards Dashboard",
      "🔹 Marketing & community growth (Twitter, Discord, Telegram)",
    ],
  },
  {
    phase: "Phase 2",
    title: "Security & Stability Enhancements",
    details: [
      "🔹 Implement anti-bot & anti-dump mechanisms",
      "🔹 Enable **real-time SOL reflections** for holders",
      "🔹 Strengthen website security & user authentication",
      "🔹 Expand partnerships & strategic marketing campaigns",
      "🔹 Community AMA sessions & governance updates",
    ],
  },
  {
    phase: "Phase 3",
    title: "Staking & Reward Systems",
    details: [
      "🔹 Introduce **staking pools** for passive income",
      "🔹 Launch **Hyper Staking Mechanism** for boosted APR",
      "🔹 Activate token buyback & burn mechanisms",
      "🔹 Community voting system for roadmap decisions",
      "🔹 Expand educational content for new users",
    ],
  },
  {
    phase: "Phase 4",
    title: "Ecosystem Expansion",
    details: [
      "🔹 SolRewards Marketplace for seamless **token trading**",
      "🔹 Governance voting integration for **DAO decision-making**",
      "🔹 Partner with Solana-based DeFi & yield platforms",
      "🔹 Explore cross-chain compatibility for SOLR token",
      "🔹 Research **real-world utility integrations** (business & retail)",
    ],
  },
];

export default function Roadmap() {
  return (
    <motion.section
      className="container mx-auto pt-24 py-24 px-6 lg:px-12 min-h-screen bg-[#121212] border border-purple-500 shadow-lg text-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.3 }}
    >
      {/* 🔥 Title */}
      <h2 className="text-4xl md:text-5xl font-bold text-center pixel-hover text-green-400 mb-16">
         SolReward Roadmap 2025 & Beyond
      </h2>

      {/* 🛤️ Roadmap Timeline */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {roadmapData.map(({ phase, title, details }, index) => (
          <motion.div
            key={index}
            className="bg-black bg-opacity-60 p-6 rounded-lg shadow-md border border-green-500 transition-transform duration-300 hover:scale-105"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-2xl font-bold text-green-400">
              {phase} - {title}
            </h3>
            <ul className="mt-4 space-y-2 text-gray-300">
              {details.map((detail, idx) => (
                <li key={idx} className="flex items-start space-x-3">
                  <span className="text-green-500">✅</span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
