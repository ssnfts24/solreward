"use client";

import { motion } from "framer-motion";
import Head from "next/head";

export default function WhitepaperPage() {
  return (
    <>
      <Head>
        <title>📜 SOLREWARD Whitepaper - Everything About SOLR</title>
        <meta 
          name="description" 
          content="Read the SOLREWARD Whitepaper and learn about our vision, tokenomics, staking, and rewards system on the Solana blockchain." 
        />
        <meta name="keywords" content="Solana, SOLREWARD Whitepaper, Crypto, Passive Income, Staking, DeFi, Blockchain, Tokenomics" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="SOLREWARD Team" />
        <meta property="og:title" content="📜 SOLREWARD Whitepaper - All About SOLR" />
        <meta property="og:description" content="Discover SOLREWARD’s mission, tokenomics, and staking model in our official whitepaper." />
        <meta property="og:image" content="https://solreward.com/meta-whitepaper.png" />
        <meta property="og:url" content="https://solreward.com/whitepaper" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="📜 SOLREWARD Whitepaper" />
        <meta name="twitter:description" content="Unlock the full potential of staking and passive rewards with SOLREWARD on Solana." />
        <meta name="twitter:image" content="https://solreward.com/meta-whitepaper.png" />
        <link rel="canonical" href="https://solreward.com/whitepaper" />
      </Head>

      <motion.div 
        className="relative bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white min-h-screen flex flex-col items-center justify-center px-6 sm:px-12 overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* 🔹 Background Overlay Effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50 pointer-events-none"></div>

        {/* 🔥 Page Heading */}
        <motion.h1 
          className="text-4xl sm:text-5xl font-extrabold text-center mb-6 bg-gradient-to-r from-green-400 via-purple-500 to-blue-400 bg-clip-text text-transparent drop-shadow-md"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          SOLREWARD Whitepaper 📜
        </motion.h1>

        {/* 🔷 Description Section */}
        <motion.p 
          className="text-lg sm:text-xl text-center max-w-3xl mb-8 text-gray-300 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
        >
          Explore the <strong>vision, mission, and tokenomics</strong> of SOLREWARD.  
          Learn how we are building a <strong>next-generation reward system</strong> on the <strong>Solana blockchain</strong>.
        </motion.p>

        {/* 📜 Whitepaper Viewer - Embed PDF */}
        <motion.div 
          className="w-full max-w-4xl h-[600px] sm:h-[800px] bg-gray-800 rounded-lg shadow-lg overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.6 }}
        >
          <iframe
            src="/SOLR-Whitepaper.pdf#view=FitH" 
            width="100%"
            height="100%"
            className="border-none"
            title="SOLREWARD Whitepaper"
          ></iframe>
        </motion.div>

        {/* 📥 Call-to-Action Download Button */}
        <motion.a 
          href="/SOLR-Whitepaper.pdf" 
          download
          className="mt-6 px-8 py-4 text-lg font-semibold rounded-lg shadow-lg bg-gradient-to-r from-green-400 via-purple-500 to-blue-500 text-white transition-all duration-300 transform hover:scale-110 hover:shadow-xl active:scale-100"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.7 }}
          aria-label="Download SOLREWARD Whitepaper"
        >
          📥 Download Whitepaper
        </motion.a>

        {/* ✅ Floating Background Elements (Optimized) */}
        <motion.div 
          className="absolute top-10 left-10 w-16 h-16 sm:w-24 sm:h-24 bg-green-500 opacity-20 rounded-full blur-xl animate-pulse"
          initial={{ opacity: 0.2, scale: 0.5 }}
          animate={{ opacity: 0.4, scale: 1.2 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          style={{ willChange: "transform, opacity" }}
        ></motion.div>

        <motion.div 
          className="absolute bottom-10 right-10 w-20 h-20 sm:w-32 sm:h-32 bg-purple-600 opacity-20 rounded-full blur-xl animate-pulse"
          initial={{ opacity: 0.2, scale: 0.5 }}
          animate={{ opacity: 0.4, scale: 1.2 }}
          transition={{ duration: 2.5, repeat: Infinity, repeatType: "reverse" }}
          style={{ willChange: "transform, opacity" }}
        ></motion.div>

        {/* 🚀 Animated Spark Effect */}
        <motion.div 
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ duration: 2.5, repeat: Infinity, repeatType: "reverse" }}
        >
          <div className="w-64 h-64 bg-gradient-to-r from-green-400 to-blue-500 opacity-10 rounded-full blur-[100px]"></div>
        </motion.div>
      </motion.div>
    </>
  );
}
