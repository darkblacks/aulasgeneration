const readlineSync = require("readline-sync");

while (true) {
  try {
    const opcao: number = readlineSync.questionInt("Digite 1 ou 2: ");

    if (opcao !== 1 && opcao !== 2) {
      throw new Error("Opção inválida");
    }

    console.log("Opção escolhida: " + opcao);
    break;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log(error.message);
    } else {
      console.log("Erro desconhecido");
    }
  }
}