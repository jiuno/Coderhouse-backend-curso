const productos = [
    { id:1, nombre:'Escuadra', precio:323.45 },
    { id:2, nombre:'Calculadora', precio:234.56 },
    { id:3, nombre:'Globo Terráqueo', precio:45.67 },
    { id:4, nombre:'Paleta Pintura', precio:456.78 },
    { id:5, nombre:'Reloj', precio:67.89 },
    { id:6, nombre:'Agenda', precio:78.90 }
    ];
    
const ejercicio1Arr = [];

for (let i = 0; i < productos.length; i++) {
    ejercicio1Arr.push(productos[i]["nombre"]);
};

const ejercicio1 = ejercicio1Arr.join(",");

// console.log(ejercicio1)

const ejercicio2Arr = productos.map(producto => producto.precio);
let ejercicio2 = 0
for (let i = 0; i < ejercicio2Arr.length; i++) {
    ejercicio2=+ ejercicio2Arr[i];
}
console.log(ejercicio2);
