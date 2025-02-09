import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Default build directory
  },
  server: {
    port: 3000, // Local dev server port
  },
  resolve: {
    alias: {
      '@': '/src', // Optional: Adjust if needed
    },
  },
});