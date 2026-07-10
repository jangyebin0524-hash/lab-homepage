import path from "node:path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  // GitHub Pages 배포 시 repository 이름에 맞게 base 경로를 수정해야 합니다.
  // 예: https://username.github.io/lab-homepage/ 라면 base는 "/lab-homepage/" 입니다.
  // 예: https://username.github.io/ 형태의 사용자 페이지라면 base는 "/" 입니다.
  base: "/lab-homepage/",
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
