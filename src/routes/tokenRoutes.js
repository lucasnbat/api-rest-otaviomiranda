import { Router } from 'express';
// abaixo eu estou dando um nome para o import do arquivo (nome: homeController)
import tokenController from '../controllers/TokenController';

const router = new Router();

router.post('/', tokenController.store);

export default router;
