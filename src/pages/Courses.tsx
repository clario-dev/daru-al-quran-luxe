import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Languages, Heart, Gift, Users, User, Sparkles } from "lucide-react";

import coranN1 from "@/assets/courses/coran-niveau-1.png";
import coranN2 from "@/assets/courses/coran-niveau-2.png";
import coranN3 from "@/assets/courses/coran-niveau-3.png";
import coranN4 from "@/assets/courses/coran-niveau-4.png";
import arabeNouroniya from "@/assets/courses/arabe-nouroniya.png";
import arabeMedine1 from "@/assets/courses/arabe-medine-1.png";
import arabeMedine23 from "@/assets/courses/arabe-medine-2-3.png";
import arabeMedine4 from "@/assets/courses/arabe-medine-4.png";
import arabeAjrumiyya from "@/assets/courses/arabe-ajrumiyya.jpg";

const CHARIOW_URL = "https://daaralquran.mychariow.shop/prd_ijq3ih/checkout";

type Level = {
  level: string;
  title: string;
  image: string;
  objectives: string[];
  content?: string[];
  rhythm: string;
  priceSolo: string;
  priceGroup?: string;
  bonusAqida: string;
  bonusFiqh: string;
  highlight?: string;
};

const coranLevels: Level[] = [
  {
    level: "Niveau 1",
    title: "Initiation au Coran & Tajwid de base",
    image: coranN1,
    objectives: [
      "Apprentissage des petites sourates (Juz 'Amma)",
      "Lecture fluide avec les règles de base du tajwid (makharij, ghunna, idgham…)",
      "Apprentissage des invocations coraniques (du'a)",
    ],
    content: [
      "Juz 30 (An-Naba' à An-Nas)",
      "Lecture syllabique + correction de la prononciation",
      "Tajwid simplifié avec pratique",
    ],
    rhythm: "3 ou 5 séances par semaine",
    priceSolo: "5 €/h",
    priceGroup: "4 €/h",
    bonusAqida: "Bases de la foi musulmane",
    bonusFiqh: "Purification et prière",
  },
  {
    level: "Niveau 2",
    title: "Perfectionnement de la récitation & mémorisation",
    image: coranN2,
    objectives: [
      "Récitation fluide avec règles intermédiaires du tajwid",
      "Mémorisation du Juz Tabarak (Juz 29)",
      "Introduction à la méditation (Tadabbur)",
    ],
    content: [
      "Juz 29 + sélection de sourates du Juz 28",
      "Application des règles de prolongation et de Waqf",
      "Révision régulière & test de rétention",
    ],
    rhythm: "3 ou 5 séances par semaine",
    priceSolo: "6 €/h",
    priceGroup: "5 €/h",
    bonusAqida: "Les noms et attributs d'Allah",
    bonusFiqh: "Les piliers de la prière et du jeûne",
  },
  {
    level: "Niveau 3",
    title: "Hifdh avancé & Tajwid approfondi",
    image: coranN3,
    objectives: [
      "Mémorisation structurée jusqu'à 15 hizb",
      "Tajwid avancé (ikhfa shafawi, qalqala, waqf wa ibtida')",
      "Contrôle de la voix, du rythme et du souffle",
    ],
    content: [
      "Sourates choisies jusqu'à la moitié du Coran (Juz 1 à 15 sélectionnés)",
      "Cours de perfectionnement en psalmodie (tarteel)",
      "Coaching personnel + feuille de progression",
    ],
    rhythm: "3 ou 5 séances par semaine",
    priceSolo: "7 €/h",
    priceGroup: "6 €/h",
    bonusAqida: "Les piliers de la foi en profondeur",
    bonusFiqh: "Purification, prière, jeûne, zakât (intermédiaire)",
  },
  {
    level: "Niveau 4",
    title: "Hifdh complet & Préparation à l'Ijazah",
    image: coranN4,
    objectives: [
      "Mémorisation des 60 Hizb (Coran entier)",
      "Application rigoureuse du tajwid",
      "Révisions structurées pour consolider la mémoire",
    ],
    rhythm: "3 ou 5 séances par semaine",
    priceSolo: "8 €/h",
    priceGroup: "7 €/h",
    bonusAqida: "Textes des savants anciens",
    bonusFiqh: "Introduction au fiqh comparé (madhâhib)",
  },
  {
    level: "Niveau 5",
    title: "Licence & Transmission (Ijazah Hafs)",
    image: coranN4,
    objectives: [
      "Validation de la lecture intégrale avec un professeur qualifié",
      "Récitation selon Hafs 'an 'Asim avec isnad (chaîne de transmission)",
      "Début de la transmission en tant qu'enseignant",
    ],
    rhythm: "3 ou 5 séances par semaine",
    priceSolo: "8 €/h",
    bonusAqida: "Méthodologie des salafs",
    bonusFiqh: "Analyse d'avis divergents entre écoles",
    highlight: "Ijaza Hafs",
  },
];

