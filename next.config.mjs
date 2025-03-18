// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static exports for Vercel
  output: 'export',
  // Disable image optimization during export (required for 'output: export')
  images: {
    unoptimized: true,
  },
  // Keep the webpack config for media files
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(mp4|webm)$/i,
      use: {
        loader: 'file-loader',
        options: {
          publicPath: '/_next',
          name: 'static/media/[name].[hash].[ext]',
        },
      },
    });
    return config;
  },
  // Disable server components for static export
  experimental: {
    appDir: true,
  },
  // Ensure trailing slashes are handled correctly
  trailingSlash: true,
};

export default nextConfig;