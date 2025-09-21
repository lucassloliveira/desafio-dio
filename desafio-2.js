const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function calcularElo(vitorias, derrotas) {
    return vitorias - derrotas;
}

function definirElo(vitorias) {
    switch (true) {
        case (vitorias >= 101):
            return "Imortal"; 
        case (vitorias >= 91 && vitorias <= 100):
            return "Lendário";
        case (vitorias >= 81 && vitorias <= 90):
            return "Diamante";
        case (vitorias >= 51 && vitorias <= 80):
            return "Ouro"; 
        case (vitorias >= 21 && vitorias <= 50):
            return "Prata";             
        case (vitorias >= 1 && vitorias <= 20):         
            return "Bronze";
        default:
            return "Ferro"; 
    }
}

function pergunta(query) {
    return new Promise(resolve => readline.question(query, ans => resolve(ans)));
}

(async function main() {
console.log("=== Calculadora de Partidas rankeadas ===");

    const vitorias = parseInt(await pergunta("Digite o número de vitórias: "));
    const derrotas = parseInt(await pergunta("Digite o número de derrotas: "));

    let vitoriasNum = parseInt(vitorias, 10);
    let derrotasNum = parseInt(derrotas, 10);

    if (Number.isNaN(vitorias) || vitorias < 0) vitorias = 0;
    if (Number.isNaN(derrotas) || derrotas < 0) derrotas = 0;

    const elo = calcularElo(vitorias, derrotas);
    const nivel = definirElo(vitorias);
    
    console.log(`O Heróis tem saldo de **${elo}** e está no nível de **${nivel}**.`);

    readline.close();
})();