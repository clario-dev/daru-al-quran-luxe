import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import { Star, Quote } from "lucide-react";
import maleStudentImg from "@/assets/male-student-reading.jpg";

const testimonials = [
  {
    name: "Aisha M.",
    location: "Paris, France",
    text: "Mes enfants ont transformé leur récitation en seulement 3 mois. Les enseignants sont patients, compétents et se soucient vraiment de la progression de chaque élève.",
    rating: 5,
  },
  {
    name: "Ibrahim K.",
    location: "Lagos, Nigéria",
    text: "J'ai essayé beaucoup de programmes de Coran en ligne. Daaru Al Qurane est le seul qui donne l'impression d'une vraie salle de classe. La structure et le suivi sont incomparables.",
    rating: 5,
  },
  {
    name: "Fatima B.",
    location: "Bruxelles, Belgique",
    text: "En tant que convertie, j'étais nerveuse à l'idée d'apprendre l'arabe. Le programme débutant était exactement ce qu'il me fallait — étape par étape, avec beaucoup d'encouragements.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Floating illustration */}
      <motion.div
        className="absolute -left-10 bottom-10 w-64 h-64 opacity-15 hidden lg:block"
        animate={{ y: [-8, 8, -8], rotate: [-2, 2, -2] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <img
          src={maleStudentImg}
          alt=""
          className="w-full h-full object-contain rounded-2xl"
          loading="lazy"
          width={1024}
          height={1024}
        />
      </motion.div>

      <div className="section-container relative">
        <AnimatedSection className="text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">Témoignages</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-3 mb-4">
            Ce que disent nos <span className="text-gradient-gold">étudiants</span>
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <AnimatedSection key={t.name} delay={i * 0.15}>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className="p-6 rounded-xl bg-gradient-card border border-border hover:border-primary/20 transition-all duration-300 h-full flex flex-col"
              >
                <Quote className="h-8 w-8 text-primary/30 mb-4" />
                <p className="text-sm text-foreground/80 leading-relaxed mb-6 flex-1 italic">
                  « {t.text} »
                </p>
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <div>
                  <p className="font-semibold text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.location}</p>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
