import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  base: '/', // Changed from './' to ensure proper absolute paths
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: undefined // Ensures single bundle for SPA
      }
    }
  },
  server: {
    historyApiFallback: true // Important for SPA routing
  }
});