import { defineConfig } from 'vite';

export default defineConfig({
  base: "/Jokeapp/",
  build: {
    rollupOptions: {
      output: {
        assetFileNames: 'assets/index-DhhNgao9.css', // Speichert CSS-Datei ohne Hash
      },
    },
  },
});
