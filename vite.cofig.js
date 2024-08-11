import { defineConfig } from 'vite';

export default defineConfig({
  base: "/Jokeapp/",
  build: {
    rollupOptions: {
      output: {
        assetFileNames: 'style/style.css', // Anpassung des Namensschemas
      },
    },
  },
});
