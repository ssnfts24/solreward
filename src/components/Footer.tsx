"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaTwitter } from "react-icons/fa"; // ✅ Import social icon (X/Twitter)

export default function Footer() {
  return (
    <motion.footer
      className="relative w-full py-10 bg-cover bg-center bg-no-repeat text-gray-200" // ✅ Adjusted text color for better contrast
      style={{ backgroundImage: "url('/Banner.png')" }} // ✅ Background image via CSS
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* 🔥 Dark Overlay Effect (Enhances Text Readability) */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>

      {/* 🔹 Footer Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        
        {/* 💎 Animated Text with a Slight Glow */}
        <motion.h2
          className="text-2xl md:text-3xl font-bold uppercase tracking-widest text-blue-300 drop-shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          Join the SOLREWARD Community
        </motion.h2>

        {/* 🌐 Social Links */}
        <div className="mt-6 flex justify-center items-center space-x-4">
          <Link href="https://twitter.com/solreward" target="_blank">
            <motion.div
              className="flex items-center space-x-2 bg-gray-900 bg-opacity-60 hover:bg-opacity-80 transition-all px-4 py-2 rounded-full shadow-lg border border-blue-400"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaTwitter className="text-blue-400 text-2xl" />
              <span className="text-blue-200 text-lg font-semibold">@solreward</span>
            </motion.div>
          </Link>
        </div>
      </div>
    </motion.footer>
  );
}
