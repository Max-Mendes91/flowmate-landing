"use client";

import { motion } from "framer-motion";
import { SiGmail, SiMicrosoftoutlook, SiGooglecalendar, SiSlack, SiWhatsapp, SiTelegram } from "react-icons/si";

const integrations = [
  { name: "Gmail", label: "Gmail", icon: SiGmail, color: "#EA4335" },
  { name: "Outlook", label: "Outlook", icon: SiMicrosoftoutlook, color: "#0078D4" },
  { name: "Google Calendar", label: "Google Calendar", icon: SiGooglecalendar, color: "#4285F4" },
  { name: "Slack", label: "Slack", icon: SiSlack, color: "#4A154B" },
  { name: "WhatsApp", label: "WhatsApp", icon: SiWhatsapp, color: "#25D366" },
  { name: "Telegram", label: "Telegram", icon: SiTelegram, color: "#26A5E4" },
];

const stats = [
  { value: "6", label: "Integrations" },
  { value: "5s", label: "Avg. task time" },
];

export default function CredibilityAnchors() {
  // Duplicate integrations for seamless loop
  const duplicatedIntegrations = [...integrations, ...integrations];

  return (
    <section className="py-16 md:py-24 relative border-t border-white/5">
      <div className="container mx-auto px-4">
        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 gap-8 md:gap-12 max-w-2xl mx-auto mb-16"
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

        {/* Desktop/Laptop: Infinite carousel */}
        <div className="hidden md:block relative overflow-hidden max-w-6xl mx-auto">
          <motion.div
            className="flex gap-12"
            animate={{
              x: [0, -1 * (integrations.length * 160)],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
          >
            {duplicatedIntegrations.map((integration, index) => (
              <div
                key={`${integration.name}-${index}`}
                className="group relative flex-shrink-0"
                style={{ width: "140px" }}
              >
                <div className="absolute inset-0 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ backgroundColor: `${integration.color}20` }}
                />
                <div className="relative flex flex-col items-center justify-center px-6 py-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm group-hover:border-white/30 transition-all duration-300">
                  <integration.icon
                    className="text-3xl mb-2 transition-colors duration-300"
                    style={{ color: integration.color }}
                    aria-label={`${integration.label} logo`}
                  />
                  <span className="text-text-secondary group-hover:text-text-primary text-xs font-medium transition-colors text-center">
                    {integration.label}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Mobile/Tablet: Static grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="md:hidden grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-xl mx-auto"
        >
          {integrations.map((integration, index) => (
            <motion.div
              key={integration.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              className="group relative"
            >
              <div className="absolute inset-0 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ backgroundColor: `${integration.color}20` }}
              />
              <div className="relative flex flex-col items-center justify-center px-4 py-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm group-hover:border-white/30 transition-all duration-300">
                <integration.icon
                  className="text-3xl mb-2 transition-colors duration-300"
                  style={{ color: integration.color }}
                  aria-label={`${integration.label} logo`}
                />
                <span className="text-text-secondary group-hover:text-text-primary text-xs font-medium transition-colors text-center">
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
