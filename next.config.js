/** @type {import('next').NextConfig} */
const nextConfig = {
images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'user-images.githubusercontent.com',
        port: '',
        pathname: '/63960808/166121250-50b8c263-81c2-4cb2-b07e-883edb9deb63.png',
      },
    ],
  },
}

module.exports = nextConfig
