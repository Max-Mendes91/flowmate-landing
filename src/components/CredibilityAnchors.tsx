"use client";

import { motion } from "framer-motion";

const integrations = [
  { name: "Gmail", label: "Gmail" },
  { name: "Outlook", label: "Outlook" },
  { name: "Google Calendar", label: "Google Calendar" },
  { name: "Slack", label: "Slack" },
];

const stats = [
  { value: "10K+", label: "Waitlist signups" },
  { value: "4", label: "Integrations" },
  { value: "5s", label: "Avg. task time" },
];

export default function CredibilityAnchors() {
  return (
    <section className="py-16 md:py-24 relative border-t border-white/5">
      <div className="container mx-auto px-4">
        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-3 gap-8 md:gap-12 max-w-3xl mx-auto mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white via-gold/70 to-gold bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-text-muted">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Integrations */}
        <div className="text-center mb-8">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-sm text-text-muted uppercase tracking-wider"
          >
            Works seamlessly with
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center items-center gap-8 md:gap-12 max-w-4xl mx-auto"
        >
          {integrations.map((integration, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.1, y: -4 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gold/10 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative flex items-center justify-center px-6 py-3 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm group-hover:border-gold-border transition-all duration-300">
                <span className="text-text-secondary group-hover:text-text-primary text-sm md:text-base font-medium transition-colors">
                  {integration.label}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
