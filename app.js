// importando o dotenv
import { resolve } from 'path';
import dotenv from 'dotenv';
import helmet from 'helmet';
import cors from 'cors';
import express from 'express';
import homeRoutes from './src/routes/homeRoutes';
import userRoutes from './src/routes/userRoutes';
import tokenRoutes from './src/routes/tokenRoutes';
import alunoRoutes from './src/routes/alunoRoutes';
import fotoRoutes from './src/routes/fotoRoutes';
import './src/database'; // importando o arquivo 'database.js

dotenv.config();

// const whiteList = [
//   'http://localhost:3000',
// ];

// const corsOptions = {
//   origin(origin, callback) {
//     if (whiteList.indexOf(origin) !== -1 || !origin) {
//       // primeiro parametro é o null, de erro
//       callback(null, true);
//     } else {
//       callback(new Error('Não permitido pelo CORS'));
//     }
//   },
// };

// depois é só jogar o corsOptions dentro do cors

class App {
  // ao criar nova classe App, construtor é chamado e...
  constructor() {
    this.app = express(); // seta o express
    this.middlewares(); // chama a função middlewares
    this.routes(); // chama a função routes
  }

  middlewares() {
    // setando cabeçalhos
    this.app.use(cors());
    this.app.use(helmet());
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
