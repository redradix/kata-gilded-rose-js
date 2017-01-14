const path = require('path')
const webpack = require('webpack')

const srcDir = path.join(__dirname, 'src')

module.exports = {
  module: {
    loaders: [
      {
        include: [ srcDir ],
        loaders: ['babel-loader']
      }
    ]
  }
}
