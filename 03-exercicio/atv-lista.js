function pares() {
    let numerosPares = [2, 5, 6, 7, 10];

    for(let i = 0; i < numerosPares.length; i++) {
        if(numerosPares[i] % 2 === 0) {
            console.log(numerosPares[i]);
        }
    }
}

module.exports = pares;