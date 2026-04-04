import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import mosqueImg from "@/assets/mosque-parakou.jpg";
import maleTeacherImg from "@/assets/male-teacher.jpg";
import teacherImg from "@/assets/teacher-portrait.jpg";

const maleContacts = [
  { icon: Phone, label: "Téléphone (Frères)", value: "01 95 11 99 20", href: "tel:+22901951199 20" },
  { icon: MessageCircle, label: "WhatsApp (Frères)", value: "Discutez avec nous", href: "https://wa.me/22901951199 20" },
  { icon: Mail, label: "Email (Frères)", value: "freres@daarualqurane.com", href: "mailto:freres@daarualqurane.com" },
];

const femaleContacts = [
  { icon: Phone, label: "Téléphone (Sœurs)", value: "01 47 98 47 61", href: "tel:+22901479847 61" },
  { icon: MessageCircle, label: "WhatsApp (Sœurs)", value: "Discutez avec nous", href: "https://wa.me/22901479847 61" },
  { icon: Mail, label: "Email (Sœurs)", value: "soeurs@daarualqurane.com", href: "mailto:soeurs@daarualqurane.com" },
];

const ContactCard = ({ item }: { item: typeof maleContacts[0] }) => (
  <motion.div
    whileHover={{ x: 5 }}
    transition={{ duration: 0.2 }}
    className="flex items-start gap-4 p-4 rounded-xl bg-gradient-card border border-border hover:border-primary/20 transition-all duration-300"
  >
    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
      <item.icon className="h-5 w-5 text-primary" />
    </div>
    <div>
      <h3 className="font-semibold text-sm mb-0.5">{item.label}</h3>
      <a href={item.href} className="text-sm text-muted-foreground hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
        {item.value}
      </a>
    </div>
  </motion.div>
);

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero with mosque */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <motion.img
            src={mosqueImg}
            alt=""
            className="w-full h-full object-cover opacity-15"
            loading="lazy"
            width={1200}
            height={675}
            initial={{ scale: 1.15 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeOut" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/90 to-background" />
        </div>
        <div className="relative section-container text-center">
          <AnimatedSection>
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">Nous contacter</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold mt-3 mb-4">
              Contactez-<span className="text-gradient-gold">nous</span>
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Vous avez des questions ? Nous serions ravis de vous entendre. Écrivez-nous et nous vous répondrons rapidement.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact sections: Male & Female */}
      <section className="pb-12">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Section Frères */}
            <AnimatedSection>
              <div className="rounded-2xl border border-border bg-gradient-card p-6 h-full">
                <div className="flex items-center gap-4 mb-6">
                  <motion.div
                    className="w-16 h-16 rounded-xl overflow-hidden border border-border shrink-0"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img src={maleTeacherImg} alt="Contact frères" className="w-full h-full object-cover" loading="lazy" width={64} height={64} />
                  </motion.div>
                  <div>
                    <h2 className="font-display text-xl font-bold">Section <span className="text-gradient-gold">Frères</span></h2>
                    <p className="text-sm text-muted-foreground">Contact pour les hommes</p>
                  </div>
                </div>
                <div className="space-y-3">
                  {maleContacts.map((item) => (
                    <ContactCard key={item.label} item={item} />
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Section Sœurs */}
            <AnimatedSection delay={0.15}>
              <div className="rounded-2xl border border-border bg-gradient-card p-6 h-full">
                <div className="flex items-center gap-4 mb-6">
                  <motion.div
                    className="w-16 h-16 rounded-xl overflow-hidden border border-border shrink-0"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img src={teacherImg} alt="Contact sœurs" className="w-full h-full object-cover" loading="lazy" width={64} height={64} />
                  </motion.div>
                  <div>
                    <h2 className="font-display text-xl font-bold">Section <span className="text-gradient-gold">Sœurs</span></h2>
                    <p className="text-sm text-muted-foreground">Contact pour les femmes</p>
                  </div>
                </div>
                <div className="space-y-3">
                  {femaleContacts.map((item) => (
                    <ContactCard key={item.label} item={item} />
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Adresse commune */}
          <AnimatedSection delay={0.3} className="mt-8">
            <motion.div
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
              className="flex items-start gap-4 p-5 rounded-xl bg-gradient-card border border-border hover:border-primary/20 transition-all duration-300 max-w-md mx-auto"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-sm mb-0.5">Adresse</h3>
                <p className="text-sm text-muted-foreground">Parakou, Bénin</p>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* Formulaire */}
      <section className="pb-24">
        <div className="section-container max-w-2xl">
          <AnimatedSection>
            <h2 className="font-display text-2xl font-bold text-center mb-8">
              Envoyez-nous un <span className="text-gradient-gold">message</span>
            </h2>
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
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
