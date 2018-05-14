const app = require('./app');
const Proxy = require('hc-proxy');
const proxyInstance = new Proxy({
  service: {
    retdata: {
      endpoint: 'http://118.25.35.49:5000',
      client: 'http',
      api: [
        '*',
      ]
    },
  },
  headers: [
    'x-csrf-token',
    'X-Operator'
  ]
});

proxyInstance.setProxyPrefix('/api/proxy');

module.exports = function (router) {
  proxyInstance.mount(router, app);
};