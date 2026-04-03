import AnimatedSection from "@/components/AnimatedSection";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Aisha M.",
    location: "Paris, France",
    text: "My children have transformed their recitation in just 3 months. The teachers are patient, knowledgeable, and truly care about each student's progress.",
    rating: 5,
  },
  {
    name: "Ibrahim K.",
    location: "Lagos, Nigeria",
    text: "I tried many online Quran programs before. Daaru Al Qurane is the only one that felt like a real classroom. The structure and accountability are unmatched.",
    rating: 5,
  },
  {
    name: "Fatima B.",
    location: "Brussels, Belgium",
    text: "As a revert, I was nervous about learning Arabic. The beginner program was exactly what I needed — step by step, with so much encouragement.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-24">
      <div className="section-container">
        <AnimatedSection className="text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">Testimonials</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-3 mb-4">
            What Our Students <span className="text-gradient-gold">Say</span>
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <AnimatedSection key={t.name} delay={i * 0.15}>
              <div className="p-6 rounded-xl bg-gradient-card border border-border h-full flex flex-col">
                <Quote className="h-8 w-8 text-primary/30 mb-4" />
                <p className="text-sm text-foreground/80 leading-relaxed mb-6 flex-1 italic">
                  "{t.text}"
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
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
