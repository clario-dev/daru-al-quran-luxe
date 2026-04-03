import AnimatedSection from "@/components/AnimatedSection";
import { BookOpen, Video, Award, Users, Globe, Clock } from "lucide-react";

const features = [
  {
    icon: Video,
    title: "Cours en direct sur Zoom",
    description: "Sessions interactives avec des enseignants certifiés en temps réel, pas de vidéos pré-enregistrées.",
  },
  {
    icon: BookOpen,
    title: "Programme structuré",
    description: "Du débutant à l'avancé, chaque niveau s'appuie sur le précédent avec des étapes claires.",
  },
  {
    icon: Award,
    title: "Enseignants certifiés",
    description: "Apprenez auprès de savants titulaires d'une Ijazah et dotés d'années d'expérience.",
  },
  {
    icon: Users,
    title: "Enfants & adultes",
    description: "Programmes adaptés à chaque tranche d'âge avec des méthodes pédagogiques appropriées.",
  },
  {
    icon: Globe,
    title: "Communauté internationale",
    description: "Rejoignez des étudiants de plus de 20 pays dans un environnement d'apprentissage bienveillant.",
  },
  {
    icon: Clock,
    title: "Horaires flexibles",
    description: "Choisissez les horaires de cours qui conviennent à votre emploi du temps, tous fuseaux horaires confondus.",
  },
];

const ValuePropositions = () => {
  return (
    <section className="py-24 bg-gradient-dark">
      <div className="section-container">
        <AnimatedSection className="text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">Pourquoi nous choisir</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-3 mb-4">
            Une académie bâtie pour <span className="text-gradient-gold">l'excellence</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Chaque détail est conçu pour vous accompagner dans votre parcours coranique.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <AnimatedSection key={feature.title} delay={i * 0.1}>
              <div className="group p-6 rounded-xl bg-gradient-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-glow-gold h-full">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuePropositions;