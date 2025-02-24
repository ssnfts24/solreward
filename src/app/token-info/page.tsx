"use client";

import { motion } from "framer-motion";

export default function TokenInfoPage() {
  return (
    <motion.div
      className="relative bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white min-h-screen flex flex-col items-center justify-center px-6 sm:px-12 overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {/* 🔥 Background Overlay Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-40 pointer-events-none"></div>

      {/* ✅ Page Heading */}
      <motion.h1
        className="text-4xl sm:text-5xl font-extrabold text-center mb-6 bg-gradient-to-r from-green-400 via-purple-500 to-blue-400 bg-clip-text text-transparent drop-shadow-md"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.3 }}
      >
        SOLREWARD Token Info
      </motion.h1>

      {/* ✅ Token Summary */}
      <motion.p
        className="text-lg sm:text-xl text-center max-w-3xl mb-8 text-gray-300 leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.5 }}
      >
        SOLREWARD ($SOLR) is a <strong>reward-driven token</strong> built on <strong>Solana</strong>, distributing <strong>4% SOL rewards</strong> automatically to holders. It features <strong>locked liquidity</strong>, <strong>deflationary burn mechanics</strong>, and <strong>sustainable staking</strong> to ensure long-term growth.
      </motion.p>

      {/* ✅ Tokenomics Section - 5 Boxes with a Responsive Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl w-full text-center"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.3 } },
        }}
      >
        {[
          { title: "Total Supply", value: "1,000,000,000 $SOLR" },
          { title: "Transaction Tax", value: "6% (4% Holders, 1% LP, 1% Burn)" },
          { title: "Staking Rewards", value: "Up to 20% APY" },
          { title: "Liquidity Lock", value: "70% locked on Raydium" },
          { title: "Burn Mechanism", value: "1% of each transaction burned" },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="p-6 bg-black bg-opacity-50 rounded-lg shadow-lg hover:shadow-2xl transition-transform duration-300 hover:scale-105"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <h3 className="text-2xl font-semibold bg-gradient-to-r from-green-400 via-purple-500 to-blue-400 bg-clip-text text-transparent mb-2">
              {item.title}
            </h3>
            <p className="text-gray-300">{item.value}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* ✅ How It Works Section */}
      <motion.div
        className="mt-16 w-full max-w-4xl text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-blue-400 mb-6">How It Works</h2>
        <p className="text-lg text-gray-300 mb-8 leading-relaxed">
          Every time a transaction occurs, <strong>SOLREWARD&apos;s smart contract</strong> automatically distributes <strong>6% tax</strong>:
        </p>

        {/* ✅ Transaction Distribution Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { title: "4% to Holders", desc: "Holders receive **passive SOL reflections**." },
            { title: "1% to Liquidity", desc: "Auto-added to **Raydium liquidity pools**." },
            { title: "1% Burn", desc: "Continuously reducing total supply, increasing scarcity." },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="p-6 bg-black bg-opacity-50 rounded-lg shadow-lg hover:shadow-2xl transition-transform duration-300 hover:scale-105"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <h3 className="text-2xl font-semibold bg-gradient-to-r from-green-400 via-purple-500 to-blue-400 bg-clip-text text-transparent mb-2">
                {item.title}
              </h3>
              <p className="text-gray-300">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ✅ Call-to-Action Buttons */}
      <div className="mt-8 flex flex-wrap justify-center gap-6">
        <motion.a
          href="/whitepaper"
          className="px-8 py-4 text-lg font-bold rounded-lg shadow-lg bg-gradient-to-r from-green-400 via-purple-500 to-blue-500 text-white transition-all duration-300 transform hover:scale-110 hover:shadow-xl active:scale-100"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.7 }}
        >
          📄 View Whitepaper
        </motion.a>

        <motion.a
          href="https://raydium.io/swap"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-4 text-lg font-bold rounded-lg shadow-lg bg-gradient-to-r from-blue-400 to-green-500 text-white transition-all duration-300 transform hover:scale-110 hover:shadow-xl active:scale-100"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.9 }}
        >
          🚀 Buy SOLREWARD
        </motion.a>
      </div>

      {/* ✅ Floating Background Effects for Modern Look */}
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
    </motion.div>
  );
}
