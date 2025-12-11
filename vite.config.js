import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import obfuscatorPlugin from "vite-plugin-javascript-obfuscator";

const BASE = "/";

console.log("🚀 Using base:", BASE);

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    obfuscatorPlugin({
      include: ["src/**/*.{js,jsx,ts,tsx}"],
      exclude: [/node_modules/],
      apply: "build",
      debugger: true,
      options: {
        compact: true,
        controlFlowFlattening: false,
        deadCodeInjection: false,
        disableConsoleOutput: true,
        identifierNamesGenerator: "hexadecimal",
        selfDefending: false,
        stringArray: true,
        stringArrayThreshold: 0.75,
      },
    }),
  ],
  base: BASE,
  server: {
    port: 3000,
  },
  build: {
    sourcemap: false,
    minify: "esbuild",
  },
});
