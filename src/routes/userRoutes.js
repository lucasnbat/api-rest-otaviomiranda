import { Router } from 'express';
// abaixo eu estou dando um nome para o import do arquivo (nome: homeController)
import userController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// Esses dois não deveriam existir
// router.get('/', loginRequired, userController.index);
// router.get('/:id', userController.show);

// ao chamar a rota '/', o método index do controller homeController é chamado
// não precisa colocar /store senão fica /store/users no fim

// loginRequired não tem aqui porque preciso permitir um user sem conta
// entrar para criar sua conta
router.post('/', userController.store);

// tirei os id aqui porque, usando o middleware, o user ja vai passar
// o id na requisição, e usarei eles no update e delete
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);

export default router;

/**
 * Padrão do mercado são até 5 regras por controller
 * index: listagem de user - GET
 * store ou create: cria user - POST
 * delete: deleta user - DELETE
 * show: exibe um user - GET
 * update: atualiza um user - PATCH (substituir apenas um valor) OU PUT
 */
