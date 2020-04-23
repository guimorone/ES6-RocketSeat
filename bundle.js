"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* //usando classes

class List {
  //tipo __init__ em python
  constructor() {
    this.data = [];
  }

  add(id) {
    this.data.push(id);
    console.log(this.data);
  }
}

class TodoList extends List{
    constructor() {
        super(); //super chama o constructor de List (classe pai da herança)
        this.usuario = "Guilherme";
    }

    mostraUsuario() {
        console.log(this.usuario);
    }
}

var teste = new TodoList();

document.getElementById("novotodo").onclick = () => {
    teste.add("Novo todo");
}

teste.mostraUsuario(); */
var Matematica = /*#__PURE__*/function () {
  function Matematica() {
    _classCallCheck(this, Matematica);
  }

  _createClass(Matematica, null, [{
    key: "soma",
    //static não le oq tem no resto da classe
    //eh um método meio independente
    value: function soma(a, b) {
      return a + b;
    }
  }]);

  return Matematica;
}();

console.log(Matematica.soma(1, 2));
