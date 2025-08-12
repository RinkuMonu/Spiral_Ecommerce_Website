import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    host: '0.0.0.0',
    port: 5174,
    mimeTypes: {
      'js': 'application/javascript',
      'mjs': 'application/javascript',
      'css': 'text/css',
      'wasm': 'application/wasm'
    }
  },
  build: {
    outDir: 'dist',
  }
});

