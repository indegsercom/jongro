const path = require('path')

module.exports = {
  webpack: (config, { webpack }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      lib: path.resolve(__dirname, 'lib'),
    }
    return config
  },
}
