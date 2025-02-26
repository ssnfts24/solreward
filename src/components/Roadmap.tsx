"use client";

import { motion } from "framer-motion";

const roadmapData = [
  {
    phase: "Phase 1",
    title: "Foundation & Token Launch",
    details: [
      "🔹 Deployment of the SOLREWARD token on Solana",
      "🔹 Liquidity locked via Raydium for secure trading",
      "🔹 Launch of the official SolRewards Dashboard",
      "🔹 Strategic marketing campaigns (Twitter, Discord, Telegram)",
      "🔹 Community engagement & awareness programs",
    ],
  },
  {
    phase: "Phase 2",
    title: "Security & Stability Enhancements",
    details: [
      "🔹 Implement **anti-bot & anti-dump** mechanisms adjustments",
      "🔹 Enable **real-time SOL reflections** for holders",
      "🔹 Strengthen **website security & user authentication**",
      "🔹 Expand partnerships with key industry projects",
      "🔹 Community AMA sessions & governance updates",
    ],
  },
  {
    phase: "Phase 3",
    title: "Staking & Reward Systems",
    details: [
      "🔹 Launch **staking pools** for passive income generation",
      "🔹 Introduce **Hyper Staking Mechanism** for increased APR",
      "🔹 Activate a **token buyback & burn** system",
      "🔹 Implement a **community-driven voting system**",
      "🔹 Expand educational content to onboard new users",
    ],
  },
  {
    phase: "Phase 4",
    title: "Ecosystem Expansion & Real-World Utility",
    details: [
      "🔹 Launch **SolRewards Marketplace** for seamless token trading",
      "🔹 Introduce **governance voting integration** via DAO",
      "🔹 Establish partnerships with Solana-based DeFi platforms",
      "🔹 Research & implement **cross-chain compatibility** for SOLR",
      "🔹 Explore real-world utility integrations (business & retail use cases)",
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
      {/* ✅ SEO-Optimized Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-center pixel-hover text-green-400 mb-16">
        SOLEREWARD Roadmap 2025 & Beyond
      </h1>

      {/* 🛤️ Roadmap Timeline */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {roadmapData.map(({ phase, title, details }, index) => (
          <motion.div
            key={index}
            className="bg-black bg-opacity-60 p-6 rounded-lg shadow-md border border-green-500 transition-transform duration-300 hover:scale-105"
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="text-2xl font-bold text-green-400">
              {phase} - {title}
            </h2>
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

      {/* 🚀 Call to Action */}
      <div className="text-center mt-16">
        <p className="text-lg text-gray-300">
          Ready to be part of the next evolution of staking rewards?
        </p>
        <motion.a
          href="/token-info"
          className="mt-6 inline-block px-8 py-4 text-lg font-bold pixel-btn transition-all"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Learn More About SOLREWARD"
        >
          Learn More
        </motion.a>
      </div>
    </motion.section>
  );
}
