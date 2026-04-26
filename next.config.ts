import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', 
  // Điền tên repo vào đây, nhớ có dấu gạch chéo bao quanh
  basePath: '/nhom04_royalrental', 
  assetPrefix: '/nhom04_royalrental/', 
  images: {
    unoptimized: true, 
  },
};

export default nextConfig;