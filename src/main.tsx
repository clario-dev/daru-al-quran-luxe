import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { useWebVitals } from "./hooks/useWebVitals";
import "./index.css";

// Composant wrapper pour initialiser Web Vitals
const AppWithWebVitals = () => {
  // Initialiser Web Vitals en production uniquement
  if (import.meta.env.PROD) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useWebVitals((metric) => {
      // Envoyer les métriques à un service d'analytics si configuré
      // Exemple: sendToAnalytics(metric);
      console.log("[Web Vitals]", metric.name, metric.value, metric.rating);
    });
  }

  return <App />;
};

createRoot(document.getElementById("root")!).render(<AppWithWebVitals />);
