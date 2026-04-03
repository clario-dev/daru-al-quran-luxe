import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const courses = [
  {
    level: "Débutant",
    title: "Bases de la lecture du Coran",
    description: "Apprenez les lettres arabes, la prononciation et commencez à lire le Coran avec les bonnes bases.",
    duration: "12 semaines",
    price: "49 $/mois",
    tag: "Le plus populaire",
  },
  {
    level: "Intermédiaire",
    title: "Tajweed & Récitation",
    description: "Maîtrisez les règles du Tajweed et embellissez votre récitation avec des experts.",
    duration: "16 semaines",
    price: "69 $/mois",
    tag: null,
  },
  {
    level: "Avancé",
    title: "Hifz (Mémorisation)",
    description: "Programme de mémorisation structuré avec des sessions de révision quotidiennes et un suivi de progression.",
    duration: "Continu",
    price: "89 $/mois",
    tag: null,
  },
];

const CoursesPreview = () => {
  return (
    <section className="py-24">
      <div className="section-container">
        <AnimatedSection className="text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">Nos programmes</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-3 mb-4">
            Des cours pour chaque <span className="text-gradient-gold">niveau</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Que vous débutiez ou approfondissiez vos connaissances, nous avons le programme qu'il vous faut.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {courses.map((course, i) => (
            <AnimatedSection key={course.title} delay={i * 0.15}>
              <div className="relative group p-6 rounded-xl bg-gradient-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-glow-gold h-full flex flex-col">
                {course.tag && (
                  <div className="absolute -top-3 left-6 px-3 py-1 rounded-full bg-gradient-gold text-xs font-semibold text-primary-foreground">
                    {course.tag}
                  </div>
                )}
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                    {course.level}
                  </span>
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">{course.title}</h3>
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed flex-1">
                  {course.description}
                </p>
                <div className="flex items-center justify-between mb-4 text-sm">
                  <span className="text-muted-foreground">{course.duration}</span>
                  <span className="font-semibold text-primary text-lg">{course.price}</span>
                </div>
                <Button className="w-full bg-gradient-gold text-primary-foreground font-semibold hover:opacity-90">
                  S'inscrire
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-border hover:border-primary/30">
            Voir tous les cours
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CoursesPreview;