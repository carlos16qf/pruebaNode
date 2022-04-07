const { DataTypes } = require('sequelize');
const { database } = require('../util/database');

const Departamento = database.define('departamento', {
  id: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false
  },
  nombre: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  presupuesto: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

module.exports = { Departamento };
