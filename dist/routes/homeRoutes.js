"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
// abaixo eu estou dando um nome para o import do arquivo (nome: homeController)
var _HomeController = require('../controllers/HomeController'); var _HomeController2 = _interopRequireDefault(_HomeController);

const router = new (0, _express.Router)();

// ao chamar a rota '/', o método index do controller homeController é chamado
router.get('/', _HomeController2.default.index);

exports. default = router;
