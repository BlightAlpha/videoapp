/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignorBuilderErrors: true,
  },
  reactStrictMode: true,
  images: {
  domains: ['brm.io','lh3.googleusercontent.com','media-exp1.licdn.com'
],
  },
};

module.exports = nextConfig;
