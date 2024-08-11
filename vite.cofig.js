import { defineConfig } from 'vite';

export default defineConfig({
  base: "/Jokeapp/",
  build: {
    rollupOptions: {
      output: {
        assetFileNames: 'style/[name][extname]', // Speichert CSS-Datei ohne Hash
      },
    },
  },
});
