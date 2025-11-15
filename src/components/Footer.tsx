import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-16 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-text-muted">
            © {new Date().getFullYear()} FlowMate. All rights reserved.
          </p>
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
            <a
              href="mailto:hello@flowmate.com"
              className="text-sm text-text-muted hover:text-text-primary transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
