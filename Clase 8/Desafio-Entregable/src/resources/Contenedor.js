const fs = require('fs')

class Contenedor {
  fileName //[String] File where data is read and written.
  constructor(fileName) {
    this.fileName = fileName
    this.id = 0
    this.objects = []

    if (fs.existsSync(this.fileName)) {
      this.objects = this.readSync()
      if (this.objects.length > 0) {
        this.id = this.objects[this.objects.length - 1].id
      }
    }
  }

  async write(data) {
    try {
      return await fs.writeFileSync(
        this.fileName,
        JSON.stringify(data, null, '\t'),
      )
    } catch (err) {
      console.log('Error en la escritura del archivo', err)
    }
  }

  readSync() {
    try {
      const dataRaw = fs.readFileSync(this.fileName, 'utf-8')
      return JSON.parse(dataRaw)
    } catch (err) {
      console.log(
        'No existe el archivo. Guardar primero un objecto con Contenedor.save',
        err,
      )
    }
  }

  async read() {
    try {
      const dataRaw = await fs.promises.readFile(this.fileName, 'utf-8')
      return JSON.parse(dataRaw)
    } catch (err) {
      console.log(
        'No existe el archivo. Guardar primero 1 objecto con Contenedor.save',
        err,
      )
    }
  }

  async save(object) {
    try {
      let objCopy = Object.assign({}, object)
      this.id++
      objCopy.id = this.id
      this.objects.push(objCopy)
      await this.write(this.objects)
      return objCopy.id
    } catch (err) {
      console.log('Error al guardar el objeto', err)
    }
  }

  async getAll() {
    try {
      this.objects = await this.read()
      return this.objects
    } catch (err) {
      console.log('No existe el archivo')
    }
  }

  async getById(ID) {
    try {
      this.objects = await this.read()
      const obj = this.objects.filter((ob) => {
        return ob.id == ID
      })
      if (obj.length == 0) {
        return { error: 'Producto no encontrado' }
      } else if (obj.length > 1) {
        return { error: 'Mas de un objeto con el ID buscado.' }
      } else {
        return obj[0] //Solo debe devolver 1 obj. El array no debe tener más de un elemento
      }
    } catch (err) {
      console.log(err.message)
    }
  }

  async deleteAll() {
    this.objects = []
    this.id = 0
    return await this.write(this.objects)
  }

  async deleteByID(ID) {
    this.objects = await this.read()
    const objsNotDeleted = this.objects.filter((ob) => {
      return ob.id !== ID
    })
    this.objects = objsNotDeleted
    await this.write(this.objects)
  }

  async replaceByID(obj, ID) {
    this.objects = await this.read()
    const index = this.objects.findIndex((elem) => elem.id == ID)
    if (index !== -1) {
      this.objects[index] = { ...obj, id: parseInt(ID) }
      await this.write(this.objects)
      return this.objects[index]
    } else {
      return { error: 'ID no encontrado' }
    }
  }
}

module.exports = Contenedor
