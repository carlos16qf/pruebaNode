const express = require('express');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const compression = require('compression');

const { departamentoRouter } = require('./routers/departamento.router');
const { empleadoRouter } = require('./routers/empleado.router');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  rateLimit({
    windowMs: 60 * 60 * 1000,
    max: 1000,
    message: 'too manv requests from your IP, try after 1 minute'
  })
);

app.use(helmet());

app.use(compression());

app.use('/api/v1/departamentos', departamentoRouter);
app.use('/api/v1/empleados', empleadoRouter);

module.exports = { app };
