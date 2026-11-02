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
      {
        source: '/works/circket-arena-mirpur',
        destination: '/works/cricket-arena-mirpur',
        permanent: true,
      },
      {
        source: '/works/sports-arena-peshawar',
        destination: '/works/sports-complex-peshawar',
        permanent: true,
      },
      {
        source: '/works/stadium-barrier',
        destination: '/works',
        permanent: true,
      },
      {
        source: '/works/rooftop-cricket',
        destination: '/works',
        permanent: true,
      },
      {
        source: '/works/tennis-club',
        destination: '/works',
        permanent: true,
      },
      {
        source: '/works/school-sports',
        destination: '/works',
        permanent: true,
      },
      {
        source: '/works/cricket-academy',
        destination: '/works',
        permanent: true,
      },
      {
        source: '/works/football-ground',
        destination: '/works',
        permanent: true,
      },
      {
        source: '/guides/corner-door-installation',
        destination: '/guides/corner-door',
        permanent: true,
      },
      {
        source: '/guides/cricket-net-installation',
        destination: '/guides/cricket-arena',
        permanent: true,
      },
      {
        source: '/guides/rooftop-net-installation',
        destination: '/guides/roof-installation',
        permanent: true,
      },
      {
        source: '/guides/football-goal-net-setup',
        destination: '/guides/football-goal',
        permanent: true,
      },
      {
        source: '/guides/how-nets-are-manufactured',
        destination: '/guides/net-stitching',
        permanent: true,
      },
      {
        source: '/guides/custom-net-sizing',
        destination: '/guides/size-checking',
        permanent: true,
      },
      {
        source: '/guides/cricket-pitch-preparation',
        destination: '/guides/bamboos',
        permanent: true,
      },
      {
        source: '/guides/floodlight-cricket-installation',
        destination: '/guides',
        permanent: true,
      },
      {
        source: '/guides/led-lighting-indoor-sports',
        destination: '/guides',
        permanent: true,
      },
      {
        source: '/guides/futsal-court-setup',
        destination: '/guides',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
