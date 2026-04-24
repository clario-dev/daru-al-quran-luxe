import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import { Star, Quote, Sparkles } from "lucide-react";

const testimonials = [
  {
    name: "Aisha M.",
    location: "Paris, France",
    text: "Mes enfants ont transformé leur récitation en seulement 3 mois. Les enseignants sont patients, compétents et se soucient vraiment de la progression de chaque élève.",
    rating: 5,
    initials: "AM",
  },
  {
    name: "Ibrahim K.",
    location: "Lagos, Nigéria",
    text: "J'ai essayé beaucoup de programmes de Coran en ligne. Daaru Al Qurane est le seul qui donne l'impression d'une vraie salle de classe. La structure et le suivi sont incomparables.",
    rating: 5,
    initials: "IK",
  },
  {
    name: "Fatima B.",
    location: "Bruxelles, Belgique",
    text: "En tant que convertie, j'étais nerveuse à l'idée d'apprendre l'arabe. Le programme débutant était exactement ce qu'il me fallait — étape par étape, avec beaucoup d'encouragements.",
    rating: 5,
    initials: "FB",
  },
  {
    name: "Yusuf A.",
    location: "Montréal, Canada",
    text: "La méthodologie des pieux prédécesseurs est respectée à la lettre. Une école sérieuse, authentique et profondément spirituelle. Qu'Allah les récompense.",
    rating: 5,
    initials: "YA",
  },
  {
    name: "Khadija R.",
    location: "Casablanca, Maroc",
    text: "Les cours pour sœurs sont organisés avec beaucoup de pudeur et de professionnalisme. J'ai progressé en Tajwid plus en 6 mois qu'en plusieurs années auparavant.",
    rating: 5,
    initials: "KR",
  },
  {
    name: "Omar D.",
    location: "Dakar, Sénégal",
    text: "Un enseignement clair, structuré, et des professeurs diplômés. Mes deux fils mémorisent maintenant régulièrement. Une vraie bénédiction pour notre famille.",
    rating: 5,
    initials: "OD",
  },
  {
    name: "Mariam S.",
    location: "Londres, UK",
    text: "Les cours en français m'ont permis de comprendre enfin la grammaire arabe en profondeur. Pédagogie exceptionnelle et atmosphère bienveillante.",
    rating: 5,
    initials: "MS",
  },
  {
    name: "Abdullah H.",
    location: "Berlin, Allemagne",
    text: "Le niveau d'exigence est élevé mais l'accompagnement est constant. C'est exactement ce que je cherchais pour avancer sérieusement dans l'apprentissage.",
    rating: 5,
    initials: "AH",
  },
];

const row1 = testimonials.slice(0, 4);
const row2 = testimonials.slice(4, 8);

const TestimonialCard = ({ t }: { t: typeof testimonials[0] }) => (
  <div className="group relative w-[340px] sm:w-[400px] shrink-0 mx-3">
    {/* Glow halo */}
    <div className="absolute -inset-px rounded-2xl bg-gradient-gold opacity-0 group-hover:opacity-60 blur-xl transition-opacity duration-500" />

    <div className="relative h-full rounded-2xl border border-border bg-gradient-card backdrop-blur-sm p-7 overflow-hidden transition-all duration-500 group-hover:border-primary/40 group-hover:-translate-y-1">
      {/* Decorative gradient corner */}
      <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-gradient-gold opacity-10 blur-2xl group-hover:opacity-30 transition-opacity duration-500" />

      {/* Quote glyph */}
      <Quote className="h-9 w-9 text-primary/40 mb-4 relative z-10" />

      <p className="text-sm text-foreground/85 leading-relaxed mb-6 italic relative z-10 line-clamp-5">
        « {t.text} »
      </p>

      <div className="flex items-center gap-1 mb-4 relative z-10">
        {Array.from({ length: t.rating }).map((_, j) => (
          <Star key={j} className="h-4 w-4 fill-primary text-primary" />
        ))}
      </div>

      <div className="flex items-center gap-3 relative z-10">
        <div className="w-11 h-11 rounded-full bg-gradient-gold flex items-center justify-center text-primary-foreground font-display font-bold text-sm shadow-glow-gold">
          {t.initials}
        </div>
        <div>
          <p className="font-semibold text-sm">{t.name}</p>
          <p className="text-xs text-muted-foreground">{t.location}</p>
        </div>
      </div>
    </div>
  </div>
);

const Marquee = ({
  items,
  direction = "left",
  duration = 40,
}: {
  items: typeof testimonials;
  direction?: "left" | "right";
  duration?: number;
}) => {
  // Duplicate items for seamless loop
  const loop = [...items, ...items];

  return (
    <div className="relative overflow-hidden">
      {/* Edge fades */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 md:w-40 z-10 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 md:w-40 z-10 bg-gradient-to-l from-background to-transparent" />

      <motion.div
        className="flex w-max"
        animate={{
          x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {loop.map((t, i) => (
          <TestimonialCard key={`${t.name}-${i}`} t={t} />
        ))}
      </motion.div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-primary/10 blur-3xl pointer-events-none" />

      <div className="relative">
        <AnimatedSection className="text-center mb-16 section-container">
          <motion.span
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Sparkles className="h-3.5 w-3.5" />
            Témoignages
            <Sparkles className="h-3.5 w-3.5" />
          </motion.span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 mb-4">
            Ce que disent nos <span className="text-gradient-gold">étudiants</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Des centaines d'apprenants à travers le monde nous font confiance pour leur cheminement spirituel.
          </p>
        </AnimatedSection>

        {/* 3D perspective wrapper */}
        <div
          className="space-y-6"
          style={{ perspective: "1200px" }}
        >
          <div style={{ transform: "rotateX(2deg)" }}>
            <Marquee items={row1} direction="left" duration={45} />
          </div>
          <div style={{ transform: "rotateX(-2deg)" }}>
            <Marquee items={row2} direction="right" duration={55} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
