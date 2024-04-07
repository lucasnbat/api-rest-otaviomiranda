import { Router } from 'express';
// abaixo eu estou dando um nome para o import do arquivo (nome: homeController)
import homeController from '../controllers/HomeController';

const router = new Router();

// ao chamar a rota '/', o método index do controller homeController é chamado
router.get('/', homeController.index);

export default router;
