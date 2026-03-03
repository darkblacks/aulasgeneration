// ex03.js
const rl = require("readline").createInterface({ input: process.stdin, output: process.stdout });
const ask = (q) => new Promise((res) => rl.question(q, res));

function parseBool(txt) {
  const v = String(txt).trim().toLowerCase();
  return v === "true" || v === "sim" || v === "s" || v === "1";
}

(async () => {
  const nome = await ask("Digite o Nome do doador: ");
  const idade = parseInt(await ask("Digite a Idade do doador: "));
  const primeiraDoacao = parseBool(await ask("Primeira doação de sangue? (true/false): "));

  let apto = false;

  if (idade >= 18 && idade <= 69) {
    if (idade >= 60 && idade <= 69) {
      apto = !primeiraDoacao; // 60-69 só se NÃO for a primeira
    } else {
      apto = true; // 18-59 apto
    }
  }

  if (apto) console.log(`\n${nome} está apto(a) para doar sangue!`);
  else console.log(`\n${nome} não está apto(a) para doar sangue!`);

  rl.close();
})();
