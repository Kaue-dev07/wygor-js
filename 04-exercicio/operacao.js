const prompt = require('prompt-sync')();

function operacoes() {
    const num1 = prompt("Primeiro número:");
    const num2 = prompt("Segundo número:");

    const sub = num1 - num2;
    const mult = num1 * num2;
    const div = num1 / num2;
    const soma = num1 + num2;

    console.log(`A subtração de ${num1} - ${num2} é: ${sub}`);
    console.log(`A multiplicação de ${num1} * ${num2} é: ${mult}`);
    console.log(`A divisão de ${num1} / ${num2} é: ${div}`);
    console.log(`A soma de ${num1} + ${num2} é: ${soma}`);
}

module.exports = operacoes; 