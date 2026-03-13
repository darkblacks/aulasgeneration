const ContaRepository = require('../repository/ContaRepository');

class ContaController extends ContaRepository {
  constructor() {
    super();
    this.listaContas = [];
  }

  listarTodas() {
    if (this.listaContas.length === 0) {
      console.log('Nenhuma conta cadastrada.\n');
      return;
    }

    this.listaContas.forEach((conta) => conta.visualizar());
  }

  procurarPorNumero(numero) {
    return this.listaContas.find((conta) => conta.numero === numero) || null;
  }

  cadastrar(conta) {
    const contaExistente = this.procurarPorNumero(conta.numero);

    if (contaExistente) {
      console.log(`A conta número ${conta.numero} já existe.\n`);
      return false;
    }

    this.listaContas.push(conta);
    console.log(`A conta número ${conta.numero} foi cadastrada com sucesso.\n`);
    return true;
  }

  atualizar(conta) {
    const indice = this.listaContas.findIndex((item) => item.numero === conta.numero);

    if (indice === -1) {
      console.log(`A conta número ${conta.numero} não foi encontrada.\n`);
      return false;
    }

    this.listaContas[indice] = conta;
    console.log(`A conta número ${conta.numero} foi atualizada com sucesso.\n`);
    return true;
  }

  deletar(numero) {
    const indice = this.listaContas.findIndex((conta) => conta.numero === numero);

    if (indice === -1) {
      console.log(`A conta número ${numero} não foi encontrada.\n`);
      return false;
    }

    this.listaContas.splice(indice, 1);
    console.log(`A conta número ${numero} foi apagada com sucesso.\n`);
    return true;
  }

  sacar(numero, valor) {
    const conta = this.procurarPorNumero(numero);

    if (!conta) {
      console.log(`A conta número ${numero} não foi encontrada.\n`);
      return false;
    }

    return conta.sacar(valor);
  }

  depositar(numero, valor) {
    const conta = this.procurarPorNumero(numero);

    if (!conta) {
      console.log(`A conta número ${numero} não foi encontrada.\n`);
      return false;
    }

    return conta.depositar(valor);
  }
}

module.exports = ContaController;
