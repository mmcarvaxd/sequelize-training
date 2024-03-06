'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('tb_usuarios', 'updatedAt', {
      type: Sequelize.DataTypes.DATE,
      allowNull: true
    })

    return await queryInterface.addColumn('tb_usuarios', 'createdAt', {
      type: Sequelize.DataTypes.DATE,
      allowNull: true
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('tb_usuarios', 'createdAt')
    return await queryInterface.removeColumn('tb_usuarios', 'updatedAt')
  }
};
