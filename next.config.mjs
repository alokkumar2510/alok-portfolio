/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  images: {
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [{ protocol: 'https', hostname: '**' }],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\/(glsl|vs|fs|vert|frag)$/,
      use: ['raw-loader'],
    });
    return config;
  },
};

export default nextConfig;