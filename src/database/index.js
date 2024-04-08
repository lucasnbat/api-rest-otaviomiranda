// o index.js do database é responsável por iniciar a conexão com o banco de dados para cada model

import Sequelize from 'sequelize';

// arquivo de configuração do banco
import databaseConfig from '../config/database';

// importa o model
import Aluno from '../models/Aluno';
import User from '../models/User';
import Foto from '../models/Foto';

// array contendo todos os models
const models = [Aluno, User, Foto];

// cria a conexão com o banco de dados
const connection = new Sequelize(databaseConfig);

// para cada model, inicia o model com a conexão (connection é o sequelize lá de Aluno.js)
models.forEach((model) => model.init(connection));

// se existir algum associate, vai executar os associates presentes nas models
models.forEach((model) => model.associate && model.associate(connection.models));
