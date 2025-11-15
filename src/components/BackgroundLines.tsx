"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function BackgroundLines() {
  const { scrollY } = useScroll();

  // Different parallax speeds for each line
  const y1 = useTransform(scrollY, [0, 1000], [0, 150]);
  const y2 = useTransform(scrollY, [0, 1000], [0, 100]);
  const y3 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y4 = useTransform(scrollY, [0, 1000], [0, 120]);

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
            <stop offset="0%" stopColor="#E4CFA3" stopOpacity="0.03" />
            <stop offset="50%" stopColor="#E4CFA3" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#E4CFA3" stopOpacity="0.02" />
          </linearGradient>
          <linearGradient id="goldGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#E4CFA3" stopOpacity="0.02" />
            <stop offset="50%" stopColor="#E4CFA3" stopOpacity="0.06" />
            <stop offset="100%" stopColor="#E4CFA3" stopOpacity="0.01" />
          </linearGradient>
        </defs>

        {/* Line 1 - Top left diagonal */}
        <motion.path
          style={{ y: y1 }}
          d="M -100 200 Q 300 100 800 300 T 1600 200"
          stroke="url(#goldGradient1)"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
        />

        {/* Line 2 - Middle horizontal curve */}
        <motion.path
          style={{ y: y2 }}
          d="M -200 500 Q 400 450 1000 550 T 2000 500"
          stroke="url(#goldGradient2)"
          strokeWidth="1"
          fill="none"
          strokeLinecap="round"
        />

        {/* Line 3 - Bottom right diagonal */}
        <motion.path
          style={{ y: y3 }}
          d="M 800 800 Q 1200 700 1800 900 T 2400 800"
          stroke="url(#goldGradient1)"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
        />

        {/* Line 4 - Vertical-ish curve */}
        <motion.path
          style={{ y: y4 }}
          d="M 1400 -100 Q 1450 400 1350 800 T 1400 1400"
          stroke="url(#goldGradient2)"
          strokeWidth="1"
          fill="none"
          strokeLinecap="round"
        />

        {/* Additional subtle lines */}
        <motion.path
          style={{ y: y1 }}
          d="M 200 -50 Q 500 300 700 150"
          stroke="#E4CFA3"
          strokeWidth="0.5"
          fill="none"
          opacity="0.04"
          strokeLinecap="round"
        />

        <motion.path
          style={{ y: y3 }}
          d="M -100 1000 Q 600 950 1200 1100"
          stroke="#E4CFA3"
          strokeWidth="0.5"
          fill="none"
          opacity="0.03"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
