const bcryptjs = require('bcryptjs');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('users', [{
      nome: 'Luiz',
      email: 'luiz@gmail.com',
      password_hash: await bcryptjs.hash('123456', 8), // encriptar
      create_at: new Date(),
      update_at: new Date(),
    },
    {
      nome: 'Luiz 2',
      email: 'luiz2@gmail.com',
      password_hash: await bcryptjs.hash('123456', 8), // encriptar
      create_at: new Date(),
      update_at: new Date(),
    },
    {
      nome: 'Luiz 3',
      email: 'luiz3@gmail.com',
      password_hash: await bcryptjs.hash('123456', 8), // encriptar
      create_at: new Date(),
      update_at: new Date(),
    }], {});
  },

  async down() {
    // await queryInterface.bulkDelete('People', null, {});
  },
};
