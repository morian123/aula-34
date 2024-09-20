class Usuario {
  constructor(id, nome, imagem, email, papel) {
    this.id = id;
    this.nome = nome;
    this.imagem = imagem;
    this.email = email;
    this.papel = papel;
  }

  pegarPapel() {
    // Lógica
  }
}

// Exportando todas as classes
module.exports = { Usuario };
