/** @type {import('next').NextConfig} */
const mediaHost = process.env.NEXT_PUBLIC_MEDIA_URL
  ? new URL(process.env.NEXT_PUBLIC_MEDIA_URL).hostname
  : null;

const nextConfig = {
  images: {
    qualities: [25, 50, 75, 90, 100],
    formats: ['image/avif', 'image/webp'],
    remotePatterns: mediaHost
      ? [{ protocol: 'https', hostname: mediaHost, pathname: '/**' }]
      : [],
  },
  allowedDevOrigins: ['192.168.0.101', 'local-origin.dev', '*.local-origin.dev'],
  async redirects() {
    return [
      {
        source: '/products/crickeet-net-24',
        destination: '/products/cricket-net-24',
        permanent: true,
      },
      {
        source: '/products/crickeet-net-12',
        destination: '/products/cricket-net-12',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
