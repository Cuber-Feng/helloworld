import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/helloworld/', // 确保打包后的资源路径是相对路径
  build: {
    outDir: 'docs', // 将输出目录改为 docs
    emptyOutDir: true,
  }
})
