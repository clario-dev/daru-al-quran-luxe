import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Cookies = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <article className="pt-32 pb-20">
        <div className="section-container max-w-3xl">
          <h1 className="font-display text-4xl md:text-5xl font-semibold mb-6">Politique de cookies (UE)</h1>
          <p className="text-sm text-muted-foreground mb-10">Dernière mise à jour : {new Date().toLocaleDateString("fr-FR")}</p>

          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <section>
              <h2 className="font-display text-2xl text-foreground mb-3">1. Qu'est-ce qu'un cookie ?</h2>
              <p>Un cookie est un petit fichier texte déposé sur votre appareil lors de la consultation d'un site web. Il permet de mémoriser certaines informations afin d'améliorer votre expérience.</p>
            </section>
            <section>
              <h2 className="font-display text-2xl text-foreground mb-3">2. Cookies utilisés sur ce site</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Cookies essentiels</strong> : nécessaires au fonctionnement du site (préférences, panier). Pas de consentement requis.</li>
                <li><strong>Cookies de mesure d'audience</strong> : statistiques anonymisées (pages vues). Soumis à votre consentement.</li>
                <li><strong>Cookies tiers</strong> : déposés par des prestataires (Zoom, plateforme de paiement Chariow/Stripe). Soumis à leur propre politique.</li>
              </ul>
            </section>
            <section>
              <h2 className="font-display text-2xl text-foreground mb-3">3. Vos choix</h2>
              <p>Conformément au RGPD et à la directive ePrivacy, vous pouvez à tout moment accepter ou refuser les cookies non essentiels via le bandeau de consentement, ou directement dans les paramètres de votre navigateur :</p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>Chrome : Paramètres &rsaquo; Confidentialité &rsaquo; Cookies</li>
                <li>Firefox : Options &rsaquo; Vie privée &rsaquo; Cookies</li>
                <li>Safari : Préférences &rsaquo; Confidentialité</li>
                <li>Edge : Paramètres &rsaquo; Cookies et autorisations de site</li>
              </ul>
            </section>
            <section>
              <h2 className="font-display text-2xl text-foreground mb-3">4. Durée de conservation</h2>
              <p>Les cookies sont conservés pour une durée maximale de 13 mois, conformément aux recommandations de la CNIL (France) et du Comité européen de la protection des données (EDPB).</p>
            </section>
            <section>
              <h2 className="font-display text-2xl text-foreground mb-3">5. Contact</h2>
              <p>Pour toute question relative à cette politique : <a href="mailto:contact@daarualqurane.com" className="text-primary hover:underline">contact@daarualqurane.com</a></p>
            </section>
          </div>
        </div>
      </article>
      <Footer />
    </div>
  );
};

export default Cookies;
