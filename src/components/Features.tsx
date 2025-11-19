"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useState } from "react";

const features = [
  {
    title: "Send emails with one sentence",
    desc: "Draft and send emails through Gmail or Outlook using your tone.",
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
    title: "Schedule meetings instantly",
    desc: "Understand dates, times, and availability across time zones.",
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
    title: "Automate task management",
    desc: "Create, update, and track tasks automatically across your workflow.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        aria-label="Task icon"
        role="img"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
        />
      </svg>
    ),
  },
  {
    title: "Post updates to Slack",
    desc: "Notify channels and trigger workflows without opening Slack.",
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
    desc: "Make appointments, send emails, and manage tasks via WhatsApp.",
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
    desc: "Schedule meetings, check inbox, and automate tasks via Telegram.",
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

// Feature card with 3D tilt effect
function FeatureCard({
  feature,
  index,
}: {
  feature: (typeof features)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ["7.5deg", "-7.5deg"]
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ["-7.5deg", "7.5deg"]
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        type: "spring",
        stiffness: 100,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        clipPath:
          "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
      }}
      className="group relative border-t-2 border-t-[rgba(77,159,255,0.45)] border border-white/12 p-10 bg-[rgba(17,17,19,0.60)] backdrop-blur-sm hover:shadow-blue-glow hover:border-[rgba(77,159,255,0.45)] transition-all duration-300 cursor-pointer h-[220px] flex flex-col justify-center items-center"
    >
      {/* Glowing orb effect on hover */}
      <motion.div
        className="absolute inset-0 opacity-0 pointer-events-none"
        style={{
          clipPath:
            "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
        }}
        animate={{
          opacity: isHovered ? 0.15 : 0,
        }}
        transition={{ duration: 0.3 }}
      >
        <div
          className="w-full h-full"
          style={{
            background:
              "radial-gradient(circle at center, rgba(77, 159, 255, 0.5), transparent 70%)",
          }}
        />
      </motion.div>

      <motion.div
        style={{
          transform: "translateZ(50px)",
          transformStyle: "preserve-3d",
        }}
        className="flex flex-col items-center text-center"
      >
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent-blue/10 text-accent-blue mb-4 group-hover:bg-accent-blue/20 transition-colors duration-300">
          {feature.icon}
        </div>
        <h3 className="text-lg font-semibold mb-2 text-text-primary px-4">
          {feature.title}
        </h3>
        <p className="text-sm text-text-secondary leading-relaxed px-4">
          {feature.desc}
        </p>
      </motion.div>
    </motion.div>
  );
}

export default function Features() {
  return (
    <section id="features" className="py-24 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.45 }}
          className="text-4xl md:text-5xl font-bold text-center mb-20 text-text-primary"
        >
          Core Features
        </motion.h2>

        {/* Circular orbital layout for desktop, stack for mobile */}
        <div className="relative max-w-7xl mx-auto">
          {/* Desktop: Circular Layout */}
          <div className="hidden md:block" style={{ perspective: "1500px" }}>
            <div
              className="relative mx-auto"
              style={{ width: "1100px", height: "1100px" }}
            >
              {/* Center glow - Blue and Gold layers */}
              <motion.div
                className="absolute top-1/2 left-1/2 pointer-events-none"
                style={{
                  zIndex: 0,
                  transform: "translate(-50%, -50%) translate(-20px, -20px)",
                }}
              >
                {/* Gold outer glow */}
                <motion.div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(212, 175, 55, 0.25) 0%, transparent 70%)",
                  }}
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.4, 0.7, 0.4],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                {/* Blue inner glow */}
                <motion.div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full blur-2xl"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(77, 159, 255, 0.4) 0%, transparent 70%)",
                  }}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                />

                {/* Core light */}
                <motion.div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(255, 255, 255, 0.8) 0%, rgba(77, 159, 255, 0.6) 40%, transparent 70%)",
                    boxShadow:
                      "0 0 80px rgba(77, 159, 255, 0.6), 0 0 40px rgba(212, 175, 55, 0.4)",
                  }}
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>

              {/* Orbital cards - rotating container */}
              <motion.div
                className="absolute inset-0"
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 60,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                {features.map((feature, index) => {
                  const angle = (index * 60 - 90) * (Math.PI / 180); // 360/6 = 60 degrees apart, start from top
                  const radius = 360;
                  const x = Math.cos(angle) * radius;
                  const y = Math.sin(angle) * radius;

                  return (
                    <motion.div
                      key={index}
                      className="absolute"
                      style={{
                        left: "50%",
                        top: "50%",
                        width: "280px",
                      }}
                      initial={{
                        x: 0,
                        y: 0,
                        opacity: 0,
                      }}
                      whileInView={{
                        x: x - 140, // 280/2 = 140 to center the card
                        y: y - 110,
                        opacity: 1,
                      }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{
                        duration: 0.8,
                        delay: index * 0.12,
                        type: "spring",
                        stiffness: 80,
                      }}
                    >
                      {/* Counter-rotation to keep cards upright */}
                      <motion.div
                        animate={{
                          rotate: -360,
                        }}
                        transition={{
                          duration: 60,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      >
                        {/* Floating animation */}
                        <motion.div
                          animate={{
                            y: [0, -10, 0],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: index * 0.3,
                            ease: "easeInOut",
                          }}
                        >
                          <FeatureCard feature={feature} index={index} />
                        </motion.div>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </div>

          {/* Mobile: Stack Layout */}
          <div className="md:hidden space-y-6">
            {features.map((feature, index) => (
              <div key={index}>
                <FeatureCard feature={feature} index={index} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
