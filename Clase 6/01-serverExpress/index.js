const express = require('express')

const app = express()

const port = 8080

server = app.listen(port, () => {
  console.log('Server escuchando en ', port)
}) //igual lo ejecuta

server.on('error', (err) => {
  console.log('Hubo un error', err)
})

app.get('/fyh', (req, res) => {
  const fyh = new Date()
  res.json({
    fyh: `${fyh}`,
  })
})
