const Contenedor = require('./Contenedor')

const lapiz = {
  title: 'lapiz',
  price: 20,
  url:
    'https://www.istockphoto.com/es/vector/icono-del-l%C3%A1piz-plano-gm1078269892-288880222',
}

const goma = {
  title: 'goma',
  price: 30,
  url:
    'https://www.istockphoto.com/es/vector/borrador-de-ilustraci%C3%B3n-vectorial-gm180387767-27051280',
}

const regla = {
  title: 'regla',
  price: 10,
  url:
    'https://www.istockphoto.com/es/vector/colores-de-dibujos-animados-icono-cartel-gobernante-gm924517912-253722579',
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
