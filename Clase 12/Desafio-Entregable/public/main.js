console.log('ME EJECUTE')
const socket = io.connect()

const form = document.getElementById('formulario')

form.addEventListener('submit', (ev) => {
  //
  /* const title = document.getElementById('title').value
  const price = document.getElementById('price').value
  const url = document.getElementById('url').value

  let prod = {
    title: title,
    price: price,
    url: url,
  } No logro obtener los values.*/

  console.log(`El cliente ${socket.id} agrego un producto`) //Solo lo veo si pongo ev.preventDefault()
  socket.emit('Product added') //, prod)
  ev.preventDefault() // No hace el POST con esta línea (No agrega el producto) pero el socket funciona..
})

/* socket.on('Product added', (prod) => {
  console.log('Producto agregado!')
}) */

console.log('Termine')

// const bodyTable = prod.map(function (obj, index) {
//   return `<tr>
//           <th scope="row">=obj.id</th>
//           <td>${obj.title}</td>
//           <td>${obj.title}</td>
//           <td>${obj.title}</td>
//           td=obj.url
//           </tr>`
// })
