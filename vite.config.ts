import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === "build" ? "/nextweave2026/" : "/",  // dev 用 / ，build 才加 /nextweave2026/
}));