const arabeLevels: Level[] = [
  {
    level: "Niveau 1",
    title: "Initiation — Méthode Nouroniya",
    image: arabeNouroniya,
    objectives: [
      "Apprentissage des bases : lecture, écriture, compréhension orale",
      "Méthode Nouroniya simple et adaptée aux débutants",
    ],
    rhythm: "3 ou 5 séances par semaine",
    priceSolo: "5 €/h",
    priceGroup: "4 €/h",
    bonusAqida: "Qui est Allah ? Les 6 piliers de la foi",
    bonusFiqh: "Purification, prière, ablutions et invocations",
  },
  {
    level: "Niveau 2",
    title: "Tome 1 de Médine",
    image: arabeMedine1,
    objectives: [
      "Premiers dialogues et phrases simples",
      "Acquisition de vocabulaire et grammaire de base",
      "Lecture et compréhension de petits textes",
    ],
    rhythm: "3 ou 5 séances par semaine",
    priceSolo: "5,83 €/h",
    priceGroup: "4,58 €/h",
    bonusAqida: "La croyance au Tawhid et aux prophètes",
    bonusFiqh: "La prière complète (conditions, piliers, erreurs)",
  },
  {
    level: "Niveau 3",
    title: "Tome 2 de Médine",
    image: arabeMedine23,
    objectives: [
      "Dialogue structuré, conjugaison des verbes simples",
      "Construction de phrases complètes",
      "Initiation à la compréhension orale",
    ],
    rhythm: "3 ou 5 séances par semaine",
    priceSolo: "6,66 €/h",
    priceGroup: "5 €/h",
    bonusAqida: "Les Noms et Attributs d'Allah (Asma wa Sifat)",
    bonusFiqh: "Les adorations — jeûne, zakat, purification avancée",
  },
  {
    level: "Niveau 4",
    title: "Tome 3 de Médine",
    image: arabeMedine23,
    objectives: [
      "Textes plus longs, introduction à la grammaire intermédiaire",
      "Analyse de phrases et règles grammaticales complexes",
      "Début de rédaction",
    ],
    rhythm: "3 ou 5 séances par semaine",
    priceSolo: "7,50 €/h",
    priceGroup: "5,42 €/h",
    bonusAqida: "Doute et innovation — méthodologie des salafs",
    bonusFiqh: "Le commerce, les transactions licites et illicites",
  },
  {
    level: "Niveau 5",
    title: "Tome 4 de Médine",
    image: arabeMedine4,
    objectives: [
      "Lecture fluide, expression claire, maîtrise des structures grammaticales",
      "Révision complète des bases avec perfectionnement à l'oral et à l'écrit",
    ],
    rhythm: "3 ou 5 séances par semaine",
    priceSolo: "8,33 €/h",
    priceGroup: "5,83 €/h",
    bonusAqida: "Croyances liées à la fin des temps (barzakh, résurrection…)",
    bonusFiqh: "Fiqh familial — mariage, divorce, droits conjugaux",
  },
  {
    level: "Niveau 6",
    title: "Grammaire Avancée — Ajrumiyya ou Nahw Al-Wadih",
    image: arabeAjrumiyya,
    objectives: [
      "L'apprenant a le choix entre les deux ouvrages",
      "Analyse grammaticale détaillée",
      "Lecture critique des textes et compréhension profonde du Nahw",
    ],
    rhythm: "3 ou 5 séances par semaine",
    priceSolo: "9,16 €/h",
    priceGroup: "6,66 €/h",
    bonusAqida: "Étude de Matn Tahaouiya ou Wasitiyya",
    bonusFiqh: "Introduction à Usul Al-Fiqh (fondements du droit islamique)",
  },
  {
    level: "Niveau 7",
    title: "Rhétorique & Poésie (Balagha)",
    image: arabeAjrumiyya,
    objectives: [
      "Analyse stylistique des textes coraniques, hadiths et poèmes",
      "Rédaction poétique, éloquence orale",
      "Maîtrise des figures de style (majaz, tashbih, isti'ara…)",
    ],
    content: [
      "Conditions d'accès : avoir complété les niveaux 1 à 6",
      "Être capable de s'exprimer avec aisance à l'oral comme à l'écrit",
      "Présenter un test de niveau ou une évaluation pédagogique",
    ],
    rhythm: "Programme intensif réservé aux avancés",
    priceSolo: "10,83 €/h",
    priceGroup: "7,50 €/h",
    bonusAqida: "Approfondissement des textes classiques",
    bonusFiqh: "Étude comparative des écoles juridiques (Madhahib)",
    highlight: "Niveau d'excellence",
  },
];

