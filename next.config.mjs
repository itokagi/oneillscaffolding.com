/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  poweredByHeader: false,
  outputFileTracingRoot: new URL(".", import.meta.url).pathname,
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "loremflickr.com" },
      { protocol: "https", hostname: "d22po4pjz3o32e.cloudfront.net" },
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
