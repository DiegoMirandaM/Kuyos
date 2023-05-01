/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  },
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cvruycddlqkyjmelqdta.supabase.co',
        port: ''
      }
    ]
  }
}

module.exports = nextConfig
