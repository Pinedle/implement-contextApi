/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/',
                destination: '/form',
                permanent: true,
            },
        ]
    },
};

export default nextConfig;
