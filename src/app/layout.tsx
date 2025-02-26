"use client";

import "../styles/global.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [showTopButton, setShowTopButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowTopButton(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <html lang="en">
      <head>
        {/* ✅ Primary SEO Meta Tags */}
        <title>SOLREWARD - Earn Passive SOL Rewards on Solana</title>
        <meta
          name="description"
          content="Earn passive SOL rewards with SOLREWARD, the ultimate on-chain reward system on Solana. Secure, decentralized, and rewarding."
        />
        <meta
          name="keywords"
          content="Solana, Crypto, Rewards, Passive Income, Staking, DeFi, Blockchain, Security, Yield Farming, Tokenomics"
        />
        <meta name="author" content="SOLREWARD Team" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />

        {/* ✅ Favicon & Branding */}
        <meta name="application-name" content="SOLREWARD" />
        <meta name="theme-color" content="#090909" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/Logo.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* ✅ Open Graph / Facebook */}
        <meta property="og:title" content="SOLREWARD - Earn Passive SOL Rewards" />
        <meta
          property="og:description"
          content="SOLREWARD offers automated SOL reflections and passive rewards for long-term holders."
        />
        <meta property="og:image" content="https://solreward.com/meta-image.png" />
        <meta property="og:url" content="https://solreward.com" />
        <meta property="og:type" content="website" />

        {/* ✅ Twitter Card Data */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SOLREWARD - Earn SOL on Solana" />
        <meta
          name="twitter:description"
          content="Stake and earn passive SOL rewards on the most secure and transparent blockchain rewards system."
        />
        <meta name="twitter:image" content="https://solreward.com/meta-image.png" />

        {/* ✅ Canonical URL */}
        <link rel="canonical" href="https://solreward.com" />

        {/* ✅ Google Site Verification (if needed) */}
        <meta name="google-site-verification" content="YOUR_GOOGLE_VERIFICATION_CODE_HERE" />
      </head>

      <body className="bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white font-sans relative">
        {/* ✅ Navbar */}
        <Navbar />

        {/* ✅ Main Content Wrapper */}
        <motion.main
          className="container mx-auto px-4 min-h-screen pt-20 relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {children}
        </motion.main>

        {/* ✅ Footer */}
        <Footer />

        {/* ✅ Back to Top Button - Ensures Visibility */}
        {showTopButton && (
          <motion.button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 px-4 py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold rounded-full shadow-lg hover:scale-110 transition-all duration-300 z-[1001]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.1 }}
          >
            ⬆ Back to Top
          </motion.button>
        )}
      </body>
    </html>
  );
}
