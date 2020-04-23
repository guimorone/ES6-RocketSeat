import api from "./api";

class App {
    constructor() {
        this.repositories = [];

        this.formEl = document.getElementById("repo-form");
        this.inputEl = document.querySelector("input[name=repository]");
        this.listEl = document.getElementById("repo-list");

        this.registerHandlers();
    }

    //registrar os eventos
    registerHandlers() {
        this.formEl.onsubmit = event => this.addRepository(event);
    }

    setLoading(loading = true) {
        if(loading) {
            let loadingEL = document.createElement("span");
            loadingEL.appendChild(document.createTextNode("Carregando"));
            loadingEL.setAttribute("id", "loading");

            this.formEl.appendChild(loadingEL);
        } else{
            document.getElementById("loading").remove();
        }
    }

    async addRepository(event) {
        event.preventDefault(); //não recarregar a página

        const repoInput = this.inputEl.value;

        if(!repoInput.length) return; //parar a função

        this.setLoading(); //aparecer uma mensagem de q tá carregando as informações
        
        try {
            const response = await api.get(`/repos/${repoInput}`);

            const { name, description, html_url, owner: { avatar_url } } = response.data;

            this.repositories.push({
                name,
                description,
                avatar_url,
                html_url
            });

            this.inputEl.value = "";

            this.render();
        } catch(err) {
            alert("O repositório não existe!");
        }
        
        this.setLoading(false);
    }

    render() {
        this.listEl.innerHTML = "";

        this.repositories.forEach(repo => {
            let imgEl = document.createElement("img");
            imgEl.setAttribute("src", repo.avatar_url);

            let titleEl = document.createElement("strong");
            titleEl.appendChild(document.createTextNode(repo.name));

            let descriptionEl = document.createElement("p");
            descriptionEl.appendChild(document.createTextNode(repo.description));

            let linkEl = document.createElement("a");
            linkEl.setAttribute("target", "_blank"); //abre uma nova aba já com o botão esquerdo do mouse
            linkEl.setAttribute("href", repo.html_url);
            linkEl.appendChild(document.createTextNode("Acessar"));

            let listItemEl = document.createElement("li");
            listItemEl.appendChild(imgEl);
            listItemEl.appendChild(titleEl);
            listItemEl.appendChild(descriptionEl);
            listItemEl.appendChild(linkEl);

            this.listEl.appendChild(listItemEl);
        });
    }
}

new App();