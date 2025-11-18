"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function BackgroundLines() {
  const { scrollY } = useScroll();

  // Enhanced parallax with more dramatic movement and varied speeds
  const y1 = useTransform(scrollY, [0, 2000], [0, -400]);
  const y2 = useTransform(scrollY, [0, 2000], [0, 300]);
  const y3 = useTransform(scrollY, [0, 2000], [0, -500]);
  const y4 = useTransform(scrollY, [0, 2000], [0, 250]);
  const y5 = useTransform(scrollY, [0, 2000], [0, -350]);
  const y6 = useTransform(scrollY, [0, 2000], [0, 450]);

  // Opacity changes on scroll for dynamic effect
  const opacity1 = useTransform(scrollY, [0, 500, 1000], [0.08, 0.12, 0.06]);
  const opacity2 = useTransform(scrollY, [0, 500, 1000], [0.06, 0.10, 0.04]);

  return (
    <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none">
      <svg
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0"
      >
        <defs>
          <linearGradient id="goldGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E4CFA3" stopOpacity="0.04" />
            <stop offset="50%" stopColor="#E4CFA3" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#E4CFA3" stopOpacity="0.03" />
          </linearGradient>
          <linearGradient id="goldGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#E4CFA3" stopOpacity="0.03" />
            <stop offset="50%" stopColor="#E4CFA3" stopOpacity="0.10" />
            <stop offset="100%" stopColor="#E4CFA3" stopOpacity="0.02" />
          </linearGradient>
          <linearGradient id="goldGradient3" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#E4CFA3" stopOpacity="0.02" />
            <stop offset="50%" stopColor="#E4CFA3" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#E4CFA3" stopOpacity="0.04" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Main dramatic lines with enhanced movement */}

        {/* Line 1 - Fast upward movement */}
        <motion.path
          style={{ y: y1, opacity: opacity1 }}
          d="M -200 300 Q 400 150 900 400 T 2000 250"
          stroke="url(#goldGradient1)"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          filter="url(#glow)"
        />

        {/* Line 2 - Downward movement */}
        <motion.path
          style={{ y: y2 }}
          d="M -300 600 Q 500 550 1200 650 T 2400 600"
          stroke="url(#goldGradient2)"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
        />

        {/* Line 3 - Strong upward movement */}
        <motion.path
          style={{ y: y3, opacity: opacity2 }}
          d="M 600 900 Q 1100 750 1900 1000 T 2800 850"
          stroke="url(#goldGradient3)"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          filter="url(#glow)"
        />

        {/* Line 4 - Vertical sweep */}
        <motion.path
          style={{ y: y4 }}
          d="M 1500 -200 Q 1600 300 1450 900 T 1500 1600"
          stroke="url(#goldGradient1)"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
        />

        {/* Line 5 - Diagonal sweep */}
        <motion.path
          style={{ y: y5 }}
          d="M -100 400 Q 600 350 1100 500 T 2200 450"
          stroke="url(#goldGradient2)"
          strokeWidth="1"
          fill="none"
          strokeLinecap="round"
        />

        {/* Line 6 - Bottom wave */}
        <motion.path
          style={{ y: y6 }}
          d="M -200 1100 Q 700 1000 1400 1200 T 2600 1150"
          stroke="url(#goldGradient3)"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
        />

        {/* Accent lines - smaller, faster movement */}
        <motion.path
          style={{ y: y1 }}
          d="M 300 100 Q 700 400 1000 200"
          stroke="#E4CFA3"
          strokeWidth="0.8"
          fill="none"
          opacity="0.06"
          strokeLinecap="round"
        />

        <motion.path
          style={{ y: y3 }}
          d="M -150 1200 Q 800 1100 1500 1300"
          stroke="#E4CFA3"
          strokeWidth="0.8"
          fill="none"
          opacity="0.05"
          strokeLinecap="round"
        />

        {/* Crossing diagonal for depth */}
        <motion.path
          style={{ y: y5 }}
          d="M 2000 200 Q 1400 500 800 350"
          stroke="url(#goldGradient1)"
          strokeWidth="1"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
