const leia = require("readline-sync");

let soma = 0;
let qtd = 0;
let n;

do {
  n = leia.questionInt("Digite um numero: ");
  if (n !== 0 && n % 3 === 0) {
    soma += n;
    qtd++;
  }
} while (n !== 0);

const media = qtd > 0 ? (soma / qtd).toFixed(2) : "0.00";
console.log(`\nA media de todos os numeros multiplos de 3 e: ${media}`);