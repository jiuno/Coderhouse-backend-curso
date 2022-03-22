const Contenedor = require('./Contenedor')

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
  .then(() => cont.deleteAll())
  .then(() => cont.getAll().then((data) => console.log(data, 'Todo borrado')))
