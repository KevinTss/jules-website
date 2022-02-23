const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  reactStrictMode: true,
  basePath: isProduction ? '/jules-website' : '',
  assetPrefix: isProduction ? '/jules-website/' : '',
};
