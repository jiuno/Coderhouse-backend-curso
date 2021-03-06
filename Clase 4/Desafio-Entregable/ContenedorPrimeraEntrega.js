const fs = require('fs')

class Contenedor {
  fileName // [String] fileName donde se guardaran los objetos
  constructor(fileName) {
    this.fileName = fileName
    this.id = 0
    this.objects = []

    const existeFile = fs.existsSync(this.fileName)

    if (existeFile) {
      this.leer()
    }
  }

  leer() {
    try {
      const dataRaw = fs.readFileSync(this.fileName, 'utf-8')
      console.log(dataRaw)
      this.objects = JSON.parse(dataRaw)
      this.id = this.objects[this.objects.length - 1].id
    } catch (error) {
      console.log('Error de lectura: ', error)
    }
  }

  async leerAsync() {
    try {
      const result = {}
      const p = await fs.promises.readFile(this.fileName, 'utf-8')
      p.then((data) => {
        result = JSON.parse(data)
      })
      return result
    } catch (error) {
      console.log('Error de lectura: ', error)
    }
  }

  escribirAsync(data) {
    try {
      return fs.promises.writeFile(
        this.fileName,
        JSON.stringify(data, null, '\t'),
        { flag: 'w' },
      )
    } catch (error) {
      console.log('Error de escritura: ', error)
    }
  }

  async save(object) {
    try {
      let objCopy = Object.assign({}, object)
      this.id++
      objCopy.id = this.id
      this.objects.push(objCopy)
      await this.escribirAsync(this.objects)
      return objCopy.id
    } catch (error) {
      console.log(error)
    }
  }

  async deleteAll() {
    this.objects = []
    await this.escribirAsync('test') // La idea es que sobreescriba todo el archivo pero solo sobreescribe los caracteres que necesita. Con test sobreescribe, si existe productos.txt, los primeros caracteres de productos.txt.
  }

  deleteAll2() {
    fs.promises.unlink(this.fileName).then((this.objects = [])) //No es lo que pide la consigna.
  }

  getAll() {
    return this.objects
  }

  deleteByID2(ID) {
    let objs = this.getByID() // Aca getByID esta retornando siempre null
    console.log(objs)
    const index = objs.findIndex((obj) => {
      return obj.id == ID
    })
    objs.splice(index, 1)
    console.log(objs)
    this.escribirAsync(objs)
  }

  async deleteByID(ID) {
    const id = this.objects.filter((x) => x.id !== ID)
    this.objects = id
    await this.escribirAsync(this.objects)
  }

  getByID(ID) {
    try {
      let objEncontrado = null
      const objects = this.getAll()
      for (let i = 0; i < objects.length; i++) {
        if (objects[i].id == ID) {
          objEncontrado = objects[i]
        }
      }
      if (objEncontrado) {
        return objEncontrado
      } else {
        console.log('ID no encontrado')
        return null
      }
    } catch (error) {
      console.log(error)
    }
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

const cont1 = new Contenedor('productos.txt')

cont1.save(obj1)
cont1.save(obj2)
cont1.save(obj3)

console.log(cont1.getByID(2))

console.log(cont1.getAll())

// cont1.deleteAll()  Corriendo esta linea con las demas, excepto deleteByID se reproduce el problema de sobreescribir solo ciertos caracteres.

cont1.deleteByID(2)
