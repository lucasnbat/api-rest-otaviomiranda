import { Router } from 'express';

// abaixo eu estou dando um nome para o import do arquivo (nome: homeController)
import fotoController from '../controllers/FotoController';

import loginRequired from '../middlewares/loginRequired';

// criando constante que recebe a lib + as configurações realizadas

const router = new Router();

// ao chamar a rota '/', o método index do controller homeController é chamado

router.post('/', loginRequired, fotoController.store);

export default router;
