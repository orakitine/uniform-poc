const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_APP_VERSION: process.env.npm_package_version,
    NEXT_PUBLIC_BUILD_TIMESTAMP: String(new Date().valueOf()),
  },
  images: {
    remotePatterns: [{ protocol: 'https', hostname: '*' }],
    deviceSizes: [320, 420, 640, 768, 1024, 1280, 1536],
  },
  publicRuntimeConfig: {
    applicationId: process.env.ALGOLIA_APPLICATION_ID,
    algoliaApiKey: process.env.ALGOLIA_API_KEY,
  },
};

module.exports = nextConfig;
