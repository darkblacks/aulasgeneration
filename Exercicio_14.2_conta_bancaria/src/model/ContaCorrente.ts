import { Conta } from "./Conta";

export class ContaCorrente extends Conta {
  constructor(
    numero: number,
    agencia: number,
    tipo: number,
    titular: string,
    saldo: number,
    private limite: number
  ) {
    super(numero, agencia, tipo, titular, saldo);
  }

  public getLimite(): number {
    return this.limite;
  }

  public setLimite(limite: number): void {
    this.limite = limite;
  }

  public override visualizar(): void {
    super.visualizar();
    console.log(`Limite: R$ ${this.limite.toFixed(2)}`);
  }
}
