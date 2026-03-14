/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com', pathname: '/**' },
    ],
  },
  async redirects() {
    return [
      { source: '/blog', destination: '/posts', permanent: true },
      { source: '/blog/:path*', destination: '/posts/:path*', permanent: true },
      { source: '/rankings', destination: '/ranking-guide', permanent: true },
      { source: '/best-of', destination: '/editors-table', permanent: true },
      { source: '/drinks', destination: '/best-drinks', permanent: true },
    ]
  },
}

module.exports = nextConfig
