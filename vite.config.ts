import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import mkcert from "vite-plugin-mkcert"

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [tsconfigPaths(), react(), mkcert()],
//   resolve: {
//     alias: {
//       "@": resolve(__dirname, "src")
//     },
//   },
//   server: {
//     port: 3000,
//     host: "0.0.0.0",
//   },
//   preview: {
//     port: 3000,
//     host: "0.0.0.0",
//   }
// })

export default defineConfig(({ mode }) => {

  if (mode === "development") {
    return {
      plugins: [tsconfigPaths(), mkcert(), react()],
      resolve: {
        alias: {
          "@": resolve(__dirname, "src")
        },
      },
      optimizeDeps: {
        include: [
          '@apollo/client/core',
          '@apollo/client/cache'
        ]
      },
      rollupInputOptions: {
        external: ['react']
      },
      server: {
        port: 3008,
        host: true,

      }
    }
  } else {
    return {
      plugins: [tsconfigPaths(), react()],
      resolve: {
        alias: {
          "@": resolve(__dirname, "src")
        }
      },
      preview: {
        host: "0.0.0.0",
        port: 3000
      }
    }
  }
})