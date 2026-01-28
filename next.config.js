/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        // Serve apple-app-site-association with correct Content-Type
        source: '/.well-known/apple-app-site-association',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/json',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
