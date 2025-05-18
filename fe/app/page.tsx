import HeroSection from "@/components/home/hero-section";
import ServicesSection from "@/components/home/services-section";
import FeaturesSection from "@/components/home/features-section";
import CalculatorSection from "@/components/home/calculator-section";
import TestimonialsSection from "@/components/home/testimonials-section";
import CtaSection from "@/components/home/cta-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <FeaturesSection />
      <CalculatorSection />
      <TestimonialsSection />
      <CtaSection />
    </>
  );
}