import { resolve } from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
  base: "./",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        settings: resolve(__dirname, "settings.html"),
        ecommerce: resolve(__dirname, "E-Commerce/index.html"),
        buero: resolve(__dirname, "Büromanagement/index.html"),
        wartung: resolve(__dirname, "Wartung/index.html"),
      },
    },
  },
});
