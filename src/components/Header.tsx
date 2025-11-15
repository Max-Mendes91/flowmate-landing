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
          width={32}
          height={32}
          alt="FlowMate Logo"
          className="rounded-sm"
        />
      </Link>

      {/* Center: Floating Glass Navbar */}
      <div className="absolute left-1/2 -translate-x-1/2">
        <Navbar />
      </div>

      {/* Right: CTA Button */}
      <Link
        href="/sign-up"
        className="bg-gold text-black font-medium px-5 py-2 rounded-full hover:bg-gold/80 transition-colors shadow"
      >
        Get Started
      </Link>
    </header>
  );
}
