import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { imagetools } from "vite-imagetools";
import sitemap from "vite-plugin-sitemap";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    react(),
    imagetools({
      defaultDirectives: (url) => {
        // Auto-optimisation pour les images de blog: génère srcset multi-tailles en webp
        if (url.searchParams.has("responsive")) {
          return new URLSearchParams({
            format: "webp",
            quality: "72",
            w: "480;800;1200;1600",
            as: "srcset",
          });
        }
        return new URLSearchParams();
      },
    }),
    // Génération automatique du sitemap.xml
    sitemap({
      hostname: "https://daarualqurane.com",
      dynamicRoutes: [
        "/",
        "/courses",
        "/courses/coran",
        "/courses/arabe",
        "/store",
        "/about",
        "/contact",
        "/blog",
        "/privacy",
        "/cgv",
        "/cookies",
      ],
      outDir: "dist",
      generateRobotsTxt: true,
      robots: {
        policies: [
          {
            userAgent: "*",
            allow: "/",
            disallow: ["/admin", "/api"],
          },
        ],
      },
    }),
    mode === "development" && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime", "@tanstack/react-query", "@tanstack/query-core"],
  },
  build: {
    // Optimisation du bundle pour la production
    target: "esnext",
    minify: "esbuild",
    cssMinify: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom", "react-router-dom"],
          ui: ["@radix-ui/*", "class-variance-authority", "clsx", "tailwind-merge"],
          charts: ["recharts", "d3-array", "d3-color", "d3-scale", "d3-shape"],
        },
      },
    },
  },
}));
