"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(5, 5, 6, 0)", "rgba(11, 11, 13, 0.95)"]
  );

  const borderColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.08)"]
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      style={{
        backgroundColor,
        borderBottomColor: borderColor,
      }}
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 ${
        isScrolled ? "backdrop-blur-xl shadow-lg" : ""
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gold/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative text-xl md:text-2xl font-bold bg-gradient-to-r from-white via-gold/80 to-gold bg-clip-text text-transparent">
                FlowMate
              </span>
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#features"
              className="text-sm text-text-secondary hover:text-text-primary transition-colors"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-sm text-text-secondary hover:text-text-primary transition-colors"
            >
              How It Works
            </a>
            <a
              href="#roadmap"
              className="text-sm text-text-secondary hover:text-text-primary transition-colors"
            >
              Roadmap
            </a>
            <a
              href="#faq"
              className="text-sm text-text-secondary hover:text-text-primary transition-colors"
            >
              FAQ
            </a>
          </div>

          {/* CTA Button */}
          <motion.a
            href="#waitlist"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center font-medium px-6 py-2.5 text-sm bg-white/5 hover:bg-white/10 border border-gold-border hover:border-gold-hover text-white rounded-lg shadow-gold-glow transition-all duration-300"
          >
            Join Waitlist
          </motion.a>
        </div>
      </div>
    </motion.nav>
  );
}
