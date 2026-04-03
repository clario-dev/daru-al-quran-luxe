import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-32 pb-24">
        <div className="section-container">
          <AnimatedSection className="text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">Nous contacter</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold mt-3 mb-4">
              Contactez-<span className="text-gradient-gold">nous</span>
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Vous avez des questions ? Nous serions ravis de vous entendre. Écrivez-nous et nous vous répondrons rapidement.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <AnimatedSection>
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Nom</label>
                    <Input placeholder="Votre nom" className="bg-secondary/50 border-border focus:border-primary" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Email</label>
                    <Input type="email" placeholder="vous@email.com" className="bg-secondary/50 border-border focus:border-primary" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Sujet</label>
                  <Input placeholder="Comment pouvons-nous vous aider ?" className="bg-secondary/50 border-border focus:border-primary" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Message</label>
                  <Textarea rows={5} placeholder="Votre message..." className="bg-secondary/50 border-border focus:border-primary resize-none" />
                </div>
                <Button type="submit" size="lg" className="w-full bg-gradient-gold text-primary-foreground font-semibold hover:opacity-90">
                  Envoyer le message
                </Button>
              </form>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="space-y-6">
                {[
                  { icon: Mail, label: "Email", value: "info@daarualqurane.com", href: "mailto:info@daarualqurane.com" },
                  { icon: Phone, label: "Téléphone", value: "+229 XX XX XX XX", href: "tel:+22900000000" },
                  { icon: MessageCircle, label: "WhatsApp", value: "Discutez avec nous sur WhatsApp", href: "https://wa.me/22900000000" },
                  { icon: MapPin, label: "Adresse", value: "Parakou, Bénin", href: null },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4 p-5 rounded-xl bg-gradient-card border border-border">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm mb-0.5">{item.label}</h3>
                      {item.href ? (
                        <a href={item.href} className="text-sm text-muted-foreground hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm text-muted-foreground">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;