/** @type {import('next').NextConfig} */
const nextConfig = {
    // Disable static optimization for pages that use client-side only features
    experimental: {
        esmExternals: false,
    },
    // Ensure proper handling of client-side only code
    webpack: (config, { isServer }) => {
        if (!isServer) {
            config.resolve.fallback = {
                ...config.resolve.fallback,
                fs: false,
                net: false,
                tls: false,
            };
        }
        return config;
    },
};

export default nextConfig;