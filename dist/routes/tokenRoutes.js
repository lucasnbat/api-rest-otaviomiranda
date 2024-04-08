"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
// abaixo eu estou dando um nome para o import do arquivo (nome: homeController)
var _TokenController = require('../controllers/TokenController'); var _TokenController2 = _interopRequireDefault(_TokenController);

const router = new (0, _express.Router)();

router.post('/', _TokenController2.default.store);

exports. default = router;
