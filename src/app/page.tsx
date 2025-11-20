import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import CredibilityAnchors from "@/components/CredibilityAnchors";
import SectionDivider from "@/components/SectionDivider";

// Dynamic imports with loading placeholders to prevent layout shift
const ProblemSolution = dynamic(() => import("@/components/ProblemSolution"), {
  loading: () => <div className="h-96" />,
});
const TwoWaysToUse = dynamic(() => import("@/components/TwoWaysToUse"), {
  loading: () => <div className="h-96" />,
});
const HowItWorks = dynamic(() => import("@/components/HowItWorks"), {
  loading: () => <div className="h-96" />,
});
const TelegramDemo = dynamic(() => import("@/components/TelegramDemo"), {
  loading: () => <div className="h-96" />,
});
const Features = dynamic(() => import("@/components/Features"), {
  loading: () => <div className="h-96" />,
});
const EarlyAccessBenefits = dynamic(() => import("@/components/EarlyAccessBenefits"), {
  loading: () => <div className="h-96" />,
});
const Roadmap = dynamic(() => import("@/components/Roadmap"), {
  loading: () => <div className="h-96" />,
});
const FounderNote = dynamic(() => import("@/components/FounderNote"), {
  loading: () => <div className="h-96" />,
});
const FAQ = dynamic(() => import("@/components/FAQ"), {
  loading: () => <div className="h-96" />,
});
const CTA = dynamic(() => import("@/components/CTA"), {
  loading: () => <div className="h-64" />,
});
const Footer = dynamic(() => import("@/components/Footer"), {
  loading: () => <div className="h-32" />,
});

export default function Home() {
  return (
    <main>
      <Hero />
      <CredibilityAnchors />
      <SectionDivider />
      <ProblemSolution />
      <SectionDivider />
      <TwoWaysToUse />
      <SectionDivider />
      <HowItWorks />
      <SectionDivider />
      <TelegramDemo />
      <SectionDivider />
      <Features />
      <SectionDivider />
      <EarlyAccessBenefits />
      <SectionDivider />
      <Roadmap />
      <SectionDivider />
      <FounderNote />
      <SectionDivider />
      <FAQ />
      <SectionDivider />
      <CTA />
      <Footer />
    </main>
  );
}
