/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }, {
      hostname: "glowing-semolina-3779ba.netlify.app"
    }],
  },
};

export default nextConfig;
