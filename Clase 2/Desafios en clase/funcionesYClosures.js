/* 01 - Definir la función mostrarLista que reciba una lista de datos y muestre su
contenido, si no está vacía, o de lo contrario muestre el mensaje: “lista vacía”.
Luego, invocarla con datos de prueba para verificar que funciona bien en ambos
casos.*/


/*function mostrarLista(lista) {
    if (lista.length > 0) {
        console.log(lista);
        
    } else {
        console.log("lista vacía")
    };
    
};

const a = [1,2,3]
const b = []
const c = [1,"hola",true]

mostrarLista(a)

mostrarLista(b)

mostrarLista(c)*/


/* 02 - Definir una función anónima que haga lo mismo que la del punto 1, e invocarla
inmediatamente, pasando una lista con 3 números como argumento.*/

/*Pregunta: Por que si descomento el ejercicio anterior arroja el error "TypeError: mostrarLista(...) is not a function"
(function(){ console.log([1,2,3])})(); */

/* 03 - Definir la función crearMultiplicador que reciba un número y devuelva una
función anónima que reciba segundo número y dé como resultado el producto de
ambos. Luego, a partir de la función definida, crear dos funciones duplicar y
triplicar, y probarlas con diferentes valores.*/

function crearMultiplicador(num) {
    return function (mult) {
        return num*mult;
    }
};

const duplicar = crearMultiplicador(2);

console.log(duplicar(5));

const triplicar = crearMultiplicador(3);
console.log(triplicar(20));




