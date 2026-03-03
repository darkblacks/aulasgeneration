// ex07.js
const rl = require("readline").createInterface({ input: process.stdin, output: process.stdout });
const ask = (q) => new Promise((res) => rl.question(q, res));

(async () => {
  const n1 = parseFloat((await ask("Digite o 1º número: ")).replace(",", "."));
  const n2 = parseFloat((await ask("Digite o 2º número: ")).replace(",", "."));
  const op = parseInt(await ask("Operação (1 a 4): "));

  let simbolo = "";
  let resultado;

  switch (op) {
    case 1: simbolo = "+"; resultado = n1 + n2; break;
    case 2: simbolo = "-"; resultado = n1 - n2; break;
    case 3: simbolo = "*"; resultado = n1 * n2; break;
    case 4: simbolo = "/"; resultado = n1 / n2; break;
    default:
      console.log("\nOperação Inválida!");
      rl.close();
      return;
  }

  console.log(`\n${n1} ${simbolo} ${n2} = ${resultado}`);
  rl.close();
})();
