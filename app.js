// importando o dotenv
import dotenv from 'dotenv';
import express from 'express';
import homeRoutes from './src/routes/homeRoutes';
import userRoutes from './src/routes/userRoutes';
import tokenRoutes from './src/routes/tokenRoutes';
import alunoRoutes from './src/routes/alunoRoutes';
import fotoRoutes from './src/routes/fotoRoutes';
import './src/database'; // importando o arquivo 'database.js

dotenv.config();

class App {
  // ao criar nova classe App, construtor é chamado e...
  constructor() {
    this.app = express(); // seta o express
    this.middlewares(); // chama a função middlewares
    this.routes(); // chama a função routes
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    // config. para aceitar requisições em formato JSON
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/', homeRoutes);
    this.app.use('/users/', userRoutes);
    this.app.use('/tokens/', tokenRoutes);
    this.app.use('/alunos/', alunoRoutes);
    this.app.use('/fotos/', fotoRoutes);
  }
}

// exportando uma nova classe App contendo a variável que tem o express
export default new App().app;
