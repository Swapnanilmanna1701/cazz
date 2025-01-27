/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    // Ignore node-specific modules when bundling for the browser
    // https://webpack.js.org/configuration/resolve/#resolvealias
    config.resolve.alias = {
      ...config.resolve.alias,
      sharp$: false,
      "onnxruntime-node$": false,
    };
    return config;
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  env: {
    DATABASE_URL: process.env.DATABASE_URL,
    MAILTRAP_API_TOKEN: process.env.MAILTRAP_API_TOKEN,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
      },
    ],
  },
  reactStrictMode: true,
};

export default nextConfig;
