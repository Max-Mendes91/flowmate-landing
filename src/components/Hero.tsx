"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <section className="relative py-24 md:py-40 overflow-hidden">
      {/* Gradient Background Blob */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-5xl text-center px-4">
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.45 }}
          className="text-5xl md:text-6xl font-bold mb-6 leading-tight tracking-tight"
        >
          AI that sends emails, schedules meetings, and updates Slack — all
          from one prompt.
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="text-lg md:text-xl text-neutral-500 mb-10 max-w-2xl mx-auto"
        >
          FlowMate understands natural language across Gmail, Outlook, Google
          Calendar, and Slack.
        </motion.p>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.45, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center font-medium px-8 py-4 text-base bg-brand-500 text-white hover:bg-brand-400 rounded-xl shadow-sm transition-colors"
          >
            Join the waitlist
          </motion.button>
          <a
            href="#features"
            className="inline-flex items-center justify-center font-medium px-8 py-4 text-base text-neutral-500 hover:text-brand-900 transition-colors"
          >
            Learn more →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
