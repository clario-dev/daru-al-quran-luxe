import AnimatedSection from "@/components/AnimatedSection";
import { BookOpen, Video, Award, Users, Globe, Clock } from "lucide-react";

const features = [
  {
    icon: Video,
    title: "Live Zoom Classes",
    description: "Interactive sessions with certified teachers in real-time, not pre-recorded videos.",
  },
  {
    icon: BookOpen,
    title: "Structured Curriculum",
    description: "From beginner to advanced, each level builds on the last with clear milestones.",
  },
  {
    icon: Award,
    title: "Certified Teachers",
    description: "Learn from scholars with Ijazah certification and years of teaching experience.",
  },
  {
    icon: Users,
    title: "Kids & Adults",
    description: "Tailored programs for every age group with age-appropriate teaching methods.",
  },
  {
    icon: Globe,
    title: "Global Community",
    description: "Join students from 20+ countries in a supportive learning environment.",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description: "Choose class times that fit your lifestyle across multiple time zones.",
  },
];

const ValuePropositions = () => {
  return (
    <section className="py-24 bg-gradient-dark">
      <div className="section-container">
        <AnimatedSection className="text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">Why Choose Us</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-3 mb-4">
            An Academy Built for <span className="text-gradient-gold">Excellence</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Every detail is designed to help you succeed in your Quranic journey.
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
