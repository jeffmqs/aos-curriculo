'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Curriculo extends Model {
    static associate(models) {}
  }
  Curriculo.init({
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    telefone: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Curriculo',
    timestamps: true, // Ativa `createdAt` e `updatedAt`
  });
  return Curriculo;
};
