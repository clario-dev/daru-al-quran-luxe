import { Link } from "react-router-dom";
import { BookOpen, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card">
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <BookOpen className="h-6 w-6 text-primary" />
              <span className="font-display text-lg font-semibold">Daaru Al Qurane</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Éducation en ligne premium de Coran & d'arabe depuis Parakou, Bénin — au service des étudiants du monde entier.
            </p>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold mb-4 text-foreground">Liens rapides</h4>
            <div className="flex flex-col gap-2">
              {[
                { label: "Cours", path: "/courses" },
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
            <h4 className="font-display text-sm font-semibold mb-4 text-foreground">Programmes</h4>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <span>Récitation du Coran</span>
              <span>Langue arabe</span>
              <span>Maîtrise du Tajweed</span>
              <span>Programme enfants</span>
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold mb-4 text-foreground">Contact</h4>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Parakou, Bénin</span>
              </div>
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
          © {new Date().getFullYear()} Daaru Al Qurane. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
};

export default Footer;