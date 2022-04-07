const { DataTypes } = require('sequelize');
const { database } = require('../util/database');

const Empleado = database.define('empleado', {
  id: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false
  },
  nif: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  nombre: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  apellido1: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1
  },
  apellido2: {
    type: DataTypes.STRING(10),
    defaultValue: 'active',
    allowNull: false
  },
  departamentoId: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

module.exports = { Empleado };
