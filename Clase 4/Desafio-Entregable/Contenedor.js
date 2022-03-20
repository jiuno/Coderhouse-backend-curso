const fs = require('fs')

class Contenedor {
  archivo //Archivo donde se guardaran los productos
  constructor(archivo) {
    this.archivo = archivo
    this.productos = []
    this.id = 0
  }

  async leerAsync() {
    try {
      const dataRaw = await fs.promises.readFile(this.archivo)
      console.log(dataRaw[1])
    } catch (error) {
      console.log('Error de lectura', error)
    }
  }
}

const cont1 = new Contenedor('./productos.txt')

cont1.leerAsync()
