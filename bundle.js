"use strict";

//Template literals
var nome = "Guilherme";
var idade = 19; //console.log("Meu nome é " + nome + " e tenho " + idade + " anos.");
//isso dai de cima eh a mesma coisa disso daki de baixo

console.log("Meu nome \xE9 ".concat(nome, " e tenho ").concat(idade, " anos.")); //sim isso eh um acento (crase `) e não aspas simples
//object short syntax

var usuario = {
  nome: nome,
  //nome: nome,
  idade: idade,
  //idade: idade,
  país: "Brasil"
};
console.log(usuario);
