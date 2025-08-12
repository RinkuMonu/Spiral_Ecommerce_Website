import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    host: '0.0.0.0',
    port: 5174,
  },
  build: {
    outDir: 'dist',
  },
  base: './', // ये बहुत जरूरी है Cloudflare Pages के लिए
});
