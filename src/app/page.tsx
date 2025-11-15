import Hero from "@/components/Hero";
import CredibilityAnchors from "@/components/CredibilityAnchors";
import ProblemSolution from "@/components/ProblemSolution";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Roadmap from "@/components/Roadmap";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import SectionDivider from "@/components/SectionDivider";

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
