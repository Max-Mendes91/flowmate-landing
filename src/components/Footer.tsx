"use client";

import { useState } from "react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import ContactModal from "./ContactModal";

export default function Footer() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <>
      <footer className="py-16 border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-col items-center md:items-start gap-3">
              <a
                href="https://github.com/Max-Mendes91/flowmate-landing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-accent-gold transition-colors"
                aria-label="View source on GitHub"
              >
                <FaGithub className="w-6 h-6" />
              </a>
              <p className="text-sm text-text-muted">
                © {new Date().getFullYear()} FlowMate. Currently in private beta.
              </p>
            </div>
            <div className="flex gap-8">
              <Link
                href="/privacy"
                className="text-sm text-text-muted hover:text-text-primary transition-colors"
              >
                Privacy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-text-muted hover:text-text-primary transition-colors"
              >
                Terms
              </Link>
              <button
                onClick={() => setIsContactModalOpen(true)}
                className="text-sm text-text-muted hover:text-text-primary transition-colors"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Contact Modal */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </>
  );
}
