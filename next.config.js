const path = require('path')
// const withESLint = require('next-eslint');

module.exports = {
  pageExtensions: ['jsx', 'js'],
  webpack(config) {
    config.resolve.alias['components'] = path.join(__dirname, 'src/components')
    config.node = {
      fs: 'empty',
      net: 'empty',
      tls: 'empty',
    }
    return config
  },
}
