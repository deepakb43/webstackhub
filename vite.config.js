import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5500
  },
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'components')
    }
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: path.resolve(__dirname, 'client/public/index.html')
    }
  },
  root: './client'
})
