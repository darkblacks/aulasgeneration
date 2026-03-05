const leia = require("readline-sync");

const a = leia.questionInt("Digite o primeiro numero do intervalo: ");
const b = leia.questionInt("Digite o ultimo numero do intervalo: ");

if (a >= b) {
  console.log("\nIntervalo invalido!");
  process.exit(0);
}

console.log(`\nNo Intervalo entre ${a} e ${b}:`);

for (let i = a; i <= b; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(`${i} e multiplo de 3 e 5`);
  }
}