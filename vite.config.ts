import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::", // IPv6-os bindolás (0.0.0.0 helyett)
    port: 8080,
    allowedHosts: [
      "office60f91ab.ngrok-free.app", // pontos ngrok domain
      ".ngrok-free.app", // minden ngrok altartomány engedélyezése
      "revfalvi-art-2.onrender.com", // Render.com domain hozzáadva
      ".onrender.com", // minden Render altartomány engedélyezése
    ],
  },
  preview: {
    host: "::",
    port: 8080,
    allowedHosts: [
      "revfalvi-art-2.onrender.com", // Render.com domain hozzáadva
      ".onrender.com", // minden Render altartomány engedélyezése
    ],
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(
    Boolean
  ),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
