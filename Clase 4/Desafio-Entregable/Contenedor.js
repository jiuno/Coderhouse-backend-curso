const fs = require('fs')

class Contenedor {
  fileName //[String] fileName donde se guardaran los objetos.
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
      this.objects = JSON.parse(dataRaw)
      this.id = this.objects[this.objects.length - 1].id
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
  escribir(data) {
    try {
      fs.writeFileSync(this.fileName, JSON.stringify(data, null, '\t'))
    } catch (error) {
      console.log(error)
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

  save(object) {
    try {
      this.id++
      object.id = this.id
      this.objects.push(object)
      this.escribirAsync(this.objects)
      return object.id
    } catch (error) {
      console.log(error)
    }
  }

  async deleteAll() {
    this.objects = []
    this.escribirAsync(this.objects)
  }
  async getAll() {
    try {
      await this.leerAsync()
      return this.objects
    } catch (error) {
      console.log(error)
    }
  }

  async deleteByID(ID) {
    let objs = await this.getByID()
    console.log(objs)
    const index = objs.findIndex((obj) => {
      return obj.id == ID
    })
    objs.splice(index, 1)
    console.log(objs)
    // this.escribirAsync(objs)
  }

  getByID(ID) {
    try {
      let objEncontrado = null
      const objects = this.getAll()
      for (let i = 0; i < objects.length; i++) {
        if (objects[i].id == ID) {
          objEncontrado = objects[ID]
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

const cont1 = new Contenedor('prueba1.txt')

cont1.save(obj1)
cont1.save(obj2)
cont1.save(obj3)
cont1.save(obj1)
cont1.save(obj2)
// cont1.save(obj3)
