const fs = require('fs')

productos = []

class Contenedor {
  archivo //Archivo donde se guardaran los productos
  constructor(archivo) {
    this.archivo = archivo
    this.id = 0
  }

  escribir(data) {
    try {
      fs.writeFileSync(this.archivo, JSON.stringify(data, null, '\t'))
    } catch (error) {
      console.log('Error de escritura: ', error)
    }
  }

  leer() {
    try {
      const dataRaw = fs.readFileSync(this.archivo, 'utf-8')
      return dataRaw
    } catch (error) {
      console.log('Error de lectura: ', error)
    }
  }

  save(objeto) {
    objeto.id = this.id++
    productos.push(objeto)
    this.escribir(productos)
    return objeto.id
  }
}

const obj1 = {
  title: 'lapiz',
  price: 20,
}

const obj2 = {
  title: 'goma',
  price: 50,
}

const obj3 = {
  title: 'regla',
  price: 30,
}

const cont1 = new Contenedor('prueba1.txt')

cont1.save(obj1)
cont1.save(obj2)
cont1.save(obj3)

const datos = cont1.leer()
console.log(JSON.parse(datos)[0])
