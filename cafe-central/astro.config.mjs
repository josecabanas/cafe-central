import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  // Mudar para o domínio do cliente (igual a site.url em src/config.ts)
  site: "https://cafecentral.pt",
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
