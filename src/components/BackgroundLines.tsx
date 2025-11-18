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
        height="300%"
        viewBox="0 0 2000 6000"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0"
        preserveAspectRatio="xMidYMid slice"
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

        {/* Top Section Lines (Hero Area) */}

        {/* Line 1 - Top diagonal */}
        <motion.path
          style={{ y: y1, opacity: opacity1 }}
          d="M -200 400 Q 600 250 1400 500 T 2800 400"
          stroke="url(#goldGradient1)"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          filter="url(#glow)"
        />

        {/* Line 2 - Upper horizontal */}
        <motion.path
          style={{ y: y2 }}
          d="M -300 800 Q 700 700 1600 900 T 3000 800"
          stroke="url(#goldGradient2)"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
        />

        {/* Middle Section Lines */}

        {/* Line 3 - Mid diagonal */}
        <motion.path
          style={{ y: y3, opacity: opacity2 }}
          d="M -200 1600 Q 800 1400 1800 1700 T 3200 1600"
          stroke="url(#goldGradient3)"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          filter="url(#glow)"
        />

        {/* Line 4 - Mid horizontal wave */}
        <motion.path
          style={{ y: y4 }}
          d="M -400 2200 Q 600 2100 1600 2300 T 3200 2200"
          stroke="url(#goldGradient1)"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
        />

        {/* Line 5 - Mid-lower curve */}
        <motion.path
          style={{ y: y5 }}
          d="M -200 2800 Q 900 2600 1900 2900 T 3400 2800"
          stroke="url(#goldGradient2)"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
        />

        {/* Lower Section Lines */}

        {/* Line 6 - Lower wave */}
        <motion.path
          style={{ y: y6 }}
          d="M -300 3600 Q 800 3400 1800 3700 T 3400 3600"
          stroke="url(#goldGradient3)"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          filter="url(#glow)"
        />

        {/* Line 7 - Bottom diagonal */}
        <motion.path
          style={{ y: y1 }}
          d="M -200 4400 Q 700 4200 1700 4500 T 3200 4400"
          stroke="url(#goldGradient1)"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
        />

        {/* Line 8 - Deep bottom wave */}
        <motion.path
          style={{ y: y2 }}
          d="M -400 5200 Q 900 5000 2000 5300 T 3600 5200"
          stroke="url(#goldGradient2)"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
        />

        {/* Vertical Sweeping Lines for Continuity */}

        {/* Vertical 1 - Left side */}
        <motion.path
          style={{ y: y4 }}
          d="M 300 200 Q 400 1500 350 3000 T 400 5500"
          stroke="url(#goldGradient3)"
          strokeWidth="1"
          fill="none"
          strokeLinecap="round"
        />

        {/* Vertical 2 - Right side */}
        <motion.path
          style={{ y: y5 }}
          d="M 1700 300 Q 1600 1800 1650 3500 T 1700 5800"
          stroke="url(#goldGradient1)"
          strokeWidth="1"
          fill="none"
          strokeLinecap="round"
        />

        {/* Accent lines - distributed throughout */}
        <motion.path
          style={{ y: y1 }}
          d="M 500 600 Q 1000 1100 1400 900"
          stroke="#E4CFA3"
          strokeWidth="0.8"
          fill="none"
          opacity="0.06"
          strokeLinecap="round"
        />

        <motion.path
          style={{ y: y3 }}
          d="M -150 3200 Q 800 3000 1500 3300"
          stroke="#E4CFA3"
          strokeWidth="0.8"
          fill="none"
          opacity="0.05"
          strokeLinecap="round"
        />

        <motion.path
          style={{ y: y6 }}
          d="M 600 4800 Q 1200 4500 1800 4900"
          stroke="#E4CFA3"
          strokeWidth="0.8"
          fill="none"
          opacity="0.06"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
