import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Open Quran with golden light"
          className="w-full h-full object-cover opacity-40"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
        <div className="absolute inset-0 islamic-pattern" />
      </div>

      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/5 blur-[100px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full bg-emerald/5 blur-[80px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

      <div className="relative section-container text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-medium text-primary">Enrolling Now — Limited Spots</span>
          </motion.div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Master the{" "}
            <span className="text-gradient-gold">Quran</span>
            <br />
            & Arabic Language
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed font-body">
            Live classes with certified teachers from Parakou, Benin.
            Join students worldwide learning Quran recitation, Tajweed, and Arabic — online via Zoom.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="bg-gradient-gold text-primary-foreground font-semibold px-8 py-6 text-base hover:opacity-90 shadow-glow-gold transition-all duration-300 hover:shadow-[0_0_80px_-10px_hsl(43_72%_55%_/_0.4)]"
            >
              Start Learning
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-border text-foreground px-8 py-6 text-base hover:bg-secondary hover:border-primary/30"
            >
              <Play className="mr-2 h-4 w-4 text-primary" />
              Book Free Trial
            </Button>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-16 flex flex-wrap items-center justify-center gap-8 text-muted-foreground"
          >
            {[
              { value: "500+", label: "Students" },
              { value: "15+", label: "Teachers" },
              { value: "20+", label: "Countries" },
              { value: "4.9★", label: "Rating" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                <div className="text-xs">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
