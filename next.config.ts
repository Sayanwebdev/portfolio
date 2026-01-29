import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Enable static imports for better optimization
    unoptimized: false,
    // Responsive image sizes for optimization
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Format preference: AVIF first (better compression), then WebP
    formats: ['image/avif', 'image/webp'],
    // Cache optimization
    minimumCacheTTL: 31536000, // 1 year in seconds
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
