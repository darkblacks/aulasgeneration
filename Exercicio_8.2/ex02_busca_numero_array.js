const readlineSync = require("readline-sync");

const numeros = [];

console.log("=== EX 02 | ARRAY - BUSCA ===");

// lê 10 números
for (let i = 0; i < 10; i++) {
  const n = readlineSync.questionInt(`Digite o ${i + 1}º numero: `);
  numeros.push(n);
}

const busca = readlineSync.questionInt("\nDigite o numero que voce deseja encontrar: ");

const pos = numeros.indexOf(busca);

if (pos !== -1) {
  console.log(`O numero ${busca} esta localizado na posicao: ${pos}`);
} else {
  console.log(`O numero ${busca} nao foi encontrado!`);
}