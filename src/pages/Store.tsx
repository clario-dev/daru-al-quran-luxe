import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { ShoppingCart, ShieldCheck, Infinity as InfinityIcon, PlayCircle, CheckCircle2 } from "lucide-react";
import dessinsAnimes from "@/assets/products/dessins-animes-arabe.png";

const PRODUCT_URL = "https://daaralquran.mychariow.shop/prd_4qbk0z/checkout";

const features = [
  { icon: PlayCircle, label: "112+ vidéos incluses" },
  { icon: InfinityIcon, label: "Mises à jour gratuites à vie" },
  { icon: ShieldCheck, label: "100% sécurisé & halal" },
  { icon: CheckCircle2, label: "Accès à vie — paiement unique" },
];

const Store = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-32 pb-24">
        <div className="section-container">
          <AnimatedSection className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">Boutique</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold mt-3 mb-4">
              Notre <span className="text-gradient-gold">produit phare</span>
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Une bibliothèque islamique pensée pour les enfants musulmans, à découvrir en famille.
            </p>
          </AnimatedSection>

          <div className="max-w-5xl mx-auto">
            <AnimatedSection>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="rounded-2xl bg-gradient-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-glow-gold overflow-hidden grid grid-cols-1 md:grid-cols-2"
              >
                <div className="relative aspect-square overflow-hidden bg-white">
                  <motion.img
                    src={dessinsAnimes}
                    alt="Dessins animés en arabe pour enfants musulmans — Daaru Al'Qurane"
                    className="w-full h-full object-contain"
                    loading="lazy"
                    width={800}
                    height={800}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                  />
                  <span className="absolute top-4 left-4 text-xs font-semibold uppercase tracking-wider text-primary bg-background/80 backdrop-blur-sm px-2 py-1 rounded-full">
                    Bibliothèque vidéo
                  </span>
                </div>

                <div className="p-8 flex flex-col">
                  <h2 className="font-display text-2xl md:text-3xl font-bold mb-3">
                    Dessins Animés en Arabe pour Enfants Musulmans
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    La première bibliothèque islamique pour enfants : plus de 112 dessins animés en arabe, 100% sécurisés et halal,
                    pour faire grandir vos enfants dans la langue du Coran tout en s'amusant.
                  </p>

                  <ul className="space-y-2 mb-6">
                    {features.map((f) => (
                      <li key={f.label} className="flex items-center gap-3 text-sm">
                        <f.icon className="h-5 w-5 text-primary shrink-0" />
                        <span>{f.label}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto flex items-center justify-between gap-4 flex-wrap">
                    <div>
                      <span className="text-3xl font-bold text-primary">27 €</span>
                      <span className="text-sm text-muted-foreground ml-2">accès à vie</span>
                    </div>
                    <Button asChild size="lg" className="bg-gradient-gold text-primary-foreground font-semibold hover:opacity-90">
                      <a href={PRODUCT_URL} target="_blank" rel="noopener noreferrer">
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        Acheter maintenant
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>

            <p className="text-center text-xs text-muted-foreground mt-6">
              Paiement sécurisé · Accès immédiat après l'achat
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Store;
