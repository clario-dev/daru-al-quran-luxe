import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import RecitationFeature from "@/components/home/RecitationFeature";
import SatisfactionBadge from "@/components/home/SatisfactionBadge";
import ValuePropositions from "@/components/home/ValuePropositions";
import CoursesPreview from "@/components/home/CoursesPreview";
import HowItWorks from "@/components/home/HowItWorks";
import HeritageSection from "@/components/home/HeritageSection";
import Testimonials from "@/components/home/Testimonials";
import FAQ from "@/components/home/FAQ";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ValuePropositions />
      <RecitationFeature />
      <CoursesPreview />
      <HowItWorks />
      <HeritageSection />
      <Testimonials />
      <SatisfactionBadge />
      <FAQ />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
