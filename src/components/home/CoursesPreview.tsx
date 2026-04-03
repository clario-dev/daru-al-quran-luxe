import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";

const courses = [
  {
    level: "Beginner",
    title: "Quran Reading Foundations",
    description: "Learn Arabic letters, pronunciation, and begin reading the Quran with proper basics.",
    duration: "12 weeks",
    price: "$49/mo",
    tag: "Most Popular",
    accent: "primary",
  },
  {
    level: "Intermediate",
    title: "Tajweed & Recitation",
    description: "Master the rules of Tajweed and beautify your recitation with expert guidance.",
    duration: "16 weeks",
    price: "$69/mo",
    tag: null,
    accent: "emerald",
  },
  {
    level: "Advanced",
    title: "Hifz (Memorization)",
    description: "Structured memorization program with daily review sessions and progress tracking.",
    duration: "Ongoing",
    price: "$89/mo",
    tag: null,
    accent: "gold",
  },
];

const CoursesPreview = () => {
  return (
    <section className="py-24">
      <div className="section-container">
        <AnimatedSection className="text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">Our Programs</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-3 mb-4">
            Courses for Every <span className="text-gradient-gold">Level</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Whether you're just starting or deepening your knowledge, we have the right program.
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
                  Enroll Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-border hover:border-primary/30">
            View All Courses
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CoursesPreview;
