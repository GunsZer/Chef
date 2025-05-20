/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com'], // Pour les images externes
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  env: {
    CONTACT_EMAIL_USER: process.env.CONTACT_EMAIL_USER,
    CONTACT_EMAIL_PASS: process.env.CONTACT_EMAIL_PASS,
    CONTACT_EMAIL_TO: process.env.CONTACT_EMAIL_TO,
  },
}; 