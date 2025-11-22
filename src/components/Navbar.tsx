"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`
        flex items-center gap-6 px-6 py-3
        rounded-full
        backdrop-blur-xl
        border border-white/10
        bg-white/5
        shadow-lg
        hover:bg-white/10
        transition-all duration-300
        ${scrolled ? "opacity-100" : "opacity-95"}
      `}
    >
      {/* Navigation links */}
      <Link
        href="/how-it-works"
        className="text-sm text-white/90 hover:text-gold transition-colors"
      >
        How It Works
      </Link>
      <Link href="/features" className="text-sm text-white/90 hover:text-gold transition-colors">
        Features
      </Link>
      <Link href="/roadmap" className="text-sm text-white/90 hover:text-gold transition-colors">
        Roadmap
      </Link>
      <Link href="/faq" className="text-sm text-white/90 hover:text-gold transition-colors">
        FAQ
      </Link>
      <Link href="/#waitlist" className="text-sm text-white/90 hover:text-gold transition-colors">
        Join Waitlist
      </Link>
    </nav>
  );
}
