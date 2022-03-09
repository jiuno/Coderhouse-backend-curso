class Usuario {
    nombre;   //String
    apellido; //String
    libros;   //Object[]
    mascotas; //String[]
    
    constructor(nombre,apellido,libros,mascotas) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }

    getFullName() {
        return `${this.nombre} ${this.apellido}`
    };

    addMascota(mascota) { //mascota es un string.
        this.mascotas.push(mascota)
    };

    countMascotas() {
        return this.mascotas.length;
    };

    addBook(nombre, autor) {
        const libro = {
            nombre: nombre,
            autor: autor
        }
        this.libros.push(book);
    };

    getBookNames() {
        nombresLibros = []
        libros.forEach(libro => {
            nombresLibros.push(libro.nombre)
        });
        return nombresLibros;
    };

};

const libroDePrueba1 = {nombre: "Harry Potter y la Piedra Filosofal",
                        autor: "J.K. Rowling"};

const libroDePrueba2 = {nombre: "La Torre Oscura 1: El Pistolero",
                        autor: "Stephen King"};


const Bruno = new Usuario("Bruno","Alliani",[libroDePrueba1,libroDePrueba2],["Reina"]);

console.log(Bruno.getFullName())



