const gerarIdUnico = require("../utils/gerarIdUnico");
const {videos} = require("../mock/dados.json")

class video {
    constructor( titulo, decricao, imagem, canalID) {
        this.id = gerarIdUnico(videos);
        this.quantidadeViews = 0;
        this.titulo = titulo();
        this.descricao = descricao();
        this.imagem = imagem();
        this.canalID = canalID();

    }

    encontrarTodos() {};

    buscarPeloId(id) {};

    adicionar() {};

    atualizar(id, corpoAtualzado) {}

    excluir(id) {}
}

module.exports = video;