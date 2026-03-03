// Exercício 3 - Salário Líquido
// ENTRADA: Salário Bruto, Adicional Noturno, Horas Extras, Descontos
// SAÍDA: Salário Líquido
//
// FÓRMULA: líquido = bruto + adicional + (horasExtras * 5) - descontos

const prompt = require("prompt-sync")({ sigint: true });

const salarioBruto = parseFloat(prompt("Salário Bruto: "));
const adicionalNoturno = parseFloat(prompt("Adicional Noturno: "));
const horasExtras = parseFloat(prompt("Horas Extras: "));
const descontos = parseFloat(prompt("Descontos: "));

const salarioLiquido = salarioBruto + adicionalNoturno + (horasExtras * 5) - descontos;

console.log(`\nSalário Líquido: ${salarioLiquido.toFixed(2)}`);
