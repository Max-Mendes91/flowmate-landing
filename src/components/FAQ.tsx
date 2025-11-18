"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import ContactModal from "./ContactModal";

const faqs = [
  {
    question: "How does FlowMate access my Gmail, Outlook, and Slack?",
    answer:
      "FlowMate uses official OAuth integrations with Gmail, Outlook, Google Calendar, and Slack. You grant permissions once, and we only access what's needed to perform actions you explicitly request. Your credentials are never stored—everything is encrypted in transit.",
  },
  {
    question: "Is my data secure and private?",
    answer:
      "Absolutely. FlowMate is SOC 2 compliant and uses end-to-end encryption. We never train AI models on your data, sell information to third parties, or access your messages without explicit action requests. You can revoke access anytime.",
  },
  {
    question: "What happens if FlowMate misunderstands my request?",
    answer:
      "FlowMate always shows a confirmation preview before executing any action. You'll see exactly what will be sent, scheduled, or posted—and you can edit or cancel before confirming. We're constantly improving accuracy based on user feedback.",
  },
  {
    question: "Does FlowMate work on mobile?",
    answer:
      "Mobile apps for iOS and Android are planned for Q2 2026. For now, FlowMate works via our Chrome extension and web app, which are mobile-responsive and work on tablet browsers.",
  },
  {
    question: "How much does FlowMate cost?",
    answer:
      "We're currently in private beta. Early waitlist members will get free access during beta and special pricing when we launch. Pricing tiers will be announced closer to public release.",
  },
  {
    question: "Can FlowMate integrate with other tools?",
    answer:
      "Currently, FlowMate supports Gmail, Outlook, Google Calendar, and Slack. We're building integrations for Microsoft Teams, Zoom, Notion, and more based on user demand. Vote for your favorite integrations in our beta community.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <section id="faq" className="py-24 md:py-32 relative">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-gold/70 to-gold bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
            <p className="text-lg md:text-xl text-text-secondary">
              Everything you need to know about FlowMate.
            </p>
          </motion.div>

          {/* FAQ Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                  className="w-full text-left rounded-2xl border border-white/12 bg-[rgba(17,17,19,0.60)] backdrop-blur-sm p-6 md:p-8 hover:border-gold-border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold/30"
                >
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-lg md:text-xl font-semibold text-text-primary pr-8">
                      {faq.question}
                    </h3>
                    <div className="flex-shrink-0">
                      <motion.div
                        animate={{ rotate: openIndex === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="w-6 h-6 rounded-lg bg-gold/10 flex items-center justify-center"
                      >
                        <svg
                          className="w-4 h-4 text-gold"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </motion.div>
                    </div>
                  </div>

                  <motion.div
                    id={`faq-answer-${index}`}
                    initial={false}
                    animate={{
                      height: openIndex === index ? "auto" : 0,
                      opacity: openIndex === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                    role="region"
                    aria-hidden={openIndex !== index}
                  >
                    <p className="text-text-secondary leading-relaxed pt-4 pr-8">
                      {faq.answer}
                    </p>
                  </motion.div>
                </button>
              </motion.div>
            ))}
          </div>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center mt-16"
          >
            <p className="text-text-secondary mb-4">Still have questions?</p>
            <button
              onClick={() => setIsContactModalOpen(true)}
              className="inline-flex items-center gap-2 text-gold hover:text-gold-hover transition-colors font-medium"
            >
              Contact us
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </motion.div>
        </div>
      </section>

      {/* Contact Modal */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </>
  );
}
