import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    eslint: {
        ignoreDuringBuilds: true, // Désactive ESLint pendant le build en production
    }
};

export default nextConfig;

