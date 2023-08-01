/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  swcMinify: true,
  output: 'standalone',
}

module.exports = nextConfig
