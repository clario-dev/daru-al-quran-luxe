import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { BookOpen, Heart, Target, MapPin, Award, Users } from "lucide-react";
import mosqueImg from "@/assets/mosque-parakou.jpg";
import teacherImg from "@/assets/teacher-portrait.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero banner */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <motion.img
            src={mosqueImg}
            alt="Mosquée"
            className="w-full h-full object-cover opacity-15"
            loading="lazy"
            width={1200}
            height={675}
            initial={{ scale: 1.15 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeOut" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/90 to-background" />
        </div>
        <div className="relative section-container text-center">
          <AnimatedSection>
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">Notre histoire</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold mt-3 mb-4">
              À propos de <span className="text-gradient-gold">Daaru Al Qurane</span>
            </h1>
          </AnimatedSection>
        </div>
      </section>

      <section className="pb-24">
        <div className="section-container">
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
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative rounded-2xl overflow-hidden border border-border shadow-glow-gold"
              >
                <motion.img
                  src={teacherImg}
                  alt="Enseignant de Daaru Al Qurane"
                  className="w-full h-80 object-cover"
                  loading="lazy"
                  width={600}
                  height={600}
                  initial={{ scale: 1.1 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              </motion.div>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24">
            {[
              { icon: BookOpen, label: "Centré sur le Coran", desc: "Chaque programme est enraciné dans le Livre d'Allah" },
              { icon: Award, label: "Enseignants certifiés", desc: "Des savants avec Ijazah et expérience pédagogique" },
              { icon: Users, label: "500+ étudiants", desc: "Une communauté mondiale grandissante" },
              { icon: MapPin, label: "Parakou, Bénin", desc: "Fièrement enracinée en Afrique de l'Ouest" },
            ].map((item, i) => (
              <AnimatedSection key={item.label} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="p-5 rounded-xl bg-gradient-card border border-border hover:border-primary/20 transition-all duration-300"
                >
                  <item.icon className="h-6 w-6 text-primary mb-3" />
                  <h3 className="font-display font-semibold text-sm mb-1">{item.label}</h3>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </motion.div>
              </AnimatedSection>
            ))}
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
                  <motion.div
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                    className="p-6 rounded-xl bg-gradient-card border border-border text-center hover:border-primary/20 transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <v.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-display text-lg font-semibold mb-2">{v.title}</h3>
                    <p className="text-sm text-muted-foreground">{v.desc}</p>
                  </motion.div>
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
