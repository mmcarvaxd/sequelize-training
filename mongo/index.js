const mongoose = require('mongoose')
const Usuario = require('./models/Usuario')

mongoose.connect('mongodb://localhost:27017/treinamento')

module.exports = {
  Usuario
}