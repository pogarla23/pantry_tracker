/** @type {import('next').NextConfig} */
const nextConfig = {
    // Ensures that the static export includes trailing slashes if desired
    trailingSlash: true,
  
    // Optional: Specify the output directory for the static export
    // By default, Next.js exports to the 'out' directory
    // outDir: 'out',
  
    // Optional: Configure basePath if your GitHub Pages site is in a subpath
    // basePath: '/your-repo-name',
    
    // Optional: Configure assetPrefix if needed
    // assetPrefix: '/your-repo-name/',
  };
  
  export default nextConfig;
