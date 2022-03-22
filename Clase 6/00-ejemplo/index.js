const http = require('http')

const obtenerMensaje = () => {
  const fyh = new Date()
  const hour = fyh.getHours()

  let msg = 'buenos dias'

  if (hour >= 13 && hour <= 19) {
    msg = 'Buenas tardes'
  }

  if (hour >= 20 || hora <= 5) msg = 'Buenas noches'

  return msg
}

const f = (peticion, respuesta) => {
  const msg = obtenerMensaje()
  respuesta.end(msg)
}

const server = http.createServer(f)

const puerto = 8080

const connectedServer = server.listen(puerto, () => {
  console.log(
    `Servidor http escuchando en el puerto: ${connectedServer.address().port}`,
  )
})

console.log('hola')
