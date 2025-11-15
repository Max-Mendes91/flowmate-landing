"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex items-center justify-between">
      {/* Left: Logo */}
      <Link href="/" className="flex items-center">
        <Image
          src="/logo-symbol.png"
          width={42}
          height={42}
          alt="FlowMate Logo"
          className="rounded-full shadow"
          priority
        />
      </Link>

      {/* Center: Floating Glass Navbar */}
      <div className="absolute left-1/2 -translate-x-1/2">
        <Navbar />
      </div>

      {/* Right: CTA Pill */}
      <Link
        href="/join"
        className="
          px-5 py-2.5
          rounded-full
          font-medium
          text-gold
          border border-gold/40
          bg-white/5
          backdrop-blur-xl
          shadow-lg
          hover:bg-white/10
          hover:border-gold/60
          transition-all
        "
      >
        Join Waitlist
      </Link>
    </header>
  );
}
