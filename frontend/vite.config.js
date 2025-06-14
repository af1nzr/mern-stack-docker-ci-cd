import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  root: '.', // optional, only if you had custom structure
  build: {
    outDir: 'dist',
  },
})
