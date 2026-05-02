import { Link } from "react-router-dom";
import { Mail, Phone, Instagram } from "lucide-react";
import logo from "@/assets/logo.png";

// TikTok glyph SVG (lucide n'a pas l'icône)
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.7a8.16 8.16 0 0 0 4.77 1.52V6.78a4.85 4.85 0 0 1-1.84-.09Z" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card">
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4" aria-label="Daaru Al'Qurane — Accueil">
              <img src={logo} alt="Daaru Al'Qurane" className="h-20 w-auto" />
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5">
              Éducation en ligne premium de Coran & d'arabe — au service des étudiants francophones du monde entier.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.tiktok.com/@daar.alqurane?_r=1&_t=ZN-961V36sL57O"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok Daaru Al'Qurane"
                className="h-10 w-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
              >
                <TikTokIcon className="h-4 w-4" />
              </a>
              <a
                href="https://www.instagram.com/daar_al_qurane?igsh=eGh0aWpkbzlhdXYw"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Daaru Al'Qurane"
                className="h-10 w-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold mb-4 text-foreground">Liens rapides</h4>
            <div className="flex flex-col gap-2">
              {[
                { label: "Cours de Coran", path: "/courses/coran" },
                { label: "Cours d'Arabe", path: "/courses/arabe" },
                { label: "Boutique", path: "/store" },
                { label: "Blog", path: "/blog" },
                { label: "À propos", path: "/about" },
                { label: "Contact", path: "/contact" },
              ].map((link) => (
                <Link key={link.path} to={link.path} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold mb-4 text-foreground">Mentions légales</h4>
            <div className="flex flex-col gap-2">
              {[
                { label: "Politique de confidentialité", path: "/privacy" },
                { label: "Conditions générales (CGV)", path: "/cgv" },
                { label: "Politique de cookies", path: "/cookies" },
              ].map((link) => (
                <Link key={link.path} to={link.path} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold mb-4 text-foreground">Contact</h4>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <a href="mailto:daaralqurane@gmail.com" className="hover:text-primary transition-colors">daaralqurane@gmail.com</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <a href="mailto:daaralquranesoeurs@gmail.com" className="hover:text-primary transition-colors">daaralquranesoeurs@gmail.com</a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <a href="tel:+2290195119920" className="hover:text-primary transition-colors">+229 01 95 11 99 20</a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Daaru Al'Qurane. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
