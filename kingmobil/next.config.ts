import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Derleme (Build) sırasında ESLint hatalarını tamamen görmezden gelmesini sağlar.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
