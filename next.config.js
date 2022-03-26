/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  images: {
    nextConfig,
    domains: ['https://cdn.sanity.io/images/dz6azp2f/production/*'],
  },
};
