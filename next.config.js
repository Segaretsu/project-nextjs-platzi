const path = require('path')

module.exports = {
  webpack: config => {
    config.resolve.modules.push(path.resolve('./'))
    return config
  },
  async rewrites() {
    return [
      {
        source: '/avocado/:path*',
        destination: '/product/:path*',
      },
    ]
  },
}