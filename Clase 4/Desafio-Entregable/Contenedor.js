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
    return await fs.writeFileSync(
      this.fileName,
      JSON.stringify(data, null, '\t'),
    )
  }

  readSync() {
    try {
      const dataRaw = fs.readFileSync(this.fileName, 'utf-8')
      return JSON.parse(dataRaw)
    } catch (err) {
      console.log(
        'No existe el archivo. Guardar primero 1 objecto con Contenedor.save',
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
    let objCopy = Object.assign({}, object)
    this.id++
    objCopy.id = this.id
    this.objects.push(objCopy)
    await this.write(this.objects)
    return objCopy.id
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
    this.objects = await this.read()
    const obj = this.objects.filter((ob) => {
      return ob.id == ID
    })
    return obj[0] //Solo debe devolver 1 obj. El array no debe tener más de un elemento
  }

  async deleteAll() {
    this.objects = []
    await this.write(this.objects)
  }

  async deleteByID(ID) {
    this.objects = await this.read()
    const objsNotDeleted = this.objects.filter((ob) => {
      return ob.id !== ID
    })
    this.objects = objsNotDeleted
    await this.write(this.objects)
  }
}

const lapiz = {
  title: 'lapiz',
  price: 20,
}

const goma = {
  title: 'goma',
  price: 30,
}

const regla = {
  title: 'regla',
  price: 10,
}

const cont = new Contenedor('./productos.txt')

cont.save(goma)
cont.save(regla)
cont.save(lapiz)

cont
  .getAll()
  .then((data) => {
    console.log(data)
  })
  .then(() => {
    cont.getById(2).then((data) => console.log(data))
  })
  .then(() => cont.deleteByID(2))
  .then(() => cont.getAll().then((data) => console.log(data)))
