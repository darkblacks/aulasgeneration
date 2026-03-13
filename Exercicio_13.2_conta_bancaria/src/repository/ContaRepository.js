class ContaRepository {
  procurarPorNumero(_numero) {
    throw new Error('Método procurarPorNumero() precisa ser implementado.');
  }

  listarTodas() {
    throw new Error('Método listarTodas() precisa ser implementado.');
  }

  cadastrar(_conta) {
    throw new Error('Método cadastrar() precisa ser implementado.');
  }

  atualizar(_conta) {
    throw new Error('Método atualizar() precisa ser implementado.');
  }

  deletar(_numero) {
    throw new Error('Método deletar() precisa ser implementado.');
  }

  sacar(_numero, _valor) {
    throw new Error('Método sacar() precisa ser implementado.');
  }

  depositar(_numero, _valor) {
    throw new Error('Método depositar() precisa ser implementado.');
  }

  transferir(_numeroOrigem, _numeroDestino, _valor) {
    throw new Error('Método transferir() precisa ser implementado.');
  }
}

module.exports = ContaRepository;
