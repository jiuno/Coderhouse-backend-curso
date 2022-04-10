const express = require('express')
const path = require('path')
const Contenedor = require('../resources/Contenedor')

const productos = new Contenedor(
  path.resolve(__dirname, '../resources/productos.txt'),
)

const router = express.Router()
router.get('/', (req, res) => {
  productos.getAll().then((prod) => {
    res.send(JSON.stringify(prod, null, '\t')) //Se ve "feo"
  })
})

router.post('/', async (req, res) => {
  try {
    const id = await productos.save(req.body)
    const prod = await productos.getById(id)
    res.send({
      status: 'Producto guardado',
      producto: prod,
    })
  } catch (err) {
    console.log(err)
  }
})

router.get('/:id', async (req, res) => {
  res.send(await productos.getById(parseInt(req.params.id)))
})

router.delete('/', async (req, res) => {
  productos.deleteAll()
  res.send({
    status: 'Productos borrados',
    producto: await productos.getAll(),
  })
})

router.delete('/:id', async (req, res) => {
  await productos.deleteByID(parseInt(req.params.id))
  res.send({
    status: 'Producto borrado',
  })
})

router.put('/:id', async (req, res) => {
  const id = req.params.id
  const objReq = req.body
  const prod = await productos.replaceByID(objReq, id)
  res.send({
    status: `Producto ${id} actualizado`,
    producto: prod,
  })
})

module.exports = router
