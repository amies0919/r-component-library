import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  root: "./playground", // 设置 Vite 根目录
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "../src"), // 让 playground 直接访问组件库
    },
  },
});
