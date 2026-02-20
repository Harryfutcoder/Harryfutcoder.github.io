import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // 静态导出
  images: { unoptimized: true }, // 禁用图片优化以适配 GitHub
  reactCompiler: true, // 开启编译器
};

export default nextConfig;
