"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import WaitlistModal from "./WaitlistModal";

export default function FounderNote() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  return (
    <>
      <section className="py-24 md:py-32 relative">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl border border-gold-border bg-gold-glow backdrop-blur-sm p-12 md:p-16"
          >
            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-text-primary">
              Why I built FlowMate
            </h2>

            {/* Body */}
            <div className="space-y-6 text-lg leading-relaxed text-text-secondary mb-10">
              <p>
                I&apos;m a freelance consultant. My work happens in messaging apps — Telegram, WhatsApp, Slack. But my admin work happens everywhere else. Gmail. Google Calendar. Notion. Asana.
              </p>
              <p>
                Every time a client asks me something, I have to leave the conversation, open another app, do the task, then come back. It breaks my focus. It wastes time.
              </p>
              <p>
                I built FlowMate to solve this. One assistant. One interface. All your tools in one place.
              </p>
              <p className="text-text-primary font-medium">
                If you&apos;re a freelancer or consultant tired of app-switching, I&apos;d love for you to try FlowMate early and help shape it.
              </p>
              <p className="text-text-muted italic">
                — Max Mendes, Founder
              </p>
            </div>

            {/* CTA */}
            <motion.button
              type="button"
              onClick={() => setIsWaitlistOpen(true)}
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center font-medium px-10 py-4 text-base bg-white/5 hover:bg-white/10 border border-gold-border hover:border-gold-hover text-white rounded-xl shadow-gold-glow transition-all duration-300"
              aria-label="Join the private beta"
            >
              Join the private beta
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
