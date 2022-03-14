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

    getMascotas() {
        return this.mascotas;
    }

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
        this.libros.push(libro);
    };

    getBookNames() {
        const nombresLibros = []
        this.libros.forEach(libro => {
            nombresLibros.push(libro.nombre)
        });
        return nombresLibros;
    };

};

const libroDePrueba1 = {nombre: "Harry Potter y la Piedra Filosofal",
                        autor: "J.K. Rowling"};

const libroDePrueba2 = {nombre: "La Torre Oscura 1: El Pistolero",
                        autor: "Stephen King"};

const libros = [];

const mascotas = [];


const Bruno = new Usuario("Bruno","Alliani",libros,mascotas);

console.log(Bruno.getFullName())

Bruno.addMascota("Reina");

Bruno.addMascota("Mia");

console.log(Bruno.countMascotas());

console.log(Bruno.getMascotas());

Bruno.addBook("La Torre Oscura 1: El Pistolero","Stephen King");

Bruno.addBook("Harry Potter y la Piedra Filosofal","J.K. Rowling");

console.log(Bruno.getBookNames());
