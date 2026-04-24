import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Languages, Heart, CheckCircle2, Gift } from "lucide-react";
import studentReadingImg from "@/assets/student-reading.jpg";
import childWritingImg from "@/assets/child-writing.jpg";
import quranDeskImg from "@/assets/quran-desk.jpg";

const CHARIOW_URL = "https://daaralquran.mychariow.shop/prd_ijq3ih/checkout";

const arabicLevels = [
  {
    level: "Niveau 1",
    title: "Initiation — Méthode Nouniya",
    description: "Acquisition de l'alphabet, des sons, des bases de lecture, et des premiers mots. Méthode ludique et structurée.",
  },
  {
    level: "Niveaux 2 à 5",
    title: "Tomes de Médine",
    description: "Progression complète en grammaire, vocabulaire, conjugaison, compréhension de textes et expression.",
  },
  {
    level: "Niveau 6",
    title: "Grammaire Avancée",
    description: "Étude de l'Ajrumiyya ou de Nahw Wadhih selon le profil, pour maîtriser les structures de la langue.",
  },
  {
    level: "Niveau 7",
    title: "Rhétorique & Poésie (Balagha)",
    description: "Analyse stylistique, figures de style, éloquence et rédaction poétique. Accès réservé aux élèves avancés.",
  },
];

const quranPrograms = [
  {
    title: "Tajwid",
    description: "Apprentissage progressif des règles de récitation selon les normes classiques.",
  },
  {
    title: "Mémorisation (Hifdh)",
    description: "Programmes adaptés selon le rythme et la capacité de chacun.",
  },
  {
    title: "Révision & perfectionnement",
    description: "Pour consolider la mémorisation et affiner la récitation.",
  },
  {
    title: "Ijaza (Hafs)",
    description: "Pour les étudiants avancés souhaitant une certification dans la transmission.",
  },
  {
    title: "Qirâ'ât (7 lectures)",
    description: "Pour les spécialistes souhaitant maîtriser les différentes récitations du Coran.",
  },
];

