"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -20]);

  return (
    <section ref={ref} className="relative pt-48 md:pt-56 pb-32 md:pb-48 overflow-hidden">
      {/* Parallax Gradient Layers */}
      <div className="absolute inset-0 -z-10">
        {/* Layer 1: Blue accent */}
        <motion.div
          style={{ y: y1 }}
          className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-[rgba(77,159,255,0.25)] rounded-full blur-3xl"
        />
        {/* Layer 2: Lavender accent */}
        <motion.div
          style={{ y: y2 }}
          className="absolute top-40 right-1/4 w-[600px] h-[600px] bg-[rgba(179,156,255,0.20)] rounded-full blur-3xl"
        />
        {/* Layer 3: Gold haze */}
        <motion.div
          style={{ y: y3 }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[rgba(228,207,163,0.10)] rounded-full blur-2xl"
        />
      </div>

      <div className="container mx-auto max-w-5xl text-center px-4 relative z-10">
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.45 }}
          className="text-5xl md:text-6xl font-bold mb-6 leading-tight tracking-tight bg-gradient-to-r from-white via-gold/60 to-gold bg-clip-text text-transparent"
        >
          AI that sends emails, schedules meetings, and updates Slack — all
          from one prompt.
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="text-lg md:text-xl text-text-secondary mb-12 max-w-2xl mx-auto"
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
            Learn more →
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
