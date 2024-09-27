const Papel = require("./Papel");

class usuario {
    constructor(nome, email, decricao, imagem, canalID) {
        this.nome = nome;
        this.email = email;
        this.imagem = imagem;

        if (!Object.values(Papel).includes(this.papel)) {
            throw new Erro(`Papel inválido:${papel}`)
        }

        this.papel = papel;
    }

    pegarPapel() {};

    encontrarTodos() {};

    buscarPeloId(id) {};

    adicionar() {};

    atualizar(id, corpoAtualzado) {}

    excluir(id) {}
}

module.exports = usuario;