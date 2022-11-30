module.exports = {

  /* baseUrl: process.env.NODE_ENV === 'production' ? './' : '/' */
  publicPath: './',
  devServer: {
    proxy: { // 配置跨域
      '/api': {
        target: `http://localhost:3000`, //请求后台接口
        secure: false,
        changeOrigin: true, // 允许跨域
        pathRewrite: {
          '^/api': '' // 重写请求
        }
      }
    }
  },

}