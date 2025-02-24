"use client";

import { useEffect, useState } from "react";
import HeroSection from "../components/HeroSection";
import SecurityFeatures from "../components/SecurityFeatures";
import Roadmap from "../components/Roadmap";
import { motion } from "framer-motion";
import Head from "next/head";

export default function Home() {
  const [showTopButton, setShowTopButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopButton(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.div
      className="relative bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white min-h-screen overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* ✅ SEO Enhancements */}
      <Head>
        <title>SOLREWARD - Earn Passive SOL Rewards on Solana</title>
        <meta name="description" content="Earn passive SOL rewards with SOLREWARD, the ultimate on-chain reward system on Solana. Secure, decentralized, and rewarding." />
        <meta name="keywords" content="Solana, Crypto, Rewards, Passive Income, Staking, DeFi, Blockchain, Security, Yield Farming, Tokenomics" />
        <meta name="author" content="SOLREWARD Team" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="SOLREWARD - Earn Passive SOL Rewards" />
        <meta property="og:description" content="SOLREWARD offers automated SOL reflections and passive rewards for long-term holders." />
        <meta property="og:image" content="https://solreward.com/meta-image.png" />
        <meta property="og:url" content="https://solreward.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SOLREWARD - Earn SOL on Solana" />
        <meta name="twitter:description" content="Stake and earn passive SOL rewards on the most secure and transparent blockchain rewards system." />
        <meta name="twitter:image" content="https://solreward.com/meta-image.png" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://solreward.com" />
      </Head>

      {/* ✅ Floating Background Effects */}
      <div className="absolute inset-0 w-full h-full bg-noise opacity-10 z-0 animate-glitch" />

      {[{ top: "10%", left: "5%", size: "w-16 h-16", delay: 0 }, { top: "25%", right: "10%", size: "w-32 h-32", delay: 0.3 }, { bottom: "15%", left: "15%", size: "w-24 h-24", delay: 0.6 }, { bottom: "30%", right: "5%", size: "w-20 h-20", delay: 0.9 }].map((light, index) => (
        <motion.div
          key={index}
          className={`absolute ${light.size} bg-purple-600 opacity-20 rounded-full blur-2xl animate-pulse`}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.4, scale: 1.2 }}
          transition={{ duration: 2.5, repeat: Infinity, repeatType: "reverse", delay: light.delay }}
          style={{ top: light.top, left: light.left, right: light.right, bottom: light.bottom }}
        />
      ))}

      {/* ✅ Hero Section */}
      <motion.section className="relative flex flex-col items-center justify-center w-full h-screen px-4 xl:px-16" initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1, ease: "easeOut" }}>
        <HeroSection />
      </motion.section>

      {/* ✅ Security Features */}
      <motion.section className="w-full h-auto flex items-center justify-center px-4 xl:px-16" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.5 }}>
        <SecurityFeatures />
      </motion.section>

      {/* ✅ Roadmap Section */}
      <motion.section className="w-full h-auto flex items-center justify-center px-4 xl:px-16" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.5 }}>
        <div className="container mx-auto py-16 px-8 rounded-lg bg-gray-800 shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl w-full">
          <h2 className="text-4xl font-bold text-center text-blue-400 mb-6">Project Roadmap</h2>
          <Roadmap />
        </div>
      </motion.section>

      {/* ✅ Call to Action */}
      <motion.section className="w-full flex items-center justify-center px-4 xl:px-16 py-12" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.6 }}>
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-white">Join the Future of Rewards</h2>
          <p className="text-lg text-gray-400 mt-4">Get started with SOLREWARD today and unlock new opportunities.</p>
          <a href="/SOLR-Whitepaper.pdf" download className="mt-6 inline-block px-6 py-3 bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold rounded-lg shadow-lg hover:scale-105 transition duration-300">Download Whitepaper</a>
        </div>
      </motion.section>

      {/* ✅ Back to Top Button */}
      {showTopButton && (
        <motion.button onClick={scrollToTop} className="fixed bottom-6 right-6 px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold rounded-lg shadow-lg hover:scale-110 transition-all duration-300" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} whileHover={{ scale: 1.1 }}>
          ⬆ Back to Top
        </motion.button>
      )}
    </motion.div>
  );
}

