"use client";

import { motion } from "framer-motion";

const steps = [
  {
    step: "01",
    title: "Type your request in natural language",
    description:
      "No syntax, no commands. Just say what you want—via web, Chrome extension, WhatsApp, or Telegram: 'Email the team about tomorrow's standup at 10am and add it to my calendar.' Use our AI assistant on your mobile through Telegram or WhatsApp for seamless on-the-go productivity.",
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
          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
        />
      </svg>
    ),
  },
  {
    step: "02",
    title: "FlowMate understands and confirms",
    description:
      "AI parses your intent, extracts details (recipients, time, subject), and shows you a quick preview before taking action.",
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
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      </svg>
    ),
  },
  {
    step: "03",
    title: "Actions execute across all apps",
    description:
      "FlowMate sends the email via Gmail, creates the calendar event in Google Calendar, and posts a Slack reminder—simultaneously.",
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
          d="M13 10V3L4 14h7v7l9-11h-7z"
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
            How FlowMate works
          </h2>
          <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto">
            Three steps to automate your entire workflow.
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