const LevelCard = ({ l, i }: { l: Level; i: number }) => (
  <AnimatedSection delay={i * 0.05}>
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className="group h-full rounded-2xl bg-gradient-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-glow-gold overflow-hidden flex flex-col"
    >
      <div className="relative aspect-square overflow-hidden bg-white">
        <motion.img
          src={l.image}
          alt={`${l.level} — ${l.title}`}
          className="w-full h-full object-contain"
          loading="lazy"
          width={800}
          height={800}
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.5 }}
        />
        <span className="absolute top-3 left-3 text-[10px] font-semibold uppercase tracking-widest text-primary bg-background/85 backdrop-blur-sm px-2.5 py-1 rounded-full">
          {l.level}
        </span>
        {l.highlight && (
          <span className="absolute top-3 right-3 inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-primary-foreground bg-gradient-gold px-2.5 py-1 rounded-full shadow-glow-gold">
            <Sparkles className="h-3 w-3" />
            {l.highlight}
          </span>
        )}
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-display text-xl font-semibold mb-3 leading-snug">{l.title}</h3>

        <div className="space-y-3 text-sm flex-1">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-1">Objectifs</p>
            <ul className="space-y-1 text-muted-foreground">
              {l.objectives.map((o) => (
                <li key={o} className="flex gap-2">
                  <span className="text-primary mt-1.5 h-1 w-1 rounded-full bg-primary shrink-0" />
                  <span>{o}</span>
                </li>
              ))}
            </ul>
          </div>

          {l.content && (
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-1">Contenu</p>
              <ul className="space-y-1 text-muted-foreground">
                {l.content.map((c) => (
                  <li key={c} className="flex gap-2">
                    <span className="text-primary mt-1.5 h-1 w-1 rounded-full bg-primary shrink-0" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="rounded-lg border border-emerald/20 bg-emerald/5 p-3 space-y-1">
            <p className="text-xs font-bold uppercase tracking-wider text-emerald flex items-center gap-1.5">
              <Gift className="h-3 w-3" /> Bonus offerts
            </p>
            <p className="text-xs text-muted-foreground"><span className="text-foreground font-medium">Aqida :</span> {l.bonusAqida}</p>
            <p className="text-xs text-muted-foreground"><span className="text-foreground font-medium">Fiqh :</span> {l.bonusFiqh}</p>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-border space-y-2">
          <p className="text-xs text-muted-foreground">{l.rhythm}</p>
          <div className="grid grid-cols-2 gap-2">
            <div className="rounded-md border border-border p-2">
              <p className="text-[10px] uppercase tracking-wider text-muted-foreground flex items-center gap-1"><User className="h-3 w-3" /> Solo</p>
              <p className="font-bold text-primary">{l.priceSolo}</p>
            </div>
            {l.priceGroup ? (
              <div className="rounded-md border border-border p-2">
                <p className="text-[10px] uppercase tracking-wider text-muted-foreground flex items-center gap-1"><Users className="h-3 w-3" /> Groupe (3)</p>
                <p className="font-bold text-primary">{l.priceGroup}</p>
              </div>
            ) : (
              <div className="rounded-md border border-dashed border-border p-2 text-center">
                <p className="text-[10px] text-muted-foreground italic">Solo uniquement</p>
              </div>
            )}
          </div>
          <Button asChild size="sm" className="w-full bg-gradient-gold text-primary-foreground font-semibold hover:opacity-90">
            <a href={CHARIOW_URL} target="_blank" rel="noopener noreferrer">
              S'inscrire <ArrowRight className="ml-1 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </motion.article>
  </AnimatedSection>
);

const Courses = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-12">
        <div className="section-container">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">Nos programmes</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold mt-3 mb-4">
              Apprendre le <span className="text-gradient-gold">Coran</span> et la <span className="text-gradient-gold">langue arabe</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Avec des enseignants qualifiés, selon la méthodologie des pieux prédécesseurs. Cours en ligne pour adultes & enfants — en français, en direct via Zoom.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Coran intro */}
      <section className="py-10">
        <div className="section-container">
          <AnimatedSection className="max-w-3xl mx-auto text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
              <BookOpen className="h-4 w-4 text-primary" />
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">Cours de Coran</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Pour <span className="text-gradient-gold">tous les niveaux</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              À Daaru Al'Qurane, l'apprentissage du Coran est au cœur de notre mission. Que vous soyez débutant ou avancé, nous vous accompagnons pas à pas, avec une méthode rigoureuse et bienveillante. Approche personnalisée, en solo ou en petit groupe, avec des enseignants expérimentés et passionnés.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coranLevels.map((l, i) => (
              <LevelCard key={`coran-${l.level}`} l={l} i={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Arabe */}
      <section className="py-16 bg-gradient-dark">
        <div className="section-container">
          <AnimatedSection className="max-w-3xl mx-auto text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
              <Languages className="h-4 w-4 text-primary" />
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">Cours de Langue Arabe</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              De l'<span className="text-gradient-gold">initiation</span> à la maîtrise
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              À Daaru Al'Qurane, la langue arabe est enseignée comme un outil vivant, au service de la compréhension du Coran, des sciences islamiques et de l'expression fluide, orale comme écrite. Cours en ligne flexibles, en solo ou en petit groupe, avec un suivi pédagogique personnalisé.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {arabeLevels.map((l, i) => (
              <LevelCard key={`arabe-${l.level}`} l={l} i={i} />
            ))}
          </div>
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
            <div className="relative max-w-2xl mx-auto p-8 rounded-2xl border border-border bg-gradient-card">
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
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Courses;
