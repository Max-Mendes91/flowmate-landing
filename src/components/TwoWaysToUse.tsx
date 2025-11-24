"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import WaitlistModal from "./WaitlistModal";

const ways = [
  {
    title: "FlowMate on Desktop (SaaS)",
    description: `A complete AI workspace where you can manage email, calendars, workflows, summaries, and notifications — all in one clean interface.

Perfect for deep work and daily management.`,
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    title: "FlowMate in Messaging Apps (Telegram)",
    description: "Handle your day without leaving the conversation. Draft emails, book meetings, get inbox summaries, send follow-ups, and automate tasks — all inside Telegram.\n\nFlowMate meets you where your clients already are.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
        />
      </svg>
    ),
  },
];

export default function TwoWaysToUse() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  return (
    <>
      <section className="py-24 md:py-32 relative">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-gold/70 to-gold bg-clip-text text-transparent">
              One AI assistant — two powerful ways to use it
            </h2>
            <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto">
              Use FlowMate on desktop for full control, or run everything from Telegram when you&apos;re on the move.
            </p>
          </motion.div>

          {/* Two Columns */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {ways.map((way, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative rounded-2xl border border-white/12 bg-[rgba(17,17,19,0.60)] backdrop-blur-sm p-8 hover:border-gold-border hover:shadow-gold-glow transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-accent-blue/10 text-accent-blue flex items-center justify-center mb-6">
                  {way.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-semibold text-text-primary mb-4">
                  {way.title}
                </h3>

                {/* Description */}
                <p className="text-text-secondary leading-relaxed whitespace-pre-line">
                  {way.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Mini CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center"
          >
            <motion.button
              type="button"
              onClick={() => setIsWaitlistOpen(true)}
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center font-medium px-10 py-4 text-base bg-white/5 hover:bg-white/10 border border-gold-border hover:border-gold-hover text-white rounded-xl shadow-gold-glow transition-all duration-300"
              aria-label="Join early access to test both the desktop app and messaging assistants"
            >
              Join Early Access to test both the desktop app and messaging assistants
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Waitlist Modal */}
      <WaitlistModal
        isOpen={isWaitlistOpen}
        onClose={() => setIsWaitlistOpen(false)}
      />
    </>
  );
}
