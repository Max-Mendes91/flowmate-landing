"use client";

import { motion } from "framer-motion";

const pricingTiers = [
  {
    name: "Free",
    price: "€0",
    period: "/month",
    description: "Perfect for getting started",
    features: [
      "Basic AI assistant",
      "50 commands/day",
      "Email support",
      "Core integrations",
      "Community access",
    ],
    highlighted: false,
    cta: "Get Started",
  },
  {
    name: "Pro",
    price: "€9.99",
    period: "/month",
    description: "Most popular for professionals",
    features: [
      "Everything in Free",
      "Advanced AI features",
      "Priority support",
      "500 commands/day",
      "Custom workflows",
      "WhatsApp & Telegram integration",
    ],
    highlighted: true,
    badge: "Most Popular",
    cta: "Start Pro Trial",
  },
  {
    name: "MAX",
    price: "€19.99",
    period: "/month",
    description: "For power users and teams",
    features: [
      "Everything in Pro",
      "Unlimited commands",
      "Enterprise features",
      "Dedicated support",
      "API access",
      "Advanced analytics",
    ],
    highlighted: false,
    cta: "Start MAX Trial",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.45 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-text-primary">
            Simple, Transparent Pricing
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={cardVariants}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className={`
                group relative rounded-2xl p-8 backdrop-blur-sm
                transition-all duration-300
                ${
                  tier.highlighted
                    ? "border-2 border-gold-border bg-gold-glow shadow-gold-glow scale-105 md:scale-110"
                    : "border border-white/12 bg-[rgba(17,17,19,0.60)] hover:shadow-blue-glow hover:border-[rgba(77,159,255,0.45)]"
                }
              `}
            >
              {/* Most Popular Badge */}
              {tier.badge && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-gold to-gold-soft text-dark-primary text-sm font-semibold">
                    {tier.badge}
                  </span>
                </div>
              )}

              {/* Tier Name */}
              <h3
                className={`text-2xl font-bold mb-2 ${
                  tier.highlighted ? "text-gold" : "text-text-primary"
                }`}
              >
                {tier.name}
              </h3>

              {/* Description */}
              <p className="text-text-secondary text-sm mb-6">
                {tier.description}
              </p>

              {/* Price */}
              <div className="mb-8">
                <span
                  className={`text-5xl font-bold ${
                    tier.highlighted ? "text-gold" : "text-text-primary"
                  }`}
                >
                  {tier.price}
                </span>
                <span className="text-text-muted text-lg">{tier.period}</span>
              </div>

              {/* CTA Button */}
              <button
                className={`
                  w-full py-3 px-6 rounded-xl font-semibold
                  transition-all duration-300
                  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-dark-primary
                  ${
                    tier.highlighted
                      ? "bg-gold text-dark-primary hover:bg-gold-hover focus:ring-gold"
                      : "bg-white/5 text-text-primary border border-gold-border hover:bg-white/10 hover:border-gold focus:ring-gold-soft"
                  }
                `}
                aria-label={`${tier.cta} for ${tier.name} plan`}
              >
                {tier.cta}
              </button>

              {/* Features List */}
              <ul className="mt-8 space-y-4" role="list">
                {tier.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-start gap-3 text-text-secondary"
                  >
                    <svg
                      className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                        tier.highlighted ? "text-gold" : "text-accent-blue"
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-sm leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.45, delay: 0.4 }}
          className="text-center text-text-muted text-sm mt-12"
        >
          All plans include a 14-day free trial. No credit card required.
        </motion.p>
      </div>
    </section>
  );
}
