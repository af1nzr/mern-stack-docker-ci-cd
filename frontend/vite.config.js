import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  root: '.', // Ensure root is set properly if index.html is not at root
  build: {
    outDir: 'dist',
  },
})
