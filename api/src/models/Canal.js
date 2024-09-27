const Usuario = require("./Usuario");

class Canal extends Usuario {
  constructor(nome, imagem, email, papel) {
    super(nome, imagem, email, papel)

    this.videos = [];
    this.inscritos = [];
  }

  pegarCanal() {
    return `${this.nome}: ${this.videos}`
  }
}

module.exports = Canal;
