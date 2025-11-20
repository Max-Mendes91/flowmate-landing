"use client";

import { motion } from "framer-motion";

const examples = [
  {
    title: "Draft an Email",
    userMessage: "Draft an email to john@company.com proposing a call next week to discuss the branding project.",
    flowmateResponse: `Here's your draft:

Subject: Let's discuss the branding project
Body: Hi John, I'd love to schedule a call next week to go over the branding project details. Let me know what works for you. Best, [Your Name]

Send now or edit?`,
  },
  {
    title: "Schedule a Meeting",
    userMessage: "Schedule a 30-minute meeting with sarah@startup.io tomorrow afternoon.",
    flowmateResponse: "I found an open slot: Tomorrow at 2:00 PM. Creating the event in your Google Calendar now. Invite sent to sarah@startup.io.",
  },
  {
    title: "Summarize Emails",
    userMessage: "Summarize my emails from the last 2 hours.",
    flowmateResponse: `You have 3 new emails:
1. Invoice from Stripe — Payment received
2. Meeting request from Alex — Asking for Thursday 10 AM
3. Project update from Maria — Design files attached

Need me to do anything?`,
  },
];

export default function TelegramDemo() {
  return (
    <section className="py-24 md:py-32 relative">
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
            See FlowMate in action
          </h2>
          <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto">
            Every task shown here works the same on desktop, Telegram, and WhatsApp.
          </p>
        </motion.div>

        {/* Demo Examples */}
        <div className="space-y-12">
          {examples.map((example, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group"
            >
              {/* Example Title */}
              <h3 className="text-xl md:text-2xl font-semibold text-text-primary mb-6 flex items-center gap-3">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-gold/10 text-gold text-sm font-bold">
                  {index + 1}
                </span>
                {example.title}
              </h3>

              <div className="space-y-4">
                {/* User Message */}
                <div className="flex justify-end">
                  <motion.div
                    className="max-w-2xl"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <p className="text-xs text-text-muted mb-2 text-right">You</p>
                    <motion.div
                      className="rounded-2xl rounded-tr-sm border border-accent-blue/30 bg-accent-blue/10 backdrop-blur-sm p-6 cursor-pointer overflow-hidden relative"
                      whileHover={{
                        borderColor: "rgba(77, 159, 255, 0.6)",
                        boxShadow: "0 0 20px rgba(77, 159, 255, 0.3)"
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Gradient overlay on hover */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-accent-blue/20 via-transparent to-accent-lavender/20 opacity-0"
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                      <p className="text-text-primary leading-relaxed relative z-10">
                        {example.userMessage}
                      </p>
                    </motion.div>
                  </motion.div>
                </div>

                {/* FlowMate Response */}
                <div className="flex justify-start">
                  <motion.div
                    className="max-w-2xl"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <p className="text-xs text-text-muted mb-2">FlowMate</p>
                    <motion.div
                      className="rounded-2xl rounded-tl-sm border border-gold-border bg-gold-glow backdrop-blur-sm p-6 cursor-pointer overflow-hidden relative"
                      whileHover={{
                        borderColor: "rgba(228, 207, 163, 0.8)",
                        boxShadow: "0 0 20px rgba(228, 207, 163, 0.4), 0 0 40px rgba(228, 207, 163, 0.2)"
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Gradient overlay on hover */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-gold/30 via-transparent to-accent-blue/20 opacity-0"
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                      <p className="text-text-primary leading-relaxed whitespace-pre-line relative z-10">
                        {example.flowmateResponse}
                      </p>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
