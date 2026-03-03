const prompt = require("prompt-sync")({ sigint: true });

const salario = parseFloat(prompt("Salário: "));
const percentual = parseFloat(prompt("Percentual de aumento (%): "));

const aumento = salario * (percentual / 100);
let novoSalario = salario + aumento;

console.log("Aumento: R$", aumento.toFixed(2));
console.log("Novo salário: R$", novoSalario.toFixed(2));
