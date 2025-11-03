import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import PricingSection from "@/components/PricingSection";
import ReviewsSection from "@/components/ReviewsSection";
import FAQSection from "@/components/FAQSection";
import FounderSection from "@/components/FounderSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  const [activePlan, setActivePlan] = useState<number | null>(1);

  const openTelegramBot = () => {
    window.open("https://t.me/your_bot_username", "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onBotClick={openTelegramBot} />
      <HeroSection onBotClick={openTelegramBot} />
      <BenefitsSection />
      <HowItWorksSection onBotClick={openTelegramBot} />
      <PricingSection 
        activePlan={activePlan} 
        setActivePlan={setActivePlan} 
        onBotClick={openTelegramBot} 
      />
      <ReviewsSection />
      <FAQSection />
      <FounderSection />
      <CTASection onBotClick={openTelegramBot} />
      <Footer />
    </div>
  );
};

export default Index;
