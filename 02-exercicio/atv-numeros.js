const prompt = require("prompt-sync")();

function numeros() {
    let num1 = prompt("Digite o primeiro número: ");
    let num2 = prompt("Digite o segundo número: ")

    if (num1 > num2) {
        console.log("Primeiro número é maior que o segundo !!!");

    } else if (num1 < num2) {
        console.log("Segundo número é maior que o primeiro !!!")

    } else {
        console.log("Os dois números são iguais !!!")
    }
}

module.exports = numeros;