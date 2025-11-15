"use client";

import { motion } from "framer-motion";

const problems = [
  {
    problem: "Switching between 4+ apps wastes hours every day",
    solution: "One interface controls Gmail, Outlook, Calendar, and Slack",
  },
  {
    problem: "Typing the same info in emails, meetings, and messages",
    solution: "FlowMate understands context and auto-fills details",
  },
  {
    problem: "Forgetting to follow up or update your team",
    solution: "AI handles routine communication on autopilot",
  },
];

export default function ProblemSolution() {
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-text-primary">
            Stop juggling apps.
            <span className="block mt-2 bg-gradient-to-r from-white via-gold/70 to-gold bg-clip-text text-transparent">
              Start working faster.
            </span>
          </h2>
          <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto">
            FlowMate eliminates the friction between thinking and doing.
          </p>
        </motion.div>

        {/* Problem → Solution Cards */}
        <div className="space-y-8">
          {problems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                {/* Problem */}
                <div className="relative rounded-2xl border border-red-500/20 bg-red-500/5 p-8 backdrop-blur-sm">
                  <div className="absolute top-4 right-4 text-red-500/40 text-xs font-semibold uppercase tracking-wider">
                    Problem
                  </div>
                  <div className="flex items-start gap-4 mt-6">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-red-500/70"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </div>
                    <p className="text-text-secondary leading-relaxed flex-1">
                      {item.problem}
                    </p>
                  </div>
                </div>

                {/* Solution */}
                <div className="relative rounded-2xl border border-gold-border bg-gold-glow p-8 backdrop-blur-sm group-hover:border-gold-hover transition-all duration-300">
                  <div className="absolute top-4 right-4 text-gold/60 text-xs font-semibold uppercase tracking-wider">
                    Solution
                  </div>
                  <div className="flex items-start gap-4 mt-6">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-gold"
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
                    </div>
                    <p className="text-text-primary leading-relaxed flex-1 font-medium">
                      {item.solution}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
