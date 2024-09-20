const { Usuario } = require("./Usuario");

class UsuarioInscrito extends Usuario {
  constructor(id, nome, imagem, email, papel) {
    super(id, nome, imagem, email, papel);
    this.canaisInscritos = []; // Adiciona uma propriedade para armazenar os canais
  }

  inscreverSeNoCanal(idCanal) {
    // Lógica
  }

  listarCanaisInscritos() {
    // Lógica
  }
}

module.export = UsuarioInscrito;