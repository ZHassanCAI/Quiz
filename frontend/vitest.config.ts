import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react';
import viteEnvCompatiblePlugin from 'vite-plugin-env-compatible';

export default defineConfig({
  plugins: [react(),
    (viteEnvCompatiblePlugin as any)({      
      dotenvFile: '.env'
    })
  ],  
  resolve: {
    alias: {
      '@components': '/src/components',
      '@utils': '/src/utils',
      '@hooks':'/src/hooks',
      '@api':'/src/api',          
    },
  }, 
  test: {
    environment: 'jsdom',
    setupFiles: ['./setup.ts'],
  },
})