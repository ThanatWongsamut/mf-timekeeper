import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig(async () => {
  const timestamp = Date.now();
  // call some function in mf-timekeeper to update the version of this app

  return {
    plugins: [react(),
      federation({
        name: "remote_app",
        filename: `${timestamp}_remoteEntry.js`,
        exposes: {
          "./SampleDialog": "./src/SampleDialog",
        },
        shared: ["react", "react-dom"],
      })
    ],
    build: {
      modulePreload: false,
      target: 'esnext',
      minify: false,
      cssCodeSplit: false
    }
  }
})
