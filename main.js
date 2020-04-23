//valores padrão
//serve para arrow functions também
//VALORES PADRÃO SEMPRE TEM QUE VIM DEPOIS DOS VALORES QUE SÃO OBRIGATÓRIOS
//por exemplo: function soma(a = 3, b = 6), function soma(a, b = 6)
//já function soma(a = 3, b) tá errado

function soma(a = 3, b = 6) {
    return a + b;
}

console.log(soma(2));
