class Conta {
  constructor(numero, agencia, tipo, titular, saldo) {
    if (new.target === Conta) {
      throw new Error('A classe Conta é abstrata e não pode ser instanciada diretamente.');
    }

    this.numero = numero;
    this.agencia = agencia;
    this.tipo = tipo;
    this.titular = titular;
    this.saldo = saldo;
  }

  getNumero() {
    return this.numero;
  }

  getAgencia() {
    return this.agencia;
  }

  getTipo() {
    return this.tipo;
  }

  getTitular() {
    return this.titular;
  }

  getSaldo() {
    return this.saldo;
  }

  setNumero(numero) {
    this.numero = numero;
  }

  setAgencia(agencia) {
    this.agencia = agencia;
  }

  setTipo(tipo) {
    this.tipo = tipo;
  }

  setTitular(titular) {
    this.titular = titular;
  }

  setSaldo(saldo) {
    this.saldo = saldo;
  }

  sacar(valor) {
    if (valor <= 0) {
      return false;
    }

    if (this.saldo < valor) {
      return false;
    }

    this.saldo -= valor;
    return true;
  }

  depositar(valor) {
    if (valor <= 0) {
      return false;
    }

    this.saldo += valor;
    return true;
  }

  visualizar() {
    console.log('*****************************************************');
    console.log('Dados da Conta');
    console.log('*****************************************************');
    console.log(`Número da Conta: ${this.numero}`);
    console.log(`Agência: ${this.agencia}`);
    console.log(`Tipo: ${this.tipo === 1 ? 'Conta Corrente' : 'Conta Poupança'}`);
    console.log(`Titular: ${this.titular}`);
    console.log(`Saldo: R$ ${this.saldo.toFixed(2)}`);
  }
}

module.exports = Conta;
