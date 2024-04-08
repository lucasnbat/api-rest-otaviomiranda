"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }// isso é uma classe
var _jsonwebtoken = require('jsonwebtoken'); var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);
var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);

class TokenController {
  async store(req, res) {
    // os espaços em branco são os valores padrão
    const { email = '', password = '' } = req.body;

    if (!email || !password) {
      return res.status(401).json({
        errors: ['Credenciais inválidas'],
      });
    }

    // verificação para saber se existe user com o email passado
    // é daqui que puxo o email (user.email, user.password)
    const user = await _User2.default.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({
        errors: ['Usuário não existe!'],
      });
    }

    // verificar se senha é valida
    if (!(await user.passwordIsValid(password))) {
      return res.status(401).json({
        errors: ['Senha inválida!'],
      });
    }

    const { id } = user;

    // gerar token: sempre passamos um objeto com payload de dados
    // payload: informações que posso resgatar a partir do token do user
    // secret: chave secreta para gerar o token (configurada no .env)
    // objeto com informações do token (expiresIn)
    const token = _jsonwebtoken2.default.sign({ id, email }, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION,
    });

    return res.json({ token });
  }
}

// exportando uma nova classe TokenController já instanciada para uso
exports. default = new TokenController();

// basicamente esse arquivo valida digitação de email e senha, existencia
// de usuário, validade da senha e se estiver tudo certo, gera um token
