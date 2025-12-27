import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

const BASE = "/";

console.log("🚀 Using base:", BASE);

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: BASE,
  server: {
    port: 3000,
  },
  build: {
    sourcemap: false,
    minify: "esbuild",
  },
});
