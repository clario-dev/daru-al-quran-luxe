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
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">Notre histoire</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold mt-3 mb-4">
              À propos de <span className="text-gradient-gold">Daaru Al Qurane</span>
            </h1>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <AnimatedSection>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Fondée à Parakou, au Bénin, <strong className="text-foreground">Daaru Al Qurane</strong> est née d'une conviction profonde : l'éducation coranique de qualité doit être accessible à chaque musulman, quel que soit son lieu de résidence.
                </p>
                <p>
                  Ce qui a commencé comme un cercle d'enseignement local s'est transformé en une académie internationale en ligne au service d'étudiants à travers l'Afrique, l'Europe et la diaspora. Nos enseignants certifiés allient savoir traditionnel et pédagogie moderne pour offrir une expérience d'apprentissage exceptionnelle.
                </p>
                <p>
                  Grâce à des cours en direct sur Zoom, des programmes structurés et une communauté bienveillante, nous avons aidé des centaines d'étudiants — enfants comme adultes — à construire une relation durable avec le Coran.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: BookOpen, label: "Centré sur le Coran", desc: "Chaque programme est enraciné dans le Livre d'Allah" },
                  { icon: Award, label: "Enseignants certifiés", desc: "Des savants avec Ijazah et expérience pédagogique" },
                  { icon: Users, label: "500+ étudiants", desc: "Une communauté mondiale grandissante" },
                  { icon: MapPin, label: "Parakou, Bénin", desc: "Fièrement enracinée en Afrique de l'Ouest" },
                ].map((item) => (
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
              Nos <span className="text-gradient-gold">valeurs</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: Heart, title: "Sincérité", desc: "Tout ce que nous faisons est pour l'agrément d'Allah et le bien de nos étudiants." },
                { icon: Target, title: "Excellence", desc: "Nous nous imposons les plus hauts standards en matière d'enseignement et de conception pédagogique." },
                { icon: Users, title: "Accessibilité", desc: "Une éducation de qualité doit être accessible à tous, partout." },
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