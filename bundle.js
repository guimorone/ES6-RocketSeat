"use strict";

//REST
///o resto das funcionalidades tem no curso da udemy de webDev (angela yu)
function soma(a, b) {
  for (var _len = arguments.length, params = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    params[_key - 2] = arguments[_key];
  }

  var count = params.reduce(function (total, next) {
    return total + next;
  });
  return a + b + count;
}

console.log(soma(1, 3, 4, 7, 8, 9));