const Courses = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16">
        <div className="section-container">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">Nos programmes</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold mt-3 mb-4">
              Apprendre le Coran et la <span className="text-gradient-gold">langue arabe</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Avec des enseignants qualifiés. Cours en ligne pour adultes & enfants — en français, en direct via Zoom.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Coran */}
      <section className="py-16">
        <div className="section-container">
          <AnimatedSection className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
                <BookOpen className="h-4 w-4 text-primary" />
                <span className="text-xs font-semibold uppercase tracking-wider text-primary">Coran</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Cours de <span className="text-gradient-gold">Coran</span> — pour tous les niveaux
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                À Daaru Al'Qurane, l'apprentissage du Coran est au cœur de notre mission. Que vous soyez débutant ou avancé, nous vous accompagnons pas à pas, avec une méthode rigoureuse et bienveillante. Approche personnalisée, enseignement en solo ou en petit groupe, avec des enseignants expérimentés et passionnés.
              </p>
            </div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative rounded-2xl overflow-hidden border border-border shadow-glow-gold"
            >
              <img
                src={studentReadingImg}
                alt="Étudiante lisant le Coran"
                className="w-full h-72 object-cover"
                loading="lazy"
                width={1200}
                height={675}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </motion.div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quranPrograms.map((p, i) => (
              <AnimatedSection key={p.title} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="p-6 rounded-xl bg-gradient-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-glow-gold h-full"
                >
                  <CheckCircle2 className="h-6 w-6 text-primary mb-3" />
                  <h3 className="font-display text-lg font-semibold mb-2">{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-10">
            <Button asChild size="lg" className="bg-gradient-gold text-primary-foreground font-semibold hover:opacity-90">
              <a href={CHARIOW_URL} target="_blank" rel="noopener noreferrer">
                S'inscrire au cours de Coran <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Arabe */}
      <section className="py-16 bg-gradient-dark">
        <div className="section-container">
          <AnimatedSection className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative rounded-2xl overflow-hidden border border-border shadow-glow-gold order-2 lg:order-1"
            >
              <img
                src={childWritingImg}
                alt="Enfant écrivant en arabe"
                className="w-full h-72 object-cover"
                loading="lazy"
                width={1200}
                height={675}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </motion.div>
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
                <Languages className="h-4 w-4 text-primary" />
                <span className="text-xs font-semibold uppercase tracking-wider text-primary">Langue arabe</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                De l'<span className="text-gradient-gold">initiation</span> à la maîtrise
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                À Daaru Al'Qurane, la langue arabe est enseignée comme un outil vivant, au service de la compréhension du Coran, des sciences islamiques et de l'expression fluide, orale comme écrite. Cours en ligne flexibles, en solo ou en petit groupe, avec un suivi pédagogique personnalisé.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {arabicLevels.map((l, i) => (
              <AnimatedSection key={l.title} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="p-6 rounded-xl bg-gradient-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-glow-gold h-full"
                >
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary">{l.level}</span>
                  <h3 className="font-display text-xl font-semibold mt-1 mb-2">{l.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{l.description}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-10">
            <Button asChild size="lg" className="bg-gradient-gold text-primary-foreground font-semibold hover:opacity-90">
              <a href={CHARIOW_URL} target="_blank" rel="noopener noreferrer">
                S'inscrire au cours d'arabe <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Aqida & Fiqh - Gratuit */}
      <section className="py-16">
        <div className="section-container">
          <AnimatedSection className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald/10 border border-emerald/30 mb-4">
              <Gift className="h-4 w-4 text-emerald" />
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald">Offerts gratuitement</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Cours d'<span className="text-gradient-gold">Aqida</span> & de <span className="text-gradient-gold">Fiqh</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Une compréhension solide de la foi et de la pratique est essentielle pour tout musulman. C'est pourquoi nous offrons gratuitement, à tous nos élèves inscrits, ces enseignements complémentaires — inclus en bonus dans chaque niveau d'apprentissage (langue arabe ou Coran), sans coût supplémentaire.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <AnimatedSection delay={0.1}>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className="relative p-8 rounded-2xl bg-gradient-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-glow-gold h-full"
              >
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-emerald/15 border border-emerald/30">
                  <span className="text-xs font-bold text-emerald">GRATUIT</span>
                </div>
                <Heart className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-display text-xl font-semibold mb-3">Aqida (croyance)</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Basés sur les textes authentiques et les explications des savants reconnus, ces cours permettent de consolider la croyance islamique sur des bases claires, loin des confusions contemporaines.
                </p>
              </motion.div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className="relative p-8 rounded-2xl bg-gradient-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-glow-gold h-full"
              >
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-emerald/15 border border-emerald/30">
                  <span className="text-xs font-bold text-emerald">GRATUIT</span>
                </div>
                <BookOpen className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-display text-xl font-semibold mb-3">Fiqh (jurisprudence)</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Adaptés au niveau de l'élève, ces cours introduisent progressivement les règles de la prière, la purification, le jeûne, etc., selon une approche méthodique et respectueuse des écoles classiques.
                </p>
              </motion.div>
            </AnimatedSection>
          </div>

          <AnimatedSection className="text-center mt-12">
            <div
              className="relative max-w-2xl mx-auto p-8 rounded-2xl border border-border bg-gradient-card"
              style={{ backgroundImage: `url(${quranDeskImg})`, backgroundSize: "cover", backgroundPosition: "center" }}
            >
              <div className="absolute inset-0 bg-background/85 rounded-2xl" />
              <div className="relative">
                <h3 className="font-display text-2xl font-bold mb-3">Prêt à commencer votre parcours ?</h3>
                <p className="text-muted-foreground mb-6">
                  Inscrivez-vous dès aujourd'hui et bénéficiez d'un accompagnement personnalisé.
                </p>
                <Button asChild size="lg" className="bg-gradient-gold text-primary-foreground font-semibold hover:opacity-90">
                  <a href={CHARIOW_URL} target="_blank" rel="noopener noreferrer">
                    S'inscrire maintenant <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Courses;
