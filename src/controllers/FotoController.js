class FotoController {
  async store(req, res) {
    res.json(req.file); // retorna os dados do arquivo
  }
}

// exportando uma nova classe HomeController já instanciada para uso
export default new FotoController();
