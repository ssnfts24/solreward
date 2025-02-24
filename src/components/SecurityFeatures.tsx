"use client";

import { motion } from "framer-motion";
import { 
  ShieldCheckIcon, 
  LockClosedIcon, 
  ChartBarIcon, 
  FireIcon, 
  CurrencyDollarIcon, 
  ExclamationTriangleIcon // ✅ Correct replacement
} from "@heroicons/react/24/solid";




export default function SecurityFeatures() {
  return (
    <motion.section
      className="container mx-auto py-16 px-6 lg:px-12 rounded-lg bg-gray-900 shadow-lg transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl border border-gray-700"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.3 }}
    >
      {/* 🔒 Header Section */}
      <h2 className="text-5xl font-bold text-center text-red-400 pixel-perfect drop-shadow-md mb-6">
        Security & Anti-Dump Measures 🔒
      </h2>
      <p className="text-lg text-gray-300 text-center max-w-4xl mx-auto leading-relaxed">
        At <span className="text-green-400 font-bold">SOLREWARD</span>, we ensure **maximum security** and **fairness** for investors by implementing **industry-leading anti-dump and security measures**.
      </p>

      {/* 🔹 Features List */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 text-gray-300 max-w-6xl mx-auto">
        
        {/* ✅ Multi-Sig Protection */}
        <motion.div
          className="flex items-center space-x-4 bg-gray-800 p-5 rounded-lg border border-gray-700 shadow-md transition-transform hover:scale-105"
          whileHover={{ scale: 1.05 }}
        >
          <ShieldCheckIcon className="h-12 w-12 text-green-400" />
          <div>
            <h3 className="text-xl font-bold">Multi-Sig Wallet Protection</h3>
            <p className="text-sm text-gray-400">
              Only **trusted wallets** can modify liquidity or contract settings.
            </p>
          </div>
        </motion.div>

        {/* 🔒 Liquidity Locked */}
        <motion.div
          className="flex items-center space-x-4 bg-gray-800 p-5 rounded-lg border border-gray-700 shadow-md transition-transform hover:scale-105"
          whileHover={{ scale: 1.05 }}
        >
          <LockClosedIcon className="h-12 w-12 text-blue-400" />
          <div>
            <h3 className="text-xl font-bold">Liquidity Locked</h3>
            <p className="text-sm text-gray-400">
              Prevents **rug pulls** by locking liquidity **long-term**.
            </p>
          </div>
        </motion.div>

        {/* 📊 Anti-Dump Mechanisms */}
        <motion.div
          className="flex items-center space-x-4 bg-gray-800 p-5 rounded-lg border border-gray-700 shadow-md transition-transform hover:scale-105"
          whileHover={{ scale: 1.05 }}
        >
          <ChartBarIcon className="h-12 w-12 text-purple-400" />
          <div>
            <h3 className="text-xl font-bold">Anti-Dump Limits</h3>
            <p className="text-sm text-gray-400">
              Max sell transactions are limited to **1% per trade**.
            </p>
          </div>
        </motion.div>

        {/* 💰 4% SOL Reflections */}
        <motion.div
          className="flex items-center space-x-4 bg-gray-800 p-5 rounded-lg border border-gray-700 shadow-md transition-transform hover:scale-105"
          whileHover={{ scale: 1.05 }}
        >
          <CurrencyDollarIcon className="h-12 w-12 text-yellow-400" />
          <div>
            <h3 className="text-xl font-bold">4% SOL Rewards</h3>
            <p className="text-sm text-gray-400">
              Holders earn **4% SOL reflections** on every transaction.
            </p>
          </div>
        </motion.div>

        {/* 🔥 Buyback & Burn Mechanism */}
        <motion.div
          className="flex items-center space-x-4 bg-gray-800 p-5 rounded-lg border border-gray-700 shadow-md transition-transform hover:scale-105"
          whileHover={{ scale: 1.05 }}
        >
          <FireIcon className="h-12 w-12 text-red-500" />
          <div>
            <h3 className="text-xl font-bold">Buyback & Burn</h3>
            <p className="text-sm text-gray-400">
              Reduces supply by **burning tokens** to maintain value.
            </p>
          </div>
        </motion.div>

        {/* ⚡ Anti-Bot Protection */}
        <motion.div
  className="flex items-center space-x-4 bg-gray-800 p-5 rounded-lg border border-gray-700 shadow-md transition-transform hover:scale-105"
  whileHover={{ scale: 1.05 }}
>
  <ExclamationTriangleIcon className="h-12 w-12 text-orange-400" /> {/* ✅ Fixed */}
  <div>
    <h3 className="text-xl font-bold">Anti-Bot Protection</h3>
    <p className="text-sm text-gray-400">
      Blocks **automated sniping bots** during launch.
    </p>
  </div>
</motion.div>


      </div>
    </motion.section>
  );
}
