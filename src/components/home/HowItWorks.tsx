import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import { UserPlus, CalendarCheck, Video } from "lucide-react";
import quranDeskImg from "@/assets/quran-desk.jpg";

const steps = [
  {
    icon: UserPlus,
    step: "01",
    title: "Inscrivez-vous",
    description: "Créez votre compte et choisissez votre parcours — Coran, arabe ou les deux.",
  },
  {
    icon: CalendarCheck,
    step: "02",
    title: "Réservez vos horaires",
    description: "Choisissez les créneaux qui vous conviennent. Nous vous attribuons l'enseignant idéal.",
  },
  {
    icon: Video,
    step: "03",
    title: "Commencez à apprendre",
    description: "Rejoignez les sessions Zoom en direct et débutez votre parcours avec un accompagnement personnalisé.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 bg-gradient-dark relative overflow-hidden">
      <div className="absolute inset-0 islamic-pattern" />

      {/* Floating animated illustration */}
      <motion.div
        className="absolute -right-20 top-1/2 -translate-y-1/2 w-80 h-80 opacity-20 hidden lg:block"
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <img
          src={quranDeskImg}
          alt=""
          className="w-full h-full object-contain rounded-3xl"
          loading="lazy"
          width={800}
          height={600}
        />
      </motion.div>

      <div className="relative section-container">
        <AnimatedSection className="text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">Processus simple</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-3 mb-4">
            Comment ça <span className="text-gradient-gold">marche</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Commencez en trois étapes simples.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((item, i) => (
            <AnimatedSection key={item.title} delay={i * 0.2} className="relative">
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className="text-center"
              >
                <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 border border-primary/20 mb-6">
                  <item.icon className="h-8 w-8 text-primary" />
                  <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-gold flex items-center justify-center text-xs font-bold text-primary-foreground">
                    {item.step}
                  </span>
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">
                  {item.description}
                </p>
              </motion.div>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[60%] w-[80%] border-t border-dashed border-primary/20" />
              )}
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
