import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Terms of Service – FlowMate",
  description: "FlowMate terms of service and usage guidelines.",
};

export default function TermsPage() {
  return (
    <main>
      <div className="container mx-auto px-4 py-20 max-w-3xl">
        <Link
          href="/"
          className="text-accent-blue hover:text-accent-lavender transition mb-8 inline-block"
        >
          ← Back to home
        </Link>
        <h1 className="text-4xl font-bold mb-6 text-text-primary">Terms of Service</h1>
        <div className="prose prose-neutral max-w-none">
          <p className="text-text-muted mb-4">
            Last updated: {new Date().toLocaleDateString()}
          </p>
          <p className="mb-4 text-text-secondary">
            These terms of service will be updated before FlowMate launches.
          </p>
          <p className="mb-4 text-text-secondary">
            For questions, contact us at{" "}
            <a
              href="mailto:legal@flowmate.com"
              className="text-accent-blue hover:underline"
            >
              legal@flowmate.com
            </a>
            .
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
