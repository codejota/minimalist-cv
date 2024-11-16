/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },

  experimental: {
    appDir: true,
  },
  images: {
    domains: [""],
  },
  output: "export",
};

export default nextConfig;
