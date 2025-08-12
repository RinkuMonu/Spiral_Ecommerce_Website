import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './', // relative paths ताकि Cloudflare सही serve करे
  build: {
    outDir: 'dist',
    assetsDir: '', // कभी-कभी sub-folder issue खत्म करने के लिए
  },
});
