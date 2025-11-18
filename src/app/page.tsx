import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import CredibilityAnchors from "@/components/CredibilityAnchors";
import SectionDivider from "@/components/SectionDivider";

// Dynamic imports for below-fold content (code splitting)
const ProblemSolution = dynamic(() => import("@/components/ProblemSolution"));
const Features = dynamic(() => import("@/components/Features"));
const HowItWorks = dynamic(() => import("@/components/HowItWorks"));
const Roadmap = dynamic(() => import("@/components/Roadmap"));
const CTA = dynamic(() => import("@/components/CTA"));
const FAQ = dynamic(() => import("@/components/FAQ"));
const Footer = dynamic(() => import("@/components/Footer"));

export default function Home() {
  return (
    <main>
      <Hero />
      <CredibilityAnchors />
      <SectionDivider />
      <ProblemSolution />
      <SectionDivider />
      <Features />
      <SectionDivider />
      <HowItWorks />
      <SectionDivider />
      <Roadmap />
      <SectionDivider />
      <CTA />
      <SectionDivider />
      <FAQ />
      <Footer />
    </main>
  );
}
