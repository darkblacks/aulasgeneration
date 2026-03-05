const leia = require("readline-sync");

let soma = 0;
let n;

do {
  n = leia.questionInt("Digite um numero: ");
  if (n > 0) soma += n;
} while (n !== 0);

console.log(`\nA soma dos numeros positivos e: ${soma}`);