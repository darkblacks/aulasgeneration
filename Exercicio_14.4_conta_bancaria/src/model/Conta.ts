export abstract class Conta {
  constructor(
    private numero: number,
    private agencia: number,
    private tipo: number,
    private titular: string,
    private saldo: number
  ) {}

  public getNumero(): number {
    return this.numero;
  }

  public getAgencia(): number {
    return this.agencia;
  }

  public getTipo(): number {
    return this.tipo;
  }

  public getTitular(): string {
    return this.titular;
  }

  public getSaldo(): number {
    return this.saldo;
  }

  public setAgencia(agencia: number): void {
    this.agencia = agencia;
  }

  public setTipo(tipo: number): void {
    this.tipo = tipo;
  }

  public setTitular(titular: string): void {
    this.titular = titular;
  }

  public setSaldo(saldo: number): void {
    this.saldo = saldo;
  }

  public sacar(valor: number): boolean {
    if (valor <= 0 || valor > this.saldo) {
      return false;
    }

    this.saldo -= valor;
    return true;
  }

  public depositar(valor: number): boolean {
    if (valor <= 0) {
      return false;
    }

    this.saldo += valor;
    return true;
  }

  public visualizar(): void {
    const tipoConta = this.tipo === 1 ? "Conta Corrente" : "Conta Poupança";

    console.log("\n*************************************");
    console.log("Dados da Conta");
    console.log("*************************************");
    console.log(`Número da Conta: ${this.numero}`);
    console.log(`Agência: ${this.agencia}`);
    console.log(`Tipo da Conta: ${tipoConta}`);
    console.log(`Titular: ${this.titular}`);
    console.log(`Saldo: R$ ${this.saldo.toFixed(2)}`);
  }
}
