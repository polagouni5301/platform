import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Pipeline } from "@/components/landing/Pipeline";
import { OldVsNew } from "@/components/landing/OldVsNew";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { FeaturesBento } from "@/components/landing/FeaturesBento";
import { Comparison } from "@/components/landing/Comparison";
import { Stats } from "@/components/landing/Stats";
import { Pricing } from "@/components/landing/Pricing";
import { FinalCta } from "@/components/landing/FinalCta";
import { Footer } from "@/components/landing/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Index = () => {
  const revealRef = useScrollReveal();

  return (
    <div
      ref={revealRef}
      className="min-h-screen bg-cream landing-page-sizing"
    >
      <style>{`
        .landing-page-sizing { font-size: 16px; }
        .landing-page-sizing .container { max-width: 1200px; margin-left: auto; margin-right: auto; padding-left: 1.5rem; padding-right: 1.5rem; }
      `}</style>
      <Navbar />
      <main>
        <Hero />
        <div data-reveal="left">
          <Pipeline />
        </div>
        <div data-reveal="right">
          <OldVsNew />
        </div>
        <div data-reveal="zoom">
          <HowItWorks />
        </div>
        <div data-reveal="left">
          <FeaturesBento />
        </div>
        <div data-reveal="right">
          <Comparison />
        </div>
        <div data-reveal="left">
          <Stats />
        </div>
        <div data-reveal="zoom">
          <Pricing />
        </div>
        <div data-reveal="zoom">
          <FinalCta />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
