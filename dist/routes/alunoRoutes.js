"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
// abaixo eu estou dando um nome para o import do arquivo (nome: homeController)
var _AlunoController = require('../controllers/AlunoController'); var _AlunoController2 = _interopRequireDefault(_AlunoController);
var _loginRequired = require('../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);

const router = new (0, _express.Router)();

// ao chamar a rota '/', o método index do controller homeController é chamado
router.get('/', _AlunoController2.default.index);
router.post('/', _loginRequired2.default, _AlunoController2.default.store);
router.put('/:id', _loginRequired2.default, _AlunoController2.default.update);
router.get('/:id', _AlunoController2.default.show);
router.delete('/:id', _loginRequired2.default, _AlunoController2.default.delete);

exports. default = router;
