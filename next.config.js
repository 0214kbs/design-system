/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  }, 
    reactStrictMode: true,
    compiler: {
      styledComponents: true, // Next에게 styled-component도 처리해달라고 옵션을 설정해줌
    },
  };
module.exports = nextConfig