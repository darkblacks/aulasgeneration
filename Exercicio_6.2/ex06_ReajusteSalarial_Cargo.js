// ex06.js
const rl = require("readline").createInterface({ input: process.stdin, output: process.stdout });
const ask = (q) => new Promise((res) => rl.question(q, res));

(async () => {
  const nome = await ask("Nome do colaborador: ");
  const cod = parseInt(await ask("Código do Cargo (1 a 6): "));
  const salario = parseFloat((await ask("Salário: R$ ")).replace(",", "."));

  let cargo = "";
  let perc = 0;

  switch (cod) {
    case 1: cargo = "Gerente"; perc = 0.10; break;
    case 2: cargo = "Vendedor"; perc = 0.07; break;
    case 3: cargo = "Supervisor"; perc = 0.09; break;
    case 4: cargo = "Motorista"; perc = 0.06; break;
    case 5: cargo = "Estoquista"; perc = 0.05; break;
    case 6: cargo = "Técnico de TI"; perc = 0.08; break;
    default:
      console.log("\nCargo inválido!");
      rl.close();
      return;
  }

  const novoSalario = salario + (perc * salario);

  console.log(`\nNome do colaborador: ${nome}`);
  console.log(`Cargo: ${cargo}`);
  console.log(`Salário: R$ ${novoSalario.toFixed(2)}`);

  rl.close();
})();
