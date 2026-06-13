import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react()],
  server: {
    port: 3000,
    allowedHosts:["kjasdbjksadbkasljdh0918273981273.onrender.com"],
  },
});
