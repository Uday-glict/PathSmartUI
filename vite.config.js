import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    outDir: 'dist', // Vercel expects this directory by default
  },
  base: '/', // ensures correct routing for SPAs on Vercel
  server: {
    port: 5173,
    open: true,
  },
})
