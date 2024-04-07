import { Router } from 'express';
// abaixo eu estou dando um nome para o import do arquivo (nome: homeController)
import alunoController from '../controllers/AlunoController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// ao chamar a rota '/', o método index do controller homeController é chamado
router.get('/', alunoController.index);
router.post('/', loginRequired, alunoController.store);
router.put('/:id', loginRequired, alunoController.update);
router.get('/:id', alunoController.show);
router.delete('/:id', loginRequired, alunoController.delete);

export default router;
