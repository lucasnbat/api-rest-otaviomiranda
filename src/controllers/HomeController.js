class HomeController {
  async index(req, res) {
    res.json('Index');
  }
}

// exportando uma nova classe HomeController já instanciada para uso
export default new HomeController();
