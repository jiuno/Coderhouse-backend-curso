/*Definir la función mostrarLista que reciba una lista de datos y muestre su
contenido, si no está vacía, o de lo contrario muestre el mensaje: “lista vacía”.
Luego, invocarla con datos de prueba para verificar que funciona bien en ambos
casos.*/

function mostrarLista(lista) {
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

mostrarLista(c)