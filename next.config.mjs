
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enables static site export
  trailingSlash: true, // Optional: Adds trailing slashes to routes
  basePath: '/pantry_tracker', // Set to your GitHub repository name if deploying to a sub-path
  assetPrefix: '/pantry_tracker/', // Optional: Needed if deploying to a sub-path
};

export default nextConfig;