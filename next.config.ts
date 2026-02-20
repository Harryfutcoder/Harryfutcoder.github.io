import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 核心：开启静态导出，这是 GitHub Pages 唯一能识别的模式
  output: 'export',

  // 核心：禁用图片优化，因为 GitHub Pages 服务器不支持 Next.js 的图片处理功能
  images: {
    unoptimized: true,
  },

  // 保持开启编译器
  reactCompiler: true,
};

export default nextConfig;