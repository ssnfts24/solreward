"use client";

import { motion } from "framer-motion";
import Head from "next/head";

export default function HowItWorksPage() {
  return (
    <>
      <Head>
        <title>How SOLREWARD Works | Earn Passive Rewards on Solana</title>
        <meta
          name="description"
          content="Learn how SOLREWARD provides automated SOL rewards, locked liquidity, and future staking opportunities for all holders."
        />
        <meta name="keywords" content="Solana, SOLREWARD, Crypto, Staking, DeFi, Passive Income, Liquidity, Rewards" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="How SOLREWARD Works | Earn Passive Rewards" />
        <meta property="og:description" content="Earn automatic SOL reflections and stake for passive rewards on Solana." />
        <meta property="og:image" content="https://solreward.com/meta-how-it-works.png" />
        <meta property="og:url" content="https://solreward.com/how-it-works" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="How SOLREWARD Works" />
        <meta name="twitter:description" content="Discover the benefits of SOLREWARD and how you can earn passive SOL reflections." />
        <meta name="twitter:image" content="https://solreward.com/meta-how-it-works.png" />
        <link rel="canonical" href="https://solreward.com/how-it-works" />
      </Head>

      <motion.div 
        className="relative bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* 🔥 Background Overlay Effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-40 pointer-events-none"></div>

        {/* 🛠️ Page Heading */}
        <motion.h1 
          className="text-4xl md:text-5xl font-extrabold text-center mb-6 bg-gradient-to-r from-green-400 via-purple-500 to-blue-400 bg-clip-text text-transparent drop-shadow-md"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          How SOLREWARD Works
        </motion.h1>

        {/* 📜 Description */}
        <motion.p 
          className="text-lg text-center max-w-2xl mb-8 text-gray-300 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
        >
          Discover how **SOLREWARD** provides **automated SOL rewards, locked liquidity, and staking** opportunities for all holders.
        </motion.p>

        {/* 🚀 Step-by-Step Guide */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.3 } },
          }}
        >
          {[
            { title: "Buy & Hold", desc: "Purchase SOLR tokens and store them securely in your wallet to start earning rewards." },
            { title: "Earn Automatic Rewards", desc: "Holders receive **4% SOL reflections** instantly with every transaction." },
            { title: "Liquidity Protection", desc: "**70% of liquidity is permanently locked** on Raydium for long-term stability." },
            { title: "Staking & Future Utilities", desc: "**Stake SOLR** for additional APY rewards and unlock NFT-based utilities in future updates!" },
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
                <span className="text-gray-300">Step {index + 1}: </span>{item.title}
              </h3>
              <p className="text-gray-300">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* 🔥 Call to Action */}
        <motion.a
          href="/token-info"
          className="mt-10 inline-block px-8 py-4 text-lg font-bold pixel-btn transition-all bg-gradient-to-r from-green-400 via-purple-500 to-blue-500 hover:scale-105 hover:shadow-lg"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Learn More About SOLREWARD
        </motion.a>

        {/* ✨ Floating Animations for Visual Depth */}
        <motion.div 
          className="absolute top-10 left-10 w-24 h-24 bg-green-500 opacity-20 rounded-full blur-2xl animate-pulse"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.4, scale: 1.2 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        ></motion.div>

        <motion.div 
          className="absolute bottom-10 right-10 w-32 h-32 bg-purple-600 opacity-20 rounded-full blur-2xl animate-pulse"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.4, scale: 1.2 }}
          transition={{ duration: 2.5, repeat: Infinity, repeatType: "reverse" }}
        ></motion.div>

      </motion.div>
    </>
  );
}
