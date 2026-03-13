const Conta = require('./Conta');

class ContaCorrente extends Conta {
  constructor(numero, agencia, titular, saldo, limite) {
    super(numero, agencia, 1, titular, saldo);
    this.limite = limite;
  }

  getLimite() {
    return this.limite;
  }

  setLimite(limite) {
    this.limite = limite;
  }

  sacar(valor) {
    if (valor <= 0) {
      return false;
    }

    if (this.saldo + this.limite < valor) {
      return false;
    }

    this.saldo -= valor;
    return true;
  }

  visualizar() {
    super.visualizar();
    console.log(`Limite: R$ ${this.limite.toFixed(2)}`);
  }
}

module.exports = ContaCorrente;
