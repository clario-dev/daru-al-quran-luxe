import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Eye } from "lucide-react";

const products = [
  { id: 1, title: "eBook Règles de Tajweed", description: "Guide complet du Tajweed avec exemples et exercices.", price: "19 $", type: "eBook", image: "📖" },
  { id: 2, title: "Cahier d'alphabet arabe", description: "Feuilles d'exercices pour maîtriser l'écriture et les formes des lettres arabes.", price: "12 $", type: "eBook", image: "✍️" },
  { id: 3, title: "Série Récitation du Coran", description: "10 leçons enregistrées couvrant les bases de la Sourate Al-Fatiha à An-Nas.", price: "39 $", type: "Vidéo", image: "🎬" },
  { id: 4, title: "Guide des Adhkar quotidiens", description: "Invocations du matin et du soir avec translittération.", price: "9 $", type: "eBook", image: "🤲" },
  { id: 5, title: "Flashcards arabe enfants", description: "Cartes imprimables avec vocabulaire et illustrations.", price: "15 $", type: "Numérique", image: "🃏" },
  { id: 6, title: "Masterclass Tajweed", description: "Masterclass avancée de 8 heures enregistrée avec un Qari certifié.", price: "69 $", type: "Vidéo", image: "🎓" },
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
                <div className="group p-6 rounded-xl bg-gradient-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-glow-gold h-full flex flex-col">
                  <div className="w-full h-40 rounded-lg bg-secondary/50 flex items-center justify-center text-5xl mb-4">
                    {product.image}
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary mb-1">{product.type}</span>
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