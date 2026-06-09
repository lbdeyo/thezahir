import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  async redirects() {
    return [
      {
        source: "/founding-donors-circle",
        destination: "/donate#founding-donors-circle",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
