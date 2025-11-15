"use client";

import { motion } from "framer-motion";

export default function SectionDivider() {
  return (
    <div className="w-full py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ width: "0%", opacity: 0 }}
          whileInView={{ width: "100%", opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative h-[1px]"
        >
          {/* Main gold line with gradient */}
          <div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-gold to-transparent"
            style={{
              boxShadow: "0 0 12px rgba(228, 207, 163, 0.3)",
            }}
          />

          {/* Subtle glow effect */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, delay: 0.3 }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/20 to-transparent blur-sm"
          />
        </motion.div>
      </div>
    </div>
  );
}
