import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-neutral-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-neutral-600">
            © {new Date().getFullYear()} FlowMate. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-sm text-neutral-600 hover:text-brand-primary transition"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-neutral-600 hover:text-brand-primary transition"
            >
              Terms
            </Link>
            <a
              href="mailto:hello@flowmate.com"
              className="text-sm text-neutral-600 hover:text-brand-primary transition"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
