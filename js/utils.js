const fs = require("fs");
const path = require("path");

//criar pasta caso não exista
const logsDir = path.join(__dirname, "logs");
if (!fs.existsSync(logsDir)) {
    fs.mkdirSync(logsDir);
}

function Salvarlog(json) {
    const dataAtual = new Date();
    const dataStr   = dataAtual.toISOString().split("T")[0]; //2025-10-21
    const logPath   = path.join(logsDir, `log_${dataStr}.json`);

    const novoRegistro = {
        data     : dataAtual.toISOString(),
        operacao,
        valores: `${a} e ${b}`,
        resultado
    };

    let logExistentes = [];
    if(fs.existsSync(logPath)) {
        const conteudo = fs.readFileSync(logPath, "utf-8");
        logExistentes  = JSON.parse(conteudo || "[]");
    }

    logExistentes.push(novoRegistro);
    fs.writeFileSync(logPath, JSON.stringify(logExistentes, null, 2),
    "utf-8");

    console.log('Operação registrada em $(path.basename(logPath))');
}

module.exports = {Salvarlog};