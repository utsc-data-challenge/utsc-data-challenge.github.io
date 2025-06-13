import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'utsc-data-challenge.github.io',
        port: '', // Keep empty for default port
        pathname: '/public/**',
      },
    ],
  },
};

export default nextConfig;