'use strict'
const path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  lintOnSave: true, // 开启关闭 esLint
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