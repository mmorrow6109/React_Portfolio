import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
  },
  // Removed external configuration
  // build: {
  //   rollupOptions: {
  //     external: [
  //       '/src/main.jsx', // Remove this line
  //       // add any other external modules here if needed
  //     ],
  //   },
  // },
});
