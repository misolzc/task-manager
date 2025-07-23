import { defineConfig } from "vite";

export default defineConfig({
  base: "/task-manager/",
  build: {
    outDir: "dist",
    assetsDir: "assets",
    sourcemap: true,
    minify: "esbuild",
  },
  server: {
    open: true,
  },
});
