import { defineConfig } from 'vite'; // <--- THIS LINE IS MISSING
import react from '@vitejs/plugin-react'; // (or whatever plugin you use)

export default defineConfig({
  plugins: [react()],
  // ... rest of your config
});