"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
// abaixo eu estou dando um nome para o import do arquivo (nome: homeController)
var _UserController = require('../controllers/UserController'); var _UserController2 = _interopRequireDefault(_UserController);
var _loginRequired = require('../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);

const router = new (0, _express.Router)();

// Esses dois não deveriam existir
// router.get('/', loginRequired, userController.index);
// router.get('/:id', userController.show);

// ao chamar a rota '/', o método index do controller homeController é chamado
// não precisa colocar /store senão fica /store/users no fim

// loginRequired não tem aqui porque preciso permitir um user sem conta
// entrar para criar sua conta
router.post('/', _UserController2.default.store);

// tirei os id aqui porque, usando o middleware, o user ja vai passar
// o id na requisição, e usarei eles no update e delete
router.put('/', _loginRequired2.default, _UserController2.default.update);
router.delete('/', _loginRequired2.default, _UserController2.default.delete);

exports. default = router;

/**
 * Padrão do mercado são até 5 regras por controller
 * index: listagem de user - GET
 * store ou create: cria user - POST
 * delete: deleta user - DELETE
 * show: exibe um user - GET
 * update: atualiza um user - PATCH (substituir apenas um valor) OU PUT
 */
