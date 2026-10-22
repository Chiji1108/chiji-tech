import tailwindcss from "@tailwindcss/vite";
import { defineConfig, fontProviders } from "astro/config";

export default defineConfig({
  site: "https://chiji.tech",
  // The pages are files (/paylog, not /paylog/), as the site's links name
  // them; Workers' static assets serve them without the slash.
  build: { format: "file" },
  trailingSlash: "never",
  fonts: [
    {
      provider: fontProviders.google(),
      name: "Geist",
      cssVariable: "--font-geist-sans",
      subsets: ["latin"],
      weights: ["100 900"],
    },
    {
      provider: fontProviders.google(),
      name: "Geist Mono",
      cssVariable: "--font-geist-mono",
      subsets: ["latin"],
      weights: ["100 900"],
      fallbacks: ["monospace"],
    },
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
