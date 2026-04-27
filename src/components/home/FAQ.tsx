import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import AnimatedSection from "@/components/AnimatedSection";
import { HelpCircle, Sparkles } from "lucide-react";

const faqs = [
  {
    q: "Je suis débutant complet, est-ce vraiment fait pour moi ?",
    a: "Absolument. Plus de 60% de nos étudiants commencent en ne sachant pas lire l'alphabet arabe. Notre méthode Nouroniya (Niveau 1) est conçue pour vous mener pas à pas, sans pression, jusqu'à la lecture fluide du Coran. Votre enseignant adapte chaque séance à votre rythme.",
  },
  {
    q: "Je manque de temps avec le travail / les enfants — est-ce possible ?",
    a: "Oui. Vous choisissez vos créneaux : tôt le matin, le soir, ou le week-end. Les cours en ligne via Zoom durent 1h et s'organisent autour de votre vie. Beaucoup de nos étudiants progressent avec seulement 3 séances par semaine.",
  },
  {
    q: "Et si je n'arrive pas à suivre ou que je n'ai pas le niveau ?",
    a: "Aucun jugement, aucune comparaison. Chaque étudiant a un suivi personnalisé. Si une notion résiste, votre enseignant la reprend autant de fois que nécessaire — c'est précisément le but d'un cours en solo ou en très petit groupe (3 max).",
  },
  {
    q: "Quelle est la différence avec une application ou des vidéos YouTube ?",
    a: "Une application ne corrige pas votre tajwid en temps réel. Une vidéo ne répond pas à vos questions. Avec un enseignant qualifié, vous bénéficiez d'une transmission vivante (tilqi), d'une correction immédiate et d'un cadre qui crée la régularité — la clé de toute progression réelle.",
  },
  {
    q: "Les enseignants sont-ils vraiment qualifiés ?",
    a: "Oui. Nos enseignants sont des étudiants sérieux en sciences islamiques, formés selon la méthodologie des pieux prédécesseurs (Salaf As-Salih). Ils enseignent avec sincérité, patience et rigueur, et sont accompagnés par notre direction pédagogique.",
  },
  {
    q: "Comment se déroule une séance type ?",
    a: "Connexion sur Zoom, lecture/récitation, correction du tajwid, explication d'une nouvelle règle ou d'un nouveau passage, devoirs courts pour la prochaine séance. Vous repartez à chaque fois avec un cap clair et un sentiment de progression.",
  },
  {
    q: "Est-ce que mes enfants peuvent suivre aussi ?",
    a: "Oui. Nous avons un programme dédié aux enfants (à partir de 6 ans) avec des enseignants formés à la pédagogie de l'enfant : ludique, patiente, valorisante. Sœurs et frères sont accueillis dans des sections séparées et adaptées.",
  },
  {
    q: "Et si je ne suis pas satisfait après le premier cours ?",
    a: "Vous êtes intégralement protégé par notre garantie satisfait ou remboursé. Si l'expérience ne vous convient pas, nous vous remboursons — sans question. Vous ne prenez aucun risque.",
  },
  {
    q: "Puis-je payer en plusieurs fois ?",
    a: "Oui, des facilités de paiement sont possibles selon le programme choisi. Contactez-nous directement — nous trouverons une solution adaptée à votre situation.",
  },
  {
    q: "Vais-je vraiment progresser ?",
    a: "Oui, à une condition : la régularité. Avec 3 séances par semaine et un enseignant qui vous suit, des résultats tangibles apparaissent dès les 4 à 6 premières semaines : lecture plus fluide, premières sourates mémorisées, vocabulaire arabe utilisable. Allah récompense les efforts sincères.",
  },
];

const FAQ = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-72 h-72 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-72 h-72 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="relative section-container">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <HelpCircle className="h-4 w-4 text-primary" />
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">Questions fréquentes</span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4 leading-tight">
            Toutes vos questions, <span className="text-gradient-gold">nos réponses sincères</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            On a accompagné des centaines d'étudiants comme vous. Voici ce qui revient le plus souvent — et pourquoi vous pouvez vous lancer en confiance.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, i) => (
                <motion.div
                  key={faq.q}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                >
                  <AccordionItem
                    value={`faq-${i}`}
                    className="border border-border bg-gradient-card rounded-xl px-5 transition-colors hover:border-primary/30 data-[state=open]:border-primary/40 data-[state=open]:shadow-glow-gold"
                  >
                    <AccordionTrigger className="text-left font-display text-base md:text-lg font-semibold py-5 hover:no-underline">
                      <span className="flex items-start gap-3 pr-4">
                        <span className="text-primary text-sm font-mono mt-1 shrink-0">0{i + 1 < 10 ? i + 1 : i + 1}</span>
                        <span>{faq.q}</span>
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed text-sm md:text-base pl-9 pb-5">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2} className="text-center mt-12">
          <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
            <Sparkles className="h-4 w-4 text-primary" />
            <span>Une autre question ? <a href="/contact" className="text-primary font-semibold hover:underline">Écrivez-nous</a> — on répond avec sincérité.</span>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default FAQ;
