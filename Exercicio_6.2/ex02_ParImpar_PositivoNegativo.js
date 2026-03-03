// ex02.js
const rl = require("readline").createInterface({ input: process.stdin, output: process.stdout });
const ask = (q) => new Promise((res) => rl.question(q, res));

(async () => {
  const n = parseInt(await ask("Digite um número: "));

  const parOuImpar = (n % 2 === 0) ? "par" : "ímpar";
  const posOuNeg = (n >= 0) ? "positivo" : "negativo";

  console.log(`\nO Número ${n} é ${parOuImpar} e ${posOuNeg}!`);
  rl.close();
})();
