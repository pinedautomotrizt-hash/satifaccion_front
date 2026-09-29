import { defineConfig } from 'astro/config';

export default defineConfig({
  server: { port: 4321 },
  // Oculta la barra de herramientas de Astro que aparece abajo en modo desarrollo
  devToolbar: { enabled: false },
});
