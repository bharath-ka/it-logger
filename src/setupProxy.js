const proxy = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(proxy('/logs', { target: 'http://localhost:5000', }));
};