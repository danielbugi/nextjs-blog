/** @type {import('next').NextConfig} */
const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

const nextConfig = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      reactStrictMode: true,
      env: {
        mongodb_username: 'danny',
        mongodb_password: 'Db19931993',
        mongodb_database: 'my-site',
      },
    };
  }

  return {
    reactStrictMode: true,
    env: {
      mongodb_username: 'danny',
      mongodb_password: 'Db19931993',
      mongodb_database: 'my-site',
    },
  };
};

module.exports = nextConfig;
