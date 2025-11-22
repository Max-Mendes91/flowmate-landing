import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata = {
  title: "FAQ - Common Questions About AI Automation | FlowMate",
  description: "Get answers to frequently asked questions about FlowMate's AI automation for Telegram, WhatsApp, email, Slack, and calendar. Learn about pricing, setup, integrations, and more.",
  keywords: "FAQ, automation questions, Telegram bot FAQ, WhatsApp automation help, email automation guide, Slack integration help, how to automate, automation pricing, setup guide, common questions, automation support",
  openGraph: {
    title: "FlowMate FAQ - AI Automation Questions Answered",
    description: "Find answers to common questions about automating Telegram, WhatsApp, email, Slack, and calendar with FlowMate's AI platform.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FlowMate FAQ - AI Automation Questions Answered",
    description: "Find answers to common questions about automating Telegram, WhatsApp, email, Slack, and calendar with FlowMate's AI platform.",
  },
};

export default function FAQPage() {
  return (
    <main>
      <FAQ />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
