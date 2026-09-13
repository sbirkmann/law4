import type { NextConfig } from "next";

const repo = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  basePath: repo,
  images: { loader: "custom", loaderFile: "./lib/imageLoader.ts" },
};

export default nextConfig;
