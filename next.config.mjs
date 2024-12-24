/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    eslint: {
        ignoreDuringBuilds: true, // Completely ignores linting
    },
    typescript: {
        ignoreBuildErrors: true,
    },
};

export default nextConfig;
