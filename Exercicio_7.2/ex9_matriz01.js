const leia = require("readline-sync");

const matriz = [];
for (let i = 0; i < 3; i++) {
  matriz[i] = [];
  for (let j = 0; j < 3; j++) {
    matriz[i][j] = leia.questionInt(`Digite o valor [${i}][${j}]: `);
  }
}

let diagP = [];
let diagS = [];
let somaP = 0;
let somaS = 0;

for (let i = 0; i < 3; i++) {
  diagP.push(matriz[i][i]);
  somaP += matriz[i][i];

  diagS.push(matriz[i][2 - i]);
  somaS += matriz[i][2 - i];
}

console.log("\nElementos da Diagonal Principal:");
console.log(diagP.join(" "));

console.log("\nElementos da Diagonal Secundaria:");
console.log(diagS.join(" "));

console.log("\nSoma dos Elementos da Diagonal Principal:");
console.log(somaP);

console.log("\nSoma dos Elementos da Diagonal Secundaria:");
console.log(somaS);