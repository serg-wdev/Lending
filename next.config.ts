import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Enable static page generation for better SEO
  output: 'standalone',
  
  // Optimize images for better performance and SEO
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  // Enable compression
  compress: true,
  
  // Optimize for production
  poweredByHeader: false,
  
  // Generate static pages for better SEO
  generateBuildId: async () => {
    return 'build-' + Date.now();
  },
};

export default nextConfig;
