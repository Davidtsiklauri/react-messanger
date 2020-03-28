const proxy = require('http-proxy-middleware')
 
module.exports = function(app) {
  app.use(proxy('/api', { target: 'http://localhost:8080', changeOrigin: false }))
  app.use(proxy('/file', { target: 'http://localhost:8080', changeOrigin: false }))
};