"use client";

import { motion } from "framer-motion";

const steps = [
  {
    step: "01",
    title: "Draft and send emails",
    description:
      "Tell FlowMate what you want to say. It drafts a polished email and sends it through Gmail or Outlook.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    step: "02",
    title: "Schedule meetings instantly",
    description:
      "FlowMate finds availability, creates calendar events, and sends invites — without opening your calendar.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    step: "03",
    title: "Summarize your inbox",
    description:
      "Get a quick overview of email activity so you always know what's happening.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
        />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-gold/70 to-gold bg-clip-text text-transparent">
            Three commands. Zero context switching.
          </h2>
          <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto">
            Use FlowMate from your desktop dashboard, Telegram, or WhatsApp — same assistant, same capabilities.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="space-y-12">
          {steps.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group relative"
            >
              <div className="flex flex-col md:flex-row gap-8 items-start">
                {/* Step Number */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gold/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative w-20 h-20 rounded-2xl border-2 border-gold-border bg-gradient-to-br from-gold-glow to-transparent backdrop-blur-sm flex items-center justify-center group-hover:border-gold-hover group-hover:shadow-gold-glow transition-all duration-300">
                      <span className="text-2xl font-bold text-gold">
                        {item.step}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pt-2">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-accent-blue/10 text-accent-blue flex items-center justify-center">
                      {item.icon}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-semibold text-text-primary">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-text-secondary leading-relaxed text-lg">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Connecting Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute left-10 top-24 w-0.5 h-12 bg-gradient-to-b from-gold-border to-transparent" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
