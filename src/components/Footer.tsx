"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaTwitter } from "react-icons/fa"; // ✅ Import social icon (X/Twitter)

export default function Footer() {
  return (
    <motion.footer
      className="relative w-full py-12 bg-cover bg-center bg-no-repeat text-gray-200 overflow-hidden"
      style={{ backgroundImage: "url('/Banner.png')" }} // ✅ Background image via CSS
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* 🔥 Dark Overlay Effect (Enhances Text Readability) */}
      <div className="absolute inset-0 bg-black bg-opacity-70 z-0"></div>

      {/* 🔹 Footer Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        
        {/* 💎 Animated Title with Glow Effect */}
        <motion.h2
          className="text-2xl md:text-3xl font-bold uppercase tracking-widest text-green-300 drop-shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          whileHover={{ scale: 1.05 }}
        >
          Join the SOLREWARD Community
        </motion.h2>

        {/* ✨ Subtext Animation */}
        <motion.p
          className="mt-3 text-gray-300 text-lg"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
        >
          Follow us on Twitter for **updates, giveaways, and exclusive news**!
        </motion.p>

        {/* 🌐 Social Links */}
        <motion.div
          className="mt-6 flex justify-center items-center space-x-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6 }}
        >
          <Link href="https://twitter.com/solreward" target="_blank">
            <motion.div
              className="flex items-center space-x-3 bg-gray-900 bg-opacity-70 hover:bg-opacity-90 transition-all px-5 py-3 rounded-full shadow-lg border border-green-400"
              whileHover={{ scale: 1.1, boxShadow: "0px 0px 15px rgba(0,255,128,0.8)" }}
              whileTap={{ scale: 0.95 }}
            >
              <FaTwitter className="text-green-400 text-2xl animate-pulse" />
              <span className="text-green-200 text-lg font-semibold">@solreward</span>
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </motion.footer>
  );
}

