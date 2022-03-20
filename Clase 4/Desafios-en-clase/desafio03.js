const fs = require('fs')

const pathJson = './package.json'
const pathDestino = '.info.txt'

fs.readFile(pathJson, 'utf-8', (errRead, data) => {
  if (errRead) {
    console.log('Error de lectura: ', errRead.message)
  }

  fs.stat(pathJson, (errStat, stats) => {
    if (errStat) {
      console.log('Error lectura stats: ', errStat)
    }

    const info = {
      contenidoStr: data,
      contenidoObj: JSON.parse(data),
      size: stats.size,
    }

    console.log(info)

    const infoStringify = JSON.stringify(info, null, '\t')

    fs.writeFile(pathDestino, infoStringify, (errWrite) => {
      if (errWrite) {
        console.log('Error de escritura: ', errWrite.messagge)
      }

      console.log('Archivo guardado')
    })
  })
})
