// ex08.js
const rl = require("readline").createInterface({ input: process.stdin, output: process.stdout });
const ask = (q) => new Promise((res) => rl.question(q, res));

(async () => {
  let saldo = 1000.00;

  const op = parseInt(await ask("Operação (1=Saldo, 2=Saque, 3=Depósito): "));

  switch (op) {
    case 1:
      console.log("\nOperação - Saldo");
      console.log(`Saldo: R$ ${saldo.toFixed(2)}`);
      break;

    case 2: {
      const valor = parseFloat((await ask("Valor: R$ ")).replace(",", "."));
      console.log("\nOperação - Saque");

      if (valor <= saldo) {
        saldo -= valor;
        console.log(`Novo Saldo: R$ ${saldo.toFixed(2)}`);
      } else {
        console.log("Saldo Insuficiente!");
      }
      break;
    }

    case 3: {
      const valor = parseFloat((await ask("Valor: R$ ")).replace(",", "."));
      console.log("\nOperação - Depósito");
      saldo += valor;
      console.log(`Novo Saldo: R$ ${saldo.toFixed(2)}`);
      break;
    }

    default:
      console.log("\nOperação Inválida!");
      break;
  }

  rl.close();
})();
