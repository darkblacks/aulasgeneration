const ContaRepository = require('../repository/ContaRepository');

class ContaController extends ContaRepository {
  constructor() {
    super();
    this.listaContas = [];
  }

  buscarNoArray(numero) {
    return this.listaContas.findIndex((conta) => conta.getNumero() === numero);
  }

  procurarPorNumero(numero) {
    const indice = this.buscarNoArray(numero);

    if (indice !== -1) {
      this.listaContas[indice].visualizar();
      return this.listaContas[indice];
    }

    console.log(`\nA Conta número ${numero} não foi encontrada!`);
    return null;
  }

  listarTodas() {
    if (this.listaContas.length === 0) {
      console.log('\nNenhuma conta cadastrada.');
      return;
    }

    console.log('\nLista de Todas as Contas:\n');
    this.listaContas.forEach((conta) => {
      conta.visualizar();
    });
  }

  cadastrar(conta) {
    const indice = this.buscarNoArray(conta.getNumero());

    if (indice !== -1) {
      console.log(`\nA Conta número ${conta.getNumero()} já existe!`);
      return false;
    }

    this.listaContas.push(conta);
    console.log(`\nA Conta número ${conta.getNumero()} foi criada com sucesso!`);
    return true;
  }

  atualizar(conta) {
    const indice = this.buscarNoArray(conta.getNumero());

    if (indice === -1) {
      console.log(`\nA Conta número ${conta.getNumero()} não foi encontrada!`);
      return false;
    }

    this.listaContas[indice] = conta;
    console.log(`\nA Conta número ${conta.getNumero()} foi atualizada com sucesso!`);
    return true;
  }

  deletar(numero) {
    const indice = this.buscarNoArray(numero);

    if (indice === -1) {
      console.log(`\nA Conta número ${numero} não foi encontrada!`);
      return false;
    }

    this.listaContas.splice(indice, 1);
    console.log(`\nA Conta número ${numero} foi apagada com sucesso!`);
    return true;
  }

  sacar(numero, valor) {
    const indice = this.buscarNoArray(numero);

    if (indice === -1) {
      console.log(`\nA Conta número ${numero} não foi encontrada!`);
      return false;
    }

    const conta = this.listaContas[indice];
    const saqueEfetuado = conta.sacar(valor);

    if (!saqueEfetuado) {
      console.log('\nSaldo insuficiente ou valor inválido para saque!');
      return false;
    }

    console.log(`\nSaque de R$ ${valor.toFixed(2)} realizado com sucesso na Conta ${numero}!`);
    return true;
  }

  depositar(numero, valor) {
    const indice = this.buscarNoArray(numero);

    if (indice === -1) {
      console.log(`\nA Conta número ${numero} não foi encontrada!`);
      return false;
    }

    const depositoEfetuado = this.listaContas[indice].depositar(valor);

    if (!depositoEfetuado) {
      console.log('\nValor inválido para depósito!');
      return false;
    }

    console.log(`\nDepósito de R$ ${valor.toFixed(2)} realizado com sucesso na Conta ${numero}!`);
    return true;
  }

  transferir(numeroOrigem, numeroDestino, valor) {
    const indiceOrigem = this.buscarNoArray(numeroOrigem);
    const indiceDestino = this.buscarNoArray(numeroDestino);

    if (indiceOrigem === -1) {
      console.log(`\nA Conta de origem número ${numeroOrigem} não foi encontrada!`);
      return false;
    }

    if (indiceDestino === -1) {
      console.log(`\nA Conta de destino número ${numeroDestino} não foi encontrada!`);
      return false;
    }

    const contaOrigem = this.listaContas[indiceOrigem];
    const contaDestino = this.listaContas[indiceDestino];

    if (!contaOrigem.sacar(valor)) {
      console.log('\nSaldo insuficiente ou valor inválido para transferência!');
      return false;
    }

    contaDestino.depositar(valor);
    console.log(`\nTransferência de R$ ${valor.toFixed(2)} da Conta ${numeroOrigem} para a Conta ${numeroDestino} realizada com sucesso!`);
    return true;
  }
}

module.exports = ContaController;
