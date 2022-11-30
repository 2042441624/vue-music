module.exports = {

  /* baseUrl: process.env.NODE_ENV === 'production' ? './' : '/' */
  publicPath: './',
  devServer: {
    open: true, //配置自动启动浏览器
    host: "127.0.0.1",
    port: 5500,
    proxy: { // 配置跨域
      '/api': {
        target: `http://localhost:3000`, //请求后台接口
        secure: false,
        changeOrigin: true, // 允许跨域
        pathRewrite: {
          '^/api': 'http://localhost:3000' // 重写请求
        }
      }
    }
  },

}