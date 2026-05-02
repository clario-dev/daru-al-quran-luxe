import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Play, Pause, Volume2, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import audioCover from "@/assets/audio-recitation-cover.jpg";

const AUDIO_SRC = "/audio/recitation-ustadh-ahmad-al-kanuri.mp3";

const formatTime = (s: number) => {
  if (!isFinite(s)) return "0:00";
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return `${m}:${sec.toString().padStart(2, "0")}`;
};

const RecitationFeature = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [time, setTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const a = audioRef.current;
    if (!a) return;
    const onTime = () => setTime(a.currentTime);
    const onMeta = () => setDuration(a.duration);
    const onEnd = () => setPlaying(false);
    a.addEventListener("timeupdate", onTime);
    a.addEventListener("loadedmetadata", onMeta);
    a.addEventListener("ended", onEnd);
    return () => {
      a.removeEventListener("timeupdate", onTime);
      a.removeEventListener("loadedmetadata", onMeta);
      a.removeEventListener("ended", onEnd);
    };
  }, []);

  const toggle = () => {
    const a = audioRef.current;
    if (!a) return;
    if (playing) { a.pause(); setPlaying(false); }
    else { a.play(); setPlaying(true); }
  };

  const seek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const a = audioRef.current;
    if (!a) return;
    a.currentTime = Number(e.target.value);
    setTime(a.currentTime);
  };

  const progress = duration > 0 ? (time / duration) * 100 : 0;

  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 islamic-pattern opacity-50 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[140px] pointer-events-none" />

      <div className="section-container relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/5 mb-4">
            <BookOpen className="h-3.5 w-3.5 text-primary" />
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">Récitation en direct</span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-semibold mb-4 leading-tight">
            La récitation de notre <span className="text-gradient-gold">Ustadh Ahmad Abou Marduiya Al-Kanuri</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            Découvrez la voix d'un de nos enseignants — récitation posée, tajwid rigoureux, dans la pure tradition transmise de maître à élève.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="max-w-3xl mx-auto"
        >
          <div className="relative rounded-3xl border border-primary/20 bg-gradient-card overflow-hidden shadow-glow-gold">
            <div className="grid md:grid-cols-[280px_1fr]">
              {/* Cover */}
              <div className="relative h-48 md:h-auto">
                <img
                  src={audioCover}
                  alt="Récitation du Coran par l'Ustadh Ahmad Ibn Daoud Al-Kanuri"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width={1024}
                  height={576}
                />
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-card via-card/50 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    onClick={toggle}
                    aria-label={playing ? "Mettre en pause la récitation" : "Lancer la récitation"}
                    className="group h-20 w-20 md:h-24 md:w-24 rounded-full bg-gradient-gold flex items-center justify-center shadow-glow-gold hover:scale-105 transition-transform"
                  >
                    {playing
                      ? <Pause className="h-9 w-9 text-primary-foreground" />
                      : <Play className="h-9 w-9 text-primary-foreground ml-1" />}
                  </button>
                </div>
              </div>

              {/* Player */}
              <div className="p-6 md:p-8 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-1">
                  <Volume2 className="h-4 w-4 text-primary" />
                  <span className="text-xs uppercase tracking-wider text-primary font-semibold">Enseignant Daaru Al'Qurane</span>
                </div>
                <h3 className="font-display text-2xl md:text-3xl font-semibold mb-1">
                  Ustadh Ahmad Abou Marduiya
                </h3>
                <p className="text-sm text-muted-foreground italic mb-6">
                  Ibn Daoud Al-Kanuri — Récitation selon Hafs 'an 'Asim
                </p>

                {/* Progress bar */}
                <div className="space-y-2">
                  <div className="relative h-2 rounded-full bg-secondary overflow-hidden">
                    <div
                      className="absolute inset-y-0 left-0 bg-gradient-gold transition-all"
                      style={{ width: `${progress}%` }}
                    />
                    <input
                      type="range"
                      min={0}
                      max={duration || 0}
                      step={0.1}
                      value={time}
                      onChange={seek}
                      aria-label="Position de la récitation"
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                  </div>
                  <div className="flex justify-between text-xs text-muted-foreground tabular-nums">
                    <span>{formatTime(time)}</span>
                    <span>{formatTime(duration)}</span>
                  </div>
                </div>

                <Button
                  asChild
                  size="lg"
                  className="mt-6 bg-gradient-gold text-primary-foreground font-semibold hover:opacity-90 self-start"
                >
                  <a href="https://daaralquran.mychariow.shop/prd_ijq3ih/checkout" target="_blank" rel="noopener noreferrer">
                    Étudier avec nos enseignants
                  </a>
                </Button>
              </div>
            </div>
          </div>

          <audio ref={audioRef} src={AUDIO_SRC} preload="metadata" />
        </motion.div>
      </div>
    </section>
  );
};

export default RecitationFeature;
