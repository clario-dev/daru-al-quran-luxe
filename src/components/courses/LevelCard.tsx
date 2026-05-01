import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { ArrowRight, Gift, Users, User, Sparkles } from "lucide-react";
import { Level, CHARIOW_URL } from "@/data/courseLevels";

export const LevelCard = ({ l, i }: { l: Level; i: number }) => (
  <AnimatedSection delay={i * 0.05}>
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className="group h-full rounded-2xl bg-gradient-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-glow-gold overflow-hidden flex flex-col"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-secondary/40 via-background to-secondary/30 border-b border-border">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-primary/20 rounded-tl-2xl" />
          <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-primary/20 rounded-tr-2xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_60%,hsl(var(--background)/0.4)_100%)]" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center p-6">
          <motion.img
            src={l.image}
            alt={`${l.level} — ${l.title}`}
            className="max-w-full max-h-full w-auto h-auto object-contain drop-shadow-lg"
            loading="lazy"
            width={800}
            height={800}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          />
        </div>
        <span className="absolute top-3 left-3 z-10 text-[10px] font-semibold uppercase tracking-widest text-primary bg-background/90 backdrop-blur-sm px-2.5 py-1 rounded-full border border-primary/20">
          {l.level}
        </span>
        {l.highlight && (
          <span className="absolute top-3 right-3 z-10 inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-primary-foreground bg-gradient-gold px-2.5 py-1 rounded-full shadow-glow-gold">
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
