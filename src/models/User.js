import Sequelize, { Model } from 'sequelize';
import bcryptjs from 'bcryptjs';

// a Model parece ter a função que conecta cada tipo de tabela ao banco de dados
// recebendo a conexão e contendo as variaveis para de cada tipo de dado
// precisa ter os mesmos campos da migration, porque a migration é como o tiro e
// o Model como um modelo para a tabela a ser atingida

export default class User extends Model {
  // método estático
  // sequelize é o objeto de conexão com o banco de dados
  static init(sequelize) {
    // chama o método super para invocar método da classe extendida Model
    super.init({
      nome: {
        type: Sequelize.STRING, // tipo de dado
        defaultValue: '', // valor padrão
        validate: { // validação de dados
          len: {
            args: [3, 255], // tamanho mínimo e máximo do campo
            msg: 'Campo nome deve ter entre 3 e 255 caracteres',
          },
        },
      },
      email: {
        type: Sequelize.STRING, // tipo de dado
        defaultValue: '', // valor padrão
        unique: {
          msg: 'E-mail já existe',
        },
        validate: { // validação de dados
          isEmail: {
            msg: 'E-mail inválido',
          },
        },
      },
      password_hash: {
        type: Sequelize.STRING, // tipo de dado
        defaultValue: '', // valor padrãp
      },
      password: {
        type: Sequelize.VIRTUAL, // // campo virtual que não existe no BD
        defaultValue: '', // valor padrão
        validate: { // validação de dados
          len: {
            args: [6, 50], // tamanho mínimo e máximo do campo
            msg: 'Campo senha deve ter entre 6 e 50 caracteres',
          },
        },
      },
    }, {
      sequelize,
    });

    // transformando a senha digitada em hash
    this.addHook('beforeSave', async (user) => {
      if (user.password) {
        user.password_hash = await bcryptjs.hash(user.password, 8);
      }
    });

    return this;
  }

  // recebe um hash de password e compara com o password_hash do usuário aqui
  // esse método retorna uma promise
  passwordIsValid(password) {
    return bcryptjs.compare(password, this.password_hash);
  }
}
