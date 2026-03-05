const readlineSync = require("readline-sync");

const cores = [];

console.log("=== EX 01 | ARRAY - CORES ===");

for (let i = 0; i < 5; i++) {
  const cor = readlineSync.question(`Digite a ${i + 1}ª cor: `).trim();

  if (!cor) {
    console.log("Cor não pode ser vazia. Tente novamente.");
    i--;
    continue;
  }

  cores.push(cor);
}

console.log("\nListar todas as cores:");
for (const cor of cores) {
  console.log(cor);
}

const ordenadas = [...cores].sort((a, b) => a.localeCompare(b, "pt-BR"));

console.log("\nOrdenar as cores:");
for (const cor of ordenadas) {
  console.log(cor);
}