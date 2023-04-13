/** @type {import('next').NextConfig} */
//const isProd = process.env.NODE_ENV === 'production'
const nextConfig = {
 // assetPrefix: isProd ? '/my-portfolio' : '',
 basePath: '/portfolio',
 assetPrefix: '/portfolio/',
 exportPathMap: function() {
   return {
     '/': { page: '/' },
     //'/about': { page: '/about' },
     // ...
   };
 },
  reactStrictMode: true,
  
}

module.exports = nextConfig
