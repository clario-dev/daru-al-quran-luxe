import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Clock, ArrowRight, BookOpen } from "lucide-react";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { blogPosts, blogCategories } from "@/data/blogPosts";

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState<string>("Tous");

  useEffect(() => {
    document.title = "Blog Coran & Arabe — Conseils, méthodes & guides | Daaru Al Qurane";
    const meta = document.querySelector('meta[name="description"]');
    const desc = "Articles SEO sur l'apprentissage du Coran, du tajwid et de la langue arabe en ligne. Conseils pratiques pour francophones de France, Belgique et Suisse.";
    if (meta) meta.setAttribute("content", desc);
    else {
      const m = document.createElement("meta");
      m.name = "description";
      m.content = desc;
      document.head.appendChild(m);
    }
  }, []);

  const filtered =
    activeCategory === "Tous"
      ? blogPosts
      : blogPosts.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-28 pb-20">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-6">
              <BookOpen className="h-4 w-4 text-primary" />
              <span className="text-xs font-medium text-primary uppercase tracking-wider">
                Articles & guides
              </span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Blog <span className="text-gradient-gold">Coran & Arabe</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Conseils, méthodes et guides pour apprendre le Coran, le tajwid et la langue
              arabe en ligne — pour la France, la Belgique, la Suisse et toute l'Europe
              francophone.
            </p>
          </motion.div>

          {/* Categories filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {["Tous", ...blogCategories].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-gradient-gold text-primary-foreground shadow-glow-gold"
                    : "bg-card text-muted-foreground border border-border hover:text-primary hover:border-primary/40"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Posts grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((post, idx) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (idx % 6) * 0.05 }}
                className="group rounded-2xl bg-card border border-border overflow-hidden hover:border-primary/40 transition-all hover:shadow-glow-gold"
              >
                <Link to={`/blog/${post.slug}`} className="block">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={post.cover}
                      alt={post.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                    <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-background/80 backdrop-blur text-xs text-primary font-medium border border-primary/30">
                      {post.category}
                    </span>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                      <Clock className="h-3 w-3" />
                      <span>{post.readingTime} min de lecture</span>
                    </div>
                    <h2 className="font-display text-lg font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed mb-4">
                      {post.excerpt}
                    </p>
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
                      Lire l'article <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-20 text-center">
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
              Prêt à passer à la pratique ?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-6">
              Lire des articles est utile, mais rien ne remplace un enseignant qualifié en
              direct. Inscrivez-vous dès aujourd'hui à Daaru Al Qurane.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-gradient-gold text-primary-foreground font-semibold px-8 shadow-glow-gold"
            >
              <a
                href="https://daaralquran.mychariow.shop/prd_ijq3ih/checkout"
                target="_blank"
                rel="noopener noreferrer"
              >
                S'inscrire <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
