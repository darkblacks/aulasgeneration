const Conta = require('./Conta');

class ContaPoupanca extends Conta {
  constructor(numero, agencia, titular, saldo, aniversario) {
    super(numero, agencia, 2, titular, saldo);
    this.aniversario = aniversario;
  }

  getAniversario() {
    return this.aniversario;
  }

  setAniversario(aniversario) {
    this.aniversario = aniversario;
  }

  visualizar() {
    super.visualizar();
    console.log(`Aniversário da Conta: Dia ${this.aniversario}`);
  }
}

module.exports = ContaPoupanca;
