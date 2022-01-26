'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('approved_candidates', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      cpf: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: true,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
        },
      score: {
        type: Sequelize.FLOAT,
        },
    });
  },
  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('approved_candidates');
  },
};