/** Imports */
const express = require('express')
const path = require('path')
const mainRouter = require('./routes/index')
const http = require('http')
const io = require('socket.io')
const Contenedor = require('./resources/Contenedor')
const productos = Contenedor
/** Express initialization */
const app = express()
const myServer = http.Server(app)
const port = 8080
const server = myServer.listen(port, () =>
  console.log(`Server listening on port: ${server.address().port}`),
)
server.on('error', () => {
  console.log('Hubo un error')
})

const myWSServer = io(myServer)

myWSServer.on('connection', (socket) => {
  console.log('Conexion')
  console.log('Server', socket.id)
  console.log('Cliente', socket.client.id)

  socket.on('Product added', () => {
    console.log('Mensaje cliente recibido')
    /* ocket.broadcast.emit('Product added by other') */
  })
})

app.set('views', path.resolve(__dirname, '../views'))
app.set('view engine', 'pug')

const publicPath = path.resolve(__dirname, '../public')

app.use(express.static(publicPath))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

/** Routers */

app.use('/', mainRouter)
