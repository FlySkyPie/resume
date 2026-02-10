import react from "@vitejs/plugin-react";
import vike from "vike/plugin";
import { defineConfig } from "vite";

export default defineConfig(({ command }) => {
  const base = command === 'serve' ?
    undefined :
    '/resume/';
  return {
    plugins: [vike(), react()],
    build: {
      target: "es2022",
    },
    base,
  };
});
