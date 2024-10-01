/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        NEXT_PUBLIC_MANAGER_ID: process.env.NEXT_PUBLIC_MANAGER_ID,
        NEXT_PUBLIC_MANAGER_PASSWORD: process.env.NEXT_PUBLIC_MANAGER_PASSWORD,
    }
};

export default nextConfig;
