const termine = () => console.log("Termine")



const mostrarLetras = (palabra, delay, cb) => {
    let i = 0;
    const funcARepetir = setInterval(() => {
        
        if (i <= palabra.length ) {
            console.log(palabra[i])
            i++;
        } else {
        clearInterval(funcARepetir)
        cb();
    }
        
    }, delay);
};

mostrarLetras("hola",1000,termine);

