import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('framer-motion')) {
            return 'motion'
          }

          if (
            id.includes('@react-three') ||
            id.includes('/three/') ||
            id.includes('\\three\\')
          ) {
            return 'react-three'
          }

          return undefined
        },
      },
    },
  },
})
