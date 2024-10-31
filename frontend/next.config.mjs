/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        NEXT_PUBLIC_STRAPI_HOST: process.env.NEXT_PUBLIC_STRAPI_HOST,
        STRAPI_TOKEN: process.env.STRAPI_TOKEN,
    }
};

export default nextConfig;
