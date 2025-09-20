class Heroi {
    constructor(nome, xp = 0) {
        this.nome = nome;
        this.xp = Number.isFinite(xp) ? xp : 0;
        this.nivel = this.definirNivel();
    }

    definirNivel() {
        switch (true) {
            case this.xp < 1000:
                return 'Ferro';
            case this.xp >= 1001 && this.xp <= 2000:
                return 'Bronze';
            case this.xp >= 2001 && this.xp <= 5000:
                return 'Prata';
            case this.xp >= 5001 && this.xp <= 7000:
                return 'Ouro';
            case this.xp >= 7001 && this.xp <= 8000:
                return 'Platina';
            case this.xp >= 8001 && this.xp <= 9000:
                return 'Ascendente';
            case this.xp >= 9001 && this.xp <= 10000:
                return 'Imortal';
            case this.xp >= 10001:
                return 'Radiante';
            default:
                return 'Ferro';
        }
    }

    narrativaEntrada() {
        console.log("\nVocê se aproxima dos portões de Mordor...");

        if (['Ascendente', 'Imortal', 'Radiante'].includes(this.nivel)) {
            console.log(`\nO Senhor do Escuro reconhece sua força, ${this.nome}.`);
            console.log("Os portões se abrem, e você pode adentrar as Terras Sombrias de Mordor!");
        } else {
            console.log(`\n${this.nome}, os Orcs olham para você com desdém.`);
            console.log("Seu poder ainda é fraco demais para atravessar os portões.");
            console.log("Você precisará treinar mais antes de tentar novamente...");
        }
    }

    exibirStatus() {
        console.log(`\nO Herói de nome **${this.nome}** está no nível de **${this.nivel}**.`);
    }
}

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Você acaba de chegar nas terras de Mordor");
console.log("Apenas aventureiros dignos podem atravessar seus portões.\n");

function pergunta(query) {
    return new Promise(resolve => {
        readline.question(query, ans => resolve(ans));
    });
}

(async function main() {
    const nome = (await pergunta('Qual o nome de seu Herói? ')).trim();
    const xpEntrada = (await pergunta('Quantos pontos de experiência (XP) ele possui? ')).trim();
    let xp = parseInt(xpEntrada, 10);
    
    if (Number.isNaN(xp) || xp < 0) {
        console.log('Entrada de XP inválida. Usando XP = 0.');
        xp = 0;
    }

    const heroi = new Heroi(nome, xp);
    heroi.exibirStatus();
    heroi.narrativaEntrada();

    readline.close();
})();
