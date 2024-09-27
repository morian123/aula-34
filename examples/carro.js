class Carro {
  constructor(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
  }

  andar() {
    console.log(`${this.marca} ${this.modelo} do ano ${this.ano} está andando.`);
  }

  parar() {
    console.log(`${this.marca} ${this.modelo} do ano ${this.ano} está parando.`);
  }
}

// Instanciando objetos da classe Carro
const carro1 = new Carro('Toyota', 'Corolla', 2020);
const carro2 = new Carro('Honda', 'Civic', 2018);
const carro3 = new Carro('Chevrolet', 'Onix', 2021);

// Utilizando os métodos
carro1.andar(); // "Toyota Corolla do ano 2020 está andando."
carro1.parar(); // "Toyota Corolla do ano 2020 está parando."

carro2.andar(); // "Honda Civic do ano 2018 está andando."
carro2.parar(); // "Honda Civic do ano 2018 está parando."

carro3.andar(); // "Chevrolet Onix do ano 2021 está andando."
carro3.parar(); // "Chevrolet Onix do ano 2021 está parando."


class CarroEsportivo extends Carro {
  constructor(marca, modelo, ano, velocidadeMaxima) {
    super(marca, modelo, ano); // Chama o construtor da classe Carro
    this.velocidadeMaxima = velocidadeMaxima;
  }

  acelerar() {
    console.log(`${this.marca} ${this.modelo} está acelerando a ${this.velocidadeMaxima} km/h.`);
  }
}

const meuCarro = new Carro('Toyota', 'Corolla', 2021);
meuCarro.ligar();
meuCarro.desligar();

const meuCarroEsportivo = new CarroEsportivo('Ferrari', '488', 2022, 340);
meuCarroEsportivo.ligar();
meuCarroEsportivo.acelerar();