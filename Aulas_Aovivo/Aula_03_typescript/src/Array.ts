import readlineSync from "readline-sync";

const notas: number[] = new Array<number>(5);

for (let i = 0; i < notas.length; i++) {
  notas[i] = readlineSync.questionFloat("Digite a nota: ");
}

console.table(notas);