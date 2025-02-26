"use client";

import { motion } from "framer-motion";
import Head from "next/head";

export default function TokenInfoPage() {
  return (
    <>
      <Head>
        <title>💰 SOLREWARD Token Info - Staking & Passive Rewards</title>
        <meta 
          name="description" 
          content="SOLREWARD ($SOLR) is a reward-driven token built on Solana, offering 4% SOL reflections, staking rewards, and deflationary burn mechanics." 
        />
        <meta name="keywords" content="Solana, SOLREWARD, Crypto, Passive Income, Staking, DeFi, Tokenomics, Blockchain, Liquidity, Burn Mechanism" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="SOLREWARD Team" />
        <meta property="og:title" content="💰 SOLREWARD Token Info - Staking & Passive Rewards" />
        <meta property="og:description" content="SOLREWARD ($SOLR) offers 4% SOL reflections, staking, and a sustainable DeFi ecosystem." />
        <meta property="og:image" content="https://solreward.com/meta-token.png" />
        <meta property="og:url" content="https://solreward.com/token-info" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="💰 SOLREWARD Token Info" />
        <meta name="twitter:description" content="Stake SOLREWARD and earn passive SOL reflections automatically." />
        <meta name="twitter:image" content="https://solreward.com/meta-token.png" />
        <link rel="canonical" href="https://solreward.com/token-info" />
      </Head>

      <motion.div
        className="relative bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white min-h-screen flex flex-col items-center justify-center px-6 sm:px-12 overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* 🔥 Background Overlay Effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50 pointer-events-none"></div>

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

        {/* ✅ Tokenomics Section */}
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

        {/* ✅ Floating Background Effects */}
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
    </>
  );
}
