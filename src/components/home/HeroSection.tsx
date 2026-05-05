import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

import AnimatedCounter from "@/components/home/AnimatedCounter";

import coranN1 from "@/assets/courses/coran-niveau-1.png";
import coranN2 from "@/assets/courses/coran-niveau-2.png";
import coranN3 from "@/assets/courses/coran-niveau-3.png";
import coranN4 from "@/assets/courses/coran-niveau-4.png";
import arabeNouroniya from "@/assets/courses/arabe-nouroniya.png";
import arabeMedine1 from "@/assets/courses/arabe-medine-1.png";
import arabeMedine23 from "@/assets/courses/arabe-medine-2-3.png";
import arabeAjrumiyya from "@/assets/courses/arabe-ajrumiyya.png";

const images = [
  { src: coranN1, alt: "Cours de Coran niveau 1" },
  { src: arabeNouroniya, alt: "Méthode Nouroniya" },
  { src: coranN2, alt: "Cours de Coran niveau 2" },
  { src: arabeMedine1, alt: "Tome de Médine 1" },
  { src: coranN3, alt: "Cours de Coran niveau 3" },
  { src: arabeMedine23, alt: "Tomes de Médine 2 et 3" },
  { src: coranN4, alt: "Cours de Coran niveau 4" },
  { src: arabeAjrumiyya, alt: "Grammaire arabe — Ajrumiyya" },
];

const HeroSection = () => {
  const [angle, setAngle] = useState(0);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf = 0;
    let last = performance.now();
    const tick = (now: number) => {
      const dt = (now - last) / 1000;
      last = now;
      setAngle((a) => (a + dt * 12) % 360); // 12°/s
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const r = e.currentTarget.getBoundingClientRect();
    setMouse({
      x: (e.clientX - r.left) / r.width - 0.5,
      y: (e.clientY - r.top) / r.height - 0.5,
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Coran ouvert avec lumière dorée"
          className="w-full h-full object-cover opacity-30"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/85 to-background/50" />
        <div className="absolute inset-0 islamic-pattern" />
      </div>

      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[120px] animate-pulse-glow pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-emerald/10 blur-[100px] animate-pulse-glow pointer-events-none" style={{ animationDelay: "1.5s" }} />

      <div className="relative section-container pt-28 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-7"
            >
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              <span className="text-xs font-medium text-primary tracking-wide">Inscriptions ouvertes — Places limitées</span>
            </motion.div>

            <h1 className="font-display text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-6 tracking-tight">
              <span className="block text-foreground/95 italic font-normal text-2xl sm:text-3xl md:text-4xl mb-3 font-serifsc tracking-[0.15em] uppercase">
                Daaru Al'Qurane
              </span>
              Apprendre le{" "}
              <span className="text-gradient-gold font-semibold">Coran</span>
              <br className="hidden sm:block" />
              {" "}& la <span className="text-gradient-gold font-semibold">langue arabe</span>
              <span className="block text-xl sm:text-2xl md:text-3xl text-muted-foreground mt-4 font-normal italic">
                en ligne — France & Europe francophone
              </span>
            </h1>

            <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-9 leading-relaxed font-body">
              Cours en direct sur Zoom, en français, avec des enseignants qualifiés selon la voie des pieux prédécesseurs.
              Pour adultes & enfants en France, Belgique, Suisse, Canada et Europe.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Button
                asChild
                size="lg"
                className="bg-gradient-gold text-primary-foreground font-semibold px-8 py-6 text-base hover:opacity-90 shadow-glow-gold transition-all duration-300 hover:shadow-[0_0_80px_-10px_hsl(43_72%_55%_/_0.4)]"
              >
                <a href="https://daaralquran.mychariow.shop/prd_ijq3ih/checkout" target="_blank" rel="noopener noreferrer">
                  S'inscrire — 10 €
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
            <p className="mt-3 text-xs text-muted-foreground text-center lg:text-left">
              Frais d'inscription unique <span className="text-primary font-semibold">10 €</span> · Garantie satisfait ou remboursé sous 7 jours
            </p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-x-8 gap-y-4 text-muted-foreground"
            >
              {[
                { end: 500, suffix: "+", label: "Étudiants", decimals: 0 },
                { end: 15, suffix: "+", label: "Enseignants", decimals: 0 },
                { end: 20, suffix: "+", label: "Pays", decimals: 0 },
                { end: 4.9, suffix: "★", label: "Note", decimals: 1 },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-bold text-foreground font-display">
                    <AnimatedCounter end={stat.end} suffix={stat.suffix} decimals={stat.decimals} duration={2.5} />
                  </div>
                  <div className="text-xs uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: 3D rotating carousel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative h-[480px] sm:h-[560px] flex items-center justify-center"
            onMouseMove={handleMouseMove}
            ref={carouselRef}
            style={{ perspective: "1400px" }}
          >
            {/* Decorative center halo */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-56 h-56 rounded-full bg-gradient-gold opacity-20 blur-3xl" />
            </div>
            {/* Decorative star */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <Sparkles className="w-12 h-12 text-primary/40" />
            </div>

            <div
              className="relative w-[280px] h-[280px] sm:w-[340px] sm:h-[340px]"
              style={{
                transformStyle: "preserve-3d",
                transform: `rotateX(${mouse.y * -15}deg) rotateY(${mouse.x * 20}deg)`,
                transition: "transform 0.4s ease-out",
              }}
            >
              {images.map((img, i) => {
                const total = images.length;
                const itemAngle = (angle + (i * 360) / total) * (Math.PI / 180);
                const radius = 200;
                const x = Math.cos(itemAngle) * radius;
                const y = Math.sin(itemAngle) * radius * 0.5; // ellipse flat
                const z = Math.sin(itemAngle) * radius;
                const scale = 0.7 + (z + radius) / (radius * 4);
                const opacity = 0.55 + (z + radius) / (radius * 3);

                return (
                  <motion.div
                    key={i}
                    className="absolute top-1/2 left-1/2 w-32 h-40 sm:w-40 sm:h-52 -ml-16 -mt-20 sm:-ml-20 sm:-mt-26 rounded-xl overflow-hidden border border-primary/20 shadow-2xl"
                    style={{
                      transform: `translate3d(${x}px, ${y}px, ${z}px) scale(${scale})`,
                      opacity,
                      zIndex: Math.round(z + radius),
                      background: "linear-gradient(145deg, hsl(220 14% 12%), hsl(220 14% 9%))",
                    }}
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover"
                      loading={i < 4 ? "eager" : "lazy"}
                    />
                    {/* Shine */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none" />
                    {/* Gold rim glow */}
                    <div className="absolute inset-0 ring-1 ring-inset ring-primary/30 rounded-xl pointer-events-none" />
                  </motion.div>
                );
              })}
            </div>

            {/* Floor reflection */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-72 h-8 rounded-full bg-primary/20 blur-2xl pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
