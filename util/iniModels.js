const { Departamento } = require('../models/departamento');
const { Empleado } = require('../models/empleado');

const initModels = () => {
  Departamento.hasMany(Empleado);
  Empleado.belongsTo(Departamento);
};

module.exports = { initModels };
