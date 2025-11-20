import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import CredibilityAnchors from "@/components/CredibilityAnchors";
import SectionDivider from "@/components/SectionDivider";

// Dynamic imports with loading placeholders to prevent layout shift
// Lazy load below-the-fold components to reduce initial TBT
const ProblemSolution = dynamic(() => import("@/components/ProblemSolution"));
const TwoWaysToUse = dynamic(() => import("@/components/TwoWaysToUse"));
const HowItWorks = dynamic(() => import("@/components/HowItWorks"));
const TelegramDemo = dynamic(() => import("@/components/TelegramDemo"));
const Features = dynamic(() => import("@/components/Features"));
const EarlyAccessBenefits = dynamic(() => import("@/components/EarlyAccessBenefits"));
const Roadmap = dynamic(() => import("@/components/Roadmap"));
const FounderNote = dynamic(() => import("@/components/FounderNote"));
const FAQ = dynamic(() => import("@/components/FAQ"));
const CTA = dynamic(() => import("@/components/CTA"));
const Footer = dynamic(() => import("@/components/Footer"));

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
