"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _app = require('./app'); var _app2 = _interopRequireDefault(_app);

const port = process.env.APP_PORT;

_app2.default.listen(port);

/**
 * Resumo:
 * A HomeController tem a função que processa dados;
 * Essa função é passada para a homeRoutes invocar;
 * Que por sua vez é invocada pelo App;
 * Que por sua vez é invocado pelo server.js com listen().
 */
