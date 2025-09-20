import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

const BASE = process.env.VITE_BASE_URL !== undefined ? process.env.VITE_BASE_URL : process.env.NODE_ENV === "production" ? "/pranav_dev/" : "/";

console.log("🚀 Using base:", BASE);

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: BASE,
  server: {
    port: 3000,
  },
});
