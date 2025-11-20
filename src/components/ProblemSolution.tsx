"use client";

import { motion } from "framer-motion";

const problem = {
  heading: "Context switching destroys your productivity",
  description: "Your clients message you on Telegram or WhatsApp — but your real work lives in Gmail, Outlook, and your calendar.\n\nEvery task requires switching apps, tabs, and tools. It breaks your flow and slows you down.\n\nFlowMate keeps everything in one place — wherever you already chat or work.",
};

export default function ProblemSolution() {
  return (
    <section className="py-24 md:py-32 relative">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-white via-gold/70 to-gold bg-clip-text text-transparent">
            {problem.heading}
          </h2>
          <p className="text-lg md:text-xl text-text-secondary leading-relaxed max-w-2xl mx-auto whitespace-pre-line">
            {problem.description}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
