const express = require('express')
const path = require('path')
const ContenedorPath = path.resolve(__dirname, './resources/Contenedor.js')
const resourcesPath = path.resolve(__dirname, './resources')
const Contenedor = require('./resources/Contenedor.js')

const app = express()

const port = 8080

const productos = new Contenedor(path.resolve(resourcesPath, './productos.txt'))

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min
}

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './resources/index.html'))
})

app.get('/productos', (req, res) => {
  productos.getAll().then((prod) => {
    res.send(JSON.stringify(prod, null, '\t')) //Se ve "feo"
  })
})

app.get('/productoRandom', (req, res) => {
  const randInt = getRandomInt(1, productos.objects.length + 1)
  productos.getById(randInt).then((prod) => {
    res.send(JSON.stringify(prod, null, '\t'))
  })
})

const server = app.listen(port, () =>
  console.log(`Server listening on port: ${server.address().port}`),
)

server.on('error', () => {
  console.log('Hubo un error')
})
