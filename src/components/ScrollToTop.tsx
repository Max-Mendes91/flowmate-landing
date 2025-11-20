"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const isScrollingToTop = useRef(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Don't update visibility if we're scrolling to top
      if (isScrollingToTop.current) {
        return;
      }

      // Show button when page is scrolled down 400px
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    // Immediately hide the button when clicked
    setIsVisible(false);
    isScrollingToTop.current = true;

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    // Re-enable visibility checks after scroll completes
    // Smooth scroll typically takes ~500-1000ms depending on distance
    setTimeout(() => {
      isScrollingToTop.current = false;
    }, 1000);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.3 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-4 rounded-2xl border-2 border-gold-border bg-gradient-to-br from-gold-glow to-transparent backdrop-blur-sm hover:border-gold-hover hover:shadow-gold-glow transition-all duration-300 group"
          aria-label="Scroll to top"
          type="button"
        >
          {/* Glowing effect on hover */}
          <div className="absolute inset-0 bg-gold/20 blur-xl rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Arrow icon */}
          <svg
            className="w-6 h-6 text-gold relative z-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
