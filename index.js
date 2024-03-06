const express = require('express');
const app = express();
const {Usuario, Setor} = require('./db/models');
const usuarioRoutes = require('./routes/usuario')
const setorRoutes = require('./routes/setor')
const {ValidateTokenMiddleware} = require('./middlewares/token-validator')

app.use(express.json());
// app.use(ValidateTokenMiddleware)

app.use('/usuarios', usuarioRoutes)
app.use('/setor', setorRoutes)

app.listen(3000, () => {
  console.log('Servidor iniciado');
})