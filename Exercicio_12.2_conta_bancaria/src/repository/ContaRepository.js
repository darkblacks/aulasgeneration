class ContaRepository {
  listarTodas() {
    throw new Error('Método listarTodas() precisa ser implementado.');
  }

  procurarPorNumero(numero) {
    throw new Error('Método procurarPorNumero(numero) precisa ser implementado.');
  }

  cadastrar(conta) {
    throw new Error('Método cadastrar(conta) precisa ser implementado.');
  }

  atualizar(conta) {
    throw new Error('Método atualizar(conta) precisa ser implementado.');
  }

  deletar(numero) {
    throw new Error('Método deletar(numero) precisa ser implementado.');
  }

  sacar(numero, valor) {
    throw new Error('Método sacar(numero, valor) precisa ser implementado.');
  }

  depositar(numero, valor) {
    throw new Error('Método depositar(numero, valor) precisa ser implementado.');
  }
}

module.exports = ContaRepository;
