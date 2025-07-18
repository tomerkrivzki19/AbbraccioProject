import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],

  server: {
    allowedHosts: [".loca.lt"],
    host: true, // This makes the server accessible on your network
    port: 5173, // Keep the default port (or change it if needed)
  },
});

// Blocked request. This host ("rare-bats-talk.loca.lt") is not allowed.
// To allow this host, add "rare-bats-talk.loca.lt" to `server.allowedHosts` in vite.config.js.
