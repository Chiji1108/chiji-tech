import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  redirects: async () => [
    {
      source: "/pochical/:path*",
      destination: "https://pochical.app",
      permanent: true,
    },
  ],
};

export default nextConfig;
