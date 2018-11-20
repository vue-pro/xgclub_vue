module.exports = {
  baseUrl: process.env.NODE_ENV === 'production'
    ? './'
    : '/',
  lintOnSave: true,
  productionSourceMap: false,
  devServer: {
    port: 8080,
    host: 'localhost',
    https: false,
    open: true,
    proxy: {

    }
  }
}
