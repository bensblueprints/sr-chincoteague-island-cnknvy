import type { NextConfig } from "next";
import path from "node:path";

const isStaticExport = process.env.BUILD_TARGET === "static";

const config: NextConfig = {
  output: isStaticExport ? "export" : "standalone",
  reactStrictMode: true,
  outputFileTracingRoot: path.join(__dirname),
  trailingSlash: isStaticExport,
  images: isStaticExport
    ? { unoptimized: true }
    : { formats: ["image/webp"] },
};

export default config;
