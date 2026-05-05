import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookMarked } from "lucide-react";
import sadaqahImg from "@/assets/heritage/sadaqah-jariyah.jpg";
import ilmImg from "@/assets/heritage/ilm-naafi.jpg";
import waladImg from "@/assets/heritage/walad-salih.jpg";

const items = [
  {
    img: sadaqahImg,
    title: "Une aumône continue",
    arabic: "صَدَقَةٌ جَارِيَةٌ",
    desc: "C'est-à-dire que la personne fait aumône d'une chose qui demeure. La meilleure de ces choses est les mosquées : la construction des mosquées est une aumône continue, car la récompense de celui qui les bâtit demeure tant qu'elles existent, nuits et jours. Soutenir un enseignement authentique du Coran s'inscrit dans cette même tradition.",
  },
  {
    img: ilmImg,
    title: "Une science utile transmise",
    arabic: "عِلْمٌ يُنْتَفَعُ بِهِ",
    desc: "Apprendre puis transmettre la science du Coran et de la langue arabe — une lumière qui se prolonge après vous.",
  },
  {
    img: waladImg,
    title: "Un enfant pieux qui invoque",
    arabic: "وَلَدٌ صَالِحٌ يَدْعُو لَهُ",
    desc: "Inscrire votre enfant dans une éducation islamique solide, c'est préparer un cœur qui invoquera Allah pour vous.",
  },
];

const HeritageSection = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-dark relative overflow-hidden">
      <div className="absolute inset-0 islamic-pattern opacity-40 pointer-events-none" />

      <div className="section-container relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/5 mb-4">
            <BookMarked className="h-3.5 w-3.5 text-primary" />
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">L'héritage du Prophète ﷺ</span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-semibold mb-5 leading-tight">
            Prenez votre part de l'<span className="text-gradient-gold">héritage</span> qui ne s'éteint pas
          </h2>
          <p
            dir="rtl"
            lang="ar"
            className="text-2xl md:text-3xl leading-loose text-foreground/95 my-5"
            style={{ fontFamily: "'Amiri Quran', serif" }}
          >
            « إِذَا مَاتَ ابْنُ آدَمَ انْقَطَعَ عَمَلُهُ إِلَّا مِنْ ثَلَاثٍ: صَدَقَةٍ جَارِيَةٍ، أَوْ عِلْمٍ يُنْتَفَعُ بِهِ، أَوْ وَلَدٍ صَالِحٍ يَدْعُو لَهُ »
          </p>
          <p className="italic text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            « Lorsque le fils d'Adam meurt, ses œuvres s'interrompent, sauf trois : une aumône continue, une science dont on tire profit, ou un enfant pieux qui invoque Allah pour lui. »
          </p>
          <p className="text-xs text-muted-foreground mt-2">— Rapporté par Mouslim (n°1631)</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {items.map((it, i) => (
            <motion.article
              key={it.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="group rounded-2xl border border-border bg-gradient-card overflow-hidden hover:border-primary/40 hover:shadow-glow-gold transition-all"
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={it.img}
                  alt={it.title}
                  width={768}
                  height={768}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
              </div>
              <div className="p-6">
                <p
                  dir="rtl"
                  lang="ar"
                  className="text-2xl text-primary mb-2 text-right"
                  style={{ fontFamily: "'Amiri Quran', serif" }}
                >
                  {it.arabic}
                </p>
                <h3 className="font-display text-xl md:text-2xl font-semibold mb-2">{it.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Button
            asChild
            size="lg"
            className="bg-gradient-gold text-primary-foreground font-semibold px-8 py-6 text-base hover:opacity-90 shadow-glow-gold"
          >
            <a href="https://daaralquran.mychariow.shop/prd_ijq3ih/checkout" target="_blank" rel="noopener noreferrer">
              S'inscrire ou inscrire son enfant
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
          <p className="text-xs text-muted-foreground mt-4">Sections séparées hommes / femmes / enfants — cours en direct sur Zoom</p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeritageSection;
