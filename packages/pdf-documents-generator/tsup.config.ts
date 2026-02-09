import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["cjs", "esm"],
  dts: true,
  sourcemap: true,
  minify: false,
  splitting: false,
  clean: true,
  treeshake: true,
  target: "ES2022",
  outDir: "dist"
});
