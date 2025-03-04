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
    const handleScroll = () => setShowTopButton(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <motion.div
      className="relative bg-black text-white min-h-screen overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* ✅ SEO Enhancements */}
      <Head>
        <title>SOLREWARD - Earn Passive SOL Rewards on Solana</title>
        <meta
          name="description"
          content="Join SOLREWARD and earn passive SOL rewards effortlessly. A secure, decentralized staking platform built on Solana."
        />
        <meta
          name="keywords"
          content="Solana, Crypto, SOLREWARD, Staking, DeFi, Blockchain, Passive Income, Web3"
        />
        <meta name="robots" content="index, follow" />
        
        {/* ✅ Sitemap Reference for Search Engines */}
        <link rel="sitemap" type="application/xml" title="Sitemap" href="https://solreward.com/sitemap.xml" />

        {/* ✅ Open Graph / Facebook Meta */}
        <meta property="og:title" content="SOLREWARD - Earn Passive SOL Rewards on Solana" />
        <meta property="og:description" content="Join SOLREWARD and earn passive SOL rewards effortlessly." />
        <meta property="og:image" content="https://solreward.com/meta-image.png" />
        <meta property="og:url" content="https://solreward.com/" />
        <meta property="og:type" content="website" />

        {/* ✅ Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SOLREWARD - Earn Passive SOL Rewards on Solana" />
        <meta name="twitter:description" content="Stake SOLREWARD (SOLR) and earn passive income securely." />
        <meta name="twitter:image" content="https://solreward.com/meta-image.png" />

        {/* ✅ Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* ✅ Floating Background Effects */}
      {[1, 2, 3, 4].map((index) => (
        <motion.div
          key={index}
          className="absolute rounded-full bg-gradient-to-r from-green-400 to-blue-500 opacity-10 blur-3xl"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.2, scale: 1.3 }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
            delay: index * 0.5,
          }}
          style={{
            width: `${60 + index * 10}px`,
            height: `${60 + index * 10}px`,
            top: `${index * 10}%`,
            left: `${index % 2 === 0 ? "5%" : "auto"}`,
            right: `${index % 2 === 1 ? "10%" : "auto"}`,
          }}
        />
      ))}

      {/* ✅ Hero Section */}
      <motion.section
        className="relative flex flex-col items-center justify-center w-full h-screen px-4 xl:px-16 z-10"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <HeroSection />
      </motion.section>

      {/* ✅ Security Features */}
      <motion.section
        className="relative w-full flex items-center justify-center px-4 xl:px-16 py-12 z-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <SecurityFeatures />
      </motion.section>

      {/* ✅ Roadmap Section */}
      <motion.section
        className="relative w-full flex items-center justify-center px-4 xl:px-16 py-12 z-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <div className="container mx-auto py-16 px-8 rounded-lg bg-gray-900 shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl w-full">
          <h2 className="text-4xl font-bold text-center text-blue-400 mb-6">
            Project Roadmap
          </h2>
          <Roadmap />
        </div>
      </motion.section>

      {/* ✅ Call to Action */}
      <motion.section
        className="relative w-full flex items-center justify-center px-4 xl:px-16 py-12 z-10"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-white">
            Join the Future of Rewards
          </h2>
          <p className="text-lg text-gray-400 mt-4">
            Get started with SOLREWARD today and unlock new opportunities.
          </p>
          <a
            href="/SOLR-Whitepaper.pdf"
            download
            className="mt-6 inline-block px-6 py-3 bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold rounded-lg shadow-lg hover:scale-105 transition duration-300"
          >
            Download Whitepaper
          </a>
        </div>
      </motion.section>

      {/* ✅ Back to Top Button */}
      {showTopButton && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 px-4 py-2 bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold rounded-full shadow-lg hover:scale-110 transition-all duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.1 }}
        >
          ⬆ Back to Top
        </motion.button>
      )}
    </motion.div>
  );
}