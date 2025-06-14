import type { UserConfig } from "vite";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default () => {
  return defineConfig({
    plugins: [vue()],
  }) satisfies UserConfig;
};
