// vite.config.js
import { defineConfig } from "file:///Users/hyun/workspace/h-design-system/node_modules/vite/dist/node/index.js";
import { fileURLToPath } from "node:url";
import dts from "file:///Users/hyun/workspace/h-design-system/node_modules/vite-plugin-dts/dist/index.mjs";
import react from "file:///Users/hyun/workspace/h-design-system/node_modules/@vitejs/plugin-react/dist/index.mjs";
import path from "path";
var __vite_injected_original_import_meta_url = "file:///Users/hyun/workspace/h-design-system/vite.config.js";
var __dirname = fileURLToPath(new URL(".", __vite_injected_original_import_meta_url));
var vite_config_default = defineConfig({
  plugins: [react(), dts()],
  server: {
    port: 8080
  },
  resolve: {
    alias: [
      { find: "@components", replacement: path.resolve(__dirname, "src/components") },
      { find: "@styles", replacement: path.resolve(__dirname, "src/styles") },
      { find: "@utils", replacement: path.resolve(__dirname, "src/utils") }
    ]
  },
  css: {
    devSourcemap: true
  },
  build: {
    outDir: "dist",
    sourcemap: true,
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "MyLibrary",
      fileName: (format) => `index.${format}.js`,
      formats: ["es", "cjs"]
    },
    rollupOptions: {
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM"
        }
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvaHl1bi93b3Jrc3BhY2UvaC1kZXNpZ24tc3lzdGVtXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvaHl1bi93b3Jrc3BhY2UvaC1kZXNpZ24tc3lzdGVtL3ZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9oeXVuL3dvcmtzcGFjZS9oLWRlc2lnbi1zeXN0ZW0vdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHsgZmlsZVVSTFRvUGF0aCB9IGZyb20gJ25vZGU6dXJsJ1xuaW1wb3J0IGR0cyBmcm9tICd2aXRlLXBsdWdpbi1kdHMnO1xuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0J1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcblxuY29uc3QgX19kaXJuYW1lID0gZmlsZVVSTFRvUGF0aChuZXcgVVJMKCcuJywgaW1wb3J0Lm1ldGEudXJsKSlcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW3JlYWN0KCksIGR0cygpXSxcbiAgc2VydmVyOiB7XG4gICAgcG9ydDogODA4MCxcbiAgfSxcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiBbXG4gICAgICB7IGZpbmQ6IFwiQGNvbXBvbmVudHNcIiwgcmVwbGFjZW1lbnQ6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwic3JjL2NvbXBvbmVudHNcIikgfSxcbiAgICAgIHsgZmluZDogXCJAc3R5bGVzXCIsIHJlcGxhY2VtZW50OiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcInNyYy9zdHlsZXNcIikgfSxcbiAgICAgIHsgZmluZDogXCJAdXRpbHNcIiwgcmVwbGFjZW1lbnQ6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwic3JjL3V0aWxzXCIpIH0sXG4gICAgXVxuICB9LFxuICBjc3M6IHtcbiAgICBkZXZTb3VyY2VtYXA6IHRydWUsXG4gIH0sXG4gIGJ1aWxkOiB7XG4gICAgb3V0RGlyOiAnZGlzdCcsXG4gICAgc291cmNlbWFwOiB0cnVlLFxuICAgIGxpYjoge1xuICAgICAgZW50cnk6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMvaW5kZXgudHMnKSxcbiAgICAgIG5hbWU6ICdNeUxpYnJhcnknLFxuICAgICAgZmlsZU5hbWU6IChmb3JtYXQpID0+IGBpbmRleC4ke2Zvcm1hdH0uanNgLFxuICAgICAgZm9ybWF0czogWydlcycsICdjanMnXSxcbiAgICB9LFxuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIG91dHB1dDoge1xuICAgICAgICBnbG9iYWxzOiB7XG4gICAgICAgICAgcmVhY3Q6ICdSZWFjdCcsXG4gICAgICAgICAgJ3JlYWN0LWRvbSc6ICdSZWFjdERPTScsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG59KVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFpUyxTQUFTLG9CQUFvQjtBQUM5VCxTQUFTLHFCQUFxQjtBQUM5QixPQUFPLFNBQVM7QUFDaEIsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sVUFBVTtBQUppSyxJQUFNLDJDQUEyQztBQU1uTyxJQUFNLFlBQVksY0FBYyxJQUFJLElBQUksS0FBSyx3Q0FBZSxDQUFDO0FBRTdELElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO0FBQUEsRUFDeEIsUUFBUTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEVBQUUsTUFBTSxlQUFlLGFBQWEsS0FBSyxRQUFRLFdBQVcsZ0JBQWdCLEVBQUU7QUFBQSxNQUM5RSxFQUFFLE1BQU0sV0FBVyxhQUFhLEtBQUssUUFBUSxXQUFXLFlBQVksRUFBRTtBQUFBLE1BQ3RFLEVBQUUsTUFBTSxVQUFVLGFBQWEsS0FBSyxRQUFRLFdBQVcsV0FBVyxFQUFFO0FBQUEsSUFDdEU7QUFBQSxFQUNGO0FBQUEsRUFDQSxLQUFLO0FBQUEsSUFDSCxjQUFjO0FBQUEsRUFDaEI7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLFFBQVE7QUFBQSxJQUNSLFdBQVc7QUFBQSxJQUNYLEtBQUs7QUFBQSxNQUNILE9BQU8sS0FBSyxRQUFRLFdBQVcsY0FBYztBQUFBLE1BQzdDLE1BQU07QUFBQSxNQUNOLFVBQVUsQ0FBQyxXQUFXLFNBQVMsTUFBTTtBQUFBLE1BQ3JDLFNBQVMsQ0FBQyxNQUFNLEtBQUs7QUFBQSxJQUN2QjtBQUFBLElBQ0EsZUFBZTtBQUFBLE1BQ2IsUUFBUTtBQUFBLFFBQ04sU0FBUztBQUFBLFVBQ1AsT0FBTztBQUFBLFVBQ1AsYUFBYTtBQUFBLFFBQ2Y7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
