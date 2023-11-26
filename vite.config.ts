import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      include: ['**/*.tsx', '**/*.ts']
    }),
    svgr({ include: '**/*.svg?react' })
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/styles" as *;`,
        importer(...args) {
          if (args[0] !== '@/styles') {
            return
          }
          return {
            file: `${resolve(__dirname, './src/styles')}`
          }
        }
      }
    }
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      styles: resolve(__dirname, './src/styles')
    }
  }
})
