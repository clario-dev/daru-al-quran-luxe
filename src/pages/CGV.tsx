import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CGV = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <article className="pt-32 pb-20">
        <div className="section-container max-w-3xl">
          <h1 className="font-display text-4xl md:text-5xl font-semibold mb-6">Conditions Générales de Vente</h1>
          <p className="text-sm text-muted-foreground mb-10">Dernière mise à jour : {new Date().toLocaleDateString("fr-FR")}</p>

          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <section>
              <h2 className="font-display text-2xl text-foreground mb-3">1. Objet</h2>
              <p>Les présentes Conditions Générales de Vente (CGV) régissent les relations entre <strong>Daaru Al'Qurane</strong> (ci-après « l'Institut ») et toute personne souscrivant à un cours, programme ou produit numérique proposé sur ce site.</p>
            </section>
            <section>
              <h2 className="font-display text-2xl text-foreground mb-3">2. Services proposés</h2>
              <p>L'Institut propose des cours en ligne en direct (Coran, langue arabe, sciences religieuses) délivrés via la plateforme Zoom, ainsi que des produits numériques (bibliothèque vidéo).</p>
            </section>
            <section>
              <h2 className="font-display text-2xl text-foreground mb-3">3. Tarifs et paiement</h2>
              <p>Les tarifs sont indiqués en euros TTC sur les pages dédiées. Le paiement s'effectue en ligne par carte bancaire via le prestataire Chariow / Stripe, sécurisé par chiffrement SSL.</p>
            </section>
            <section>
              <h2 className="font-display text-2xl text-foreground mb-3">4. Droit de rétractation</h2>
              <p>Conformément aux articles L221-18 et suivants du Code de la consommation, le client dispose d'un délai de 14 jours pour se rétracter. <strong>Pour les contenus numériques</strong> téléchargés ou exécutés immédiatement, le client renonce expressément à son droit de rétractation au moment de l'achat.</p>
            </section>
            <section>
              <h2 className="font-display text-2xl text-foreground mb-3">5. Garantie satisfait ou remboursé</h2>
              <p>L'Institut propose une garantie commerciale « satisfait ou remboursé » de 7 jours à compter du premier cours, dans les conditions précisées sur la page d'accueil.</p>
            </section>
            <section>
              <h2 className="font-display text-2xl text-foreground mb-3">6. Engagements de l'Institut</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>Fournir un enseignant qualifié.</li>
                <li>Respecter le programme annoncé.</li>
                <li>Garantir la confidentialité des séances.</li>
                <li>Reprogrammer toute séance annulée par l'Institut.</li>
              </ul>
            </section>
            <section>
              <h2 className="font-display text-2xl text-foreground mb-3">7. Engagements du client</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>Assister régulièrement aux séances.</li>
                <li>Respecter l'enseignant et les autres élèves.</li>
                <li>Disposer de l'équipement requis (ordinateur/tablette, connexion stable, Zoom).</li>
              </ul>
            </section>
            <section>
              <h2 className="font-display text-2xl text-foreground mb-3">8. Propriété intellectuelle</h2>
              <p>Tous les contenus pédagogiques (vidéos, supports, enregistrements) restent la propriété exclusive de l'Institut. Toute reproduction ou diffusion non autorisée est interdite.</p>
            </section>
            <section>
              <h2 className="font-display text-2xl text-foreground mb-3">9. Médiation et droit applicable</h2>
              <p>Les présentes CGV sont soumises au droit français. En cas de litige, une solution amiable sera recherchée avant toute action judiciaire. Les consommateurs européens peuvent recourir à la plateforme RLL : <a href="https://ec.europa.eu/consumers/odr" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">ec.europa.eu/consumers/odr</a>.</p>
            </section>
            <section>
              <h2 className="font-display text-2xl text-foreground mb-3">10. Contact</h2>
              <p>Pour toute question : <a href="mailto:daaralqurane@gmail.com" className="text-primary hover:underline">daaralqurane@gmail.com</a></p>
            </section>
          </div>
        </div>
      </article>
      <Footer />
    </div>
  );
};

export default CGV;
