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
    },
    watch: {
      usePolling: true,
    },
    strictPort: true,
    port: 3000,
    host: true,
    cors: true,
  },
  plugins: [react(), tsconfigPaths()],
})
