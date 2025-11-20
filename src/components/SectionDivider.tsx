"use client";

import { motion } from "framer-motion";

export default function SectionDivider() {
  return (
    <div className="w-full py-16 md:py-24 overflow-visible">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative h-1 w-full"
          style={{ transformOrigin: "center" }}
        >
          {/* Primary solid gold line - ALWAYS VISIBLE */}
          <div
            className="absolute inset-0 w-full h-full"
            style={{
              background: "linear-gradient(90deg, transparent 0%, #D4AF37 50%, transparent 100%)",
            }}
          />

          {/* Stronger glow layer 1 */}
          <div
            className="absolute inset-0 w-full h-2 -top-0.5"
            style={{
              background: "linear-gradient(90deg, transparent 0%, rgba(228, 207, 163, 0.6) 50%, transparent 100%)",
              filter: "blur(8px)",
            }}
          />

          {/* Stronger glow layer 2 */}
          <div
            className="absolute inset-0 w-full h-4 -top-1.5"
            style={{
              background: "linear-gradient(90deg, transparent 0%, rgba(228, 207, 163, 0.4) 50%, transparent 100%)",
              filter: "blur(16px)",
            }}
          />

          {/* Blue accent glow */}
          <div
            className="absolute inset-0 w-full h-6 -top-2.5"
            style={{
              background: "linear-gradient(90deg, transparent 0%, rgba(77, 159, 255, 0.2) 50%, transparent 100%)",
              filter: "blur(24px)",
            }}
          />
        </motion.div>
      </div>
    </div>
  );
}
