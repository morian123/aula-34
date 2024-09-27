const Usuario = require("./Usuario");

class Inscrito extends Usuario {
  constructor(nome, imagem, email, papel) {
    super(nome, imagem, email, papel)
    this.canaisInscrito = [];
  }

  inscreverSeNoCanal(idDoCanal) {}
}

module.exports = Inscrito;
