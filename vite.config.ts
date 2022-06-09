import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  server: {
    proxy: {
      // 使用 proxy 实例
      '^/api': {
        target: 'http://192.168.72.24:3000',
        changeOrigin: true
      }
    }
  }
})
