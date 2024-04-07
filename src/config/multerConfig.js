import multer from 'multer';
import { extname, resolve } from 'path';

/**
 * cb = callback
 */

const aleatorio = () => Math.floor(Math.random() * 10000 + 10000);
// primeiro parâmetro é null, segundo é o caminho até a pasta uploads
export default {
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, resolve(__dirname, '..', '..', 'uploads'));
    },
    filename: (req, file, cb) => {
      // montagem de nome de arquivo: primeiro a data e depois a extensão original do arquivo
      cb(null, `${Date.now()}_${aleatorio()}${extname(file.originalname)}`);
    },
  }),
};
