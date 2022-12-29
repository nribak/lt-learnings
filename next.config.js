/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'd2b1beblys53u7.cloudfront.net'
      }
    ]
  },
  compiler: {
    styledComponents: true
  }

}

module.exports = nextConfig
