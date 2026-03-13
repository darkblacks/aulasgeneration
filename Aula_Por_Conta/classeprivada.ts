class Usuario {
  private _nome: string;
  private _senha: string;

  constructor(nome: string, senha: string) {
    this._nome = nome;
    this._senha = senha;
  }

  get nome(): string {
    return this._nome;
  }

  alterarNome(novoNome: string, senhaInformada: string): void {
    if (senhaInformada !== this._senha) {
      console.log("Senha incorreta. Nome não alterado.");
      return;
    }

    this._nome = novoNome;
    console.log("Nome alterado com sucesso.");
  }
}

const usuario = new Usuario("Drielly", "1234");

console.log(usuario.nome);
usuario.alterarNome("Drielly Figueredo", "0000");
usuario.alterarNome("Drielly Figueredo", "1234");
console.log(usuario.nome);