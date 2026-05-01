import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen } from "lucide-react";
import { coranLevels, CHARIOW_URL } from "@/data/courseLevels";
import { LevelCard } from "@/components/courses/LevelCard";

const CoursCoran = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-32 pb-12">
        <div className="section-container">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
              <BookOpen className="h-4 w-4 text-primary" />
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">Programme de Coran</span>
            </div>
            <h1 className="font-display text-4xl md:text-6xl font-semibold mt-3 mb-5 leading-tight">
              Cours de <span className="text-gradient-gold">Coran</span> en ligne
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              De l'initiation à l'Ijazah de Hafs 'an 'Asim. Cinq niveaux structurés, en direct sur Zoom, avec des enseignants qualifiés selon la voie des pieux prédécesseurs.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-10">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coranLevels.map((l, i) => (
              <LevelCard key={`coran-${l.level}`} l={l} i={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="section-container">
          <AnimatedSection className="text-center">
            <div className="relative max-w-2xl mx-auto p-8 rounded-2xl border border-border bg-gradient-card">
              <h2 className="font-display text-2xl md:text-3xl font-semibold mb-3">Prêt à commencer votre Hifz ?</h2>
              <p className="text-muted-foreground mb-6">
                Inscrivez-vous dès aujourd'hui et bénéficiez d'un accompagnement personnalisé.
              </p>
              <Button asChild size="lg" className="bg-gradient-gold text-primary-foreground font-semibold hover:opacity-90">
                <a href={CHARIOW_URL} target="_blank" rel="noopener noreferrer">
                  S'inscrire maintenant <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default CoursCoran;
