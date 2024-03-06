'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('tb_usuarios', 'setor_id', {
      type: Sequelize.DataTypes.INTEGER,
      // allowNull: false,
      references: {
        model: 'tb_setores',
        key: 'id'
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('tb_usuarios', 'setor_id');
  }
};
