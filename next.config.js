/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
const nextConfig = {
  // assetPrefix: isProd ? '/my-portfolio' : '',
  basePath: isProduction ? '/kashkumarsingh.github.io' : '',
  assetPrefix: isProduction ? '/kashkumarsingh.github.io/' : '',
  env: {
    BASE_PATH: isProduction ? '/kashkumarsingh.github.io' : ''
  },
  trailingSlash: true,
  // exportPathMap: function () {
  //   return {
  //     "/": { page: "/" },
  //     //'/about': { page: '/about' },
  //     // ...
  //   };
  // },
  reactStrictMode: true,
};

module.exports = nextConfig;
