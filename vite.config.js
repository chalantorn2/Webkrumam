// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
  plugins: [
    react(),
    visualizer({
      open: true,
      gzipSize: true,
      brotliSize: true,
    }),
  ],
  build: {
    // ใช้ esbuild minifier แทน terser (เร็วกว่า)
    minify: "esbuild",
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom"],
          router: ["react-router-dom"],
          vendor: ["react-slick", "slick-carousel"],
        },
      },
    },
    assetsInlineLimit: 4096, // ไฟล์เล็กกว่า 4kb จะถูก inline เป็น base64
  },
});
