// vite.config.ts
import { defineConfig } from "file:///C:/Users/Duvan%20Florez/Workspace/cs3/censo_web/node_modules/vite/dist/node/index.js";
import { resolve } from "path";
import react from "file:///C:/Users/Duvan%20Florez/Workspace/cs3/censo_web/node_modules/@vitejs/plugin-react/dist/index.mjs";
import tsconfigPaths from "file:///C:/Users/Duvan%20Florez/Workspace/cs3/censo_web/node_modules/vite-tsconfig-paths/dist/index.mjs";
import mkcert from "file:///C:/Users/Duvan%20Florez/Workspace/cs3/censo_web/node_modules/vite-plugin-mkcert/dist/mkcert.mjs";
var __vite_injected_original_dirname = "C:\\Users\\Duvan Florez\\Workspace\\cs3\\censo_web";
var vite_config_default = defineConfig(({ mode }) => {
  if (mode === "development") {
    return {
      plugins: [tsconfigPaths(), mkcert(), react()],
      resolve: {
        alias: {
          "@": resolve(__vite_injected_original_dirname, "src")
        }
      },
      optimizeDeps: {
        include: [
          "@apollo/client/core",
          "@apollo/client/cache"
        ]
      },
      rollupInputOptions: {
        external: ["react"]
      },
      server: {
        port: 3008,
        host: true
      }
    };
  } else {
    return {
      plugins: [tsconfigPaths(), react()],
      resolve: {
        alias: {
          "@": resolve(__vite_injected_original_dirname, "src")
        }
      },
      preview: {
        host: "0.0.0.0",
        port: 3e3
      }
    };
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxEdXZhbiBGbG9yZXpcXFxcV29ya3NwYWNlXFxcXGNzM1xcXFxjZW5zb193ZWJcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXER1dmFuIEZsb3JlelxcXFxXb3Jrc3BhY2VcXFxcY3MzXFxcXGNlbnNvX3dlYlxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvRHV2YW4lMjBGbG9yZXovV29ya3NwYWNlL2NzMy9jZW5zb193ZWIvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xyXG5pbXBvcnQgeyByZXNvbHZlIH0gZnJvbSAncGF0aCdcclxuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0J1xyXG5pbXBvcnQgdHNjb25maWdQYXRocyBmcm9tICd2aXRlLXRzY29uZmlnLXBhdGhzJ1xyXG5pbXBvcnQgbWtjZXJ0IGZyb20gXCJ2aXRlLXBsdWdpbi1ta2NlcnRcIlxyXG5cclxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cclxuLy8gZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuLy8gICBwbHVnaW5zOiBbdHNjb25maWdQYXRocygpLCByZWFjdCgpLCBta2NlcnQoKV0sXHJcbi8vICAgcmVzb2x2ZToge1xyXG4vLyAgICAgYWxpYXM6IHtcclxuLy8gICAgICAgXCJAXCI6IHJlc29sdmUoX19kaXJuYW1lLCBcInNyY1wiKVxyXG4vLyAgICAgfSxcclxuLy8gICB9LFxyXG4vLyAgIHNlcnZlcjoge1xyXG4vLyAgICAgcG9ydDogMzAwMCxcclxuLy8gICAgIGhvc3Q6IFwiMC4wLjAuMFwiLFxyXG4vLyAgIH0sXHJcbi8vICAgcHJldmlldzoge1xyXG4vLyAgICAgcG9ydDogMzAwMCxcclxuLy8gICAgIGhvc3Q6IFwiMC4wLjAuMFwiLFxyXG4vLyAgIH1cclxuLy8gfSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZygoeyBtb2RlIH0pID0+IHtcclxuXHJcbiAgaWYgKG1vZGUgPT09IFwiZGV2ZWxvcG1lbnRcIikge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcGx1Z2luczogW3RzY29uZmlnUGF0aHMoKSwgbWtjZXJ0KCksIHJlYWN0KCldLFxyXG4gICAgICByZXNvbHZlOiB7XHJcbiAgICAgICAgYWxpYXM6IHtcclxuICAgICAgICAgIFwiQFwiOiByZXNvbHZlKF9fZGlybmFtZSwgXCJzcmNcIilcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICBvcHRpbWl6ZURlcHM6IHtcclxuICAgICAgICBpbmNsdWRlOiBbXHJcbiAgICAgICAgICAnQGFwb2xsby9jbGllbnQvY29yZScsXHJcbiAgICAgICAgICAnQGFwb2xsby9jbGllbnQvY2FjaGUnXHJcbiAgICAgICAgXVxyXG4gICAgICB9LFxyXG4gICAgICByb2xsdXBJbnB1dE9wdGlvbnM6IHtcclxuICAgICAgICBleHRlcm5hbDogWydyZWFjdCddXHJcbiAgICAgIH0sXHJcbiAgICAgIHNlcnZlcjoge1xyXG4gICAgICAgIHBvcnQ6IDMwMDgsXHJcbiAgICAgICAgaG9zdDogdHJ1ZSxcclxuXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcGx1Z2luczogW3RzY29uZmlnUGF0aHMoKSwgcmVhY3QoKV0sXHJcbiAgICAgIHJlc29sdmU6IHtcclxuICAgICAgICBhbGlhczoge1xyXG4gICAgICAgICAgXCJAXCI6IHJlc29sdmUoX19kaXJuYW1lLCBcInNyY1wiKVxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgcHJldmlldzoge1xyXG4gICAgICAgIGhvc3Q6IFwiMC4wLjAuMFwiLFxyXG4gICAgICAgIHBvcnQ6IDMwMDBcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufSkiXSwKICAibWFwcGluZ3MiOiAiO0FBQXVVLFNBQVMsb0JBQW9CO0FBQ3BXLFNBQVMsZUFBZTtBQUN4QixPQUFPLFdBQVc7QUFDbEIsT0FBTyxtQkFBbUI7QUFDMUIsT0FBTyxZQUFZO0FBSm5CLElBQU0sbUNBQW1DO0FBd0J6QyxJQUFPLHNCQUFRLGFBQWEsQ0FBQyxFQUFFLEtBQUssTUFBTTtBQUV4QyxNQUFJLFNBQVMsZUFBZTtBQUMxQixXQUFPO0FBQUEsTUFDTCxTQUFTLENBQUMsY0FBYyxHQUFHLE9BQU8sR0FBRyxNQUFNLENBQUM7QUFBQSxNQUM1QyxTQUFTO0FBQUEsUUFDUCxPQUFPO0FBQUEsVUFDTCxLQUFLLFFBQVEsa0NBQVcsS0FBSztBQUFBLFFBQy9CO0FBQUEsTUFDRjtBQUFBLE1BQ0EsY0FBYztBQUFBLFFBQ1osU0FBUztBQUFBLFVBQ1A7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxNQUNBLG9CQUFvQjtBQUFBLFFBQ2xCLFVBQVUsQ0FBQyxPQUFPO0FBQUEsTUFDcEI7QUFBQSxNQUNBLFFBQVE7QUFBQSxRQUNOLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxNQUVSO0FBQUEsSUFDRjtBQUFBLEVBQ0YsT0FBTztBQUNMLFdBQU87QUFBQSxNQUNMLFNBQVMsQ0FBQyxjQUFjLEdBQUcsTUFBTSxDQUFDO0FBQUEsTUFDbEMsU0FBUztBQUFBLFFBQ1AsT0FBTztBQUFBLFVBQ0wsS0FBSyxRQUFRLGtDQUFXLEtBQUs7QUFBQSxRQUMvQjtBQUFBLE1BQ0Y7QUFBQSxNQUNBLFNBQVM7QUFBQSxRQUNQLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxNQUNSO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
