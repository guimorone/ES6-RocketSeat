const minhaPromise = () => new Promise((resolve, reject) => setTimeout(() => { resolve('OK') }, 2000));

//async = assíncrona
//async function = uma promise
//await só pode usar dentro de uma função com async
//async funciona com arrow functions tb
//tipo const blablabla = async () => {};

async function executaPromise() {
    //await só executa a função depois que a de cima já foi executada
    console.log(await minhaPromise());
    console.log(await minhaPromise());
    console.log(await minhaPromise());
}

//esse await minhaPromise() faz o papel do minhaPromise().then(response => console.log(response))

executaPromise();
