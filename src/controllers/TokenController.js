// isso é uma classe
import jwt from 'jsonwebtoken';
import User from '../models/User';

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
    const user = await User.findOne({ where: { email } });

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
    const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION,
    });

    return res.json({ token, user: { nome: user.nome, id, email } });
  }
}

// exportando uma nova classe TokenController já instanciada para uso
export default new TokenController();

// basicamente esse arquivo valida digitação de email e senha, existencia
// de usuário, validade da senha e se estiver tudo certo, gera um token
