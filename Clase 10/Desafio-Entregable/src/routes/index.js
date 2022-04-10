const express = require('express')
const routerProductos = require('./productos')
const router = express.Router()

router.get('/', (req, res) => {
  res.render('ingresoProductos', {})
})

router.use('/productos', routerProductos)

module.exports = router
