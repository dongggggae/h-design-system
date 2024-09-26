import { defineConfig } from 'vite'
import { fileURLToPath } from 'node:url'
import dts from 'vite-plugin-dts';
import react from '@vitejs/plugin-react'
import path from 'path'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

export default defineConfig({
  plugins: [react(), dts()],
  server: {
    port: 8080,
  },
  resolve: {
    alias: [
      { find: "@components", replacement: path.resolve(__dirname, "src/components") },
      { find: "@styles", replacement: path.resolve(__dirname, "src/styles") },
      { find: "@utils", replacement: path.resolve(__dirname, "src/utils") },
    ]
  },
  css: {
    devSourcemap: true,
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'MyLibrary',
      fileName: (format) => `index.${format}.js`,
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
})
