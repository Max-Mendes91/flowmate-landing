"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
        scrolled ? "opacity-100" : "opacity-95"
      }`}
    >
      <nav
        className="
          flex items-center gap-8 px-6 py-3
          rounded-full
          backdrop-blur-xl
          border border-white/10
          bg-white/5
          shadow-lg
          hover:bg-white/10
          transition-all
        "
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo-symbol.png"
            width={28}
            height={28}
            alt="FlowMate Logo"
            className="rounded-sm"
          />
        </Link>

        {/* Navigation links */}
        <div className="flex items-center gap-6 text-sm text-white/90">
          <a href="#features" className="hover:text-gold transition-colors">
            Features
          </a>
          <a
            href="#how-it-works"
            className="hover:text-gold transition-colors"
          >
            How It Works
          </a>
          <a href="#roadmap" className="hover:text-gold transition-colors">
            Roadmap
          </a>
          <a href="#faq" className="hover:text-gold transition-colors">
            FAQ
          </a>
        </div>
      </nav>
    </div>
  );
}
