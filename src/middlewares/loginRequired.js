import jwt from 'jsonwebtoken';
import User from '../models/User';

export default async (req, res, next) => {
  // parametro do header que contem o token gerado no login
  const { authorization } = req.headers;

  // se não tiver o token, retorna erro
  if (!authorization) {
    return res.status(401).json({
      errors: ['Login required'],
    });
  }

  // se tem token...
  // separando o texto Bearer do token
  const [, token] = authorization.split(' ');

  try {
    // token + chave que gerou ela (secret) -> aqui que saberemos se o token é valido
    // ou seja, com base na informação do TOKEN_SECRET, ele vai verificar se o token é valido
    const dados = jwt.verify(token, process.env.TOKEN_SECRET);

    // busca dados do token e inclui na requisição de qualquer pagina que
    // esteja sendo aberta e passe pelo middleware
    const { id, email } = dados;

    // verificando se os dados do usuário ainda batem com os do token
    // isso faz com que, se o email mudar, o token passe a ser inválido
    // e o usuário precise gerar outro
    const user = await User.findOne({
      where: {
        id, // id = id
        email, // email = email
      },
    });

    if (!user) {
      return res.status(401).json({
        errors: ['Usuário inválido'],
      });
    }

    req.userId = id;
    req.userEmail = email;

    // se tudo estiver ok, chama a próxima função
    return next();
  } catch (e) {
    return res.status(401).json({
      errors: ['Token expirado ou inválido'],
    });
  }
};
