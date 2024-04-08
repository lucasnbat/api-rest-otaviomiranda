"use strict";Object.defineProperty(exports, "__esModule", {value: true});class HomeController {
  async index(req, res) {
    res.json('Index');
  }
}

// exportando uma nova classe HomeController já instanciada para uso
exports. default = new HomeController();
