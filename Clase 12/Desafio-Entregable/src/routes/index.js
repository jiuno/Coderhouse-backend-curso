const express = require('express')
const routerProductos = require('./productos')
const router = express.Router()
const Contenedor = require('../resources/Contenedor')
const productos = Contenedor

router.get('/', (req, res) => {
  productos.getAll().then((prod) => {
    res.render('ingresoProductos', { prod })
  })
})

router.use('/productos', routerProductos)

module.exports = router
