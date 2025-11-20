"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import WaitlistModal from "./WaitlistModal";

export default function CTA() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  return (
    <>
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
              Be one of the first to use FlowMate
            </h2>
            <p className="text-lg md:text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
              Test FlowMate on desktop, Telegram, and WhatsApp — before public launch.
            </p>
            <motion.button
              type="button"
              onClick={() => setIsWaitlistOpen(true)}
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center font-medium px-10 py-4 text-base bg-white/5 hover:bg-white/10 border border-gold-border hover:border-gold-hover text-white rounded-xl shadow-gold-glow transition-all duration-300 mb-4"
              aria-label="Join the FlowMate waitlist"
            >
              Join Early Access
            </motion.button>
            <p className="text-sm text-text-muted">
              Limited early access spots. No credit card required.
            </p>
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
