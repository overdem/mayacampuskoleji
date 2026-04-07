import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Image optimization
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
      {
        protocol: "http",
        hostname: "localhost",
      },
    ],
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Internationalization (Turkish support)
  i18n: {
    locales: ["tr", "en"],
    defaultLocale: "tr",
    localeDetection: true,
  },

  // Environment variables
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000",
  },

  // Compression
  compress: true,

  // Powering by header
  poweredByHeader: false,

  // React strict mode
  reactStrictMode: true,

  // Experimental features
  experimental: {
    // Optimized server actions
    serverActions: {
      bodySizeLimit: "5mb",
    },
    // Turbopack (faster builds)
    turbo: {
      rules: {
        "*.svg": {
          loaders: ["@svgr/webpack"],
          as: "*.js",
        },
      },
    },
  },

  // Custom headers
  headers: async () => [
    {
      source: "/:path*",
      headers: [
        {
          key: "X-Content-Type-Options",
          value: "nosniff",
        },
        {
          key: "X-Frame-Options",
          value: "SAMEORIGIN",
        },
        {
          key: "X-XSS-Protection",
          value: "1; mode=block",
        },
        {
          key: "Referrer-Policy",
          value: "strict-origin-when-cross-origin",
        },
      ],
    },
    // Cache static assets
    {
      source: "/images/:path*",
      headers: [
        {
          key: "Cache-Control",
          value: "public, max-age=31536000, immutable",
        },
      ],
    },
  ],

  // Redirects
  redirects: async () => [
    {
      source: "/admin",
      destination: "/admin/dashboard",
      permanent: false,
    },
    {
      source: "/parent",
      destination: "/parent/dashboard",
      permanent: false,
    },
  ],

  // Rewrites
  rewrites: async () => ({
    beforeFiles: [
      {
        source: "/api/:path*",
        destination: process.env.NEXT_PUBLIC_API_URL + "/api/:path*",
      },
    ],
  }),

  // Webpack configuration
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

export default nextConfig;
