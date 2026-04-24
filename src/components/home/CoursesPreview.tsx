import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import studentReadingImg from "@/assets/student-reading.jpg";
import childWritingImg from "@/assets/child-writing.jpg";
import maleStudentImg from "@/assets/male-student-reading.jpg";

const courses = [
  {
    level: "Débutant",
    title: "Bases de la lecture du Coran",
    description: "Apprenez les lettres arabes, la prononciation et commencez à lire le Coran avec les bonnes bases.",
    duration: "12 semaines",
    price: "49 $/mois",
    tag: "Le plus populaire",
    image: maleStudentImg,
  },
  {
    level: "Intermédiaire",
    title: "Tajweed & Récitation",
    description: "Maîtrisez les règles du Tajweed et embellissez votre récitation avec des experts.",
    duration: "16 semaines",
    price: "69 $/mois",
    tag: null,
    image: studentReadingImg,
  },
  {
    level: "Avancé",
    title: "Hifz (Mémorisation)",
    description: "Programme de mémorisation structuré avec des sessions de révision quotidiennes et un suivi de progression.",
    duration: "Continu",
    price: "89 $/mois",
    tag: null,
    image: childWritingImg,
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
                <div className="relative h-48 overflow-hidden">
                  <motion.img
                    src={course.image}
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
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary mb-1">
                    {course.level}
                  </span>
                  <h3 className="font-display text-xl font-semibold mb-2">{course.title}</h3>
                  <p className="text-sm text-muted-foreground mb-6 leading-relaxed flex-1">
                    {course.description}
                  </p>
                  <div className="flex items-center justify-between mb-4 text-sm">
                    <span className="text-muted-foreground">{course.duration}</span>
                    <span className="font-semibold text-primary text-lg">{course.price}</span>
                  </div>
                  <Button asChild className="w-full bg-gradient-gold text-primary-foreground font-semibold hover:opacity-90">
                    <a href="https://daaralquran.mychariow.shop/prd_ijq3ih/checkout" target="_blank" rel="noopener noreferrer">
                      S'inscrire
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </motion.div>
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
