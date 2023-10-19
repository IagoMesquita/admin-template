/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname:  'lh3.googleusercontent.com',
      },
      {hostname: 'source.unsplash.com'}
    ],
  },
}

module.exports = nextConfig
