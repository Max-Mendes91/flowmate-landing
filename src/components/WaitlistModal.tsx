"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WaitlistModal({
  isOpen,
  onClose,
}: WaitlistModalProps) {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

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

  // Reset state when modal opens
  useEffect(() => {
    if (isOpen) {
      setEmail("");
      setError("");
      setSuccess("");
      setIsSubmitting(false);
    }
  }, [isOpen]);

  const validateEmail = (email: string) => {
    if (!email.trim()) {
      return "Please enter your email address";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return "Please enter a valid email address";
    }
    return "";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Custom validation
    const validationError = validateEmail(email);
    if (validationError) {
      setError(validationError);
      return;
    }

    setError("");
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          utmCampaign: new URLSearchParams(window.location.search).get(
            "utm_campaign"
          ),
          userAgent: navigator.userAgent,
        }),
      });

      // Try to parse JSON response, with fallback for non-JSON responses
      let data;
      try {
        data = await response.json();
      } catch {
        // Response is not valid JSON
        if (response.status === 500) {
          setError("Server configuration error. Please contact support@flowmate.click");
          setIsSubmitting(false);
          return;
        }
        setError("Unexpected server response. Please try again.");
        setIsSubmitting(false);
        return;
      }

      // Handle duplicate email as success
      if (response.status === 409) {
        setSuccess("You're already on the waitlist!");
        setError("");
        setIsSubmitting(false);
        return;
      }

      // Handle other errors
      if (!response.ok) {
        // Provide more specific error messages
        if (response.status === 500 && data.error === "Server configuration error") {
          setError("Service temporarily unavailable. Please try again later.");
        } else {
          setError(data.error || "Something went wrong. Please try again.");
        }
        setIsSubmitting(false);
        return;
      }

      // Success - new signup
      setSuccess("You're on the list!");
      setIsSubmitting(false);
    } catch (err) {
      // Network errors (no internet, server unreachable, etc.)
      setError("Unable to connect. Please check your internet and try again.");
      setIsSubmitting(false);
    }
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

          {/* Modal Container - Full screen flex center */}
          <div className="fixed inset-0 z-[101] flex items-center justify-center p-3 sm:p-6 pointer-events-none overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              className="w-full max-w-md pointer-events-auto my-auto max-h-[calc(100vh-1.5rem)] overflow-y-auto"
            >
              <div className="relative rounded-2xl sm:rounded-3xl border border-white/10 bg-dark-secondary/95 backdrop-blur-xl shadow-2xl p-4 sm:p-8">
              {/* Close Button - More prominent on mobile */}
              <button
                onClick={onClose}
                className="absolute top-2 right-2 sm:top-4 sm:right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
                aria-label="Close modal"
              >
                <svg
                  className="w-5 h-5 text-white"
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

              {!success ? (
                <>
                  {/* Icon - smaller for compact view */}
                  <div className="w-10 h-10 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gold/10 flex items-center justify-center mx-auto mb-3 sm:mb-6">
                    <svg
                      className="w-5 h-5 sm:w-8 sm:h-8 text-gold"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-2xl font-bold text-text-primary mb-1 sm:mb-2 text-center">
                    Join the Waitlist
                  </h3>
                  <p className="text-xs sm:text-base text-text-secondary mb-4 sm:mb-8 text-center">
                    Be the first to experience FlowMate when we launch.
                  </p>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4" noValidate>
                    <div>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          if (error) setError(""); // Clear error when typing
                        }}
                        placeholder="Enter your email"
                        disabled={isSubmitting}
                        className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-white/5 border text-text-primary placeholder:text-text-muted focus:outline-none transition-colors disabled:opacity-50 text-sm sm:text-base ${
                          error ? "border-red-500/50 focus:border-red-500/70" : "border-white/10 focus:border-gold/40"
                        }`}
                      />
                    </div>

                    {/* Error Message */}
                    {error && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-2 sm:p-3 rounded-lg sm:rounded-xl bg-red-500/10 border border-red-500/20"
                      >
                        <p className="text-xs sm:text-sm text-red-400">{error}</p>
                      </motion.div>
                    )}

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-gold text-black font-medium hover:bg-gold/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                    >
                      {isSubmitting ? "Joining..." : "Join Waitlist"}
                    </button>
                  </form>

                  <p className="text-[10px] sm:text-xs text-text-muted text-center mt-3 sm:mt-4">
                    We&apos;ll never share your email with anyone else.
                  </p>
                </>
              ) : (
                <>
                  {/* Success State */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", duration: 0.5 }}
                    className="text-center"
                  >
                    {/* Success Icon */}
                    <div className="w-12 h-12 sm:w-20 sm:h-20 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-3 sm:mb-6">
                      <svg
                        className="w-6 h-6 sm:w-10 sm:h-10 text-gold"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>

                    <h3 className="text-lg sm:text-2xl font-bold text-text-primary mb-1 sm:mb-2">
                      {success}
                    </h3>
                    <p className="text-xs sm:text-base text-text-secondary mb-4 sm:mb-8">
                      {success === "You're already on the waitlist!"
                        ? "We have your email and will notify you when FlowMate launches."
                        : "We'll send you an email when FlowMate launches. Check your inbox for confirmation."}
                    </p>

                    <button
                      onClick={onClose}
                      className="w-full sm:w-auto px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-white/5 border border-white/10 text-text-primary font-medium hover:bg-white/10 transition-all text-sm sm:text-base"
                    >
                      Close
                    </button>
                  </motion.div>
                </>
              )}
            </div>
          </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
