import { Link, useParams, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Clock, ArrowLeft, ArrowRight, Calendar, Tag } from "lucide-react";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { blogPosts, getPostBySlug } from "@/data/blogPosts";
import MarkdownContent from "@/components/blog/MarkdownContent";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  useEffect(() => {
    if (!post) return;
    document.title = `${post.title} | Daaru Al Qurane`;

    const setMeta = (name: string, content: string, attr: "name" | "property" = "name") => {
      let m = document.querySelector(`meta[${attr}="${name}"]`);
      if (!m) {
        m = document.createElement("meta");
        m.setAttribute(attr, name);
        document.head.appendChild(m);
      }
      m.setAttribute("content", content);
    };

    setMeta("description", post.description);
    setMeta("keywords", post.keywords.join(", "));
    setMeta("og:title", post.title, "property");
    setMeta("og:description", post.description, "property");
    setMeta("og:type", "article", "property");
    setMeta("article:published_time", post.publishedAt, "property");

    // Canonical
    let link = document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", `https://daarualqurane.com/blog/${post.slug}`);

    // JSON-LD BlogPosting
    const existing = document.getElementById("ld-blogpost");
    if (existing) existing.remove();
    const script = document.createElement("script");
    script.id = "ld-blogpost";
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      description: post.description,
      keywords: post.keywords.join(", "),
      datePublished: post.publishedAt,
      inLanguage: "fr",
      author: { "@type": "Organization", name: "Daaru Al Qurane" },
      publisher: {
        "@type": "Organization",
        name: "Daaru Al Qurane",
        logo: { "@type": "ImageObject", url: "https://daarualqurane.com/favicon.png" },
      },
      mainEntityOfPage: `https://daarualqurane.com/blog/${post.slug}`,
    });
    document.head.appendChild(script);

    return () => {
      const s = document.getElementById("ld-blogpost");
      if (s) s.remove();
    };
  }, [post]);

  if (!post) return <Navigate to="/blog" replace />;

  const related = blogPosts.filter((p) => p.slug !== post.slug && p.category === post.category).slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-32 pb-20">
        {/* Hero */}
        <div className="relative">
          <div className="absolute inset-0 h-[60vh]">
            <img src={post.cover} alt={post.title} className="w-full h-full object-cover opacity-30" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/80 to-background" />
          </div>

          <div className="relative section-container pt-12 pb-8">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" /> Retour au blog
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-xs text-primary font-medium mb-4">
                {post.category}
              </span>
              <h1 className="font-display text-3xl md:text-5xl font-bold leading-tight mb-6">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center gap-5 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-primary" />
                  <time dateTime={post.publishedAt}>
                    {new Date(post.publishedAt).toLocaleDateString("fr-FR", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </time>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-primary" />
                  <span>{post.readingTime} min de lecture</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Content */}
        <article className="section-container max-w-3xl mt-8">
          <p className="text-lg text-foreground/90 leading-relaxed mb-8 italic border-l-2 border-primary pl-4">
            {post.excerpt}
          </p>

          <MarkdownContent content={post.content} />

          {/* Final CTA card */}
          <div className="mt-12 p-6 md:p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/30">
            <h3 className="font-display text-xl font-bold mb-3">
              Inscrivez-vous à Daaru Al Qurane
            </h3>
            <p className="text-muted-foreground mb-5">
              Étudiez le Coran et la langue arabe en direct avec des enseignants qualifiés,
              en français, depuis n'importe où en Europe.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-gradient-gold text-primary-foreground font-semibold shadow-glow-gold"
            >
              <a
                href="https://daaralquran.mychariow.shop/prd_ijq3ih/checkout"
                target="_blank"
                rel="noopener noreferrer"
              >
                S'inscrire maintenant <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>

          {/* Keywords */}
          <div className="mt-10 pt-8 border-t border-border">
            <div className="flex items-start gap-2 flex-wrap">
              <Tag className="h-4 w-4 text-primary mt-1" />
              {post.keywords.map((k) => (
                <span
                  key={k}
                  className="text-xs px-2 py-1 rounded-full bg-card border border-border text-muted-foreground"
                >
                  {k}
                </span>
              ))}
            </div>
          </div>
        </article>

        {/* Related */}
        {related.length > 0 && (
          <section className="section-container max-w-5xl mt-20">
            <h2 className="font-display text-2xl font-bold mb-8">À lire également</h2>
            <div className="grid md:grid-cols-3 gap-5">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  to={`/blog/${r.slug}`}
                  className="group rounded-xl bg-card border border-border overflow-hidden hover:border-primary/40 transition-all"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={r.cover}
                      alt={r.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-sm mb-1 group-hover:text-primary transition-colors line-clamp-2">
                      {r.title}
                    </h3>
                    <span className="text-xs text-muted-foreground">{r.readingTime} min</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;
