"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // ✅ Close menu when clicking outside (for mobile users)
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (!event.target || !(event.target as HTMLElement).closest(".mobile-menu")) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      window.addEventListener("click", handleOutsideClick);
    }

    return () => window.removeEventListener("click", handleOutsideClick);
  }, [isOpen]);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Token Info", path: "/token-info" },
    { name: "Whitepaper", path: "/whitepaper" },
    { name: "Roadmap", path: "/roadmap" },
    { name: "How It Works", path: "/how-it-works" },
  ];

  return (
    <motion.nav
      className="fixed w-full top-0 left-0 h-20 bg-black bg-opacity-80 backdrop-blur-lg shadow-lg z-50 flex items-center"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto flex justify-between items-center px-6">
        
        {/* 🔹 Logo Section with Animated GIF */}
        <Link href="/" className="flex items-center space-x-2">
          <motion.div
            className="h-12 w-auto md:h-16 transition-transform duration-300 hover:scale-105 animated-logo"
          >
            <Image
              src="/animated-logo.gif" // ✅ Ensure this GIF is inside `/public/`
              alt="SOLREWARD Logo"
              width={60}
              height={60}
              priority
            />
          </motion.div>
          <span className="text-2xl md:text-3xl text-white font-bold tracking-widest pixel-hover">
            SOLREWARD
          </span>
        </Link>

        {/* 🔹 Desktop Navigation */}
        <ul className="hidden md:flex space-x-8">
          {menuItems.map(({ name, path }, index) => (
            <li key={index}>
              <Link 
                href={path} 
                className="navbar-link text-white text-lg transition-all duration-300 hover:text-green-400"
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>

        {/* 🔹 Mobile Menu Button */}
        <button
          className="md:hidden text-white text-3xl focus:outline-none z-50"
          aria-label="Toggle Navigation Menu"
          onClick={(e) => {
            e.stopPropagation(); // ✅ Prevents triggering close on parent
            setIsOpen(!isOpen);
          }}
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* 🔹 Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute top-20 left-0 w-full bg-black bg-opacity-90 backdrop-blur-md px-6 py-4 shadow-lg mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="flex flex-col space-y-4 text-center">
              {menuItems.map(({ name, path }, index) => (
                <li key={index}>
                  <Link
                    href={path}
                    className="navbar-link text-white text-lg transition-all duration-300 hover:text-green-400"
                    onClick={() => setIsOpen(false)} // ✅ Closes menu when link is clicked
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
