//Usando async/await com axios
import axios from "axios";

class Api {
    static async getUserInfo(username) {
        try{
            const response = await axios.get(`https://api.github.com/users/${username}`);
            console.log(response);
        } catch(err) {
            console.warn("Erro na API.");
        }
    }
}

Api.getUserInfo("adasdasdsadas"); //vai dar erro, mas eh só pra teste
Api.getUserInfo("guimorone");