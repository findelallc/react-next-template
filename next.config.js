const withPWA = require('next-pwa');
module.exports = withPWA({
  cssLoaderOptions: {
    url: false
  },
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV === 'development'
  },
  useFileSystemPublicRoutes: false,
});
