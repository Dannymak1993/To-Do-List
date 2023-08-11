import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/To-Do-List/', // Adjust this to match your GitHub Pages subpath
});