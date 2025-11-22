import HowItWorks from "@/components/HowItWorks";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata = {
  title: "How It Works - Automate Telegram, WhatsApp, Email & More | FlowMate",
  description: "Learn how FlowMate's AI automates Telegram, WhatsApp, email, Slack, and calendar. Simple setup, powerful automation, seamless integration. Start automating in minutes.",
  keywords: "how automation works, Telegram bot setup, WhatsApp automation guide, email automation tutorial, Slack integration, calendar sync, AI workflow automation, easy setup, automation platform",
  openGraph: {
    title: "How FlowMate AI Automation Works - Telegram, WhatsApp, Email & More",
    description: "Discover how FlowMate automates your communication across Telegram, WhatsApp, email, Slack, and calendar with AI.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "How FlowMate AI Automation Works",
    description: "Discover how FlowMate automates your communication across Telegram, WhatsApp, email, Slack, and calendar with AI.",
  },
};

export default function HowItWorksPage() {
  return (
    <main>
      <HowItWorks />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
