"use client";

import { motion } from "framer-motion";

const roadmapItems = [
  {
    phase: "Now",
    status: "In Progress",
    title: "Private Beta",
    features: [
      "Telegram bot for email drafting",
      "Gmail and Outlook integration",
      "Google and Outlook calendar sync",
      "Email summaries",
      "Meeting scheduling",
    ],
    badge: "Current",
    badgeColor: "gold",
  },
  {
    phase: "Next",
    status: "Planned",
    title: "Next",
    features: [
      "Slack integration",
      "Email template library",
      "Follow-up reminders",
      "Multi-language support",
      "Advanced scheduling (time zone detection, recurring meetings)",
    ],
    badge: "Next",
    badgeColor: "blue",
  },
  {
    phase: "Later",
    status: "Planned",
    title: "Later",
    features: [
      "CRM integrations",
      "Voice commands",
      "Mobile app companion",
      "Team collaboration features",
      "Custom workflows",
    ],
    badge: "Future",
    badgeColor: "lavender",
  },
];

export default function Roadmap() {
  return (
    <section id="roadmap" className="py-24 md:py-32 relative">
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
            What we&apos;re building next
          </h2>
          <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto">
            FlowMate evolves based on real user needs across all platforms.
          </p>
        </motion.div>

        {/* Roadmap Timeline */}
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold-border via-accent-blue/30 to-accent-lavender/30" />

          <div className="space-y-16">
            {roadmapItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <div className="hidden md:block absolute left-1/2 top-8 -translate-x-1/2">
                  <div
                    className={`w-4 h-4 rounded-full border-2 ${
                      item.badgeColor === "gold"
                        ? "border-gold bg-gold/50 shadow-gold-glow"
                        : item.badgeColor === "blue"
                        ? "border-accent-blue bg-accent-blue/50"
                        : "border-accent-lavender bg-accent-lavender/50"
                    }`}
                  />
                </div>

                {/* Content Card */}
                <div className="md:w-1/2 group">
                  <div
                    className={`relative rounded-2xl border p-8 backdrop-blur-sm transition-all duration-300 ${
                      item.badgeColor === "gold"
                        ? "border-gold-border bg-gold-glow hover:border-gold-hover hover:shadow-gold-glow"
                        : "border-white/12 bg-[rgba(17,17,19,0.60)] hover:border-white/25"
                    }`}
                  >
                    {/* Badge */}
                    <div className="flex items-center gap-3 mb-4">
                      <span
                        className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${
                          item.badgeColor === "gold"
                            ? "bg-gold/20 text-gold border border-gold-border"
                            : item.badgeColor === "blue"
                            ? "bg-accent-blue/20 text-accent-blue border border-accent-blue/30"
                            : "bg-accent-lavender/20 text-accent-lavender border border-accent-lavender/30"
                        }`}
                      >
                        {item.badge}
                      </span>
                      <span className="text-text-muted text-sm">
                        {item.phase}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl md:text-3xl font-bold mb-6 text-text-primary">
                      {item.title}
                    </h3>

                    {/* Features List */}
                    <ul className="space-y-3">
                      {item.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 text-text-secondary"
                        >
                          <svg
                            className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                              item.badgeColor === "gold"
                                ? "text-gold"
                                : item.badgeColor === "blue"
                                ? "text-accent-blue"
                                : "text-accent-lavender"
                            }`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>

          {/* Note */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-center text-text-muted text-sm mt-12"
          >
            Roadmap is shaped by early tester feedback. Features are built with cross-platform support in mind — desktop, Telegram, and WhatsApp.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
