"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section id="waitlist" className="py-24 md:py-32 relative">
      <div className="container mx-auto max-w-4xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.45 }}
          className="rounded-3xl border border-white/12 bg-[rgba(17,17,19,0.60)] backdrop-blur-sm p-12 md:p-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-5 text-text-primary">
            Be the first to try FlowMate
          </h2>
          <p className="text-lg md:text-xl text-text-secondary mb-10 max-w-2xl mx-auto">
            Launching soon — join the waitlist to get early access.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center font-medium px-10 py-4 text-base bg-white/5 hover:bg-white/10 border border-gold-border hover:border-gold-hover text-white rounded-xl shadow-gold-glow transition-all duration-300"
            >
              Join the waitlist
            </motion.button>
            <motion.a
              href="#features"
              whileHover={{ scale: 1.02 }}
              className="inline-flex items-center justify-center font-medium px-10 py-4 text-base text-text-secondary border border-white/20 hover:border-white/40 rounded-xl transition-all duration-300"
            >
              Learn more
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
