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
          className="text-brand-500 hover:text-brand-400 transition mb-8 inline-block"
        >
          ← Back to home
        </Link>
        <h1 className="text-4xl font-bold mb-6">Terms of Service</h1>
        <div className="prose prose-neutral max-w-none">
          <p className="text-neutral-500 mb-4">
            Last updated: {new Date().toLocaleDateString()}
          </p>
          <p className="mb-4">
            These terms of service will be updated before FlowMate launches.
          </p>
          <p className="mb-4">
            For questions, contact us at{" "}
            <a
              href="mailto:legal@flowmate.com"
              className="text-brand-500 hover:underline"
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
