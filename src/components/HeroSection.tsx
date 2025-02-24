"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Head from "next/head";

export default function HeroSection() {
  return (
    <>
      <Head>
        <title>SOLREWARD | The Ultimate On-Chain Rewards for Solana</title>
        <meta 
          name="description" 
          content="SOLREWARD is the ultimate on-chain rewards system on Solana. Earn passive SOL reflections and stake for rewards." 
        />
        <meta name="keywords" content="Solana, SOLREWARD, Crypto, Staking, DeFi, Passive Income, Liquidity, Rewards" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="SOLREWARD | Earn Passive Rewards" />
        <meta property="og:description" content="Stake and earn automatic SOL reflections on Solana with SOLREWARD." />
        <meta property="og:image" content="https://solreward.com/meta-banner.png" />
        <meta property="og:url" content="https://solreward.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SOLREWARD | Passive SOL Reflections" />
        <meta name="twitter:description" content="Hold SOLREWARD tokens and earn SOL rewards automatically." />
        <meta name="twitter:image" content="https://solreward.com/meta-banner.png" />
        <link rel="canonical" href="https://solreward.com" />
      </Head>

      <motion.section
        className="w-full min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        {/* 🔥 Top Banner Image with Floating Animation */}
        <motion.div
          className="w-full max-w-[1200px] mb-8 rounded-lg overflow-hidden"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          whileHover={{ scale: 1.02 }} // ✅ Slight scaling on hover
        >
          <motion.div
            className="relative"
            animate={{ y: [0, -5, 0] }} // ✅ Floating Animation
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image 
              src="/Banner.png" // ✅ Ensure this is inside the `public/` folder
              alt="SOLREWARD - Earn Passive SOL Rewards"
              width={1200} 
              height={300}
              priority // ✅ Ensures the banner loads quickly
              loading="eager"
              className="w-full h-auto object-cover shadow-lg rounded-lg"
            />
          </motion.div>
        </motion.div>

        {/* 🛠️ Hero Content Box */}
        <motion.div
          className="relative w-full max-w-[95%] md:max-w-[85%] lg:max-w-[75%] xl:max-w-[65%] bg-[#121212] border border-[#7a1aff] shadow-xl pixel-border p-10 rounded-lg text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          {/* 🌟 Hero Title - Pixel Hover Effect */}
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold pixel-hover text-[#00d084] drop-shadow-md transition-all duration-300"
          >
            SOLREWARD
          </h1>

          {/* 💡 Subtext with Flicker Animation */}
          <p className="text-sm sm:text-md md:text-lg text-gray-300 mt-4 flicker-effect">
            The Ultimate On-Chain Rewards for Solana
          </p>

          {/* 🚀 Call to Action Button */}
          <motion.a
            href="/token-info"
            className="mt-6 inline-block px-8 py-4 text-lg font-bold pixel-btn transition-all"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Learn More About SOLREWARD"
          >
            Learn More
          </motion.a>
        </motion.div>

        {/* ⬇️ Scroll Down Indicator (Fixed for Visibility) */}
        <motion.div 
          className="absolute bottom-8 flex flex-col items-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
        >
          <p className="text-green-400 text-sm mb-2">Scroll Down</p>
          <motion.div
            className="w-6 h-6 border-b-4 border-r-4 border-green-400 rotate-45"
            animate={{ y: 6 }}
            transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
          />
        </motion.div>
      </motion.section>
    </>
  );
}
