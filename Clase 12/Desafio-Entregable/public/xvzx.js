socket.on('Product added', (data) => {
  let tbodyRef = document
    .getElementById('myTable')
    .getElementsByTagName('tbody')[0]
  let newRow = tbodyRef.insertRow()
  let cell1 = newRow.insertCell()
  let cell2 = newRow.insertCell()
  let cell3 = newRow.insertCell()
  let cell4 = newRow.insertCell()

  cell1.innerHTML = data[0].id
  cell2.innerHTML = data[1].title
  cell3.innerHTML = data[1].price
  cell4.innerHTML = data[1].url
})
