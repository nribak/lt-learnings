/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'd2b1beblys53u7.cloudfront.net'
      }
    ]
  }
}

module.exports = nextConfig
