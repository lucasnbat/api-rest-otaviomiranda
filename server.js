import app from './app';

const port = process.env.APP_PORT;

app.listen(port);

/**
 * Resumo:
 * A HomeController tem a função que processa dados;
 * Essa função é passada para a homeRoutes invocar;
 * Que por sua vez é invocada pelo App;
 * Que por sua vez é invocado pelo server.js com listen().
 */
