
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enables static site export
  trailingSlash: true, // Optional: Adds trailing slashes to routes
  basePath: '/pantry_tracker', // uncomment if using local --> npm run dev
  assetPrefix: '/pantry_tracker/', // uncomment if using local -->  npm run dev
};

export default nextConfig;