import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import mosqueImg from "@/assets/mosque-parakou.jpg";

const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Animated mosque background */}
      <div className="absolute inset-0">
        <motion.img
          src={mosqueImg}
          alt=""
          className="w-full h-full object-cover opacity-20"
          loading="lazy"
          width={1200}
          height={675}
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-background/70" />
      </div>
      <div className="absolute inset-0 islamic-pattern" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-primary/5 blur-[120px]" />

      <div className="relative section-container text-center">
        <AnimatedSection>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            Commencez votre parcours <span className="text-gradient-gold">aujourd'hui</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-4">
            Rejoignez des centaines d'étudiants à travers le monde qui transforment leur relation avec le Coran et la langue arabe.
          </p>
          <p className="text-base text-foreground mb-10">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/40 bg-primary/10">
              <span className="text-xs uppercase tracking-wider text-primary font-semibold">Inscription</span>
              <span className="font-display text-xl font-bold text-gradient-gold">10 €</span>
              <span className="text-xs text-muted-foreground">— frais d'inscription unique</span>
            </span>
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-gradient-gold text-primary-foreground font-semibold px-10 py-6 text-base hover:opacity-90 shadow-glow-gold"
            >
              <a href="https://daaralquran.mychariow.shop/prd_ijq3ih/checkout" target="_blank" rel="noopener noreferrer">
                S'inscrire — 10 €
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-border px-10 py-6 text-base hover:border-primary/30"
            >
              <Link to="/courses/coran">Voir les cours</Link>
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CTASection;
