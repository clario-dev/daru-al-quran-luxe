import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import SatisfactionBadge from "@/components/home/SatisfactionBadge";
import ValuePropositions from "@/components/home/ValuePropositions";
import CoursesPreview from "@/components/home/CoursesPreview";
import HowItWorks from "@/components/home/HowItWorks";
import Testimonials from "@/components/home/Testimonials";
import FAQ from "@/components/home/FAQ";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ValuePropositions />
      <CoursesPreview />
      <HowItWorks />
      <Testimonials />
      <SatisfactionBadge />
      <FAQ />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;

