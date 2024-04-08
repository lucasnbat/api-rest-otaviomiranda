"use strict";// cada migration parece ser uma operação que carrega todos os campos do banco
// que serão atualizados de alguma forma

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable('fotos', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      originalname: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      filename: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      aluno_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'alunos', // tabela referenciada
          key: 'id', // campo da tabela referenciada
        },
        onDelete: 'SET NULL', // se deletar aluno, seta esse campo como null
        onUpdate: 'CASCADE', // se atualizar id do aluno, atualiza aqui tambem
      },
      create_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      update_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  async down(queryInterface) {
    return queryInterface.dropTable('fotos');
  },
};
