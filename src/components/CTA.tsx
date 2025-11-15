"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto max-w-4xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.45 }}
          className="rounded-3xl border border-neutral-200 bg-white p-12 md:p-16 text-center shadow-sm"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-5">
            Be the first to try FlowMate
          </h2>
          <p className="text-lg md:text-xl text-neutral-500 mb-10 max-w-2xl mx-auto">
            Launching soon — join the waitlist to get early access.
          </p>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center font-medium px-10 py-4 text-base bg-brand-500 text-white hover:bg-brand-400 rounded-xl shadow-sm transition-colors"
          >
            Join the waitlist
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
