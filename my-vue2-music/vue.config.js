const {
  defineConfig
} = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    open:true,           // 是否启动时自动打开浏览器并访问
    host:'127.0.0.1',    // 自动访问的主机号
    port:8080,           // 前端端口
    https:false,

    proxy: {

      // 用 /api 来代替下面 target 中的地址
      '/api': {
        target: 'http://www.codeman.ink:3000', // 后台地址（不要忘了写前面的http）
        changeOrigin: true, //允许跨域
        ws: true,
        pathRewrite: {
          '^/api': ''
        }
      },
      'm7': {
        target: 'http://m7.music.126.net',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/m7': ''
        }
      },
      'm701': {
        target: 'http://m701.music.126.net',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/m701': ''
        }
      },
      'm8': {
        target: 'http://m8.music.126.net',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/m8': ''
        }
      },
      'm801': {
        target: 'http://m801.music.126.net',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/m801': ''
        }
      }
    }
  }
})