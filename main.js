//Template literals

const nome = "Guilherme";
const idade = 19;

//console.log("Meu nome é " + nome + " e tenho " + idade + " anos.");
//isso dai de cima eh a mesma coisa disso daki de baixo

console.log(`Meu nome é ${nome} e tenho ${idade} anos.`);
//sim isso eh um acento (crase `) e não aspas simples

//object short syntax

const usuario = {
    nome, //nome: nome,
    idade, //idade: idade,
    país: "Brasil"
};

console.log(usuario);
