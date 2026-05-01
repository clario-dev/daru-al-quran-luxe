import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Languages } from "lucide-react";
import coranN1 from "@/assets/courses/coran-niveau-1.png";
import arabeNouroniya from "@/assets/courses/arabe-nouroniya.png";

const tracks = [
  {
    level: "Coran",
    title: "Cours de Coran — Lecture, Tajwid & Hifz",
    description: "5 niveaux progressifs : de l'initiation au Coran et au tajwid de base, jusqu'à la mémorisation complète et l'Ijazah de Hafs 'an 'Asim.",
    image: coranN1,
    href: "/courses/coran",
    icon: BookOpen,
    tag: "Le plus populaire",
  },
  {
    level: "Langue arabe",
    title: "Cours d'Arabe — De l'initiation à la maîtrise",
    description: "7 niveaux : de la méthode Nouroniya aux Tomes de Médine, en passant par la grammaire (Ajrumiyya) et la rhétorique (Balagha).",
    image: arabeNouroniya,
    href: "/courses/arabe",
    icon: Languages,
    tag: null,
  },
];

const CoursesPreview = () => {
  return (
    <section className="py-24">
      <div className="section-container">
        <AnimatedSection className="text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">Nos programmes</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 mb-4">
            Deux parcours, une <span className="text-gradient-gold">même excellence</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Choisissez votre voie : la science du Coran ou la maîtrise de la langue arabe — ou les deux. Tous nos cours suivent la voie des pieux prédécesseurs.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {tracks.map((t, i) => {
            const Icon = t.icon;
            return (
              <AnimatedSection key={t.title} delay={i * 0.15}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="relative group rounded-2xl bg-gradient-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-glow-gold h-full flex flex-col overflow-hidden"
                >
                  {t.tag && (
                    <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-gradient-gold text-xs font-semibold text-primary-foreground shadow-glow-gold">
                      {t.tag}
                    </div>
                  )}
                  <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-secondary/40 via-background to-secondary/30 border-b border-border">
                    <div className="absolute inset-0 pointer-events-none">
                      <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-primary/20 rounded-tl-2xl" />
                      <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-primary/20 rounded-tr-2xl" />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center p-8">
                      <motion.img
                        src={t.image}
                        alt={t.title}
                        className="max-w-full max-h-full w-auto h-auto object-contain drop-shadow-xl"
                        loading="lazy"
                        width={800}
                        height={800}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                  </div>
                  <div className="p-7 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon className="h-4 w-4 text-primary" />
                      <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                        {t.level}
                      </span>
                    </div>
                    <h3 className="font-display text-2xl font-semibold mb-3 leading-snug">{t.title}</h3>
                    <p className="text-sm text-muted-foreground mb-6 leading-relaxed flex-1">
                      {t.description}
                    </p>
                    <Button asChild className="w-full bg-gradient-gold text-primary-foreground font-semibold hover:opacity-90">
                      <Link to={t.href}>
                        Découvrir le programme
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </motion.div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CoursesPreview;
