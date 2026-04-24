import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { ShieldCheck, Star, RotateCcw } from "lucide-react";
import { useEffect } from "react";

const SatisfactionBadge = () => {
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 200], [-8, 8]);

  useEffect(() => {
    const controls = animate(x, [0, 15, -15, 0], {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    });
    return controls.stop;
  }, [x]);

  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[500px] h-[300px] rounded-full bg-primary/8 blur-[100px]" />
      </div>

      {/* Floating particles */}
      {Array.from({ length: 6 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full bg-primary/30"
          style={{
            left: `${15 + i * 14}%`,
            top: `${30 + (i % 3) * 20}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.4,
          }}
        />
      ))}

      <div className="section-container relative">
        <motion.div
          style={{ rotate }}
          className="relative mx-auto max-w-3xl"
        >
          {/* Outer glow ring */}
          <motion.div
            className="absolute -inset-4 rounded-3xl border border-primary/20"
            animate={{
              boxShadow: [
                "0 0 30px -10px hsl(43 72% 55% / 0.15)",
                "0 0 60px -10px hsl(43 72% 55% / 0.25)",
                "0 0 30px -10px hsl(43 72% 55% / 0.15)",
              ],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Main card */}
          <div className="relative rounded-2xl bg-gradient-to-br from-[hsl(220,14%,12%)] via-[hsl(220,14%,10%)] to-[hsl(220,14%,8%)] border border-border p-8 md:p-10 overflow-hidden">
            {/* Gold corner accents */}
            <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-primary/40 rounded-tl-2xl" />
            <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-primary/40 rounded-tr-2xl" />
            <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-primary/40 rounded-bl-2xl" />
            <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-primary/40 rounded-br-2xl" />

            {/* Inner content */}
            <div className="relative flex flex-col md:flex-row items-center gap-6 md:gap-8">
              {/* Animated shield icon */}
              <motion.div
                className="relative flex-shrink-0"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="w-20 h-20 rounded-2xl bg-gradient-gold flex items-center justify-center shadow-glow-gold">
                  <ShieldCheck className="w-10 h-10 text-primary-foreground" strokeWidth={2.5} />
                </div>
                {/* Orbiting stars */}
                <motion.div
                  className="absolute -top-1 -right-1"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                >
                  <Star className="w-5 h-5 text-primary fill-primary" />
                </motion.div>
                <motion.div
                  className="absolute -bottom-1 -left-1"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                >
                  <Star className="w-4 h-4 text-primary/70 fill-primary/70" />
                </motion.div>
              </motion.div>

              <div className="text-center md:text-left flex-1">
                <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                  <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
                    Garantie
                  </span>
                  <div className="h-px w-8 bg-primary/40" />
                </div>
                <h3 className="font-display text-2xl md:text-3xl font-bold mb-2">
                  Satisfait <span className="text-gradient-gold">ou remboursé</span>
                </h3>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-lg">
                  Votre confiance est notre engagement. Si notre méthode ne vous convient pas
                  durant les 7 premiers jours, nous vous remboursons intégralement. Sans question,
                  sans condition.
                </p>
              </div>

              {/* Rotating icon */}
              <motion.div
                className="hidden lg:flex flex-shrink-0 w-16 h-16 rounded-full border border-border items-center justify-center"
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              >
                <RotateCcw className="w-7 h-7 text-primary" />
              </motion.div>
            </div>

            {/* Bottom trust indicators */}
            <div className="relative mt-8 pt-6 border-t border-border/50 flex flex-wrap justify-center gap-6 md:gap-10">
              {[
                { label: "7 jours", desc: "de test" },
                { label: "100%", desc: "remboursé" },
                { label: "0", desc: "condition" },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  className="text-center"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                >
                  <div className="font-display text-xl font-bold text-gradient-gold">
                    {item.label}
                  </div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider mt-0.5">
                    {item.desc}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SatisfactionBadge;
