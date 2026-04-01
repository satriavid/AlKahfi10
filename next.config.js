/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  // Ensure API routes work properly on Netlify
  trailingSlash: false,
  poweredByHeader: false,
  // Ensure API routes are not pre-rendered
  dynamic: 'force-dynamic',
}

module.exports = nextConfig