"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }// isso é uma classe
var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);

class UserController {
  async store(req, res) {
    try {
      const novoUser = await _User2.default.create(req.body);
      const { id, nome, email } = novoUser;
      return res.status(200).json({ id, nome, email });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async index(req, res) {
    try {
      // os attributes, são os campos que eu quero que retorne
      const users = await _User2.default.findAll({ attributes: ['id', 'nome', 'email'] });
      return res.json(users);
    } catch (e) {
      return res.json(null);
    }
  }

  async show(req, res) {
    try {
      // params: o que vem na url
      const user = await _User2.default.findByPk(req.params.id);
      const { id, nome, email } = user;
      return res.json({ id, nome, email });
    } catch (e) {
      return res.json(null);
    }
  }

  async update(req, res) {
    try {
      // verificando se user existe
      const user = await _User2.default.findByPk(req.userId);

      if (!user) {
        return res.status(400).json({
          errors: ['Usuário não existe'],
        });
      }

      // atualizando user
      const novosDados = await user.update(req.body);
      return res.json(novosDados);
    } catch (e) {
      console.log(e);
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    try {
      // verificando se user existe
      const user = await _User2.default.findByPk(req.userId);
      if (!user) {
        return res.status(400).json({
          errors: ['Usuário não existe'],
        });
      }

      // deletando user
      await user.destroy();
      return res.json(null);
    } catch (e) {
      console.log(e);
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

// exportando uma nova classe HomeController já instanciada para uso
exports. default = new UserController();
