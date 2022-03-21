const fs = require('fs')

class Contenedor {
  fileName //[String] fileName donde se guardaran los objetos.
  constructor(fileName) {
    this.fileName = fileName
    this.id = 1
    this.objects = []

    const existeFile = fs.existsSync(this.fileName)

    if (existeFile) {
      this.objects = this.leer()
    }
  }

  async escribirAsync(data) {
    try {
      return await fs.promises.writeFile(
        this.fileName,
        JSON.stringify(data, null, '\t'),
      )
    } catch (error) {
      console.log('Error de escritura: ', error)
    }
  }

  leer() {
    try {
      const dataRaw = fs.readFileSync(this.fileName, 'utf-8')
      return JSON.parse(dataRaw)
    } catch (error) {
      console.log('Error de lectura: ', error)
    }
  }

  async leerAsync() {
    try {
      const objects = await fs.promises.readFile(this.fileName, 'utf-8')
      this.objects = JSON.parse(objects)
    } catch (error) {
      console.log('Error de lectura: ', error)
    }
  }

  save(object) {
    object.id = this.id++
    this.objects.push(object)
    this.escribirAsync(this.objects)
    return object.id
  }

  async getAll() {
    const data = await this.leerAsync()
    return data
  }

  async getByID(ID) {
    objects = await this.getAll()
    for (let i = 0; i < objects.length; i++) {
      if (objects[i].id == ID) {
        return objects[ID]
      }
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

const cont1 = new Contenedor('prueba1.txt')

// cont1.save(obj1)
// cont1.save(obj2)
// cont1.save(obj3)

const datos = cont1.getAll()

console.log(datos)
