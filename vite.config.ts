import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    
    // Dynamic base path for GitHub Pages deployment
    // IMPORTANT: Update this to match your repository name when forking
    // This is intentionally hardcoded for this specific deployment
    // For different repos, change 'BrickellLandingPageNewRealtors' below
    const base = mode === 'production' 
      ? '/BrickellLandingPageNewRealtors/' 
      : '/';

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
