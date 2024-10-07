import { defineConfig } from "tsup"

export default defineConfig({
  entry: ["src/index.ts"],
  clean: true,
  publicDir: true,
  external: ["@parcel/watcher"]
})
