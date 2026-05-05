import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <article className="pt-32 pb-20">
        <div className="section-container max-w-3xl prose-invert">
          <h1 className="font-display text-4xl md:text-5xl font-semibold mb-6">Politique de confidentialité</h1>
          <p className="text-sm text-muted-foreground mb-10">Dernière mise à jour : {new Date().toLocaleDateString("fr-FR")}</p>

          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <section>
              <h2 className="font-display text-2xl text-foreground mb-3">1. Responsable du traitement</h2>
              <p>L'institut <strong>Daaru Al'Qurane</strong> est responsable du traitement des données personnelles collectées via le site. Pour toute question : <a href="mailto:contact@daarualqurane.com" className="text-primary hover:underline">contact@daarualqurane.com</a>.</p>
            </section>
            <section>
              <h2 className="font-display text-2xl text-foreground mb-3">2. Données collectées</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>Identité : prénom, nom, civilité.</li>
                <li>Coordonnées : email, téléphone, pays de résidence.</li>
                <li>Données de connexion : IP, logs techniques, type d'appareil.</li>
                <li>Données de paiement : traitées exclusivement par notre prestataire (Chariow / Stripe). Aucune donnée bancaire n'est stockée par l'institut.</li>
              </ul>
            </section>
            <section>
              <h2 className="font-display text-2xl text-foreground mb-3">3. Finalités</h2>
              <p>Vos données sont utilisées pour : la gestion de votre inscription, l'accès aux cours, la facturation, le suivi pédagogique, l'envoi d'informations pédagogiques et la conformité légale.</p>
            </section>
            <section>
              <h2 className="font-display text-2xl text-foreground mb-3">4. Base légale (RGPD)</h2>
              <p>Exécution du contrat (cours), consentement (newsletter), obligation légale (comptabilité), intérêt légitime (sécurité du site).</p>
            </section>
            <section>
              <h2 className="font-display text-2xl text-foreground mb-3">5. Durée de conservation</h2>
              <p>Données client : 3 ans après la fin de la relation. Données comptables : 10 ans (obligation légale). Cookies : 13 mois maximum.</p>
            </section>
            <section>
              <h2 className="font-display text-2xl text-foreground mb-3">6. Vos droits</h2>
              <p>Conformément au RGPD, vous disposez des droits d'accès, de rectification, d'effacement, de limitation, d'opposition et de portabilité. Pour les exercer : <a href="mailto:contact@daarualqurane.com" className="text-primary hover:underline">contact@daarualqurane.com</a>. Vous pouvez également déposer une réclamation auprès de la CNIL (France) ou de l'autorité de protection des données de votre pays.</p>
            </section>
            <section>
              <h2 className="font-display text-2xl text-foreground mb-3">7. Sécurité</h2>
              <p>Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données : chiffrement HTTPS, accès restreint, hébergement sécurisé.</p>
            </section>
            <section>
              <h2 className="font-display text-2xl text-foreground mb-3">8. Transferts hors UE</h2>
              <p>Certains prestataires (visioconférence Zoom, paiement) peuvent être situés hors de l'Union européenne. Nous nous assurons qu'ils respectent les clauses contractuelles types de la Commission européenne.</p>
            </section>
          </div>
        </div>
      </article>
      <Footer />
    </div>
  );
};

export default Privacy;
