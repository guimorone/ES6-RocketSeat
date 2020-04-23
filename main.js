//REST
///o resto das funcionalidades tem no curso da udemy de webDev (angela yu)

function soma(a, b, ...params) {
    const count = params.reduce((total, next) => total + next);
    return a + b + count;
}

console.log(soma(1, 3, 4, 7, 8, 9));