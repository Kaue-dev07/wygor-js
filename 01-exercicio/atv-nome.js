const prompt = require("prompt-sync")();

function nome() {
    const nomeuser = prompt("Seu nome aqui: ");

    console.log("Dae " +nomeuser+ ", de boas?");
}

module.exports = nome;