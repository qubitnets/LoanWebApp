import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import autoprefixer from 'autoprefixer';
import path from 'path';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // Optional: You can change this port if needed
  },
  resolve: {
    alias: {
      '@':path.resolve(__dirname,'./src'), // Optional: For cleaner imports like '@/components/YourFile'
    },
  },
  css: {
  postcss: {
    plugins: [
      autoprefixer(), // Pass autoprefixer 
    ]
  },
  },
});
