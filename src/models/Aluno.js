import Sequelize, { Model } from 'sequelize';

// a Model parece ter a função que conecta cada tipo de tabela ao banco de dados
// recebendo a conexão e contendo as variaveis para de cada tipo de dado
// precisa ter os mesmos campos da migration, porque a migration é como o tiro e
// o Model como um modelo para a tabela a ser atingida

export default class Aluno extends Model {
  // método estático
  // sequelize é o objeto de conexão com o banco de dados
  static init(sequelize) {
    // chama o método super para invocar método da classe extendida Model
    super.init({
      nome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Campo nome deve ter entre 3 e 255 caracteres',
          },
        },
      },
      sobrenome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Campo sobrenome deve ter entre 3 e 255 caracteres',
          },
        },
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: 'E-mail já existe!',
        },
        validate: {
          isEmail: {
            msg: 'E-mail inválido!',
          },
        },
      },
      idade: {
        type: Sequelize.INTEGER,
        defaultValue: '',
        validate: {
          isInt: {
            msg: 'Idade precisa ser um número inteiro',
          },
        },
      },
      peso: {
        type: Sequelize.FLOAT,
        defaultValue: '',
        validate: {
          isFloat: {
            msg: 'Peso precisa ser um número inteiro ou de ponto flutuante',
          },
        },
      },
      altura: {
        type: Sequelize.FLOAT,
        defaultValue: '',
        validate: {
          isFloat: {
            msg: 'Altura precisa ser um número inteiro ou de ponto flutuante',
          },
        },
      },
    }, {
      sequelize,
    });
    return this;
  }

  // indicando que aluno tem várias fotos + indicando a chave estrangeira em questão
  static associate(models) {
    this.hasMany(models.Foto, { foreignKey: 'aluno_id' });
  }
}
