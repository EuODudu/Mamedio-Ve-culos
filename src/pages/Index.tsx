import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustBlock from "@/components/TrustBlock";
import HowItWorksSection from "@/components/HowItWorksSection";
import VehicleCarousel from "@/components/VehicleCarousel";
import StatsSection from "@/components/StatsSection";
import FeaturesSection from "@/components/FeaturesSection";
import ValueProposition from "@/components/ValueProposition";
import SocialProof from "@/components/SocialProof";
import EmotionalReinforcement from "@/components/EmotionalReinforcement";
import FinalCTA from "@/components/FinalCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <TrustBlock />
        <StatsSection />
        <HowItWorksSection />
        <VehicleCarousel />
        <FeaturesSection />
        <ValueProposition />
        <SocialProof />
        <EmotionalReinforcement />
        <FinalCTA />
      </main>
    </div>
  );
};

export default Index;
