class Carro {
  constructor(modelo, cor) {
    this.modelo = modelo;
    this.cor = cor;
  }

  andar() {
    console.log(`${this.modelo} ${this.cor} está andando.`);
  }

  parar() {
    console.log(`${this.modelo} ${this.cor} está parando.`);
  }
}

// Instanciando os carros
const carroVermelho = new Carro('ModeloX', 'vermelho');
const carroAzul = new Carro('ModeloZ', 'azul');
const carroAmarelo = new Carro('ModeloW', 'amarelo');

// Utilizando os métodos das instâncias
carroVermelho.andar();
carroVermelho.parar();

carroAzul.andar();
carroAzul.parar();

carroAmarelo.andar();
carroAmarelo.parar();

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