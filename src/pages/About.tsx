import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { BookOpen, Heart, Target, MapPin, Award, Users } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-32 pb-24">
        <div className="section-container">
          <AnimatedSection className="text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">Our Story</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold mt-3 mb-4">
              About <span className="text-gradient-gold">Daaru Al Qurane</span>
            </h1>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <AnimatedSection>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Founded in Parakou, Benin, <strong className="text-foreground">Daaru Al Qurane</strong> was born from a deep conviction: that quality Quranic education should be accessible to every Muslim, regardless of location.
                </p>
                <p>
                  What started as a local teaching circle has grown into an international online academy serving students across Africa, Europe, and the diaspora. Our certified teachers combine traditional scholarship with modern pedagogy to deliver an exceptional learning experience.
                </p>
                <p>
                  Through live Zoom classes, structured curricula, and a supportive community, we've helped hundreds of students — from children to adults — build lasting relationships with the Quran.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: BookOpen, label: "Quran-Centered", desc: "Every program is rooted in the Book of Allah" },
                  { icon: Award, label: "Certified Teachers", desc: "Scholars with Ijazah and teaching experience" },
                  { icon: Users, label: "500+ Students", desc: "A growing global community of learners" },
                  { icon: MapPin, label: "Parakou, Benin", desc: "Proudly rooted in West Africa" },
                ].map((item, i) => (
                  <div key={item.label} className="p-5 rounded-xl bg-gradient-card border border-border">
                    <item.icon className="h-6 w-6 text-primary mb-3" />
                    <h3 className="font-display font-semibold text-sm mb-1">{item.label}</h3>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection className="text-center">
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-8">
              Our <span className="text-gradient-gold">Values</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: Heart, title: "Sincerity", desc: "Everything we do is for the sake of Allah and the benefit of our students." },
                { icon: Target, title: "Excellence", desc: "We hold ourselves to the highest standards in teaching and curriculum design." },
                { icon: Users, title: "Accessibility", desc: "Quality education should be available to everyone, everywhere." },
              ].map((v, i) => (
                <AnimatedSection key={v.title} delay={i * 0.15}>
                  <div className="p-6 rounded-xl bg-gradient-card border border-border text-center">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <v.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-display text-lg font-semibold mb-2">{v.title}</h3>
                    <p className="text-sm text-muted-foreground">{v.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
