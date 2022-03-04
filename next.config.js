/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true, // Keep appDir enabled for experimental features
  },
  images: {
    domains: ["lh3.googleusercontent.com", "res.cloudinary.com"],
  },
};

module.exports = nextConfig;
