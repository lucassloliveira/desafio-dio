const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class Heroi {
    constructor (nome, idade, tipo) {
        this.nome = nome
        this.idade = idade
        this.tipo = tipo.toLowerCase();
    }

    atacar() {
        let ataque;

        switch (this.tipo) {    
            case 'mago':
                ataque = "magia";
                break;
            case 'guerreiro':
                ataque = "espada";
                break;
            case 'monge':
                ataque = "artes marciais";
                break;
            case 'ninja':
                ataque = "shuriken";
                break;
            default:
                ataque = "ataque desconhecido";
        }

        console.log(`${this.tipo} atacou usando ${ataque}`);
        rl.close();
    }
}

rl.question('Digite o nome do herói: ', (nome) => {
    rl.question('Digite a idade do herói: ', (idade) => {
        rl.question('Digite o tipo do herói (mago, guerreiro, monge, ninja): ', (tipo) => { 
            const heroi = new Heroi(nome, idade, tipo);
            heroi.atacar();
        });     
    });
});
