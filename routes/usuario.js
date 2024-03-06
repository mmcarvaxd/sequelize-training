const {Router} = require('express')
const {Usuario} = require('../mongo');

const app = Router()

app.get('/:id', async (req, res) => {
  const user = await Usuario.findById(req.params.id)

  res.json(user);
})

app.get('/', async (req, res) => {
  const count = await Usuario.countDocuments()

  let limit = 10
  let page = 1

  if(req.query.limit) limit = Number(req.query.limit)
  if(req.query.page) page = Number(req.query.page)
  
  let where = {}

  if(req.query.name) where.name = req.query.name
  if(req.query.email) where.email = req.query.email

  try {
    const usuarios = await Usuario.find(where).limit(limit).skip((page -1 ) * limit)
    
    res.json({usuarios, total: count});
  } catch (error) {
    res.status(500).json({error: error.message})
  }
});

app.post('/', async (req, res) => {
  const usuario = await Usuario.create({
    email: req.body.email,
    name: req.body.name
  })

  res.json(usuario);
})

app.put('/', async (req, res) => {
  let usuarioUpdate = {}

  if(!req.body.id) {
    return res.status(400).json({error: 'Id não informado'})
  }

  if(req.body.email) usuarioUpdate.email = req.body.email
  if(req.body.name) usuarioUpdate.name = req.body.name
  if(req.body.setor_id) usuarioUpdate.setor_id = req.body.setor_id

  try {
    await Usuario.updateOne({
      _id: req.body.id
    }, usuarioUpdate)
    
    res.json(usuarioUpdate);
  } catch (error) {
    res.status(500).json({error: error.message})
  }
})

app.delete('/:id', async (req, res) => {
  await Usuario.deleteOne({
    _id: req.params.id
  })

  res.status(204).send()
})

module.exports = app