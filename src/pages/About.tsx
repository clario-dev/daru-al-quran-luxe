import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { BookOpen, Heart, Target, Award, Users, ShieldCheck, GraduationCap, Sparkles } from "lucide-react";
import mosqueImg from "@/assets/mosque-parakou.jpg";
import maleTeacherImg from "@/assets/male-teacher.jpg";
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
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Un enseignement authentique, rigoureux et bénéfique du Coran et de la langue arabe — pensé pour les francophones désireux d'apprendre leur religion à la source.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="pb-20">
        <div className="section-container">
          {/* Intro + portraits */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <AnimatedSection>
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>
                  Dans un monde où l'accès au savoir est facilité mais souvent dilué, notre institut s'engage à offrir un enseignement <strong className="text-foreground">authentique, rigoureux et bénéfique</strong> du Coran et de la langue arabe, spécialement conçu pour les francophones désireux d'apprendre leur religion à la source.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                  className="relative rounded-2xl overflow-hidden border border-border shadow-glow-gold"
                >
                  <motion.img
                    src={maleTeacherImg}
                    alt="Enseignant de Daaru Al Qurane"
                    className="w-full h-48 object-cover"
                    loading="lazy"
                    width={1024}
                    height={1024}
                    initial={{ scale: 1.1 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                  <span className="absolute bottom-2 left-3 text-xs font-semibold text-primary">Section Frères</span>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                  className="relative rounded-2xl overflow-hidden border border-border shadow-glow-gold"
                >
                  <motion.img
                    src={teacherImg}
                    alt="Enseignante de Daaru Al Qurane"
                    className="w-full h-48 object-cover"
                    loading="lazy"
                    width={600}
                    height={600}
                    initial={{ scale: 1.1 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                  <span className="absolute bottom-2 left-3 text-xs font-semibold text-primary">Section Sœurs</span>
                </motion.div>
              </div>
            </AnimatedSection>
          </div>

          {/* Méthodologie */}
          <AnimatedSection className="mb-20">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <span className="text-xs font-semibold uppercase tracking-widest text-primary">Notre méthodologie</span>
                <h2 className="font-display text-3xl md:text-4xl font-bold mt-2">
                  Une voie <span className="text-gradient-gold">claire et authentique</span>
                </h2>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>Notre enseignement repose sur une voie éprouvée : celle des <strong className="text-foreground">pieux prédécesseurs (As-Salaf As-Salih)</strong>.</p>
                <p>
                  Nous nous appuyons exclusivement sur le <strong className="text-foreground">Coran</strong> et la <strong className="text-foreground">Sounnah authentique</strong>, selon la compréhension des premiers musulmans, en particulier les nobles compagnons du Prophète ﷺ.
                </p>
                <p>Cette méthodologie garantit un apprentissage pur, équilibré et conforme à la voie droite, loin des innovations et des déviations.</p>
              </div>
            </div>
          </AnimatedSection>

          {/* Trois cartes : équipe, direction, position */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            {[
              {
                icon: Users,
                title: "Une équipe d'enseignants engagés",
                desc: "Nos enseignants sont des étudiants sérieux en sciences islamiques, formés et issus de différents pays. Ils allient connaissance, pédagogie et sincérité, avec un objectif commun : transmettre un savoir utile, accessible et appliqué dans la vie quotidienne.",
              },
              {
                icon: GraduationCap,
                title: "Une direction ancrée dans le savoir",
                desc: "L'institut est dirigé par Abou Marduiya Ahmad Ibn Daoud Al-Kanuri (أبو مرضية أحمد إبن داوود الكنوري), dont la vision est de rendre l'apprentissage du Coran et de la langue arabe accessible à tous, tout en restant fermement attaché à l'authenticité.",
              },
              {
                icon: ShieldCheck,
                title: "Une position claire et assumée",
                desc: "Nous affirmons clairement notre désaveu de tous les groupes déviants et innovateurs qui s'éloignent de la voie des pieux prédécesseurs. Notre engagement : préserver la pureté du message et orienter nos étudiants vers une compréhension saine et équilibrée de l'Islam.",
              },
            ].map((c, i) => (
              <AnimatedSection key={c.title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="h-full p-6 rounded-2xl bg-gradient-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-glow-gold"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <c.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-semibold mb-2 leading-snug">{c.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>

          {/* Pourquoi nous rejoindre */}
          <AnimatedSection className="mb-20">
            <div className="max-w-4xl mx-auto rounded-3xl border border-border bg-gradient-card p-8 md:p-12">
              <div className="text-center mb-8">
                <Sparkles className="h-8 w-8 text-primary mx-auto mb-3" />
                <h2 className="font-display text-3xl md:text-4xl font-bold">
                  Pourquoi <span className="text-gradient-gold">nous rejoindre</span> ?
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Un enseignement authentique et structuré",
                  "Des enseignants accessibles et expérimentés",
                  "Un suivi personnalisé pour progresser efficacement",
                  "Un cadre sérieux, propice à l'apprentissage et à la réussite",
                ].map((point) => (
                  <div key={point} className="flex items-start gap-3 p-4 rounded-xl border border-border bg-background/40">
                    <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Award className="h-4 w-4 text-primary" />
                    </div>
                    <p className="text-sm text-foreground leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Valeurs */}
          <AnimatedSection className="text-center mb-20">
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-8">
              Nos <span className="text-gradient-gold">valeurs</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: Heart, title: "Sincérité", desc: "Tout ce que nous faisons est pour l'agrément d'Allah et le bien de nos étudiants." },
                { icon: Target, title: "Excellence", desc: "Nous nous imposons les plus hauts standards en matière d'enseignement et de conception pédagogique." },
                { icon: BookOpen, title: "Authenticité", desc: "Un savoir fidèle au Coran et à la Sounnah selon la compréhension des pieux prédécesseurs." },
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

          {/* CTA final */}
          <AnimatedSection>
            <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-gradient-gold/5 p-10 md:p-14 text-center">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 pointer-events-none" />
              <div className="relative">
                <span className="text-xs font-semibold uppercase tracking-widest text-primary">Votre chemin commence ici</span>
                <h2 className="font-display text-3xl md:text-4xl font-bold mt-3 mb-4">
                  Faites le choix d'un <span className="text-gradient-gold">savoir authentique</span>
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  Que vous soyez débutant ou avancé, notre institut vous accompagne pas à pas dans votre apprentissage du Coran et de la langue arabe, avec une méthode claire et des résultats concrets. Rejoignez-nous dès aujourd'hui — un savoir qui transformera votre vie.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
