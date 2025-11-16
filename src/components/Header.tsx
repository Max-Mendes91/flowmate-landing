"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./Navbar";
import WaitlistModal from "./WaitlistModal";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { href: "#features", label: "Features" },
    { href: "#how-it-works", label: "How It Works" },
    { href: "#roadmap", label: "Roadmap" },
    { href: "#faq", label: "FAQ" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 px-4 sm:px-6 py-4 flex items-center justify-between">
        {/* Left: Logo */}
        <Link href="/" className="flex items-center z-10">
          <Image
            src="/logo-symbol.png"
            width={42}
            height={42}
            alt="FlowMate Logo"
            className="rounded-full shadow"
            priority
          />
        </Link>

        {/* Center: Floating Glass Navbar - Hidden on mobile/tablet */}
        <div className="absolute left-1/2 -translate-x-1/2 hidden lg:block">
          <Navbar />
        </div>

        {/* Right: Mobile Menu Button (visible on mobile/tablet) */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xl"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Right: CTA Pill - Hidden on mobile/tablet */}
        <button
          onClick={() => setIsWaitlistOpen(true)}
          className="
            hidden lg:block
            px-5 py-2.5
            rounded-full
            font-medium
            text-gold
            border border-gold/40
            bg-white/5
            backdrop-blur-xl
            shadow-lg
            hover:bg-white/10
            hover:border-gold/60
            transition-all
          "
        >
          Join Waitlist
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60] lg:hidden"
            />

            {/* Mobile Menu */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="fixed top-16 left-4 right-4 z-[70] lg:hidden max-h-[calc(100vh-5rem)] overflow-y-auto"
            >
              <div className="rounded-2xl border border-white/10 bg-dark-secondary/95 backdrop-blur-xl shadow-2xl p-4">
                {/* Close Button */}
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
                  aria-label="Close menu"
                >
                  <svg
                    className="w-5 h-5 text-text-muted"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>

                {/* Nav Links */}
                <nav className="grid grid-cols-2 gap-x-4 gap-y-1 pt-6">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-sm text-white/90 hover:text-gold transition-colors py-1.5"
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>

                {/* CTA Button */}
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsWaitlistOpen(true);
                  }}
                  className="mt-4 w-full px-4 py-2 rounded-xl font-medium text-gold border border-gold/40 bg-white/5 backdrop-blur-xl hover:bg-white/10 hover:border-gold/60 transition-all text-sm"
                >
                  Join Waitlist
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Waitlist Modal */}
      <WaitlistModal
        isOpen={isWaitlistOpen}
        onClose={() => setIsWaitlistOpen(false)}
      />
    </>
  );
}
