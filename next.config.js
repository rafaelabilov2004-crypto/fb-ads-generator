/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    NEXT_PUBLIC_APP_NAME: 'FB Ads Generator - Rufat Abilov Edition',
    NEXT_PUBLIC_APP_VERSION: '2.0.0',
  },
}

module.exports = nextConfig
