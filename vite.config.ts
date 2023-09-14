import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/news-api': {
        target: 'https://newsapi.org/v2',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/news-api/, ''),
      },
      '/articles-api': {
        target: 'http://localhost:4200',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/articles-api/, ''),
      },
    },
    watch: {
      usePolling: true,
    },
    host: true,
    strictPort: true,
    port: 5173,
  },
  plugins: [react(), tsconfigPaths()],
})
