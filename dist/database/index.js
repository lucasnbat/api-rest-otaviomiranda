"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }// o index.js do database é responsável por iniciar a conexão com o banco de dados para cada model

var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

// arquivo de configuração do banco
var _database = require('../config/database'); var _database2 = _interopRequireDefault(_database);

// importa o model
var _Aluno = require('../models/Aluno'); var _Aluno2 = _interopRequireDefault(_Aluno);
var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);
var _Foto = require('../models/Foto'); var _Foto2 = _interopRequireDefault(_Foto);

// array contendo todos os models
const models = [_Aluno2.default, _User2.default, _Foto2.default];

// cria a conexão com o banco de dados
const connection = new (0, _sequelize2.default)(_database2.default);

// para cada model, inicia o model com a conexão (connection é o sequelize lá de Aluno.js)
models.forEach((model) => model.init(connection));

// se existir algum associate, vai executar os associates presentes nas models
models.forEach((model) => model.associate && model.associate(connection.models));
