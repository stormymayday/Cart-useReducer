import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "www.course-api.com",
                pathname: "/images/cart/**",
            },
        ],
    },
};

export default nextConfig;
