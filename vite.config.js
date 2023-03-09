import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
      "@public": `${path.resolve(__dirname, "./public/")}`,
      "@components": `${path.resolve(__dirname, "./src/components/")}`,
      "@pages": `${path.resolve(__dirname, "./src/pages/")}`,
      "@images": `${path.resolve(__dirname, "./src/assets/images/")}`,
      "@contants": `${path.resolve(__dirname, "./src/contants/")}`,
      "@utils": `${path.resolve(__dirname, "./src/utils/")}`,
      "@redux": `${path.resolve(__dirname, "./src/redux/")}`,
    },
  },
});
