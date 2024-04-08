import multer from 'multer';

import multerConfig from '../config/multerConfig';

import Foto from '../models/Foto';

// tratamento de que tem que ser uma foto só
const upload = multer(multerConfig).single('foto');

class FotoController {
  async store(req, res) {
    return upload(req, res, async (error) => {
      if (error) {
        return res.status(400).json({
          errors: [error.code],
        });
      }

      try {
        const { originalname, filename } = req.file;
        const { aluno_id } = req.body;

        const foto = await Foto.create({
          originalname, filename, aluno_id,
        });

        return res.json(foto);
      } catch (e) {
        return res.status(400).json({
          errors: ['Aluno não existe'],
        });
      }
    });
  }
}

// exportando uma nova classe HomeController já instanciada para uso
export default new FotoController();
