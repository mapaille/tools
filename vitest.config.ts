import { defineConfig, mergeConfig } from "vitest/config";
import viteConfig from "./vite.config";

export default mergeConfig(
  viteConfig(),
  defineConfig({
    test: {
      globals: true,
      environment: "jsdom",
      setupFiles: [], // Add setup files here if needed in the future
      coverage: {
        reporter: ["text", "json", "html"],
        exclude: [
          "node_modules/",
          "src/js/", // Exclude compiled JS files
          "**/*.test.ts",
          "**/*.config.*",
        ],
      },
    },
  }),
);
