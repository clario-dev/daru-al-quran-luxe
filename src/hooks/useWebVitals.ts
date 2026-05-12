import * as React from "react";

interface WebVitalsMetric {
  id: string;
  name: string;
  value: number;
  rating: "good" | "needs-improvement" | "poor";
  delta: number;
  entries: (PerformanceEntry | object)[];
  navigationType: "navigate" | "reload" | "back-forward-cache" | "prerender" | "restore";
}

type MetricCallback = (metric: WebVitalsMetric) => void;

export function useWebVitals(onReport?: (metric: WebVitalsMetric) => void) {
  const [metrics, setMetrics] = React.useState<Record<string, number>>({});
  const [isSupported, setIsSupported] = React.useState(false);

  React.useEffect(() => {
    let mounted = true;
    let cleanupFns: (() => void)[] = [];

    const reportMetric = (metric: WebVitalsMetric) => {
      if (!mounted) return;
      
      setMetrics(prev => ({
        ...prev,
        [metric.name]: metric.value,
      }));

      onReport?.(metric);
      
      // Log to console in development
      if (process.env.NODE_ENV === "development") {
        console.log(`[Web Vitals] ${metric.name}:`, {
          value: metric.value,
          rating: metric.rating,
        });
      }
    };

    const initWebVitals = async () => {
      try {
        const { onCLS, onFID, onFCP, onLCP, onTTFB } = await import("web-vitals");

        setIsSupported(true);

        cleanupFns = [
          () => onCLS(reportMetric),
          () => onFID(reportMetric),
          () => onFCP(reportMetric),
          () => onLCP(reportMetric),
          () => onTTFB(reportMetric),
        ].map(fn => fn());

      } catch (error) {
        console.warn("Web Vitals not supported:", error);
        setIsSupported(false);
      }
    };

    initWebVitals();

    return () => {
      mounted = false;
      cleanupFns.forEach(fn => fn?.());
    };
  }, [onReport]);

  return { metrics, isSupported };
}

// Thresholds according to Google's recommendations
export const WEB_VITALS_THRESHOLDS = {
  LCP: { good: 2500, poor: 4000 }, // ms
  FID: { good: 100, poor: 300 }, // ms
  CLS: { good: 0.1, poor: 0.25 }, // score
  FCP: { good: 1800, poor: 3000 }, // ms
  TTFB: { good: 800, poor: 1800 }, // ms
};

export function getRating(metricName: string, value: number): "good" | "needs-improvement" | "poor" {
  const thresholds = WEB_VITALS_THRESHOLDS[metricName as keyof typeof WEB_VITALS_THRESHOLDS];
  if (!thresholds) return "needs-improvement";
  
  if (value <= thresholds.good) return "good";
  if (value <= thresholds.poor) return "needs-improvement";
  return "poor";
}
