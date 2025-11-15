import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Privacy Policy – FlowMate",
  description: "FlowMate privacy policy and data handling practices.",
};

export default function PrivacyPage() {
  return (
    <main>
      <div className="container mx-auto px-4 py-20 max-w-3xl">
        <Link
          href="/"
          className="text-accent-blue hover:text-accent-lavender transition mb-8 inline-block"
        >
          ← Back to home
        </Link>
        <h1 className="text-4xl font-bold mb-6 text-text-primary">Privacy Policy</h1>
        <div className="prose prose-neutral max-w-none">
          <p className="text-text-muted mb-4">
            Last updated: {new Date().toLocaleDateString()}
          </p>
          <p className="mb-4 text-text-secondary">
            This privacy policy will be updated before FlowMate launches.
          </p>
          <p className="mb-4 text-text-secondary">
            For questions, contact us at{" "}
            <a
              href="mailto:privacy@flowmate.com"
              className="text-accent-blue hover:underline"
            >
              privacy@flowmate.com
            </a>
            .
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
