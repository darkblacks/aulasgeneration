const leia = require("readline-sync");

const vetor = [];
let soma = 0;

for (let i = 0; i < 10; i++) {
  const n = leia.questionInt(`Digite o ${i + 1}º numero: `);
  vetor.push(n);
  soma += n;
}

console.log("\nElementos nos indices impares:");
let saidaImpares = [];
for (let i = 0; i < vetor.length; i++) {
  if (i % 2 !== 0) saidaImpares.push(vetor[i]);
}
console.log(saidaImpares.join(" "));

console.log("\nElementos pares:");
let saidaPares = [];
for (let i = 0; i < vetor.length; i++) {
  if (vetor[i] % 2 === 0) saidaPares.push(vetor[i]);
}
console.log(saidaPares.join(" "));

const media = (soma / vetor.length).toFixed(2);

console.log(`\nSoma: ${soma}`);
console.log(`\nMedia: ${media}`);