import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import lottie from "astro-integration-lottie";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import markdoc from "@astrojs/markdoc";
import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  site: "https://galta.cl",
  integrations: [
    icon(),
    sitemap(),
    lottie(),
    react(),
    markdoc(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  adapter: vercel(),
});