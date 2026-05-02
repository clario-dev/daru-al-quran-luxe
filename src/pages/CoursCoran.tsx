import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Heart, Award, Shield, Sparkles, Sun, GraduationCap, Users } from "lucide-react";
import { coranLevels, CHARIOW_URL } from "@/data/courseLevels";
import { LevelCard } from "@/components/courses/LevelCard";

const benefits = [
  {
    icon: Award,
    title: "Le meilleur d'entre vous",
    desc: "« Le meilleur d'entre vous est celui qui apprend le Coran et l'enseigne. » (Boukhari, n°5027). Prendre cette voie, c'est marcher sur les traces des compagnons رضي الله عنهم.",
  },
  {
    icon: Sparkles,
    title: "Une lumière dans la tombe",
    desc: "Le Coran intercédera pour son lecteur le Jour de la Résurrection. Apprendre Sourate Al-Mulk illumine la tombe ; le Hifz tout entier est un degré au Paradis.",
  },
  {
    icon: Heart,
    title: "Une élévation de degrés auprès d'Allah",
    desc: "« Allah élève par ce Livre certaines gens et en abaisse d'autres. » (Mouslim). Plus vous progressez, plus votre rang auprès d'Allah s'élève — ici-bas et dans l'au-delà.",
  },
  {
    icon: Shield,
    title: "Une protection contre l'égarement",
    desc: "À une époque où beaucoup parlent sans science, ancrer son cœur dans le Coran et le tajwid authentique préserve de l'innovation et de l'orgueil intellectuel.",
  },
  {
    icon: Sun,
    title: "Une science qui ne meurt pas",
    desc: "Tout ce que vous transmettrez de ce que vous aurez appris reste comme aumône continue (sadaqah jariyah) qui vous suit après la mort.",
  },
  {
    icon: Users,
    title: "Une communauté solide",
    desc: "Sections séparées frères / sœurs / enfants. Vous avancez avec des étudiants sérieux, encadrés par des enseignants qualifiés selon la voie des pieux prédécesseurs.",
  },
];

