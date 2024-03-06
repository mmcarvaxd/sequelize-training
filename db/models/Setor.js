'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Setor extends Model {
    static associate(models) {
      models.Setor.hasMany(models.Usuario, {
        as: 'usuarios',
        foreignKey: 'setor_id',
        sourceKey: 'id'
      })
    }
  }
  Setor.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  }, {
    sequelize,
    modelName: 'Setor',
    tableName: 'tb_setores',
    freezeTableName: true,
    timestamps: false
  });
  return Setor;
};