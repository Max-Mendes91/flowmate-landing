"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const email = "hello@flowmate.com";

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleEscape);
      return () => window.removeEventListener("keydown", handleEscape);
    }
  }, [isOpen, onClose]);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(email);
      // Could add a toast notification here
      alert("Email copied to clipboard!");
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const openGmail = () => {
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`, "_blank");
  };

  const openDefaultEmail = () => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
          />

          {/* Modal Container - Responsive positioning */}
          <div className="fixed inset-0 z-[101] flex items-start sm:items-start justify-center p-4 sm:p-6 pointer-events-none overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.2 }}
              className="w-full max-w-sm sm:max-w-md pointer-events-auto mt-16 sm:mt-20 sm:ml-auto sm:mr-4 lg:mr-6"
            >
              <div className="relative rounded-2xl sm:rounded-3xl border border-white/10 bg-dark-secondary/95 backdrop-blur-xl shadow-2xl p-5 sm:p-6">
                {/* Close Button - More prominent on mobile */}
                <button
                  onClick={onClose}
                  className="absolute top-3 right-3 sm:top-4 sm:right-4 w-10 h-10 sm:w-8 sm:h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                  aria-label="Close modal"
                >
                  <svg
                    className="w-6 h-6 sm:w-5 sm:h-5 text-white"
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

                {/* Content */}
                <div className="text-center">
                  {/* Icon */}
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gold/10 flex items-center justify-center mx-auto mb-4 sm:mb-5">
                    <svg
                      className="w-6 h-6 sm:w-7 sm:h-7 text-gold"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-text-primary mb-1 sm:mb-2">
                    Get in Touch
                  </h3>
                  <p className="text-sm sm:text-base text-text-secondary mb-5 sm:mb-6">
                    Choose how you&apos;d like to reach us:
                  </p>

                  {/* Email Display */}
                  <div className="mb-5 sm:mb-6 p-3 sm:p-4 rounded-lg sm:rounded-xl bg-white/5 border border-white/10">
                    <p className="text-sm sm:text-base text-gold font-medium break-all">{email}</p>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-2 sm:space-y-3">
                    {/* Open in Gmail */}
                    <button
                      onClick={openGmail}
                      className="w-full px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-gold text-black text-sm sm:text-base font-medium hover:bg-gold/90 transition-all"
                    >
                      Open in Gmail
                    </button>

                    {/* Open in Default Email */}
                    <button
                      onClick={openDefaultEmail}
                      className="w-full px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-white/5 border border-white/10 text-text-primary text-sm sm:text-base font-medium hover:bg-white/10 transition-all"
                    >
                      Open in Email App
                    </button>

                    {/* Copy to Clipboard */}
                    <button
                      onClick={copyToClipboard}
                      className="w-full px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-white/5 border border-white/10 text-text-secondary text-sm sm:text-base font-medium hover:bg-white/10 hover:text-text-primary transition-all flex items-center justify-center gap-2"
                    >
                      <svg
                        className="w-4 h-4 sm:w-5 sm:h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                        />
                      </svg>
                      Copy Email
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
