/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // This makes it static - NO NODE.JS NEEDED!
  trailingSlash: true, // Helps with Apache routing
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig