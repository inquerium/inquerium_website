import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5175, // Your frontend port
    proxy: {
      // 🔧 PROXY ALL /api REQUESTS TO BACKEND
      '/api': {
        target: 'http://localhost:3001', // Your backend server
        changeOrigin: true,
        secure: false,
        configure: (proxy, options) => {
          proxy.on('error', (err, req, res) => {
            console.log('🔥 Proxy error:', err);
          });
          proxy.on('proxyReq', (proxyReq, req, res) => {
            console.log('📡 Proxying request:', req.method, req.url);
          });
          proxy.on('proxyRes', (proxyRes, req, res) => {
            console.log('📨 Proxy response:', proxyRes.statusCode, req.url);
          });
        }
      }
    }
  }
})