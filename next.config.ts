import type { NextConfig } from "next";

const repo = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  basePath: repo,
  images: { unoptimized: true },
};

export default nextConfig;
