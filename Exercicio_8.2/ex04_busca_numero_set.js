const readlineSync = require("readline-sync");

const numeros = new Set();

console.log("=== EX 04 | SET - BUSCA ===");

while (numeros.size < 10) {
  const n = readlineSync.questionInt(`Digite o ${numeros.size + 1}º numero: `);

  if (numeros.has(n)) {
    console.log("Numero repetido! Digite outro.");
    continue;
  }

  numeros.add(n);
}

const busca = readlineSync.questionInt("\nDigite o numero que voce deseja encontrar: ");

if (numeros.has(busca)) {
  console.log(`O numero ${busca} foi encontrado!`);
} else {
  console.log(`O numero ${busca} nao foi encontrado!`);
}