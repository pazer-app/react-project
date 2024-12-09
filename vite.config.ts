import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
export default defineConfig(({ mode }) => {
  const envFilePath = resolve(__dirname, `env/.env.${mode}`);
  const env = dotenv.config({ path: envFilePath }).parsed;
  if (!env) {
    throw new Error(`⚠️ Cannot find .env file at: ${envFilePath}`);
  }
  const viteEnv = Object.fromEntries(
      Object.entries(env).map(([key, val]) => [`process.env.${key}`, JSON.stringify(val)])
  );
  return {
    plugins: [react()],
    build: {
      outDir: `dist/${mode}`,
    },
    define: viteEnv,
    // server: {
    //   proxy: {
    //     '/api': {
    //       target: env.VITE_API_URL,
    //       changeOrigin: true,
    //       rewrite: (path) => path.replace(/^\/api/, ''),
    //     },
    //   },
    // },
  };
});
