import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base "./" makes asset links relative, so the site works on GitHub Pages
// under any repo name (https://username.github.io/repo-name/).
export default defineConfig({
  base: "./",
  plugins: [react()],
});
