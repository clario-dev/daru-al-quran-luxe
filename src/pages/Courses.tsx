import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { ArrowRight, Filter } from "lucide-react";
import { useState } from "react";

const allCourses = [
  { id: 1, level: "Beginner", audience: "Adults", title: "Quran Reading Foundations", description: "Learn Arabic letters, pronunciation, and start reading the Quran.", duration: "12 weeks", price: "$49/mo", tag: "Most Popular" },
  { id: 2, level: "Beginner", audience: "Kids", title: "Kids Quran Starter", description: "Fun, engaging Quran classes designed for children ages 5–12.", duration: "10 weeks", price: "$39/mo", tag: null },
  { id: 3, level: "Intermediate", audience: "Adults", title: "Tajweed & Recitation", description: "Master Tajweed rules and beautify your recitation with certified teachers.", duration: "16 weeks", price: "$69/mo", tag: null },
  { id: 4, level: "Intermediate", audience: "Kids", title: "Kids Tajweed Program", description: "Age-appropriate Tajweed training with interactive exercises.", duration: "14 weeks", price: "$49/mo", tag: null },
  { id: 5, level: "Advanced", audience: "Adults", title: "Hifz (Memorization)", description: "Structured memorization with daily review and accountability.", duration: "Ongoing", price: "$89/mo", tag: null },
  { id: 6, level: "Beginner", audience: "Adults", title: "Arabic Language Basics", description: "Learn conversational Arabic and Quranic vocabulary from scratch.", duration: "12 weeks", price: "$59/mo", tag: "New" },
];

const Courses = () => {
  const [levelFilter, setLevelFilter] = useState("All");
  const [audienceFilter, setAudienceFilter] = useState("All");

  const filtered = allCourses.filter(
    (c) =>
      (levelFilter === "All" || c.level === levelFilter) &&
      (audienceFilter === "All" || c.audience === audienceFilter)
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-32 pb-24">
        <div className="section-container">
          <AnimatedSection className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">Our Programs</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold mt-3 mb-4">
              Explore Our <span className="text-gradient-gold">Courses</span>
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Structured programs for every level and age group, taught live via Zoom.
            </p>
          </AnimatedSection>

          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            {["All", "Beginner", "Intermediate", "Advanced"].map((level) => (
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
            {["All", "Adults", "Kids"].map((aud) => (
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
                <div className="relative group p-6 rounded-xl bg-gradient-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-glow-gold h-full flex flex-col">
                  {course.tag && (
                    <div className="absolute -top-3 left-6 px-3 py-1 rounded-full bg-gradient-gold text-xs font-semibold text-primary-foreground">
                      {course.tag}
                    </div>
                  )}
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
                    Enroll Now <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
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
