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

class Matematica {
    //static não le oq tem no resto da classe
    //eh um método meio independente
    static soma(a, b) {
        return a + b
    }
}

console.log(Matematica.soma(1, 2));
