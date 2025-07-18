import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    allowedHosts: [".loca.lt"],
  },
});

// Blocked request. This host ("rare-bats-talk.loca.lt") is not allowed.
// To allow this host, add "rare-bats-talk.loca.lt" to `server.allowedHosts` in vite.config.js.
