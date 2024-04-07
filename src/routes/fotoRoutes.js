import { Router } from 'express';
import multer from 'multer';

// abaixo eu estou dando um nome para o import do arquivo (nome: homeController)
import fotoController from '../controllers/FotoController';
import multerConfig from '../config/multerConfig';

// criando constante que recebe a lib + as configurações realizadas
const upload = multer(multerConfig);

const router = new Router();

// ao chamar a rota '/', o método index do controller homeController é chamado
// o multer upload é usado como se fosse um middleware, como pode ver
// single('foto') indica que será um único arquivo no campo 'foto'
router.post('/', upload.single('foto'), fotoController.store);

export default router;
