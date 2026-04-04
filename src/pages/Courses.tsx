import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import studentReadingImg from "@/assets/student-reading.jpg";
import childWritingImg from "@/assets/child-writing.jpg";
import quranDeskImg from "@/assets/quran-desk.jpg";
import zoomClassImg from "@/assets/zoom-class.jpg";

const courseImages = [studentReadingImg, childWritingImg, quranDeskImg, zoomClassImg, studentReadingImg, childWritingImg];

const allCourses = [
  { id: 1, level: "Débutant", audience: "Adultes", title: "Bases de la lecture du Coran", description: "Apprenez les lettres arabes, la prononciation et commencez à lire le Coran.", duration: "12 semaines", price: "49 $/mois", tag: "Le plus populaire" },
  { id: 2, level: "Débutant", audience: "Enfants", title: "Coran pour enfants — Initiation", description: "Cours de Coran ludiques et engageants conçus pour les enfants de 5 à 12 ans.", duration: "10 semaines", price: "39 $/mois", tag: null },
  { id: 3, level: "Intermédiaire", audience: "Adultes", title: "Tajweed & Récitation", description: "Maîtrisez les règles du Tajweed et embellissez votre récitation avec des enseignants certifiés.", duration: "16 semaines", price: "69 $/mois", tag: null },
  { id: 4, level: "Intermédiaire", audience: "Enfants", title: "Programme Tajweed enfants", description: "Formation au Tajweed adaptée à l'âge avec des exercices interactifs.", duration: "14 semaines", price: "49 $/mois", tag: null },
  { id: 5, level: "Avancé", audience: "Adultes", title: "Hifz (Mémorisation)", description: "Mémorisation structurée avec révision quotidienne et suivi personnalisé.", duration: "Continu", price: "89 $/mois", tag: null },
  { id: 6, level: "Débutant", audience: "Adultes", title: "Bases de la langue arabe", description: "Apprenez l'arabe conversationnel et le vocabulaire coranique à partir de zéro.", duration: "12 semaines", price: "59 $/mois", tag: "Nouveau" },
];

const levels = ["Tous", "Débutant", "Intermédiaire", "Avancé"];
const audiences = ["Tous", "Adultes", "Enfants"];

const Courses = () => {
  const [levelFilter, setLevelFilter] = useState("Tous");
  const [audienceFilter, setAudienceFilter] = useState("Tous");

  const filtered = allCourses.filter(
    (c) =>
      (levelFilter === "Tous" || c.level === levelFilter) &&
      (audienceFilter === "Tous" || c.audience === audienceFilter)
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-32 pb-24">
        <div className="section-container">
          <AnimatedSection className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">Nos programmes</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold mt-3 mb-4">
              Découvrez nos <span className="text-gradient-gold">cours</span>
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Des programmes structurés pour chaque niveau et tranche d'âge, enseignés en direct via Zoom.
            </p>
          </AnimatedSection>

          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            {levels.map((level) => (
              <button
                key={level}
                onClick={() => setLevelFilter(level)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  levelFilter === level
                    ? "bg-gradient-gold text-primary-foreground"
                    : "bg-secondary text-muted-foreground hover:text-foreground"
                }`}
              >
                {level}
              </button>
            ))}
            <div className="w-px h-6 bg-border mx-2" />
            {audiences.map((aud) => (
              <button
                key={aud}
                onClick={() => setAudienceFilter(aud)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  audienceFilter === aud
                    ? "bg-gradient-gold text-primary-foreground"
                    : "bg-secondary text-muted-foreground hover:text-foreground"
                }`}
              >
                {aud}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((course, i) => (
              <AnimatedSection key={course.id} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="relative group rounded-xl bg-gradient-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-glow-gold h-full flex flex-col overflow-hidden"
                >
                  {course.tag && (
                    <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-gradient-gold text-xs font-semibold text-primary-foreground">
                      {course.tag}
                    </div>
                  )}
                  <div className="relative h-40 overflow-hidden">
                    <motion.img
                      src={courseImages[course.id - 1]}
                      alt={course.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      width={800}
                      height={600}
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.5 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-semibold uppercase tracking-wider text-primary">{course.level}</span>
                      <span className="text-xs text-muted-foreground">• {course.audience}</span>
                    </div>
                    <h3 className="font-display text-xl font-semibold mb-2">{course.title}</h3>
                    <p className="text-sm text-muted-foreground mb-6 leading-relaxed flex-1">{course.description}</p>
                    <div className="flex items-center justify-between mb-4 text-sm">
                      <span className="text-muted-foreground">{course.duration}</span>
                      <span className="font-semibold text-primary text-lg">{course.price}</span>
                    </div>
                    <Button className="w-full bg-gradient-gold text-primary-foreground font-semibold hover:opacity-90">
                      S'inscrire <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Courses;
