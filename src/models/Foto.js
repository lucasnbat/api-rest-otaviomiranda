import Sequelize, { Model } from 'sequelize';
import appConfig from '../config/appConfig';

// a Model parece ter a função que conecta cada tipo de tabela ao banco de dados
// recebendo a conexão e contendo as variaveis para de cada tipo de dado
// precisa ter os mesmos campos da migration, porque a migration é como o tiro e
// o Model como um modelo para a tabela a ser atingida

export default class Foto extends Model {
  // método estático
  // sequelize é o objeto de conexão com o banco de dados
  static init(sequelize) {
    // chama o método super para invocar método da classe extendida Model
    super.init({
      originalname: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'Campo não pode ficar vazio',
          },
        },
      },
      filename: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'Campo não pode ficar vazio',
          },
        },
      },
      url: {
        type: Sequelize.VIRTUAL,
        get() {
          return `${appConfig.url}/images/${this.getDataValue('filename')}`;
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
}
