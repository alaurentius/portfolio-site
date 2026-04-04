import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  output: "export",
  basePath: process.env.NODE_ENV === "production" ? "/portfolio-site" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/portfolio-site" : "",
};

export default withNextIntl(nextConfig);
