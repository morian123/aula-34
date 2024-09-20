class Animal {
  constructor() {
    // No strict mode, erros como atribuir a variáveis indefinidas são mais fáceis de capturar.
    nome = 'Erro'; // Vai lançar um erro, pois `nome` não foi declarado
  }
}
