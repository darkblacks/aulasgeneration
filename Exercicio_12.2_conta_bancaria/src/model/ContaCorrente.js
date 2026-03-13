const Conta = require('./Conta');

class ContaCorrente extends Conta {
  constructor(numero, agencia, titular, saldo = 0) {
    super(numero, agencia, 'Conta Corrente', titular, saldo);
  }
}

module.exports = ContaCorrente;
