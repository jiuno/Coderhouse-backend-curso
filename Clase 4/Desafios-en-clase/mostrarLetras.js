const mostrarLetras = (palabra, delay, cb) => {
    let i = 0;
    const funcARepetir = setInterval(() => {
        console.log(palabra[i]);
        i++;
        if (i >= palabra.length ) {
            clearInterval(funcARepetir)
            cb();
        } 
        
    }, delay);
};

const termine = () => console.log("Termine")


/* mostrarLetras("hola",1000,termine); */

mostrarLetras("hola",500,termine);

/* mostrarLetras("hola",200,termine);

mostrarLetras("hola",0,termine); */