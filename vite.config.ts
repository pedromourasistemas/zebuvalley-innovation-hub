// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig({
  // base: "/", // pode omitir; na Vercel a raiz já é correta
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist",
  },
});

/*export default defineConfig(({ mode }) => ({
  // 👇 se o site for servido em /zebuvalley-innovation-hub/
  // (por exemplo no GitHub Pages ou subpasta de servidor)
  base: mode === "production" ? "/zebuvalley-innovation-hub/" : "/",

  server: {
    host: "::", // deixa acessível na rede local
    port: 8080,
  },

  plugins: [
    react(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));*/

