import Features from "@/components/Features";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata = {
  title: "Features - AI Automation for Telegram, WhatsApp, Email, Slack & Calendar | FlowMate",
  description: "Automate Telegram, WhatsApp, email, Slack, and calendar with FlowMate's AI-powered platform. Smart workflow automation, intelligent bot integration, and seamless communication management.",
  keywords: "Telegram automation, WhatsApp automation, email automation, Slack integration, calendar automation, AI assistant, workflow management, productivity tools, automated messaging, smart bot, task automation, communication automation",
  openGraph: {
    title: "AI Automation for Telegram, WhatsApp, Email, Slack & Calendar | FlowMate",
    description: "Automate all your communication channels with AI. Telegram, WhatsApp, email, Slack, and calendar automation in one platform.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Automation for Telegram, WhatsApp, Email, Slack & Calendar",
    description: "Automate all your communication channels with AI. Telegram, WhatsApp, email, Slack, and calendar automation in one platform.",
  },
};

export default function FeaturesPage() {
  return (
    <main>
      <Features />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
