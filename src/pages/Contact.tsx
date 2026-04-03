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
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">Get in Touch</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold mt-3 mb-4">
              Contact <span className="text-gradient-gold">Us</span>
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Have questions? We'd love to hear from you. Reach out and we'll respond promptly.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <AnimatedSection>
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Name</label>
                    <Input placeholder="Your name" className="bg-secondary/50 border-border focus:border-primary" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Email</label>
                    <Input type="email" placeholder="you@email.com" className="bg-secondary/50 border-border focus:border-primary" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Subject</label>
                  <Input placeholder="How can we help?" className="bg-secondary/50 border-border focus:border-primary" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Message</label>
                  <Textarea rows={5} placeholder="Your message..." className="bg-secondary/50 border-border focus:border-primary resize-none" />
                </div>
                <Button type="submit" size="lg" className="w-full bg-gradient-gold text-primary-foreground font-semibold hover:opacity-90">
                  Send Message
                </Button>
              </form>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="space-y-6">
                {[
                  { icon: Mail, label: "Email", value: "info@daarualqurane.com", href: "mailto:info@daarualqurane.com" },
                  { icon: Phone, label: "Phone", value: "+229 XX XX XX XX", href: "tel:+22900000000" },
                  { icon: MessageCircle, label: "WhatsApp", value: "Chat with us on WhatsApp", href: "https://wa.me/22900000000" },
                  { icon: MapPin, label: "Location", value: "Parakou, Benin", href: null },
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
