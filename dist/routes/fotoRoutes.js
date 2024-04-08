"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');

// abaixo eu estou dando um nome para o import do arquivo (nome: homeController)
var _FotoController = require('../controllers/FotoController'); var _FotoController2 = _interopRequireDefault(_FotoController);

var _loginRequired = require('../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);

// criando constante que recebe a lib + as configurações realizadas

const router = new (0, _express.Router)();

// ao chamar a rota '/', o método index do controller homeController é chamado

router.post('/', _loginRequired2.default, _FotoController2.default.store);

exports. default = router;
