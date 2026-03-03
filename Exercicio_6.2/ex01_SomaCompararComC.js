// ex01.js
const rl = require("readline").createInterface({ input: process.stdin, output: process.stdout });
const ask = (q) => new Promise((res) => rl.question(q, res));

(async () => {
  const A = parseInt(await ask("Digite o número A: "));
  const B = parseInt(await ask("Digite o número B: "));
  const C = parseInt(await ask("Digite o número C: "));

  const soma = A + B;

  if (soma > C) {
    console.log(`\n${A} + ${B} = ${soma} > ${C}`);
    console.log("A Soma de A + B é Maior do que C");
  } else if (soma < C) {
    console.log(`\n${A} + ${B} = ${soma} < ${C}`);
    console.log("A Soma de A + B é Menor do que C");
  } else {
    console.log(`\n${A} + ${B} = ${soma} = ${C}`);
    console.log("A Soma de A + B é Igual a C");
  }

  rl.close();
})();
