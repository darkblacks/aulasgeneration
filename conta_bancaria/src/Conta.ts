export class Conta {
  constructor(
    public numero: string,
    private nomeTitular: string,
    private senha: number,
    private saldo: number = 0
  ) {}

  public getNumero(): string {
    return this.numero;
  }

  public getNomeTitular(): string {
    return this.nomeTitular;
  }

  public getSaldo(): number {
    return this.saldo;
  }

  public validarSenha(senha: number): boolean {
    return this.senha === senha;
  }

  public atualizarNome(novoNome: string): void {
    this.nomeTitular = novoNome;
  }

  public depositar(valor: number): boolean {
    if (valor <= 0) return false;
    this.saldo += valor;
    return true;
  }

  public sacar(valor: number): boolean {
    if (valor <= 0) return false;
    if (valor > this.saldo) return false;
    this.saldo -= valor;
    return true;
  }

  public transferir(destino: Conta, valor: number): boolean {
    if (!this.sacar(valor)) return false;
    destino.depositar(valor);
    return true;
  }

  public exibirResumo(): void {
    console.log(`Conta: ${this.numero} | Dono: ${this.getNomeMascarado()}`);
  }

  public exibirDetalhes(): void {
    console.log("\n************************************");
    console.log("Dados da Conta");
    console.log("************************************");
    console.log(`Conta: ${this.numero}`);
    console.log(`Titular: ${this.nomeTitular}`);
    console.log(`Saldo: R$ ${this.saldo.toFixed(2)}`);
  }

  private getNomeMascarado(): string {
    const nome = this.nomeTitular.trim();

    if (nome.length <= 2) {
      return nome[0] + "*";
    }

    return nome.slice(0, 2) + "*".repeat(Math.max(nome.length - 2, 2));
  }
}