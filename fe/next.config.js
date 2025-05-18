// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',   <-- remove this line
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
