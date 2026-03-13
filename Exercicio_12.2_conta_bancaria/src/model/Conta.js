class Conta {
  constructor(numero, agencia, tipo, titular, saldo = 0) {
    if (new.target === Conta) {
      throw new Error('A classe Conta é abstrata e não pode ser instanciada diretamente.');
    }

    this.numero = numero;
    this.agencia = agencia;
    this.tipo = tipo;
    this.titular = titular;
    this.saldo = saldo;
  }

  visualizar() {
    console.log('*****************************');
    console.log('Dados da Conta');
    console.log('*****************************');
    console.log(`Número da Conta: ${this.numero}`);
    console.log(`Agência: ${this.agencia}`);
    console.log(`Tipo da Conta: ${this.tipo}`);
    console.log(`Titular: ${this.titular}`);
    console.log(`Saldo: R$ ${this.saldo.toFixed(2)}`);
    console.log('*****************************\n');
  }

  sacar(valor) {
    if (valor <= 0 || Number.isNaN(valor)) {
      console.log('O valor do saque deve ser maior que zero.\n');
      return false;
    }

    if (this.saldo < valor) {
      console.log(`Saldo insuficiente para saque na conta de ${this.titular}.\n`);
      return false;
    }

    this.saldo -= valor;
    console.log(`Saque de R$ ${valor.toFixed(2)} realizado com sucesso na conta de ${this.titular}.`);
    console.log(`Novo saldo: R$ ${this.saldo.toFixed(2)}\n`);
    return true;
  }

  depositar(valor) {
    if (valor <= 0 || Number.isNaN(valor)) {
      console.log('O valor do depósito deve ser maior que zero.\n');
      return false;
    }

    this.saldo += valor;
    console.log(`Depósito de R$ ${valor.toFixed(2)} realizado com sucesso na conta de ${this.titular}.`);
    console.log(`Novo saldo: R$ ${this.saldo.toFixed(2)}\n`);
    return true;
  }
}

module.exports = Conta;
