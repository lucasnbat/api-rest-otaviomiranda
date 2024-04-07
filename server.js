import app from './app';

const port = 3001;

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
  console.log(`CTRL + Clique em http://localhost:${port} para acessar o servidor`);
});

/**
 * Resumo:
 * A HomeController tem a função que processa dados;
 * Essa função é passada para a homeRoutes invocar;
 * Que por sua vez é invocada pelo App;
 * Que por sua vez é invocado pelo server.js com listen().
 */
