/** Imports */
const express = require('express')
const path = require('path')
const mainRouter = require('./routes/index')

/** Express initialization */
const app = express()
const port = 8080
const server = app.listen(port, () =>
  console.log(`Server listening on port: ${server.address().port}`),
)
server.on('error', () => {
  console.log('Hubo un error')
})

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

/** Routers */

app.use('/api', mainRouter)
