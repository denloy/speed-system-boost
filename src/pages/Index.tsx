import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ResultsSection from "@/components/ResultsSection";
import PortfolioSection from "@/components/PortfolioSection";
import TechStackSection from "@/components/TechStackSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ProcessSection from "@/components/ProcessSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <TrustBar />
      <AboutSection />
      <ServicesSection />
      <ResultsSection />
      <PortfolioSection />
      <TechStackSection />
      <TestimonialsSection />
      <ProcessSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
