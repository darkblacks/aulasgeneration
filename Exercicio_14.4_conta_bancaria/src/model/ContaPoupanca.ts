import { Conta } from "./Conta";

export class ContaPoupanca extends Conta {
  constructor(
    numero: number,
    agencia: number,
    tipo: number,
    titular: string,
    saldo: number,
    private aniversario: number
  ) {
    super(numero, agencia, tipo, titular, saldo);
  }

  public getAniversario(): number {
    return this.aniversario;
  }

  public setAniversario(aniversario: number): void {
    this.aniversario = aniversario;
  }

  public override visualizar(): void {
    super.visualizar();
    console.log(`Dia do Aniversário: ${this.aniversario}`);
  }
}
