"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);
var _appConfig = require('../config/appConfig'); var _appConfig2 = _interopRequireDefault(_appConfig);

// a Model parece ter a função que conecta cada tipo de tabela ao banco de dados
// recebendo a conexão e contendo as variaveis para de cada tipo de dado
// precisa ter os mesmos campos da migration, porque a migration é como o tiro e
// o Model como um modelo para a tabela a ser atingida

 class Foto extends _sequelize.Model {
  // método estático
  // sequelize é o objeto de conexão com o banco de dados
  static init(sequelize) {
    // chama o método super para invocar método da classe extendida Model
    super.init({
      originalname: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'Campo não pode ficar vazio',
          },
        },
      },
      filename: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'Campo não pode ficar vazio',
          },
        },
      },
      url: {
        type: _sequelize2.default.VIRTUAL,
        get() {
          return `${_appConfig2.default.url}/images/${this.getDataValue('filename')}`;
        },
      },
    }, {
      sequelize,
      tableName: 'fotos', // só para indicar o que foi usado
    });
    return this;
  }

  // associando
  static associate(models) {
    this.belongsTo(models.Aluno, { foreignKey: 'aluno_id' });
    // this.hasOne() ou .hasMany()
  }
} exports.default = Foto;
