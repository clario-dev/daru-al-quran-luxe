import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Eye } from "lucide-react";
import quranDeskImg from "@/assets/quran-desk.jpg";
import studentReadingImg from "@/assets/student-reading.jpg";
import childWritingImg from "@/assets/child-writing.jpg";

const products = [
  { id: 1, title: "eBook Règles de Tajweed", description: "Guide complet du Tajweed avec exemples et exercices.", price: "19 $", type: "eBook", image: quranDeskImg },
  { id: 2, title: "Cahier d'alphabet arabe", description: "Feuilles d'exercices pour maîtriser l'écriture et les formes des lettres arabes.", price: "12 $", type: "eBook", image: childWritingImg },
  { id: 3, title: "Série Récitation du Coran", description: "10 leçons enregistrées couvrant les bases de la Sourate Al-Fatiha à An-Nas.", price: "39 $", type: "Vidéo", image: studentReadingImg },
  { id: 4, title: "Guide des Adhkar quotidiens", description: "Invocations du matin et du soir avec translittération.", price: "9 $", type: "eBook", image: quranDeskImg },
  { id: 5, title: "Flashcards arabe enfants", description: "Cartes imprimables avec vocabulaire et illustrations.", price: "15 $", type: "Numérique", image: childWritingImg },
  { id: 6, title: "Masterclass Tajweed", description: "Masterclass avancée de 8 heures enregistrée avec un Qari compétent.", price: "69 $", type: "Vidéo", image: studentReadingImg },, title: "Masterclass Tajweed", description: "Masterclass avancée de 8 heures enregistrée avec un Qari compétent.", price: "69 $", type: "Vidéo", image: studentReadingImg },.", price: "69 $", type: "Vidéo", image: studentReadingImg },
];

const Store = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-32 pb-24">
        <div className="section-container">
          <AnimatedSection className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">Produits numériques</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold mt-3 mb-4">
              Notre <span className="text-gradient-gold">boutique</span>
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              eBooks, leçons enregistrées et guides pour accompagner votre apprentissage.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, i) => (
              <AnimatedSection key={product.id} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="group rounded-xl bg-gradient-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-glow-gold h-full flex flex-col overflow-hidden"
                >
                  <div className="relative h-44 overflow-hidden">
                    <motion.img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      width={800}
                      height={600}
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.5 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                    <span className="absolute top-3 left-3 text-xs font-semibold uppercase tracking-wider text-primary bg-background/80 backdrop-blur-sm px-2 py-1 rounded-full">
                      {product.type}
                    </span>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-display text-lg font-semibold mb-2">{product.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed flex-1">{product.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-primary">{product.price}</span>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="border-border hover:border-primary/30">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button size="sm" className="bg-gradient-gold text-primary-foreground font-semibold hover:opacity-90">
                          <ShoppingCart className="h-4 w-4 mr-1" />
                          Acheter
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Store;
