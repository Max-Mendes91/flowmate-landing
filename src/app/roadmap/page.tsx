import Roadmap from "@/components/Roadmap";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata = {
  title: "Product Roadmap - Future of AI Automation | FlowMate",
  description: "Explore FlowMate's product roadmap and upcoming features for Telegram, WhatsApp, email, Slack, and calendar automation. See what's coming next in AI-powered workflow automation.",
  keywords: "product roadmap, upcoming features, future automation, Telegram updates, WhatsApp integration, email features, Slack automation roadmap, AI development, workflow improvements, automation updates",
  openGraph: {
    title: "FlowMate Product Roadmap - Future of AI Automation",
    description: "See what's coming next for FlowMate's AI automation platform. Upcoming features for Telegram, WhatsApp, email, Slack, and calendar.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FlowMate Product Roadmap - Future of AI Automation",
    description: "See what's coming next for FlowMate's AI automation platform. Upcoming features for Telegram, WhatsApp, email, Slack, and calendar.",
  },
};

export default function RoadmapPage() {
  return (
    <main>
      <Roadmap />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