const CoursCoran = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 islamic-pattern opacity-50 pointer-events-none" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[140px] pointer-events-none" />

        <div className="section-container relative">
          <AnimatedSection className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-5">
              <BookOpen className="h-4 w-4 text-primary" />
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">Cours de Coran en ligne</span>
            </div>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-semibold mt-3 mb-6 leading-[1.05] tracking-tight">
              Apprendre le <span className="text-gradient-gold">Coran</span> en ligne — sérieusement, et sur la voie des pieux prédécesseurs
            </h1>

            <p
              dir="rtl"
              lang="ar"
              className="text-2xl md:text-3xl leading-loose text-foreground/95 my-7"
              style={{ fontFamily: "'Amiri Quran', serif" }}
            >
              « خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ »
            </p>
            <p className="italic text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              « Le meilleur d'entre vous est celui qui apprend le Coran et l'enseigne. »
              <span className="block text-xs mt-1 not-italic">— Rapporté par Al-Boukhari (n°5027), d'après 'Outhmân ibn 'Affân رضي الله عنه</span>
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed mt-8 max-w-3xl mx-auto">
              À Daaru Al'Qurane, nous vous accompagnons de l'<strong className="text-foreground">initiation</strong> à l'<strong className="text-foreground">Ijazah de Hafs 'an 'Asim</strong>, en direct sur Zoom, avec des enseignants qualifiés. Sections séparées hommes / femmes / enfants.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-9">
              <Button asChild size="lg" className="bg-gradient-gold text-primary-foreground font-semibold px-8 py-6 hover:opacity-90 shadow-glow-gold">
                <a href={CHARIOW_URL} target="_blank" rel="noopener noreferrer">
                  S'inscrire maintenant <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="px-8 py-6">
                <a href="#programme">Voir le programme</a>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Pourquoi apprendre le Coran */}
      <section className="py-16 md:py-24">
        <div className="section-container">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="font-display text-3xl md:text-5xl font-semibold mb-5 leading-tight">
              Pourquoi <span className="text-gradient-gold">apprendre le Coran</span> doit passer en premier
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              Avant de débattre, avant de juger, avant de prêcher : l'étudiant en sciences islamiques doit d'abord apprendre le Coran.
              C'est la première marche, et c'est ce qui distingue celui qui parle avec lumière de celui qui parle sans fondement.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <motion.article
                key={b.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative p-7 rounded-2xl border border-border bg-gradient-card hover:border-primary/40 hover:shadow-glow-gold transition-all"
              >
                <div className="h-12 w-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <b.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">{b.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Citation longue inspirée de l'article */}
      <section className="py-16 bg-gradient-dark relative overflow-hidden">
        <div className="absolute inset-0 islamic-pattern opacity-40 pointer-events-none" />
        <div className="section-container relative">
          <AnimatedSection className="max-w-3xl mx-auto">
            <div className="p-8 md:p-12 rounded-3xl border border-primary/20 bg-card/60 backdrop-blur">
              <p
                dir="rtl"
                lang="ar"
                className="text-2xl md:text-3xl leading-loose text-foreground/95 mb-6 text-right"
                style={{ fontFamily: "'Amiri Quran', serif" }}
              >
                ﴿ فَذَكِّرْ بِالْقُرْآنِ مَن يَخَافُ وَعِيدِ ﴾
              </p>
              <p className="italic text-foreground/90 leading-relaxed mb-2 text-lg">
                « Rappelle donc, par le Coran, celui qui craint Ma menace. »
              </p>
              <p className="text-xs text-muted-foreground mb-6">— Coran, sourate Qâf (50), verset 45</p>

              <div className="border-l-4 border-primary pl-5 text-muted-foreground italic leading-relaxed">
                « Le Hadith nous indique d'apprendre le Coran, et que le meilleur des enseignants est celui qui enseigne le Coran, et que la meilleure chose que l'individu puisse apprendre, c'est le Coran. […] La meilleure chose que l'étudiant en sciences islamiques doit faire en premier, c'est l'apprentissage du Coran par cœur. »
              </div>
              <p className="text-xs text-muted-foreground mt-3">
                — Inspiré de la parole du Cheikh Al-Albani رحمه الله, <em>As-Silsila As-Sahiha</em>, hadith n°1173.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Programme */}
      <section id="programme" className="py-16 md:py-24">
        <div className="section-container">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
              <GraduationCap className="h-4 w-4 text-primary" />
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">Programme structuré</span>
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-semibold mb-4 leading-tight">
              5 niveaux — de l'initiation à <span className="text-gradient-gold">l'Ijazah</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Chaque niveau est progressif, encadré, et inclut des bonus offerts en Aqida et en Fiqh.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coranLevels.map((l, i) => (
              <LevelCard key={`coran-${l.level}`} l={l} i={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-20">
        <div className="section-container">
          <AnimatedSection className="text-center">
            <div className="relative max-w-2xl mx-auto p-10 rounded-3xl border border-primary/30 bg-gradient-card shadow-glow-gold">
              <h2 className="font-display text-3xl md:text-4xl font-semibold mb-3">
                Prenez votre <span className="text-gradient-gold">part de l'héritage</span>
              </h2>
              <p className="text-muted-foreground mb-7 leading-relaxed">
                Une science utile, transmise dans la patience et la rigueur, restera votre aumône continue.
                Inscrivez-vous, ou inscrivez votre enfant, et commencez aujourd'hui.
              </p>
              <Button asChild size="lg" className="bg-gradient-gold text-primary-foreground font-semibold px-8 py-6 hover:opacity-90">
                <a href={CHARIOW_URL} target="_blank" rel="noopener noreferrer">
                  S'inscrire maintenant <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <p className="text-xs text-muted-foreground mt-4">Garantie satisfait ou remboursé sous 7 jours.</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CoursCoran;
