import { Conta } from "../model/Conta";
import { ContaRepository } from "../repository/ContaRepository";

export class ContaController implements ContaRepository {
  private listaContas: Conta[] = [];
  private numero: number = 0;

  public procurarPorNumero(numero: number): void {
    const indice = this.buscarNoArray(numero);

    if (indice !== -1) {
      this.listaContas[indice].visualizar();
    } else {
      console.log(`\nA Conta número ${numero} não foi encontrada.`);
    }
  }

  public listarTodas(): void {
    if (this.listaContas.length === 0) {
      console.log("\nNenhuma conta cadastrada.");
      return;
    }

    for (const conta of this.listaContas) {
      conta.visualizar();
    }
  }

  public cadastrar(conta: Conta): void {
    this.listaContas.push(conta);
    console.log(`\nA Conta número ${conta.getNumero()} foi cadastrada com sucesso!`);
  }

  public atualizar(conta: Conta): void {
    const indice = this.buscarNoArray(conta.getNumero());

    if (indice !== -1) {
      this.listaContas[indice] = conta;
      console.log(`\nA Conta número ${conta.getNumero()} foi atualizada com sucesso!`);
    } else {
      console.log(`\nA Conta número ${conta.getNumero()} não foi encontrada.`);
    }
  }

  public deletar(numero: number): void {
    const indice = this.buscarNoArray(numero);

    if (indice !== -1) {
      this.listaContas.splice(indice, 1);
      console.log(`\nA Conta número ${numero} foi apagada com sucesso!`);
    } else {
      console.log(`\nA Conta número ${numero} não foi encontrada.`);
    }
  }

  public sacar(numero: number, valor: number): void {
    const indice = this.buscarNoArray(numero);

    if (indice === -1) {
      console.log(`\nA Conta número ${numero} não foi encontrada.`);
      return;
    }

    const sucesso = this.listaContas[indice].sacar(valor);

    if (sucesso) {
      console.log(`\nSaque de R$ ${valor.toFixed(2)} realizado com sucesso na conta ${numero}!`);
    } else {
      console.log("\nNão foi possível realizar o saque. Verifique o saldo e o valor informado.");
    }
  }

  public depositar(numero: number, valor: number): void {
    const indice = this.buscarNoArray(numero);

    if (indice === -1) {
      console.log(`\nA Conta número ${numero} não foi encontrada.`);
      return;
    }

    const sucesso = this.listaContas[indice].depositar(valor);

    if (sucesso) {
      console.log(`\nDepósito de R$ ${valor.toFixed(2)} realizado com sucesso na conta ${numero}!`);
    } else {
      console.log("\nNão foi possível realizar o depósito. Informe um valor válido.");
    }
  }

  public transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
    const indiceOrigem = this.buscarNoArray(numeroOrigem);
    const indiceDestino = this.buscarNoArray(numeroDestino);

    if (indiceOrigem === -1) {
      console.log(`\nA Conta de origem número ${numeroOrigem} não foi encontrada.`);
      return;
    }

    if (indiceDestino === -1) {
      console.log(`\nA Conta de destino número ${numeroDestino} não foi encontrada.`);
      return;
    }

    const saqueRealizado = this.listaContas[indiceOrigem].sacar(valor);

    if (!saqueRealizado) {
      console.log("\nNão foi possível realizar a transferência. Verifique o saldo e o valor informado.");
      return;
    }

    this.listaContas[indiceDestino].depositar(valor);
    console.log(
      `\nTransferência de R$ ${valor.toFixed(2)} da conta ${numeroOrigem} para a conta ${numeroDestino} realizada com sucesso!`
    );
  }

  public gerarNumero(): number {
    this.numero += 1;
    return this.numero;
  }

  public buscarNoArray(numero: number): number {
    return this.listaContas.findIndex((conta) => conta.getNumero() === numero);
  }
}
