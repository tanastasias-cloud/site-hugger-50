// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  // We self-host on our own Node server (not Cloudflare Workers), and the
  // contact API route uses better-sqlite3, which needs a real Node.js
  // runtime with filesystem access — it can't run on Cloudflare's edge
  // runtime. This override only applies outside Lovable's own sandbox build,
  // which still forces the Cloudflare preset regardless of this setting.
  nitro: {
    preset: "node-server",
  },
});
