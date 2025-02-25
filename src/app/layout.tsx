"use client";

import "../styles/global.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Primary Meta Tags */}
        <title>SOLREWARD - Earn Passive SOL Rewards on Solana</title>
        <meta name="description" content="Earn passive SOL rewards with SOLREWARD, the ultimate on-chain reward system on Solana. Secure, decentralized, and rewarding." />
        <meta name="keywords" content="Solana, Crypto, Rewards, Passive Income, Staking, DeFi, Blockchain, Security, Yield Farming, Tokenomics" />
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
        <meta property="og:description" content="SOLREWARD offers automated SOL reflections and passive rewards for long-term holders." />
        <meta property="og:image" content="https://solreward.com/meta-image.png" />
        <meta property="og:url" content="https://solreward.com" />
        <meta property="og:type" content="website" />

        {/* ✅ Twitter Card Data */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SOLREWARD - Earn SOL on Solana" />
        <meta name="twitter:description" content="Stake and earn passive SOL rewards on the most secure and transparent blockchain rewards system." />
        <meta name="twitter:image" content="https://solreward.com/meta-image.png" />

        {/* ✅ Canonical URL */}
        <link rel="canonical" href="https://solreward.com" />

        {/* ✅ Google Site Verification (if needed) */}
        <meta name="google-site-verification" content="YOUR_GOOGLE_VERIFICATION_CODE_HERE" />
      </head>

      <body className="bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white font-sans">
        {/* ✅ Navbar */}
        <Navbar />

        {/* ✅ Main Content Wrapper */}
        <motion.main
          className="container mx-auto px-4 min-h-screen"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {children}
        </motion.main>

        {/* ✅ Footer */}
        <Footer />
      </body>
    </html>
  );
}
