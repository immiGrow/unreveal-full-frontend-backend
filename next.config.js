/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: ["images.unsplash.com", "plus.unsplash.com", "res.cloudinary.com", "images.pexels.com"]
    },


}

module.exports = nextConfig