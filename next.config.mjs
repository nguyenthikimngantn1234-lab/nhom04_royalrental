/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/nhom04_royalrental',
  assetPrefix: '/nhom04_royalrental/',
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;