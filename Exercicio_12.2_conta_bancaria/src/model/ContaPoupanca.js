const Conta = require('./Conta');

class ContaPoupanca extends Conta {
  constructor(numero, agencia, titular, saldo = 0) {
    super(numero, agencia, 'Conta Poupança', titular, saldo);
  }
}

module.exports = ContaPoupanca;
