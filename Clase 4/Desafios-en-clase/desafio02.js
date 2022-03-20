const fs = require('fs')

try {
  const fyh = Date()

  const direccion = './fyh.txt'

  fs.writeFileSync(direccion, fyh)

  let lectura = fs.readFileSync(direccion, 'utf-8')

  console.log(lectura)
} catch (err) {
  console.log('Hubo un error: ', err)
}
