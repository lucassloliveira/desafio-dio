class Heroi {
    constructor(nome, xp = 0) {
        this.nome = nome;
        this.xp = Number.isFinite(xp) ? xp : 0;
        this.nivel = this.definirNivel();
    }
}
    definirNivel(); {
        const xp = this.xp;
        if (xp < 1000) {
            nivel = "Ferro";
        } else if (xp >= 1001 && xp <= 2000) {
            nivel = "Bronze";
        } else if (xp >= 2001 && xp <= 5000) {
            nivel = "Prata";
        } else if (xp >= 5001 && xp <= 7000) {
            nivel = "Ouro";
        } else if (xp >= 7001 && xp <= 8000) {
            nivel = "Plantina";
        } else if (xp >= 8001 && xp <= 9000) {
            nivel = "Ascendente";
        } else if (xp >= 9001 && xp <= 10000) {
            nivel = "Imortal";
        } else {
            nivel = "Radiante"
        }
    }

    narrativaDeEntrada(); {
        console.log("\n Você se aproxima dos portões de Mordor...");

        if(['Ascendente', 'Imortal', 'Radiante'].includes(this.nivel)) {
            console.log(`\n O Senhor do Escuro reconhece a sua força, ${this.nome}.`);
            console.log("Os portões se abrem, e você pode adentrar as terras sombrias de Mordor");
        } else {
            console.log(`\n ${this.nome}, os Orcs olham para você com desdém.`);
            console.log("Seu poder é fraco demais para atravessar os portões.");
            console.log("Você precisará de mais treinamento antes de tentar novamente...");
        }
    }

exibirEstatus(); {
    console.log(`O Héroi de nome **${nome}** está no nível de **${nivel}**.`);
}    

const readline =  require('readline').createinterface({
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

async function main () {
    const nome = (await pergunta('Qual o nome de seu Herói? ')).trim();
    const xpEntrada = (await pergunta('Quantos pontos de experiência (XP) ele possui? ')).trim();
    let xp = parseInt(xpEntrada, 10);
    if (Number.isNaN(xp) || xp < 0); {
        console.log('Entrada de XP inválida. Usando XP = 0.');
        xp = 0;
    }
}

const heroi = new Heroi(nome, xp);
heroi.exibirStatus();
heroi.narrativaDeEntrada();

readline.close();