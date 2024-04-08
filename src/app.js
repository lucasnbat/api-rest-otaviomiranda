// importando o dotenv
import { resolve } from 'path';
import dotenv from 'dotenv';
import express from 'express';
import homeRoutes from './routes/homeRoutes';
import userRoutes from './routes/userRoutes';
import tokenRoutes from './routes/tokenRoutes';
import alunoRoutes from './routes/alunoRoutes';
import fotoRoutes from './routes/fotoRoutes';
import './database'; // importando o arquivo 'database.js

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
    this.app.use(express.static(resolve(__dirname, 'uploads')));
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
