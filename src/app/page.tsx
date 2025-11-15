import Hero from "@/components/Hero";
import Features from "@/components/Features";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import SectionDivider from "@/components/SectionDivider";

export default function Home() {
  return (
    <main>
      <Hero />
      <SectionDivider />
      <Features />
      <SectionDivider />
      <CTA />
      <Footer />
    </main>
  );
}
