import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['utfs.io','res.cloudinary.com'], // Allow images from utfs.io
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'utfs.io',
      }
    ],
  },
};

export default nextConfig;
