/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    qualities: [25, 50, 75, 90, 100],
    formats: ['image/avif', 'image/webp'],
  },
  allowedDevOrigins: ['192.168.0.101', 'local-origin.dev', '*.local-origin.dev'],
};

export default nextConfig;
