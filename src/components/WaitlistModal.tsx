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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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

      const data = await response.json();

      // Handle duplicate email as success
      if (response.status === 409) {
        setSuccess("You're already on the waitlist!");
        setError("");
        setIsSubmitting(false);
        return;
      }

      // Handle other errors
      if (!response.ok) {
        setError(data.error || "Something went wrong");
        setIsSubmitting(false);
        return;
      }

      // Success - new signup
      setSuccess("You're on the list!");
      setIsSubmitting(false);
    } catch (err) {
      setError("Network error. Please try again.");
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
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md mx-4"
          >
            <div className="relative rounded-3xl border border-white/10 bg-dark-secondary/95 backdrop-blur-xl shadow-2xl p-8">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
                aria-label="Close modal"
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

              {!success ? (
                <>
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center mx-auto mb-6">
                    <svg
                      className="w-8 h-8 text-gold"
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
                  <h3 className="text-2xl font-bold text-text-primary mb-2 text-center">
                    Join the Waitlist
                  </h3>
                  <p className="text-text-secondary mb-8 text-center">
                    Be the first to experience FlowMate when we launch.
                  </p>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-text-primary placeholder:text-text-muted focus:outline-none focus:border-gold/40 transition-colors disabled:opacity-50"
                      />
                    </div>

                    {/* Error Message */}
                    {error && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-3 rounded-xl bg-red-500/10 border border-red-500/20"
                      >
                        <p className="text-sm text-red-400">{error}</p>
                      </motion.div>
                    )}

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full px-6 py-3 rounded-xl bg-gold text-black font-medium hover:bg-gold/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? "Joining..." : "Join Waitlist"}
                    </button>
                  </form>

                  <p className="text-xs text-text-muted text-center mt-4">
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
                    <div className="w-20 h-20 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-6">
                      <svg
                        className="w-10 h-10 text-gold"
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

                    <h3 className="text-2xl font-bold text-text-primary mb-2">
                      {success}
                    </h3>
                    <p className="text-text-secondary mb-8">
                      {success === "You're already on the waitlist!"
                        ? "We have your email and will notify you when FlowMate launches."
                        : "We'll send you an email when FlowMate launches. Check your inbox for confirmation."}
                    </p>

                    <button
                      onClick={onClose}
                      className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-text-primary font-medium hover:bg-white/10 transition-all"
                    >
                      Close
                    </button>
                  </motion.div>
                </>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
