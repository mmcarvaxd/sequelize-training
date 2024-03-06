const mongoose = require('mongoose')

const usuario = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unque: true
  },
  name: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('usuarios', usuario)