const {Router} = require('express')
const {Usuario, Setor} = require('../db/models');

const app = Router()

app.post('/', async (req, res) => {

  const body = req.body

  const setor = await Setor.create({
    name: body.name
  })

  res.json(setor);
})

app.get('/', async (req, res) => {
  const setor = await Setor.findAll({
    include: [{
      model: Usuario,
      as: 'usuarios',
      attributes: ['name']
    }]
  })

  res.json(setor);
})

app.get('/:id', async (req, res) => {
  const setor = await Setor.findOne({
    where: {
      id: req.params.id
    }
  })

  res.json(setor);
})

app.put('/', async (req, res) => {
  const body = req.body

  if(!body.id) {
    return res.status(400).json({error: 'Id não informado'})
  }

  await Setor.update({
    name: body.name
  }, {
    where: {
      id: body.id
    }
  })

  res.json(body);
})

app.delete('/:id', async (req, res) => {
  const setor = await Setor.destroy({
    where: {
      id: req.params.id
    }
  })

  res.json(setor);
})

module.exports = app