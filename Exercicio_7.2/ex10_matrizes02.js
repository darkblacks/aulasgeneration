const leia = require("readline-sync");

const alunos = 10;
const bimestres = 4;

const matriz = [];
const medias = [];

for (let i = 0; i < alunos; i++) {
  matriz[i] = [];
  let soma = 0;

  console.log(`\nAluno ${i + 1}:`);
  for (let j = 0; j < bimestres; j++) {
    const nota = leia.questionFloat(`Digite a nota do ${j + 1}º bimestre: `);
    matriz[i][j] = nota;
    soma += nota;
  }

  medias[i] = +(soma / bimestres).toFixed(1);
}

console.log("\nMedias dos participantes:");
for (let i = 0; i < medias.length; i++) {
  console.log(`Participante ${i + 1}: ${medias[i].toFixed(1)}`);
}