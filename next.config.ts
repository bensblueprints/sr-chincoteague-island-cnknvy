import type { NextConfig } from "next";
import path from "node:path";

const config: NextConfig = {
  output: "standalone",
  reactStrictMode: true,
  outputFileTracingRoot: path.join(__dirname),
  images: {
    formats: ["image/webp"],
  },
};

export default config;
