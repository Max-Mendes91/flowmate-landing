"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "Send emails with one sentence",
    desc: "Drafts and sends emails through Gmail or Outlook using your tone and context.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        aria-label="Email icon"
        role="img"
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
    title: "Schedule meetings automatically",
    desc: "Understands dates, times, durations, and availability across time zones.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        aria-label="Calendar icon"
        role="img"
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
    title: "Post updates to Slack",
    desc: "Notify channels, create reminders, and trigger workflows without opening Slack.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        aria-label="Chat icon"
        role="img"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
        />
      </svg>
    ),
  },
  {
    title: "AI assistant on WhatsApp",
    desc: "Your personal AI assistant on mobile. Make appointments, send emails, fetch unread messages, and manage your workflow—all through WhatsApp chat.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        aria-label="WhatsApp icon"
        role="img"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      </svg>
    ),
  },
  {
    title: "AI assistant on Telegram",
    desc: "Control your entire workflow from Telegram. Schedule meetings, send emails, check inbox, and automate tasks using natural conversation with your AI assistant.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        aria-label="Telegram icon"
        role="img"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
        />
      </svg>
    ),
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Features() {
  return (
    <section id="features" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.45 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-text-primary"
        >
          Core Features
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* First 3 cards - full width on desktop */}
          {features.slice(0, 3).map((feature, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={cardVariants}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative rounded-2xl border-t-2 border-t-[rgba(77,159,255,0.45)] border border-white/12 p-8 bg-[rgba(17,17,19,0.60)] backdrop-blur-sm hover:shadow-blue-glow hover:border-[rgba(77,159,255,0.45)] transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent-blue/10 text-accent-blue mb-5">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-text-primary">
                {feature.title}
              </h3>
              <p className="text-text-secondary leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}

          {/* Last 2 cards - centered on desktop */}
          <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-8 md:max-w-3xl md:mx-auto">
            {features.slice(3).map((feature, index) => (
              <motion.div
                key={index + 3}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={cardVariants}
                transition={{ duration: 0.45, delay: (index + 3) * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative rounded-2xl border-t-2 border-t-[rgba(77,159,255,0.45)] border border-white/12 p-8 bg-[rgba(17,17,19,0.60)] backdrop-blur-sm hover:shadow-blue-glow hover:border-[rgba(77,159,255,0.45)] transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent-blue/10 text-accent-blue mb-5">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-text-primary">
                  {feature.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
