const path = require('path');

module.exports = {
  reactStrictMode: true,

  sassOptions: {
    includePaths: [path.join(__dirname, 'src')],
    prependData: `@import "${__dirname}/src/styles/shared";`,
  },

  swcMinify: true,
};
