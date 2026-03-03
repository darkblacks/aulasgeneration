// Exercício 2 - Média final (4 notas)
// ENTRADA: 4 notas
// SAÍDA: Média final

const prompt = require("prompt-sync")({ sigint: true });

const n1 = parseFloat(prompt("Nota 1: "));
const n2 = parseFloat(prompt("Nota 2: "));
const n3 = parseFloat(prompt("Nota 3: "));
const n4 = parseFloat(prompt("Nota 4: "));

const media = (n1 + n2 + n3 + n4) / 4;

console.log(`\nMédia final: ${media.toFixed(1)}`);
