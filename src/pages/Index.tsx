import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PainPointSection from "@/components/PainPointSection";
import SolutionSection from "@/components/SolutionSection";
import ReportSection from "@/components/ReportSection";
import BenefitSection from "@/components/BenefitSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <PainPointSection />
      <SolutionSection />
      <ReportSection />
      <BenefitSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
