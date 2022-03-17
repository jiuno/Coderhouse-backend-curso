const between = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
    };

const contador = {};

for (let i = 0; i < 10000; i++) {
        const numElegido = between(1,20);
        if (contador[numElegido] === undefined) {
            contador[numElegido] = 1            
        } else {
            contador[numElegido]++
        }
};

console.log(contador);