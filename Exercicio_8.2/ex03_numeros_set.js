const readlineSync = require("readline-sync");

const numeros = new Set();

console.log("=== EX 03 | SET - 10 NUMEROS (SEM REPETIR) ===");

while (numeros.size < 10) {
  const n = readlineSync.questionInt(`Digite o ${numeros.size + 1}º numero: `);

  if (numeros.has(n)) {
    console.log("Numero repetido! Digite outro.");
    continue;
  }

  numeros.add(n);
}

console.log("\nListar dados do Set:");
for (const n of numeros) {
  console.log(n);
}