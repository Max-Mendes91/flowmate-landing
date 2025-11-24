"use client";

import { motion } from "framer-motion";
import {
  SiGmail,
  SiGooglecalendar,
  SiSlack,
  SiWhatsapp,
  SiTelegram,
} from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";

const integrations = [
  { name: "Gmail", label: "Gmail", icon: SiGmail, color: "#EA4335" },
  { name: "Outlook", label: "Outlook", icon: HiOutlineMail, color: "#0078D4" },
  {
    name: "Google Calendar",
    label: "Google Calendar",
    icon: SiGooglecalendar,
    color: "#4285F4",
  },
  { name: "Telegram", label: "Telegram", icon: SiTelegram, color: "#26A5E4" },
  { name: "WhatsApp", label: "WhatsApp", icon: SiWhatsapp, color: "#25D366" },
  { name: "Slack", label: "Slack", icon: SiSlack, color: "#4A154B" },
];

export default function CredibilityAnchors() {
  // Quadruple integrations for seamless loop without gaps
  const duplicatedIntegrations = [
    ...integrations,
    ...integrations,
    ...integrations,
    ...integrations,
  ];

  return (
    <section className="py-16 md:py-24 relative border-t border-white/5">
      <div className="container mx-auto px-4">
        {/* Integrations */}
        <div className="text-center mb-8">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-sm text-text-muted uppercase tracking-wider"
          >
            Connects to Gmail, Outlook, Google Calendar, and Slack · Works on
            desktop and Telegram
          </motion.p>
        </div>

        {/* Desktop/Laptop: Infinite carousel - CSS animation for better performance */}
        <div className="hidden md:block relative overflow-hidden max-w-6xl mx-auto">
          <div className="flex gap-12 animate-scroll-carousel">
            {duplicatedIntegrations.map((integration, index) => (
              <div
                key={`${integration.name}-${index}`}
                className="group relative flex-shrink-0"
                style={{ width: "140px" }}
              >
                <div
                  className="absolute inset-0 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ backgroundColor: `${integration.color}20` }}
                />
                <div className="relative flex flex-col items-center justify-center px-6 py-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm group-hover:border-white/30 transition-all duration-300 h-[100px]">
                  <integration.icon
                    className="text-3xl mb-2 transition-colors duration-300"
                    style={{ color: integration.color }}
                    aria-label={`${integration.label} logo`}
                  />
                  <span className="text-text-secondary group-hover:text-text-primary text-xs font-medium transition-colors text-center leading-tight">
                    {integration.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
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
              <div
                className="absolute inset-0 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ backgroundColor: `${integration.color}20` }}
              />
              <div className="relative flex flex-col items-center justify-center px-4 py-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm group-hover:border-white/30 transition-all duration-300 h-[100px]">
                <integration.icon
                  className="text-3xl mb-2 transition-colors duration-300"
                  style={{ color: integration.color }}
                  aria-label={`${integration.label} logo`}
                />
                <span className="text-text-secondary group-hover:text-text-primary text-xs font-medium transition-colors text-center leading-tight">
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
