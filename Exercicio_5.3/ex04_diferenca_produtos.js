// Exercício 4 - Diferença do produto
// ENTRADA: n1, n2, n3, n4
// SAÍDA: Diferença
//
// CÁLCULO: (n1 * n2) - (n3 * n4)

const prompt = require("prompt-sync")({ sigint: true });

const n1 = parseFloat(prompt("numero1: "));
const n2 = parseFloat(prompt("numero2: "));
const n3 = parseFloat(prompt("numero3: "));
const n4 = parseFloat(prompt("numero4: "));

const diferenca = (n1 * n2) - (n3 * n4);

console.log(`\nDiferença: ${diferenca.toFixed(1)}`);
