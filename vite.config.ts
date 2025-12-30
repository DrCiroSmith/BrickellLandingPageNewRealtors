import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');

  // Dynamic base path
  // If deploying to Vercel, use root path.
  // If deploying to GitHub Pages (production mode), use repo name.
  const isVercel = process.env.VERCEL === '1';
  const base = isVercel ? '/' : (mode === 'production' ? '/BrickellLandingPageNewRealtors/' : '/');

  return {
    base,
    server: {
      port: 3000,
      host: '0.0.0.0',
    },
    plugins: [react()],
    define: {
      'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      }
    },
    build: {
      // Production optimizations
      outDir: 'dist',
      sourcemap: false,
      minify: 'esbuild',
      // Asset optimization
      assetsInlineLimit: 4096,
      cssCodeSplit: true
    }
  };
});
