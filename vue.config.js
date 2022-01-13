'use strict'
const path = require('path')
function resolve (dir) {
  console.log('==================', path.join(__dirname, dir))
  return path.join(__dirname, dir)
}
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src')
      }
    },
    devServer: {
      proxy: {
        '/api': {
          target: `http://dev-admin.labno3.com`,
          changeOrigin: true,
        },
      }
    }
  }
}