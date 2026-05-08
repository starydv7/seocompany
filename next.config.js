/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      { source: "/digital-marketing-services", destination: "/services" },
    ];
  },
};

module.exports = nextConfig;
