const fs = require('fs')

const pathTxt = '.info.txt'
const pathDestino = './packaje.json.coder'

fs.promises
  .readFile(pathTxt, 'utf-8')
  .then((data) => {
    const info = JSON.parse(data)
    console.log(info)

    const infoContenidoStr = JSON.parse(info.contenidoStr)
    infoContenidoStr.author = 'Coderhouse'

    info.contenidoObj.author = 'Coderhouse'

    const newInfo = {
      contenidoStr: JSON.stringify(infoContenidoStr),
      contenidoObj: info.contenidoObj,
      size: info.size,
    }

    return fs.promises.writeFile(
      pathDestino,
      JSON.stringify(newInfo, null, '\t'),
    )
  })
  .then(() => {
    console.log('Nuevo archivo guardado')
  })
  .catch((err) => {
    console.log('Error: ', err)
  })
