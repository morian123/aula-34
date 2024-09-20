class Animal {
  constructor(nome) {
    this.nome = nome;
  }
}

class Dog extends Animal {
  constructor(nome, raca) {
    super(nome); // Sem isso, um erro é gerado
    this.raca = raca;
  }
}
