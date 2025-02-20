import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path"; // Ajout de l'import correct

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
