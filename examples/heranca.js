class Animal {
  constructor(nome) {
    this.nome = nome;
  }

  fazerSom() {
    console.log(`${this.nome} faz um som.`);
  }
}

class Cachorro extends Animal {
  constructor(nome, raca) {
    super(nome); // Chama o construtor da superclasse Animal
    this.raca = raca;
  }

  fazerSom() {
    super.fazerSom(); // Chama o método da superclasse Animal
    console.log(`${this.nome} faz au au.`);
  }
}

const meuCachorro = new Cachorro('Rex', 'Labrador');
meuCachorro.fazerSom();
// Saída:
// Rex faz um som.
// Rex faz au au.

class Cachorro extends Animal {
  fazerSom() {
    super.fazerSom();  // Chama o método `fazerSom()` da classe `Animal`
    console.log(`${this.nome} também está latindo!`);
  }
}