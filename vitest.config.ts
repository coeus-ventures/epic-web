import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./"),
    },
  },
  test: {
    environment: "node",
    setupFiles: "./vitest.setup.ts",
    globals: true,
    fileParallelism: false,
    pool: "forks",
    include: [
      "**/*.test.ts",
      "**/*.test.tsx",
      "**/*.unit.ts",
      "**/*.integration.ts",
    ],
    exclude: [
      "**/node_modules/**",
      "**/dist/**",
      "**/.next/**",
      "**/playwright-report/**",
      "**/test-results/**",
      "**/lib/b-test/tests/**", // Exclude Playwright-based tests (use spec tests instead)
    ],
  },
});
