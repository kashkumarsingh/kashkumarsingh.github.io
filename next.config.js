/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;

/**
 * const isProduction = process.env.NODE_ENV === 'production'
 * assetPrefix: isProd ? '/my-portfolio' : '',
 * basePath: isProduction ? '/kashkumarsingh.github.io' : '',
 * assetPrefix: isProduction ? '/kashkumarsingh.github.io/' : '',
 * env: {BASE_PATH: isProduction ? '/kashkumarsingh.github.io' : ''},
 * trailingSlash: true,
 * exportPathMap: function () {return {"/": { page: "/" },'/about': { page: '/about' },};},
 */

